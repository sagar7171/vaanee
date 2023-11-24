import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';
import { AnyAction } from 'redux';
import authSlice from '../reducers/authSlice';
import { handleSiteLoader } from './modalActions';
import { config, toastErr } from '@/utils/helper';
import axios from '../../../utils/axiosService';
import {
	RegisterReturn,
	LoginReturn,
	HandleUserToken,
	userNameReturnMsg,
} from '../models/redux-models';
import { SignInSubmitForm, RegisterSubmitForm } from '../models/submit-Models';
import utils from '@/utils';
import setAuthToken from '@/utils/setAuthToken';
import { toast } from 'react-toastify';
const { isTokenExpired, getNewAuthToken } = utils;

export const authActions = authSlice.actions;

// logout user
export const logout = (): ThunkAction<void, RootState, unknown, AnyAction> => {
	return async (dispatch, getState) => {
		dispatch(authActions.logout());
	};
};

//fetch token to verify refresh token is valid or not
export const fetchToken = (): ThunkAction<
	void,
	RootState,
	unknown,
	AnyAction
> => {
	return async (dispatch, getState) => {
		let userTokenVal;
		if (localStorage.getItem('access_token')) {
			userTokenVal = localStorage.getItem('access_token');
		} else {
			userTokenVal = null;
		}
		const userTokenValid = await isTokenExpired(userTokenVal);

		let refresh_token = localStorage.getItem('refresh_token');
		const userRefreshTokenValid = await isTokenExpired(refresh_token);
		if (!userTokenValid && userRefreshTokenValid) {
			await getNewAuthToken();
			await dispatch(loadUser());
		} else if (userTokenValid && userRefreshTokenValid) {
			await dispatch(loadUser());
		} else {
			// dispatch(handleAuth(false));
			dispatch(logout());
		}
	};
};

//loadUser
export const loadUser = (): ThunkAction<
	void,
	RootState,
	unknown,
	AnyAction
> => {
	return async (dispatch, getState) => {
		// dispatch(showSiteLoader());

		let newToken = localStorage.getItem('access_token');
		let refreshToken = localStorage.getItem('refresh_token');
		const valid = await isTokenExpired(newToken);
		if (!valid) newToken = (await getNewAuthToken()) as string;
		try {
			setAuthToken(newToken);

			const res = await axios.get(
				`${process.env.NEXT_PUBLIC_REACT_APP_CREATE_PROJECT}/api/auth/verify/`,
				config,
			);
			const { status, data, msg } = res.data;
			dispatch(
				authActions.handleUserToken({
					access_token: newToken as string,
					refresh_token: refreshToken as string,
					auth: true,
					userLoading: false,
				}),
			);
			// dispatch(hideSiteLoader());
		} catch (err) {
			// dispatch(hideSiteLoader());
			toastErr(err);
			throw err;
		}
	};
};

// handleUserToken
export const handleUserToken = (
	data: HandleUserToken,
): ThunkAction<void, RootState, unknown, AnyAction> => {
	return async (dispatch, getState) => {
		dispatch(authActions.handleUserToken(data));
	};
};

// // handleUserToken
// export const loadUserToken = (data: {
// 	access_token: AuthModel['user']['access_token'];
// 	refresh_token: AuthModel['user']['access_token'];
// }): ThunkAction<void, RootState, unknown, AnyAction> => {
// 	return async (dispatch, getState) => {
// 		dispatch(authActions.loadUserToken(data));
// 	};
// };

//register user
export const registerUser = (
	formData: Omit<RegisterSubmitForm, 'confirmPassword'> & {
		confirmPassword?: string;
	},
): ThunkAction<Promise<RegisterReturn>, RootState, unknown, AnyAction> => {
	return async (dispatch, getState) => {
		dispatch(handleSiteLoader(true));
		delete formData['confirmPassword'];
		try {
			const res = await axios.post(
				`${process.env.NEXT_PUBLIC_REACT_APP_CREATE_PROJECT}/user_create/`,
				formData,
				config,
			);
			dispatch(handleSiteLoader(false));
			return res.data;
		} catch (err) {
			toastErr(err);
			dispatch(handleSiteLoader(false));
			throw err;
		}
	};
};

//login user
export const login = (
	formData: SignInSubmitForm,
): ThunkAction<Promise<LoginReturn>, RootState, unknown, AnyAction> => {
	return async (dispatch, getState) => {
		dispatch(handleSiteLoader(true));
		try {
			const res = await axios.post(
				`${process.env.NEXT_PUBLIC_REACT_APP_CREATE_PROJECT}/api/user/login/`,
				formData,
				config,
			);
			dispatch(handleSiteLoader(false));
			return res.data;
		} catch (err) {
			toastErr(err);
			dispatch(handleSiteLoader(false));
			throw err;
		}
	};
};

// // handleUserToken
// export const handleAuth = (
// 	data: boolean,
// ): ThunkAction<void, RootState, unknown, AnyAction> => {
// 	return async (dispatch, getState) => {
// 		dispatch(authActions.handleAuth(data));
// 	};
// };

//check userName
export const checkUserName = (
	userName: string,
): ThunkAction<Promise<userNameReturnMsg>, RootState, unknown, AnyAction> => {
	return async (dispatch, getState) => {
		// dispatch(handleSiteLoader(true));
		try {
			const res = await axios.get(
				`${process.env.NEXT_PUBLIC_REACT_APP_CREATE_PROJECT}/api/check/?username=${userName}`,
				config,
			);
			const { msg } = res.data;
			// if(msg==="")
			// localStorage.setItem('access_token', access_token)
			// dispatch(handleSiteLoader(false));
				return res.data;
		} catch (err) {
			toastErr(err);
			// dispatch(handleSiteLoader(false));
			throw err;
		}
	};
};
