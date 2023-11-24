import React, { useLayoutEffect, useState } from 'react';
import { useAppSelector } from '@/components/hooks/redux-hooks';
import SpinnerCom from './SpinnerCom';
import { privatePageList, publicPageList } from '@/utils/helper';
import { useRouter } from 'next/router';


function WithAuth<T extends {}>(
	WrappedComponent: React.ComponentType<T>,
) {
	return (props: T) => {
		const router = useRouter()
		const [isAuth, setIsAuth] = useState<null | boolean>(null);
		const {
			auth: { auth },
		} = useAppSelector((state) => state);

		useLayoutEffect(() => {
			setIsAuth(auth);
		}, [auth]);

		if (isAuth === null) {
			return <SpinnerCom msg={true} />;
		}
		if (isAuth && publicPageList.includes(router.pathname)) {
			router.push('/');
			return;
		}
		if (isAuth === false && privatePageList.includes(router.pathname)) {
			router.push('/sign-in');
			return;
		}
		return <WrappedComponent {...props} />;
	};
}

export default WithAuth;
