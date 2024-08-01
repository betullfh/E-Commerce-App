import { createSlice } from '@reduxjs/toolkit'

const getBasketfromStorage=()=>{
    if(localStorage.getItem("basket")){
        return JSON.parse(localStorage.getItem("basket"))
    }
    return []
}


const initialState={
    products:getBasketfromStorage(),
    drawer:false,
    totalAmount:0,
}

const writeFromBasketToStorage=(basket)=>{   //sepetteki ürünleri storagea yazma
    localStorage.setItem("basket",JSON.stringify(basket))
}




export const basketSlice=createSlice({
    name:"basket",
    initialState,
    reducers:{
        addtoBasket: (state, action)=>{
             const findProduct=state.products && state.products.find((product)=> product.id===action.payload.id)
             if(findProduct){
                const updateProducts=state.products.filter((product)=>product.id!=action.payload.id)
                findProduct.count+=action.payload.count
                state.products=[...updateProducts, findProduct]
                writeFromBasketToStorage(state.products)
             }
             else{
                state.products=[...state.products, action.payload]
                writeFromBasketToStorage(state.products)
             }
        },
        setdrawer:(state)=>{
            state.drawer=!state.drawer
        },
        
        calculateBasket:(state)=>
        {
          state.products && state.products.map((product)=>{
               state.totalAmount+=(product.price*product.count)
          })
        },
        deleteProduct: (state, action) => {
            const updatedProducts = state.products.filter((product) => product.id !== action.payload.id);
            state.products = updatedProducts;
            writeFromBasketToStorage(updatedProducts); 
            state.totalAmount = 0; 
            updatedProducts.forEach((product) => {
                state.totalAmount += product.price * product.count;
            });
        }

    },

    extraReducers:(builder)=>{

    }
})

export const { addtoBasket, setdrawer, calculateBasket, deleteProduct} = basketSlice.actions
export default basketSlice.reducer