import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ModalModel } from '../models/redux-models';

const initialState: ModalModel = {
	showUploadVideoModal: false,
	siteLoader: false,
	otpModal: true,
};

const modalSlice = createSlice({
	name: 'modal',
	initialState: initialState,
	reducers: {
		toggleUploadVideoModal(state, action: PayloadAction) {
			return {
				...state,
				showUploadVideoModal: !state.showUploadVideoModal,
			};
		},
		handleSiteLoader(
			state,
			action: PayloadAction<ModalModel['siteLoader']>,
		) {
			return {
				...state,
				siteLoader: action.payload,
			};
		},
		handleOtpModal(state, action: PayloadAction<ModalModel['otpModal']>) {
			return {
				...state,
				otpModal: action.payload,
			};
		},
	},
});

export default modalSlice;
