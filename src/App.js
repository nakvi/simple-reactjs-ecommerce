import React, { useState } from "react";
import Navabr from "./components/Navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./router/router";
import Footer from "./components/Footer/Footer";
import HomeProduct from "./components/Home/HomeProduct";

export default function App() {
  const [shop, setShop] = useState(HomeProduct);
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);

  // Filter function for category filter
  const Filter = (x) => {
    const catefilter = HomeProduct.filter((product) => {
      return product.cat === x;
    });
    setShop(catefilter);
  };
  const allcatefilter = () => {
    setShop(HomeProduct);
  };
  //Shop Search Filter
  const searchlength = (search || []).length === 0;
  const searchProduct = () => {
    if (searchlength) {
      alert("Please Search Something !");
      setShop(HomeProduct);
    } else {
      const searchfilter = HomeProduct.filter((x) => {
        return x.cat === search;
      });
      setShop(searchfilter);
    }
  };
  //Add Cart Functionality Here
  const addCart = (product) => {
    // Add to cart functionality here
    const exist = cart.find((c) => {
      return c.id === product.id;
    })
    if (exist) {
      alert("Product Already Added to Cart");
      return;
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
      alert("Product Added to Cart");
    }
  };
  console.log(cart);
  return (
    <>
      <Router>
        <Navabr
        cart={cart}
          search={search}
          setSearch={setSearch}
          searchProduct={searchProduct}
        />
        <AppRouter
        setCart={setCart}
        cart={cart}
          shop={shop}
          filter={Filter}
          allcatefilter={allcatefilter}
          addCart={addCart}
        />
        <Footer />
      </Router>
    </>
  );
}
