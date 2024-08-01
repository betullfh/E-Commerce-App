import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { setSelectedProduct } from '../redux/slices/productSlice'
import '../css/ProductDetails.css'
import { FiPlusCircle } from "react-icons/fi";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { addtoBasket, calculateBasket } from '../redux/slices/basketslice'


function ProductDetails() {
 
    const {id} =useParams()
    const {products, selectedProduct}= useSelector((store)=>store.products)
    const dispatch=useDispatch()
    const {price, description, image, title}= selectedProduct

    const [count, setCount]=useState(0)

    const increament=()=>
    {
        setCount(count+1)
    }

    const decreament=()=>{
        setCount(count-1)
    }

    useEffect(()=>{
          getProductbyId()
    },[])

    const getProductbyId=()=>
    {
        products && products.map((product)=>{
            if(product.id==id){
                dispatch(setSelectedProduct(product))
            }
        })
    }

    const addBasket=()=>{
        
        const payload={id,price,image,title,description,count}
       
        dispatch(addtoBasket(payload))
        dispatch(calculateBasket())
    }

  return (
    <div className='product-details'>
        <div style={{marginRight:"30px"}}>
            <img className="detail-image" src={image} />
        </div>

        <div className="detail-infos" >
            <h1 className='detail-title'>{title}</h1>
            <p className='detail-description'>{description}</p>
            <h1>$ {price}</h1>
        </div>

       <div className='detail-action'>
            <div className='detail-icons'>
                <FiPlusCircle className='icon' onClick={increament} style={{marginRight:"9px"}}/> {count} <AiOutlineMinusCircle className='icon' onClick={decreament} style={{marginLeft:"9px"}}/>
            </div>
            <button onClick={addBasket} className='addtobasketbutton'>Sepete Ekle</button>
       </div>
    </div>
  )
}

export default ProductDetails