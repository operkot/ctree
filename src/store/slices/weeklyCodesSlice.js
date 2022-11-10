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

export const weeklyCodesFetch = createAsyncThunk(
  'weeklyCodes/fetch',
  async (_, { rejectWithValue, getState }) => {
    const state = getState()
    const { sessionID, userID } = state.user

    try {
      const response = await api.weeklyCodes.fetch({
        user_id: userID,
        session_id: sessionID,
      })

      return response ? response : rejectWithValue(BASE_ERROR_MESSAGE)
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const weeklyCodesRealize = createAsyncThunk(
  'weeklyCodes/realize',
  async (_, { rejectWithValue, getState }) => {
    const state = getState()
    const { sessionID, userID } = state.user

    try {
      const response = await api.weeklyCodes.realize({
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

export const weeklyCodesSlice = createSlice({
  name: 'weeklyCodes',
  initialState,
  extraReducers: {
    [weeklyCodesFetch.pending]: state => {
      state.loading = true
    },
    [weeklyCodesFetch.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.data = payload
      state.error = null
    },
    [weeklyCodesFetch.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
    [weeklyCodesRealize.pending]: state => {
      state.loading = true
    },
    [weeklyCodesRealize.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.data = payload
      state.error = null
    },
    [weeklyCodesRealize.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
  },
})

export default weeklyCodesSlice.reducer
