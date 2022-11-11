import * as R from 'ramda'
import { renameKeys } from './common'

export const normalizeFinalDrawResp = R.compose(
  R.append(R.__, []),
  renameKeys({ IslandFinalcode: 'coupons' })
)
