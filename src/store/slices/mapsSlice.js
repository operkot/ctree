import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { BASE_ERROR_MESSAGE } from 'constants/messages'
import api from 'api'

const MAPS_MOCK = [
  { id: 6, chips: 12, type: 1, status: 2 },
  { id: 30, chips: 12, type: 2, status: 2 },
  { id: 38, chips: 6, type: 3, status: 1 },
]

const initialState = {
  data: null,
  loading: false,
  error: null,
}

export const mapsFetch = createAsyncThunk(
  'maps/fetch',
  async (_, { rejectWithValue, getState }) => {
    const state = getState()
    const { sessionID, userID } = state.user

    try {
      const response = await api.maps.fetch({
        user_id: userID,
        session_id: sessionID,
      })

      return response
        ? response.island_maps
        : rejectWithValue(BASE_ERROR_MESSAGE)
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const mapsSlice = createSlice({
  name: 'maps',
  initialState,
  reducers: {
    realizeMapChip(state, { payload }) {
      state.data = state.data.map(item => {
        if (item.id === payload) {
          item.chips = item.chips + 1

          return item
        }

        return item
      })
    },
  },
  extraReducers: {
    [mapsFetch.pending]: state => {
      state.loading = true
    },
    [mapsFetch.fulfilled]: (state, { payload }) => {
      state.data = payload
      state.loading = false
      state.error = null
    },
    [mapsFetch.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
  },
})

export const { realizeMapChip } = mapsSlice.actions

export default mapsSlice.reducer
