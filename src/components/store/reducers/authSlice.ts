import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AuthModel, HandleUserToken } from '../models/redux-models';

const initialState: AuthModel = {
	auth: null,
	user: {
		access_token: '',
		refresh_token: '',
		userLoading: true,
	},
};

const authSlice = createSlice({
	name: 'auth',
	initialState: initialState,
	reducers: {
		logout(state, action: PayloadAction) {
			localStorage.removeItem('access_token');
			localStorage.removeItem('refresh_token');
			return {
				...initialState,
				auth:false
			};
		},
		handleUserToken(state, action: PayloadAction<HandleUserToken>) {
			return {
				...state,
				auth: action.payload.auth,
				user: {
					access_token: action.payload.access_token,
					refresh_token: action.payload.refresh_token,
					userLoading: action.payload.userLoading,
				},
			};
		},
		// handleAuth(state, action: PayloadAction<AuthModel['auth']>) {
		// 	return {
		// 		...state,
		// 		auth: action.payload,
		// 	};
		// },
		// loadUserToken(
		// 	state,
		// 	action: PayloadAction<{
		// 		access_token: AuthModel['user']['access_token'];
		// 		refresh_token: AuthModel['user']['access_token'];
		// 	}>,
		// ) {
		// 	return {
		// 		...state,
		// 		auth: true,
		// 		user: {
		// 			...state.user,
		// 			access_token: action.payload.access_token,
		// 			refresh_token: action.payload.refresh_token,
		// 			userLoading: false,
		// 		},
		// 	};
		// },
	},
});

export default authSlice;
