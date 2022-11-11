import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import api from 'api'
import { BASE_ERROR_MESSAGE } from 'constants/messages'

const initialState = {
  data: {
    Coupon: null,
    IslandPromocode: null,
  },
  loading: false,
  error: null,
}

export const weeklyDrawFetch = createAsyncThunk(
  'weeklyDraw/fetch',
  async (_, { rejectWithValue, getState }) => {
    const state = getState()
    const { sessionID, userID } = state.user

    try {
      const response = await api.weeklyDraw.fetch({
        user_id: userID,
        session_id: sessionID,
      })

      return response ? response : rejectWithValue(BASE_ERROR_MESSAGE)
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const weeklyDrawRealize = createAsyncThunk(
  'weeklyDraw/realize',
  async (_, { rejectWithValue, getState }) => {
    const state = getState()
    const { sessionID, userID } = state.user

    try {
      const response = await api.weeklyDraw.realize({
        user_id: userID,
        session_id: sessionID,
      })

      return response && response.data.hasOwnProperty('Error')
        ? rejectWithValue(response.data.Error)
        : response
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const weeklyDrawSlice = createSlice({
  name: 'weeklyDraw',
  initialState,
  extraReducers: {
    [weeklyDrawFetch.pending]: state => {
      state.loading = true
    },
    [weeklyDrawFetch.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.data = payload
      state.error = null
    },
    [weeklyDrawFetch.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
    [weeklyDrawRealize.pending]: state => {
      state.loading = true
    },
    [weeklyDrawRealize.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.data = payload
      state.error = null
    },
    [weeklyDrawRealize.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
  },
})

export default weeklyDrawSlice.reducer
