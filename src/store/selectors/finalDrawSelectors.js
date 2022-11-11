import * as R from 'ramda'

export const selectFinalDrawData = R.path(['finalDraw', 'data'])

export const selectFinalDrawLoading = R.path(['finalDraw', 'loading'])

export const selectFinalDrawError = R.path(['finalDraw', 'error'])
