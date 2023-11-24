import { toastErr, tokenIsValid } from '@/utils/helper';
import dashboardSlice from '../reducers/dashboardSlice';
import { handleSiteLoader } from './modalActions';
import axios from '../../../utils/axiosService';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';
import { AnyAction } from 'redux';
import { DashboardModel } from '../models/redux-models';

export const dashboardActions = dashboardSlice.actions;

//fetch all project
export const fetchAllProject = (
	token: string,
): ThunkAction<void, RootState, unknown, AnyAction> => {
	return async (dispatch, getState) => {
		dispatch(handleSiteLoader(true));
		const {
			dashboard: { limit, page },
		} = getState();
		await tokenIsValid(token);

		try {
			const res = await axios.get(
				`${process.env.NEXT_PUBLIC_REACT_APP_CREATE_PROJECT}/vaanee/project/?Limit=${limit}&page=${page}`,
			);
			const { data, count } = res.data;
			dispatch(
				dashboardActions.fetchAllProject(
					data
						? {
								data,
								totalPage:
									Math.floor(count / limit) +
									(count % limit > 0 ? 1 : 0),
						  }
						: { data: [] },
				),
			);
			dispatch(handleSiteLoader(false));
			return res.data;
		} catch (err) {
			dispatch(handleSiteLoader(false));
			toastErr(err);
			throw err;
		}
	};
};

//handlePageChange
export const handlePageChange = (
	page: DashboardModel['page'],
): ThunkAction<void, RootState, unknown, AnyAction> => {
	return async (dispatch, getState) => {
		dispatch(dashboardActions.handlePageChange(page));
	};
};

//reset Data
export const resetData = (): ThunkAction<
	void,
	RootState,
	unknown,
	AnyAction
> => {
	return async (dispatch, getState) => {
		dispatch(dashboardActions.resetData());
	};
};

//handle sidebarIsOpen 
export const handleSidebarIsOpen = (val:DashboardModel['sidebarIsOpen']): ThunkAction<
	void,
	RootState,
	unknown,
	AnyAction
> => {
	return async (dispatch, getState) => {
		dispatch(dashboardActions.handleSidebarIsOpen(val));
	};
};