import React, { useLayoutEffect } from 'react';
// import withRedux from '@/components/hoc/withRedux';
import { useAppSelector } from '@/components/hooks/redux-hooks';
import IndexPage from './index';
import { useRouter } from 'next/router';

const CreateProject = () => {
	const { auth } = useAppSelector((state) => state.auth);
	const router = useRouter();
	useLayoutEffect(() => {
		if (!auth) {
			router.push('/');
		}
	}, []);
	return (
		<>
			<IndexPage />
		</>
	);
};

export default CreateProject;
