import jwt from 'jsonwebtoken';
import store from '@/components/store';
import authSlice from '@/components/store/reducers/authSlice';
import axios from './axiosService';
import { toast } from 'react-toastify';
import { logout } from '@/components/store/actions/authActions';
import { AxiosError } from 'axios';
import { toastErr } from './helper';
export const authActions = authSlice.actions;

class Utils {
	constructor() {
		this.flatDeep = this.flatDeep.bind(this);
	}

	isTokenExpired(token: string | null) {
		if (!token) return new Promise((resolve) => resolve(false));
		const now = new Date();
		if (token && jwt.decode(token)) {
			const { exp } = jwt.decode(token) as {
				exp: number;
			};
			return new Promise((resolve) =>
				resolve(now.getTime() < (exp - 10) * 1000),
			);
		}
		return new Promise((resolve) => resolve(false));
	}

	async getNewAuthToken() {
		const dispatch = store.dispatch;
		try {
			localStorage.removeItem('access_token');
			let refreshToken = localStorage.getItem('refresh_token');
			const res = await axios.post(
				`${process.env.NEXT_PUBLIC_REACT_APP_CREATE_PROJECT}/api/user/refresh/`,
				{
					refresh_token: refreshToken,
				},
			);
			const { access_token } = res.data;
			localStorage.setItem('access_token', access_token);
			dispatch(
				authActions.handleUserToken({
					access_token: access_token as string,
					refresh_token: refreshToken as string,
					auth: true,
					userLoading: false,
				}),
			);

			return new Promise((resolve) => resolve(access_token));
		} catch (err) {
			toastErr(err);
			dispatch(logout());
			window.location.reload();
		}
	}

	flatDeep(arr: any, d = 1) {
		return d > 0
			? arr.reduce(
					(acc: any, val: any) =>
						acc.concat(
							Array.isArray(val)
								? this.flatDeep(val, d - 1)
								: val,
						),
					[],
			  )
			: arr.slice();
	}
}
/* eslint import/no-anonymous-default-export: [2, {"allowNew": true}] */
export default new Utils();
