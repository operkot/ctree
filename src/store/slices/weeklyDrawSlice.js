import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import api from 'api'
import { BASE_ERROR_MESSAGE } from 'constants/messages'
import { normalizeWeeklyDrawCodesResp } from 'utils/weeklyDraw'

const initialState = {
  data: {
    Coupon: null,
    IslandPromocode: null,
  },
  loading: false,
  error: null,
}

export const weeklyDrawCodsFetch = createAsyncThunk(
  'weeklyDraw/fetch',
  async (_, { rejectWithValue, getState }) => {
    const state = getState()
    const { sessionID, userID } = state.user

    try {
      const response = await api.weeklyDraw.fetch({
        user_id: userID,
        session_id: sessionID,
      })

      return response
        ? normalizeWeeklyDrawCodesResp(response)
        : rejectWithValue(BASE_ERROR_MESSAGE)
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const weeklyDrawCodesRealize = createAsyncThunk(
  'weeklyDraw/realize',
  async (_, { rejectWithValue, getState }) => {
    const state = getState()
    const { sessionID, userID } = state.user

    try {
      const response = await api.weeklyDraw.realize({
        user_id: userID,
        session_id: sessionID,
      })

      return response && response.hasOwnProperty('Error')
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
    [weeklyDrawCodsFetch.pending]: state => {
      state.loading = true
    },
    [weeklyDrawCodsFetch.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.data = payload
      state.error = null
    },
    [weeklyDrawCodsFetch.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
    [weeklyDrawCodesRealize.pending]: state => {
      state.loading = true
    },
    [weeklyDrawCodesRealize.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.data = payload
      state.error = null
    },
    [weeklyDrawCodesRealize.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
  },
})

export default weeklyDrawSlice.reducer
