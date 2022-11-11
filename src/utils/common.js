import * as R from 'ramda'

export const renameKeys = R.curry((keysMap, obj) =>
  R.reduce(
    (accumulator, key) => {
      const newKeyName = R.has(key, keysMap) ? keysMap[key] : key
      return R.assoc(newKeyName, obj[key], accumulator)
    },
    {},
    R.keys(obj)
  )
)
