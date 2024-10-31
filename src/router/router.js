import React from "react";
import { Route,Routes } from "react-router-dom";
import Home from "../components/Home/Home";
import Shop from "../components/Shop/Shop";
import Cart from "../components/Cart/Cart";
import Contact from "../components/Contact/Contact";
import About from "../components/About/About";

const AppRouter =({shop,filter,allcatefilter,addCart,cart,setCart})=>{
  return (
<>
<Routes>
  <Route path="/" exact element={<Home addCart={addCart} />} />
  <Route path="/shop"  element={<Shop shop={shop} Filter={filter} allcatefilter={allcatefilter} addCart={addCart}/>} />
  <Route path="/cart" element={<Cart cart={cart} setCart={setCart}/> } />
  <Route path="/contact" element={<Contact/> } />
  <Route path="/about" element={<About/> } />


</Routes>

</>
  )
}
export default AppRouter;