import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState= {
    products:[],
    selectedProduct:{},
    loading:false,
    
}
const BASE_URL="https://fakestoreapi.com"

export const getAllproducts=createAsyncThunk('products', async()=>{
    const response =await axios.get(`${BASE_URL}/products`)
    return response.data
})



export const productSlice= createSlice({
    name:'product',
    initialState,
    reducers:{
        setSelectedProduct: (state,action)=>{
            state.selectedProduct=action.payload
        },
        

    },

    extraReducers: (builder)=>{
       builder.addCase(getAllproducts.pending,(state)=>{
        state.loading=true
       })

       builder.addCase(getAllproducts.fulfilled, (state, action)=>{
        state.loading=false
        state.products=action.payload
       })

    }
})

export const { setSelectedProduct} = productSlice.actions
export default productSlice.reducer