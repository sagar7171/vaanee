import uploadVideoModalSlice from '../reducers/uploadVideoModalSlice';
import { toast } from 'react-toastify';
import { handleSiteLoader } from './modalActions';
import {
	extractFileNameWithoutExt,
	removeNullOrEmptyValue,
	toastErr,
	tokenIsValid,
} from '../../../utils/helper';
import { AnyAction, ThunkAction } from '@reduxjs/toolkit';
import { RootState } from '..';
import {
	ReturnMsg,
	UploadVideoModalModel,
	uploadVideoRelatedFormData,
} from '../models/redux-models';
import {
	CreateProjectFormData,
	UploadFileFormData,
	VideoWorkflowTriggerFormData,
} from '../models/submit-Models';
import axios from '../../../utils/axiosService';

export const uploadVideoModalActions = uploadVideoModalSlice.actions;

//handle current step
export const handleCurrentStep = (
	currStep: number,
): ThunkAction<void, RootState, unknown, AnyAction> => {
	return async (dispatch, getState) => {
		dispatch(uploadVideoModalActions.handleCurrentStep(currStep));
	};
};

//handle upload file data at step 1
export const handleUploadFileStep1ResData = (
	data: UploadVideoModalModel['uploadFileDataStep1'],
): ThunkAction<void, RootState, unknown, AnyAction> => {
	return async (dispatch, getState) => {
		dispatch(uploadVideoModalActions.handleUploadFileStep1ResData(data));
	};
};

//upload video File
export const uploadVideoFile = (
	token: string,
	formData: UploadFileFormData,
): ThunkAction<Promise<ReturnMsg>, RootState, unknown, AnyAction> => {
	return async (dispatch, getState) => {
		dispatch(handleSiteLoader(true));
		await tokenIsValid(token);
		const { file, project_id } = formData;
		const data = new FormData();
		data.append('file', file, file.name);
		data.append('project_id',  `${project_id}`);

		try {
			const res = await axios.post('/vaanee/upload_video/', data);
			const { message, video_id, s3_url, id } = res.data;
			toast.success(message);
			dispatch(
				handleUploadFileStep1ResData({
					videoId: video_id,
					videoS3Url: s3_url,
					videoFileName: extractFileNameWithoutExt(file.name),
					id,
				}),
			);
			dispatch(handleSiteLoader(false));
			return res.data;
		} catch (err) {
			console.log({ err });
			dispatch(handleSiteLoader(false));
			toast.error('Something went wrong. Please try again.');
			throw err;
		}
	};
};

//handle language Select
export const handleLangClick = (
	index: number,
): ThunkAction<void, RootState, unknown, AnyAction> => {
	return async (dispatch, getState) => {
		dispatch(uploadVideoModalActions.handleLangClick(index));
	};
};

//update video related data
export const updatedVideoRelatedData = (
	token: string,
	id: number,
	formData: uploadVideoRelatedFormData,
): ThunkAction<Promise<ReturnMsg>, RootState, unknown, AnyAction> => {
	return async (dispatch, getState) => {
		dispatch(handleSiteLoader(true));
		await tokenIsValid(token);
		try {
			const res = await axios.patch(
				`/vaanee/video_metadata/${id}/`,
				formData,
			);
			const { message } = res.data;
			toast.success(message);

			dispatch(handleSiteLoader(false));
			return res.data;
		} catch (err) {
			console.log({ err });
			dispatch(handleSiteLoader(false));
			toast.error('Something went wrong. Please try again.');
			throw err;
		}
	};
};

//resetLangListToInitialValue
export const resetLangListToInitialValue = (): ThunkAction<
	void,
	RootState,
	unknown,
	AnyAction
> => {
	return async (dispatch, getState) => {
		dispatch(uploadVideoModalActions.resetLangListToInitialValue());
	};
};

//update video related data
export const fetchAllStepData = (
	token: string,
	id: number,
): ThunkAction<
	Promise<UploadVideoModalModel['allStepData']>,
	RootState,
	unknown,
	AnyAction
> => {
	return async (dispatch, getState) => {
		dispatch(handleSiteLoader(true));
		await tokenIsValid(token);

		try {
			const res = await axios.get(`/vaanee/video_metadata/${id}/`);
			let tempData = res.data;
			removeNullOrEmptyValue(tempData);

			dispatch(uploadVideoModalActions.fetchAllStepData(tempData));
			dispatch(handleSiteLoader(false));
			return res.data;
		} catch (err) {
			console.log({ err });
			dispatch(handleSiteLoader(false));
			toast.error('Something went wrong. Please try again.');
			throw err;
		}
	};
};

