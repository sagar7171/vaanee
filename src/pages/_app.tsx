import React, { Suspense, useEffect, useLayoutEffect, useState } from 'react';

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// font awesome 6
import 'public/font-awesome/css/all.min.css';

// custom icons
import 'public/glyphter/css/Glyphter.css';

// aos
import AOS from 'aos';
import 'aos/dist/aos.css';

import '@/styles/main.scss';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '../components/store/index';
import { Flip, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../theme/theme';
import ScrollToTop from '@/components/common/ScrollToTop';
import SpinnerCom from '@/components/common/SpinnerCom';
import { fetchToken } from '@/components/store/actions/authActions';
import SiteLoader from '@/components/common/SiteLoader';
import { useRouter } from 'next/router';
// import { privatePageList, publicPageList } from '@/utils/helper';


export default function App({ Component, pageProps }: AppProps) {
	const [tokenVerified, setTokenVerified] = useState<null | boolean>(null);
	// const [isAuth, setIsAuth] = useState<null | boolean>(null);
	const dispatch = store.dispatch

	useLayoutEffect(() => {
		Promise.all([dispatch(fetchToken())]).then((res) => {
			setTokenVerified(true);
		})
	}, []);
	const router = useRouter();

	useEffect(() => {
		AOS.init();
	}, []);

		if (tokenVerified === null) {
		return <SpinnerCom msg={true} />;
	}
	return (
		<Suspense>
			<ToastContainer
				theme='colored'
				position='top-right'
				transition={Flip}
				autoClose={5000}
				hideProgressBar
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss={false}
				draggable
				pauseOnHover={false}
			/>
			<Provider store={store}>
				<ChakraProvider theme={theme}>
					<ScrollToTop>
						<Component {...pageProps} />
						<SiteLoader />
					</ScrollToTop>
				</ChakraProvider>
			</Provider>
		</Suspense>
	);
}
