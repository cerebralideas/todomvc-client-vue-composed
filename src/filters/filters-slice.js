import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
    name: 'filter',
    initialState: 'show_all',
    reducers: {
        /* Each reducer function receives `state` and `action`,
         * though neither are used.
         */
        showAll: () => 'show_all',
        showActive: () => 'show_active',
        showCompleted: () => 'show_completed'
    }
});

export const filterActions = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
