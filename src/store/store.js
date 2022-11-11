import { configureStore } from '@reduxjs/toolkit'

import userReducer from 'store/slices/userSlice'
import mapsReducer from 'store/slices/mapsSlice'
import couponCountReducer from 'store/slices/couponCountSlice'
import weeklyDrawReducer from 'store/slices/weeklyDrawSlice'
import finalDrawReducer from 'store/slices/finalDrawSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    maps: mapsReducer,
    couponcount: couponCountReducer,
    weeklyDraw: weeklyDrawReducer,
    finalDraw: finalDrawReducer,
  },
})
