import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';
import { AnyAction } from 'redux';
import modalSlice from '../reducers/modalSlice';

export const modalActions = modalSlice.actions;

//toggleUploadVideoModal
export const toggleUploadVideoModal = (): ThunkAction<
	void,
	RootState,
	unknown,
	AnyAction
> => {
	return async (dispatch, getState) => {
		dispatch(modalActions.toggleUploadVideoModal());
	};
};

//handleSiteLoader
export const handleSiteLoader = (
	value: boolean,
): ThunkAction<void, RootState, unknown, AnyAction> => {
	return async (dispatch, getState) => {
		dispatch(modalActions.handleSiteLoader(value));
	};
};

//handleOtpModal
export const handleOtpModal = (
	value: boolean,
): ThunkAction<void, RootState, unknown, AnyAction> => {
	return async (dispatch, getState) => {
		dispatch(modalActions.handleOtpModal(value));
	};
};
