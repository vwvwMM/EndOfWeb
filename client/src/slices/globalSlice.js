import { createSlice } from '@reduxjs/toolkit'

export const globalSlice = createSlice({
  name: 'global',
  initialState: {
    sidebarShow: true,
    unfoldable: false,
  },
  reducers: {
    sidebarHide: (state) => {
      state.sidebarShow = false
    },
    sidebarShow: (state) => {
      state.sidebarShow = true
    },
    stretchSidebar: (state) => {
      state.unfoldable = true
    },
    squeezeSidebar: (state) => {
      state.unfoldable = false
    },
  },
})

export const { sidebarHide, sidebarShow, squeezeSidebar, stretchSidebar } = globalSlice.actions
export const selectGlobal = (state) => state.global
export default globalSlice.reducer
