import { configureStore } from '@reduxjs/toolkit';
import modalSlice from './reducers/modalSlice';
import uploadVideModalSlice from './reducers/uploadVideoModalSlice';
import authSlice from './reducers/authSlice';
import dashboardSlice from './reducers/dashboardSlice';

const store = configureStore({
	reducer: {
		modal: modalSlice.reducer,
		uploadVideModal: uploadVideModalSlice.reducer,
		auth: authSlice.reducer,
		dashboard: dashboardSlice.reducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