//reset to initial state
export const resetToInitial = (): ThunkAction<
	void,
	RootState,
	unknown,
	AnyAction
> => {
	return async (dispatch, getState) => {
		dispatch(uploadVideoModalActions.resetToInitial());
	};
};

//trigger a work flow
export const videoWorkflowTrigger = (
	token: string,
	formData: VideoWorkflowTriggerFormData,
): ThunkAction<Promise<ReturnMsg>, RootState, unknown, AnyAction> => {
	return async (dispatch, getState) => {
		await tokenIsValid(token);
		try {
			const res = await axios.post(
				`${process.env.NEXT_PUBLIC_REACT_APP_CREATE_PROJECT}/workflow_manager/Workflow`,
				formData,
			);
			return res.data;
		} catch (err) {
			console.log({ err });
			toast.error('Something went wrong. Please try again.');
			throw err;
		}
	};
};

//create project
export const createProject = (
	token: string,
	formData: CreateProjectFormData,
): ThunkAction<Promise<ReturnMsg>, RootState, unknown, AnyAction> => {
	return async (dispatch, getState) => {
		dispatch(handleSiteLoader(true));
		await tokenIsValid(token);
		try {
			const res = await axios.post(
				`${process.env.NEXT_PUBLIC_REACT_APP_CREATE_PROJECT}/vaanee/project/`,
				formData,
			);
			const { project_id } = res.data;
			if (project_id) {
				dispatch(handleProjectId(project_id));
			}
			dispatch(handleSiteLoader(false));
			return res.data;
		} catch (err) {
			console.log({ err });
			toast.error('Something went wrong. Please try again.');
			dispatch(handleSiteLoader(false));
			throw err;
		}
	};
};

//handle project id
export const handleProjectId = (
	val: UploadVideoModalModel['project_id'],
): ThunkAction<void, RootState, unknown, AnyAction> => {
	return async (dispatch, getState) => {
		dispatch(uploadVideoModalActions.handleProjectId(val));
	};
};

//fetch the model supported language
export const fetchSupportedLanguage = (
	token: string,
): ThunkAction<void, RootState, unknown, AnyAction> => {
	return async (dispatch, getState) => {
		// dispatch(handleSiteLoader(true));
		await tokenIsValid(token);

		try {
			const res = await axios.get(
				`${process.env.NEXT_PUBLIC_REACT_APP_CREATE_PROJECT}/vaanee/supported-languages`,
			);
			const { data } = res.data;
			if (data) {
				let tempData: UploadVideoModalModel['modelAndLang'] = data.map(
					(item: {
						model_name: string;
						supported_languages: string[];
					}) => ({
						label: item.model_name,
						value: item.model_name,
						supportedLang: item.supported_languages.map(
							(_item) => ({
								label: _item,
								value: _item,
								selected: false,
							}),
						),
					}),
				);
				dispatch(handleSourceLang(tempData[0]['supportedLang']));
				dispatch(handleModelAndLang(tempData))
			}

			// dispatch(handleSiteLoader(false));
			return res.data;
		} catch (err) {
			// dispatch(handleSiteLoader(false));
			toastErr(err);
			throw err;
		}
	};
};

//handle source lang
export const handleSourceLang = (
	val: UploadVideoModalModel['sourceLang'],
): ThunkAction<void, RootState, unknown, AnyAction> => {
	return async (dispatch, getState) => {
		dispatch(uploadVideoModalActions.handleSourceLang(val));
	};
};

//handle modalAndLang
export const handleModelAndLang = (
	val: UploadVideoModalModel['modelAndLang'],
): ThunkAction<void, RootState, unknown, AnyAction> => {
	return async (dispatch, getState) => {
		dispatch(uploadVideoModalActions.handleModelAndLang(val));
	};
};

//handle languageList
export const handleLanguageList = (
	val: UploadVideoModalModel['languageList'],
): ThunkAction<void, RootState, unknown, AnyAction> => {
	return async (dispatch, getState) => {
		dispatch(uploadVideoModalActions.handleLanguageList(val));
	};
};
