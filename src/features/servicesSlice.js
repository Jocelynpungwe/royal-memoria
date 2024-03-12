import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoading: false,
  isDropdownOpen: false,
}

const servicesSlice = createSlice({
  name: 'serviceNav',
  initialState,
  reducers: {
    toggleDropdown: (state) => {
      state.isDropdownOpen = !state.isDropdownOpen
    },
    closeDropdown: (state) => {
      state.isDropdownOpen = false
    },
  },
})

export const { toggleDropdown, closeDropdown } = servicesSlice.actions
export default servicesSlice.reducer
