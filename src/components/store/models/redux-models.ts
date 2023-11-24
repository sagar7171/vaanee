export interface ModalModel {
	showUploadVideoModal: boolean;
	siteLoader: boolean;
	otpModal: boolean;
}

export interface languageListObj {
	label: string;
	value: string;
	selected: boolean;
}

export interface OptionObj {
	label: string;
	value: string;
}

export interface UploadVideoModalModel {
	currentStep: number;
	uploadFileDataStep1: {
		videoId: number;
		videoS3Url: string;
		videoFileName: string;
		id: number;
	};
	languageList: languageListObj[];
	allStepData: {
		id: number;
		video_id: number;
		source_lang: null | string;
		required_languages: string[];
		status: { [x: string]: string };
		single_speaker: boolean;
		is_active: boolean;
		title: string;
		description: string;
		thumbnail: string;
		s3_path: string;
		user_id: number;
	};
	project_id: number;
	sourceLang: languageListObj[];
	modelAndLang: (OptionObj & { supportedLang: languageListObj[] })[];
}

export interface ReturnMsg {
	message: string;
}

export interface uploadVideoRelatedFormData {
	source_lang: UploadVideoModalModel['allStepData']['source_lang'];
	required_languages?: UploadVideoModalModel['allStepData']['required_languages'];
	status?: UploadVideoModalModel['allStepData']['status'];
}

export interface AuthModel {
	auth: boolean | null;
	user: {
		access_token: string;
		refresh_token: string;
		userLoading: boolean;
	};
}

export interface RegisterReturn {
	user_id: string;
}

export interface LoginReturn {
	access_token: string;
	refresh_token: string;
}

export interface HandleUserToken {
	auth: AuthModel['auth'];
	access_token: AuthModel['user']['access_token'];
	refresh_token: AuthModel['user']['refresh_token'];
	userLoading: AuthModel['user']['userLoading'];
}

export interface userNameReturnMsg {
	msg: string;
}

export interface ProjectDataObj {
	project_id: number;
	project_name: string;
	project_type: string;
	created_on: string;
	updated_on: string;
	is_active: boolean;
	is_deleted: boolean;
	status: string;
	current_step: number;
	created_by: string;
	updated_by: string;
}

export interface DashboardModel {
	data: ProjectDataObj[] | null;
	limit: number;
	page: number;
	dataLoading: boolean;
	totalPage: number;
	sidebarIsOpen:boolean
}
