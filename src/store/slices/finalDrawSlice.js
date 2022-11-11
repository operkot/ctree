import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { BASE_ERROR_MESSAGE } from 'constants/messages'
import api from 'api'
import { normalizeFinalDrawResp } from 'utils/finalDraw'

const initialState = {
  data: null,
  loading: false,
  error: null,
}

export const finalDrawCodesFetch = createAsyncThunk(
  'finalDraw/codesFetch',
  async (_, { getState, rejectWithValue }) => {
    const state = getState()
    const { sessionID, userID } = state.user

    try {
      const response = await api.finalDraw.fetch({
        user_id: userID,
        session_id: sessionID,
      })

      return response
        ? normalizeFinalDrawResp(response)
        : rejectWithValue(BASE_ERROR_MESSAGE)
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const finalDrawSlice = createSlice({
  name: 'finalDraw',
  initialState,
  extraReducers: {
    [finalDrawCodesFetch.pending]: state => {
      state.loading = true
    },
    [finalDrawCodesFetch.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.data = payload
      state.error = null
    },
    [finalDrawCodesFetch.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
  },
})

export default finalDrawSlice.reducer
