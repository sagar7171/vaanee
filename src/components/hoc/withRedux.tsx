import { Provider } from 'react-redux';
import store from '../store/index';
import { Flip, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../../theme/theme';
import SpinnerCom from '../common/SpinnerCom';
// import { useAppSelector } from '@/components/hooks/redux-hooks';

function withRedux<T extends {}>(Component: React.ComponentType<T>) {
	const state=store.getState();
	const {modal:{siteLoader}}=state;
	// eslint-disable-next-line
	return (props: T) => (
		<>
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
					<Component {...props} />
					{siteLoader && <SpinnerCom />}
				</ChakraProvider>
			</Provider>
		</>
	);
}

export default withRedux;
