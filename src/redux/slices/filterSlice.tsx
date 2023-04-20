import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isCategoryId: 0,
  isCurrentPage: 1,
  isSortType: {
    name: 'Популярности',
    sortField: 'rating',
  },
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.isCategoryId = action.payload;
    },
    setCurrentPage(state, action) {
      state.isCurrentPage = action.payload;
    },
    setSort(state, action) {
      state.isSortType = action.payload;
    },
  },
});

export const { setCategoryId, setCurrentPage, setSort } = filterSlice.actions;

export default filterSlice.reducer;
