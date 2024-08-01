import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllproducts } from '../redux/slices/productSlice'
import { store } from '../redux/store'
import Product from './Product'

function ProductList() {
   
    const dispatch=useDispatch()

    const {products} =useSelector((store)=>store.products)

    useEffect(()=>{
        dispatch(getAllproducts())
    },[])

    

  return (
    <div className='flex-row' style={{flexWrap:"wrap", marginTop:"30px"}}>
        {
            products && products.map((product)=>(
                <Product key={product.id} product={product}/>
            ))
        }
    </div>
  )
}

export default ProductList