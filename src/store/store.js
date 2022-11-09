import { configureStore } from '@reduxjs/toolkit'

import userReducer from 'store/slices/userSlice'
import mapsReducer from 'store/slices/mapsSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    maps: mapsReducer,
  },
})
