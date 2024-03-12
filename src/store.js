import { configureStore } from '@reduxjs/toolkit'
import actionSlice from './features/actionSlice'
import servicesSlice from './features/servicesSlice'

export const store = configureStore({
  reducer: {
    actions: actionSlice,
    services: servicesSlice,
  },
})
