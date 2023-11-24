import React, { useEffect, useLayoutEffect, useState } from 'react';
import { ScrollToTopProps } from '../store/models/page-props';
// import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from '@/components/hooks/redux-hooks';
import { privatePageList, publicPageList } from '../../utils/helper';
import SpinnerCom from './SpinnerCom';

const ScrollToTop = ({ children }: ScrollToTopProps) => {
	const router = useRouter();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [router.pathname]);

	return <>{children}</>;
};

export default ScrollToTop;
