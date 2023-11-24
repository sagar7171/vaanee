import React from 'react';
import { Helmet } from 'react-helmet';
import HomeView from '../../components/home/HomeView';
import UploadVideoModal from '../../components/Modal/UploadVideoModal';
import { Flex } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
const RightCompTest = () => {
	return <>Right components</>;
};

const LeftCompTest = () => {
	return <Flex>test</Flex>;
};

const UploadVideo = () => {
	const modal = useSelector((state) => state.modal);
	const { showUploadVideoModal } = modal;
	return (
		<>
			<Helmet>
				<title>Upload Video | Vlippr</title>
			</Helmet>
			<HomeView
				rightPanelComp={RightCompTest}
				leftPanelComp={LeftCompTest}
			/>
			{showUploadVideoModal && <UploadVideoModal />}
		</>
	);
};

export default UploadVideo;
