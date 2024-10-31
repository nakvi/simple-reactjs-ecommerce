import React from 'react'
import './Cart.css';
import { useNavigate } from'react-router-dom';  
import { AiOutlineClose } from 'react-icons/ai';

const Cart = ({cart,setCart}) => {
  const navigate = useNavigate(); 
  
  const incqty = (product) => {
    const exist = cart.find((x)=>{
      return x.id === product.id
    })
    setCart(cart.map((x)=>{
      if(x.id === product.id){
        return {...x, qty: x.qty + 1}
      }
      return x
    }))
  }
  const dcqty =(product) => {
   const exist = cart.find((x)=>{
     return x.id === product.id
    })
    setCart(cart.map((x)=>{
      if(x.id === product.id){
        if(x.qty === 1){
          return cart.filter((y)=>y.id!==product.id)
        }
        return {...x, qty: x.qty - 1}
      }
      return x
   }));
  }
  return (
    <>
    <div className="add_cart">
      <h1>#Cart</h1>
      {
        cart.length === 0 &&
        <>
        <div className='empty_cart'>
          <h2>Your cart is empty</h2>
          <div className='empty_image'>
            <img src='image/empty.png' alt="empty cart"/>
          </div>
            <button className="btn" onClick={() => navigate('/shop')}>
              Continue Shopping
            </button>
        </div>
        </>
      }
      <div className="container">
         {
          cart.map((curElm)=>{
            return(
              <>
             <div className='box'>
                  <div className='img_box'>
                    <img src={curElm.image} alt=''></img>
                  </div>
                  <div className='detail'>
                    <div className='info'>
                    <h4>{curElm.cat}</h4>
                    <h3>{curElm.Name}</h3>
                    <p>Price: ${curElm.price}</p>
                    <p>Total: ${curElm.price * curElm.qty}</p>
                    </div>
                    <div className='quantity'>
                      <button onClick={()=>incqty(curElm)} >+</button>
                      <input type='number' value={curElm.qty}></input>
                      <button onClick={()=>dcqty(curElm)}>-</button>
                    </div>
                    <div className='icon'>
                      <li><AiOutlineClose /></li>
                    </div>
                  </div>
                </div>
              </>
            )
          })
         }
      </div>
      <div className="bottom">
        {
          cart.length > 0 &&
          <>
          <div className='total'>
            <h3>Total: ${cart.reduce((acc,cur)=>acc + cur.price * cur.qty, 0)}</h3>
          </div>
          <div className='btn'>
            <button onClick={()=>navigate('/checkout')}>Checkout</button>
          </div>
          </>
        }

      </div>
    </div>
    </>
  )
}

export default Cart
