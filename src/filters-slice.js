import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
	name: 'filter',
	initialState: 'show_all',
	reducers: {
		showAll: (state, action) => 'show_all',
		showActive: (state, action) => 'show_active',
		showCompleted: (state, action) => 'show_completed',
	}
});

export const filtersActions = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
