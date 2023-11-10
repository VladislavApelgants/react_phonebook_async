import { createSlice } from '@reduxjs/toolkit';

const filterInitState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitState,
  reducers: {
    filter: {
      reducer(state, action) {
        state = action.payload;
        return state;
      },
      prepare(value) {
        return {
          payload: value,
        };
      },
    },
  },
});

export const { filter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
