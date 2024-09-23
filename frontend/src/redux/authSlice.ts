import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isLoggedIn: false,
	role: null,
	token: null,
	userId: null,
	fullName: null,
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		loginReducer: (state, action) => {
			state.isLoggedIn = true;
			state.role = action.payload.user_role;
			state.token = action.payload.access_token;
			state.userId = action.payload.user_id;
			state.fullName = action.payload.full_name;
			if (action.payload?.access_token) {
				localStorage.setItem('authToken', action.payload.access_token);
			} else {
				localStorage.removeItem('authToken');
			}
		},
		logoutReducer: (state) => {
			state.isLoggedIn = false;
			state.role = null;
			state.token = null;
			state.userId = null;
			state.fullName = null;
			localStorage.removeItem('authToken');
		},
	},
});
export const { loginReducer, logoutReducer } = authSlice.actions;
export default authSlice.reducer;

