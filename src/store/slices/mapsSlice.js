import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { BASE_ERROR_MESSAGE } from 'constants/messages'
import api from 'api'

const MAPS_MOCK = [
  {
    id: 6,
    id_map: null,
    chips: 12,
    type: 1,
    status: 2,
  },
  {
    id: 30,
    id_map: null,
    chips: 12,
    type: 2,
    status: 2,
  },
  {
    id: 38,
    id_map: null,
    chips: 12,
    type: 3,
    status: 2,
  },
  {
    id: 41,
    id_map: null,
    chips: 12,
    type: 1,
    status: 2,
  },
  {
    id: 42,
    id_map: null,
    chips: 12,
    type: 2,
    status: 2,
  },
  {
    id: 53,
    id_map: 1,
    chips: 12,
    type: 3,
    status: 2,
  },
  {
    id: 54,
    id_map: 2,
    chips: 0,
    type: 1,
    status: 1,
  },
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

      // return response
      //   ? response.island_maps
      //   : rejectWithValue(BASE_ERROR_MESSAGE)
      return MAPS_MOCK
    } catch (error) {
      // return rejectWithValue(error.message)
      return MAPS_MOCK
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
