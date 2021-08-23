/* eslint-disable prettier/prettier */
import { createSlice } from '@reduxjs/toolkit'

export const searchSlice = createSlice({
  name: 'career',
  initialState: {
    keywords: '',
  },
  reducers: {
    setKeywords: (state, action) => {
      state.keywords = action.payload
    },
    clearKeywords: (state) => {
      state.keywords = ''
    },
  },
})

export const { setKeywords, clearKeywords } =
  searchSlice.actions
export const selectCareer = (state) => state.career
export default searchSlice.reducer
