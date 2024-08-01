import { useEffect, useState } from 'react'
import './App.css'
import PageContainer from './container/PageContainer'
import Header from './components/Header'
import RouterConfig from './config/RouterConfig'
import Loading from './components/Loading'
import Drawer from '@mui/material/Drawer';
import { useDispatch, useSelector } from 'react-redux'
import { calculateBasket, deleteProduct, setdrawer } from './redux/slices/basketslice'

function App() {

  const {products,drawer,totalAmount}=useSelector((store)=>store.basket)
  const dispatch=useDispatch()
  
  useEffect(()=>{
      dispatch(calculateBasket())
  },[])
  
  const deleteproduct = (productId) => {
    dispatch(deleteProduct({ id: productId }));
}

const refreshPage = () => {
  window.location.reload();
}

  return (
   <div>
      <PageContainer>
        <Header/>
        <hr />
        <Loading/>
        <RouterConfig/>
      
        <Drawer anchor='right' onClose={()=>dispatch(setdrawer())} open={drawer} >
          <h3 onClick={refreshPage} className='basket-title'>Sepeti Güncelle</h3>
          {
            
            products && products.map((product)=>{
              return (
              <div className='basket-list' >
                 <div className='basket-product'>
                    <div >                  
                      <img className='basket-image' src={product.image} />
                      <p>{product.title} ({product.count})</p>                               
                    </div>
                    <div className='price-delete'>
                      <p className='basket-price'>${product.price}</p>
                      <button onClick={() => deleteproduct(product.id)}  className='delete-product'>Ürünü Sil</button></div>                 
                  </div>
                  
              </div>
                  
              )
            })

          }
           <div className='total'>
           <h3>Sepet Tutarı = ${totalAmount.toFixed(2)}</h3>
           </div>
           
          
        </Drawer>
     
     
      </PageContainer>
   </div>
  )
}

export default App
