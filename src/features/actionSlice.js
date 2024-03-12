import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoading: false,
  isSideBarOpen: false,
}

const actionSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSideBarOpen = !state.isSideBarOpen
    },
  },
})

export const { toggleSidebar } = actionSlice.actions
export default actionSlice.reducer
