import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userID: 'd1ba8083-45d0-40ee-aa2d-13b2630f4093',
  sessionID: 'b3ded713-bd0a-4cf7-b2e2-b5dfbd8f6d6c',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    set: (state, { payload }) => {
      state.userID = payload.userID
      state.sessionID = payload.sessionID
    },
    clear: state => {
      state.userID = null
      state.sessionID = null
    },
  },
})

export const { set: userInfoSet, unset: userInfoClear } = userSlice.actions

export default userSlice.reducer
