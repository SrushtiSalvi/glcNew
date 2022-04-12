import { applyMiddleware, compose, createStore } from 'redux'
import { persistReducer, persistStore } from 'redux-persist'

import allReducers from './reducers'
import { encryptTransform } from 'redux-persist-transform-encrypt'
import storageSession from 'redux-persist/lib/storage/session'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const persistConfig = {
  key: 'root',
  storage: storageSession,
  transforms: [
    encryptTransform({
      secretKey:
        '524fe972e114a1fa1d43b8049e328de2eb856b21b22698a07a6fdb19bd78c32c',
      onError: function (error) {
        // Handle the error.
      },
    }),
  ],
}

const persistedReducer = persistReducer(persistConfig, allReducers)

export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
)

export let persistor = persistStore(store)

export default store
