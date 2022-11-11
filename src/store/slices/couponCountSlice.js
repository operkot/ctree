import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { BASE_ERROR_MESSAGE } from 'constants/messages'
import api from 'api'

const initialState = {
  data: {
    Count: 0,
    IslandManzanaCouponCount: 0,
  },
  loading: false,
  error: null,
}

export const couponCountFetch = createAsyncThunk(
  'couponCount/fetch',
  async (_, { getState, rejectWithValue }) => {
    const state = getState()
    const { sessionID, userID } = state.user

    try {
      const response = api.couponCount.fetch({
        user_id: userID,
        session_id: sessionID,
      })

      return response
        ? {
            Count: 10,
            IslandManzanaCouponCount: 12,
          }
        : rejectWithValue(BASE_ERROR_MESSAGE)
    } catch (error) {
      return rejectWithValue(error?.message || BASE_ERROR_MESSAGE)
    }
  }
)

export const couponCountSlice = createSlice({
  name: 'couponCount',
  initialState,
  extraReducers: {
    [couponCountFetch.pending]: state => {
      state.loading = true
    },
    [couponCountFetch.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.data = payload
      state.error = null
    },
    [couponCountFetch.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
  },
})

export default couponCountSlice.reducer
