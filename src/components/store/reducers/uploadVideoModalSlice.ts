import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { UploadVideoModalModel } from '../models/redux-models';

const initialState: UploadVideoModalModel = {
	currentStep: 1,
	uploadFileDataStep1: {
		videoId: 0,
		videoS3Url: '',
		videoFileName: '',
		id: 0,
	},
	languageList: [],
	allStepData: {
		id: 0,
		video_id: 0,
		source_lang: null,
		required_languages: [],
		status: {},
		single_speaker: false,
		is_active: false,
		title: '',
		description: '',
		thumbnail: '',
		s3_path: '',
		user_id: 0,
	},
	project_id: 0,
	sourceLang: [],
	modelAndLang: [],
};

const uploadVideModalSlice = createSlice({
	name: 'uploadVideModal',
	initialState: initialState,
	reducers: {
		handleCurrentStep(
			state,
			action: PayloadAction<UploadVideoModalModel['currentStep']>,
		) {
			return {
				...state,
				currentStep: action.payload,
			};
		},
		handleLangClick(state, action: PayloadAction<number>) {
			return {
				...state,
				languageList: state.languageList.map((item, index) =>
					index === action.payload
						? { ...item, selected: !item.selected }
						: item,
				),
			};
		},
		handleLanguageList(state, action: PayloadAction<UploadVideoModalModel['languageList']>) {
			return {
				...state,
				languageList: action.payload,
			}
		},
		resetLangListToInitialValue(state, action: PayloadAction) {
			return {
				...state,
				languageList: initialState.languageList,
			};
		},
		handleUploadFileStep1ResData(
			state,
			action: PayloadAction<UploadVideoModalModel['uploadFileDataStep1']>,
		) {
			return {
				...state,
				uploadFileDataStep1: action.payload,
			};
		},
		fetchAllStepData(state, action) {
			return {
				...state,
				allStepData: { ...state.allStepData, ...action.payload },
			};
		},
		resetToInitial(state, action: PayloadAction) {
			return {
				...initialState,
			};
		},
		handleProjectId(
			state,
			action: PayloadAction<UploadVideoModalModel['project_id']>,
		) {
			return {
				...state,
				project_id: action.payload,
			};
		},
		handleSourceLang(
			state,
			action: PayloadAction<UploadVideoModalModel['sourceLang']>,
		) {
			return {
				...state,
				sourceLang: action.payload,
			};
		},
		handleModelAndLang(
			state,
			action: PayloadAction<UploadVideoModalModel['modelAndLang']>,
		) {
			return {
				...state,
				modelAndLang: action.payload,
			};
		},
	},
});

export default uploadVideModalSlice;
