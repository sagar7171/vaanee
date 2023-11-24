import { Box } from '@chakra-ui/react';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux-hooks';
import { handleOtpModal } from '../store/actions/modalActions';
import ModalComp from '../common/ModalCom';

function OtpModalCom() {
	const modal = useAppSelector((state) => state.modal);
	const { otpModal } = modal;
	const dispatch = useAppDispatch();
	return (
		<ModalComp
			size={'5xl'}
			isCentered={true}
			modalConBackground={'#fff'}
			autoFocus={false}
			isOpen={otpModal}
			onClose={() => {
				dispatch(handleOtpModal(false));
			}}
			modalBody={<Box>modal body</Box>}
		/>
	);
}

export default OtpModalCom;
