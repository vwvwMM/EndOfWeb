import { createSlice } from '@reduxjs/toolkit'

export const columnSummarySlice = createSlice({
  name: 'columnSummary',
  initialState: {
    page: 1,
    keywords: '',
  },
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload
    },
    setKeywords: (state, action) => {
      state.keywords = action.payload
    },
  },
})

export const { setPage, setKeywords } = columnSummarySlice.actions
export const selectColumnSummary = (state) => state.columnSummary
export default columnSummarySlice.reducer
