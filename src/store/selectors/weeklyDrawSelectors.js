import { createSelector } from '@reduxjs/toolkit'
import * as R from 'ramda'

import { normalizeWeeklyDrawCodesResp } from 'utils/weeklyDraw'

export const selectWeeklyDrawData = R.path(['weeklyDraw', 'data'])

export const selectWeeklyDrawLoading = R.path(['weeklyDraw', 'loading'])

export const selectWeeklyDrawError = R.path(['weeklyDraw', 'error'])
