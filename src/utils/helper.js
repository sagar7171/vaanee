import setAuthToken from './setAuthToken';
import utils from '.';
import { logout } from '@/components/store/actions/authActions';
import { toast } from 'react-toastify';

export const config = { headers: { 'Content-Type': 'application/json' } };
const { isTokenExpired, getNewAuthToken } = utils;

export const extractFileNameWithoutExt = (fileName) => {
	let temp = fileName.split('.').filter((item) => item !== '.');
	temp = temp.filter((_item, index) => index !== temp.length - 1).join('');
	return temp;
};

export const setFormValue = (dataObject, setValue) => {
	Object.keys(dataObject)?.forEach((key) => {
		setValue(key, dataObject[key]);
	});
};

export const removeNullOrEmptyValue = (dataObject) => {
	Object.keys(dataObject)?.forEach((key) => {
		if (dataObject[key] === '' || dataObject[key] == null) {
			delete dataObject[key];
		}
	});
};

export const EMAIL = 'admin@vaanee.co';
export const PASSWORD = 'Admin@123';

export const videoPlayerOptions = {
	controls: true,
	// aspectRatio: '16:9',
	sources: [],

	techOrder: ['html5'],
	html5: {
		hls: {
			overrideNative: true,
			cacheEncryptionKeys: true,
		},
	},
	plugins: {
		dashHlsBitrateSwitcher: {
			support: 'both',
		},
		settingsMenu: {
			items: [
				'AudioTrackButton',
				'ChaptersButton',
				'SubsCapsButton',
				'PlaybackRateMenuButton',
				'RatesButton',
			],
			languages: {
				settings: 'Settings',
				loading: 'Loading',
				back: 'Back',
				captions_off: 'Captions Off',
				default_audio: 'Default Audio',
				audio: 'Audio',
				subtitles: 'Subtitles',
				chapters: 'Chapters',
				speed: 'Speed',
				quality: 'Quality',
			},
		},
	},
	crossOrigin: 'anonymous',
	liveui: true,
	autoplay: false,
	muted: true,
	playbackRates: [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2],
	nativeControlsForTouch: false,
};

export const tokenIsValid = async (token) => {
	let newToken = token;
	const valid = await isTokenExpired(newToken);
	if (!valid) newToken = await getNewAuthToken();
	setAuthToken(newToken);
};

export const privatePageList = ['/dashboard'];
export const publicPageList = ['/sign-in', '/register'];

export const toastErr = (err) => {
	const { data } = err.response||{};
	if (data?.msg) {
		toast.error(data.msg);
	}
};
