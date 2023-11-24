import * as Yup from 'yup';

const emailRegExp =
	// eslint-disable-next-line
	/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const passwordRegExp =
	// eslint-disable-next-line
	/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/;

export const mediaValidation = Yup.object().shape({
	file: Yup.object(),
});

export const tenDigitRegExp = /^[2-9]{1}[0-9]{9}$/;

export const thisProjectTabConValidation = Yup.object().shape({
	file: Yup.object(),
});

export const youtubeUrlRegExp=/^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/

export const uploadVideoModalValidation = Yup.object().shape({
	file: Yup.mixed(),
	source_lang: Yup.string()
		.transform((value) => (value === null ? '' : value))
		.required('Please select the video source language.'),
	model: Yup.string()
		.transform((value) => (value === null ? '' : value))
		.required('Please select the model.'),
	multiLang: Yup.string()
		.transform((value) => (value === null ? '' : value))
		.test(
			'multiLang is only required when source language is selected',
			'This field is required.',
			function (value) {
				if (!value && this.parent.source_lang) {
					return false;
				}
				return true;
			},
		),
});

export const uploadVideoModalDetailsValidation = Yup.object().shape({
	// thumbnail: Yup.mixed()
	// 	// .required('Thumbnail is required.')
	// 	.test(
	// 		'fileSize',
	// 		'The file is too large. File should be less than 2 MB',
	// 		(value) => {
	// 			if (value.length) return value[0].size <= 2000000; // attachment is optional
	// 			return true;
	// 		},
	// 	),
	title: Yup.string()
		.transform((value) => (value === null ? '' : value))
		.required('Please enter the title for the file.'),
	description: Yup.string()
		.transform((value) => (value === null ? '' : value))
		.required('Please enter the description for the file.')
		.max(500, 'Description length should be less than 500 character'),
});

export const registerValidation = Yup.object().shape({
	fullname: Yup.string()
		.strict()
		.trim('Name cannot include leading and trailing spaces')
		.required('Name is required')
		.max(50, 'Name must not exceed 50 characters.'),
	username: Yup.string()
		.strict()
		.trim('Username cannot include leading and trailing spaces')
		.required('Username is required')
		.max(50, 'Username must not exceed 50 characters.'),
	phone_number: Yup.number().transform((value) => (value ? value : null))
	// .strict()
		// .trim('Mobile number cannot include leading and trailing spaces')
		.required('Mobile number is required')
		.test(
			'isValidPhoneNumber',
			'Mobile number is invalid',
			function (value) {
				if (value && tenDigitRegExp.test(value)) {
					return true;
				}
				return false;
			},
		),
	email: Yup.string()
		.trim('The email cannot include leading and trailing spaces')
		.required('Email is required')
		.matches(emailRegExp, 'Email is invalid'),
	youtube_url: Yup.string().strict().trim('Youtube url cannot include leading and trailing spaces').required('Youtube url is required').test(
		'checking yourtube url',
		'Youtube url is invalid',
		function (value) {
			if (value && youtubeUrlRegExp.test(value)) {
				return true;
			}
			return false;
		},
	),
	followers: Yup.number()
		.transform((value) => (value ? value : null))
		.nullable()
		// .strict()
		// .trim('Followers cannot include leading and trailing spaces')
		.required('Followers is required')
		.test(
			'Followers should greater than 0',
			'Followers should greater than 0',
			function (value) {
				if (value < 0) {
					return false;
				}
				return true;
			},
		),
	category: Yup.string().required('Category is required'),
	password: Yup.string()
		.strict()
		.trim('The password cannot include leading and trailing spaces')
		.required('Password is required')
		.min(8, 'Password must be at least 8 characters')
		.max(32, 'Password must not exceed 32 characters')
		// eslint-disable-next-line
		.matches(
			passwordRegExp,
			'Password must contain 8 characters, one uppercase, one lowercase, one number and one special character (!, @, #, $, %, ^, &,*, (, ), , -, _, =, +, {, }, ;, :, <, ., >, and ,)',
		),
	confirmPassword: Yup.string()
		.strict()
		.trim('The confirm password cannot include leading and trailing spaces')
		.required('Confirm Password is required')
		.oneOf([Yup.ref('password'), ''], 'Confirm Password does not match'),
	tnc: Yup.boolean().required(
		'Accept Terms & Privacy is required',
	).test(
		'Accept Terms & Privacy is required',
		'Accept Terms & Privacy is required',
		function (value) {
			if (!value) {
				return false;
			}
			return true;
		},
	),
});

export const signInValidation = Yup.object().shape({
	username: Yup.string()
		.trim('The Email / Username cannot include leading and trailing spaces')
		.required('Email / Username is required'),
		// .matches(emailRegExp, ' email is invalid'),
	password: Yup.string()
		.strict()
		.trim('The password cannot include leading and trailing spaces')
		.required('Password is required')
		.min(8, 'Password must be at least 8 characters')
		.max(32, 'Password must not exceed 32 characters'),
		// eslint-disable-next-line
		// .matches(
		// 	passwordRegExp,
		// 	'Password must contain 8 characters, one uppercase, one lowercase, one number and one special character (!, @, #, $, %, ^, &,*, (, ), , -, _, =, +, {, }, ;, :, <, ., >, and ,)',
		// ),
});

export const projectCreationValidation = Yup.object().shape({
	title: Yup.string()
		.transform((value) => (value === null ? '' : value))
		.required('Please enter the project title.'),
	projectType: Yup.string()
		.transform((value) => (value === null ? '' : value))
		.required('Please select the project type.'),
});
