import React from 'react'
import '../css/Product.css'
import { useNavigate } from 'react-router-dom'

function Product({product}) {

    const {id, price, description, image, title}= product
    console.log(product.price)

    const navigate=useNavigate()

  return (
    < div className='card'>
        <img className="product-image" src={image}/>
       <div>
          <h3 className='product-title' >{title}</h3>
          <h2 style={{textAlign:"end"}}>$ {price}</h2>
       </div>
       <div>
             <button onClick={()=>navigate("/product-details/"+id)} className='product-button'>Ürüne Git</button>
       </div>
    </div>
  )
}

export default Product