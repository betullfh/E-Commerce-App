import { configureStore } from '@reduxjs/toolkit'
import appReducer from './slices/appSlice'
import productReducer from './slices/productSlice'
import basketReducer from './slices/basketslice'


export const store = configureStore({
  reducer: {
      app: appReducer,
      products: productReducer,
      basket:basketReducer

  },
})