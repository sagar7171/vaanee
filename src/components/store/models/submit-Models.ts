export interface UploadFileFormData {
	file: Blob;
	project_id:number
}

export interface RegisterSubmitForm {
	fullname: string;
	username: string;
	phone_number: number;
	email: string;
	youtube_url: string;
	followers: number;
	password: string;
	confirmPassword: string;
	category: string;
	tnc: boolean;
}

export interface SignInSubmitForm {
	username: string;
	password: string;
}

export interface VideoWorkflowTriggerFormData {
	workflow_name: string;
	metadata: {
		video: string;
		target_audio: string[];
		watermark?: string;
	};
	project_id: number;
}

export interface CreateProjectFormData {
	project_name: 'Testproj2';
	project_type: 'video';
}
