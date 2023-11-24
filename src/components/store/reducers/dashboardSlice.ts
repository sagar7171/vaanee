import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { DashboardModel } from '../models/redux-models';

const initialState: DashboardModel = {
	data: null,
	limit: 10,
	page: 1,
	totalPage: 1,
	dataLoading: true,
	sidebarIsOpen:false
};

const dashboardSlice = createSlice({
	name: 'dashboard',
	initialState: initialState,
	reducers: {
		fetchAllProject(
			state,
			action: PayloadAction<{
				data: DashboardModel['data'];
				totalPage?: DashboardModel['totalPage'];
			}>,
		) {
			return {
				...state,
				data: action.payload.data,
				...(action.payload.totalPage && {
					totalPage: action.payload.totalPage,
				}),
				dataLoading: false,
			};
		},

		handlePageChange(state, action: PayloadAction<DashboardModel['page']>) {
			return {
				...state,
				page: action.payload,
			};
		},

		resetData(state, action: PayloadAction) {
			return {
				...state,
				// data: null,
				dataLoading: true,
			};
		},
		handleSidebarIsOpen(state, action: PayloadAction<DashboardModel['sidebarIsOpen']>) {
			return {
				...state,
				sidebarIsOpen: action.payload ,
			};
		},
		
	},
});

export default dashboardSlice;
