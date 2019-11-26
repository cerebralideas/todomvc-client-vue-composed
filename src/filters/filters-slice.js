import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
	name: 'filter',
	initialState: 'show_all',
	reducers: {
		showAll: (state, action) => 'show_all',
		showActive: (state, action) => 'show_active',
		showCompleted: (state, action) => 'show_completed',
	}
});

export const filterActions = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
