import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import HomeProduct from "./HomeProduct";
import { CiTwitter } from "react-icons/ci";
import { AiFillEye ,AiOutlineShoppingCart,AiFillHeart} from "react-icons/ai";
import {
   FaEye,
   FaFacebook,
   FaHeart,
   FaInstagramSquare,
   FaYoutube 
  } from "react-icons/fa";

import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function Home({addCart}) {
  const [trendingProduct,setTrandingProduct] =useState(HomeProduct);
  const [newProduct,setNewProduct] = useState([]);
  const [featureProduct,setFeaturedProduct] = useState([]);
  const [topProduct,setTopProduct] = useState([]);


  const filterCate=(category) => {
    const filterCategories =HomeProduct.filter(
      (product) =>product.type === category
    );
    setTrandingProduct(filterCategories);
  };
  const allProducts=()=>{
    setTrandingProduct(HomeProduct);
  };
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  useEffect(() => {
    const newProducts = HomeProduct.filter(
      (product) => product.type === "new" 
    );
    setNewProduct(newProducts);
  });
  useEffect(() => {
    const featuredProducts =HomeProduct.filter(
      (product) =>product.type === "featured"
    );
    setFeaturedProduct(featuredProducts);
  });
  useEffect(() => {
    const topProducts = HomeProduct.filter(
      (product) => product.type === "top"
    );
    setTopProduct(topProducts);
  });
  return (
    <>
      <div className="home">
        <div className="top_banner"  >
          <div className="content" data-aos ="fade-right">
            <h3>Welcome to Our E-Commerce Site!</h3>
            <h2>Apple Watch!</h2>
            <p>Discover our wide range of products .</p>
            <Link className="link" to="/products">
              Shop Now
            </Link>
          </div>
        </div>
        <div className="tranding">
          <div className="container">
            <div className="left-box" >
              <div className="header" >
                <div className="heading">
                <h2 onClick={()=>allProducts()}>Trending Now</h2>
              </div>
              <div className="cate">
                <h3 onClick={()=>filterCate('new')}>New</h3>
                <h3 onClick={()=>filterCate('featured')}>Featured</h3>
                <h3 onClick={()=>filterCate('top')}>Top Selling</h3>
              </div>
              </div>
              <div className="products">
                <div className="containers">
                 {
                   trendingProduct.map((product) => {
                    return(
                     <>
                     <div className="box" data-aos ="fade-right">
                      <div className="img_box">
                        <img src={product.image} alt="Product" />
                        <div className="icon">
                          <div className="icon_box">
                          <FaEye />
                          <span className="tooltip">View Product</span>

                          </div>
                          <div className="icon_box">
                          <FaHeart />
                          <span className="tooltip">Add to Wishlist</span>

                          </div>
                        </div>
                      </div>
                      <div className="details">
                        <h4>{product.Name}</h4>
                        <p>{product.price}$</p>
                        <button className="link" onClick={()=>addCart(product)}>
                          Shop Now
                        </button>

                      </div>
                     </div>
                     </>
                    )
                   })
                 }
                </div>
              </div>
            </div>
            <div className="right-box">
              <div className="container">
                <div className="testimonial">
                  <div className="head">
                    <h3>What Our Customers Say</h3>
                  </div>
                  <div className="details" data-aos="fade-down">
                    <div className="img_box">
                      <img src="image/T1.avif" alt="Customer" />
                    </div>
                    <div className="info">
                      <h4>Skyler White</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed sed enim euismod, pulvinar massa sed, vulputate nunc.
                      </p>
                    </div>
                  </div>
                  <div className="details" data-aos="fade-down">
                    <div className="img_box">
                      <img src="image/T1.avif" alt="Customer" />
                    </div>
                    <div className="info">
                      <h4>Skyler White</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed sed enim euismod, pulvinar massa sed, vulputate nunc.
                      </p>
                    </div>
                  </div>
                  <div className="details" data-aos="fade-down">
                    <div className="img_box">
                      <img src="image/T1.avif" alt="Customer" />
                    </div>
                    <div className="info">
                      <h4>Skyler White</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed sed enim euismod, pulvinar massa sed, vulputate nunc.
                      </p>
                    </div>
                  </div>
                  <div className="newsletter" data-aos="fade-up">
                  <div className="head">
                    <h3>Newsletter</h3>
                  </div>  
                  <div className="para">
                    <p>Join our mailing list</p>
                  </div>  
                  <div className="form">
                    <input type="text" placeholder="Enter Your Email" />
                    </div>   
                    <div className="btn">
                      <button>Subscribe</button>
                      </div>    
                      <div className="social_media">
                    
                        <div className="icon_box">
                          <FaFacebook className="facebook" />
                        </div>
                        <div className="icon_box">
                          <CiTwitter className="twitter" />
                        </div>
                        <div className="icon_box">
                          <FaInstagramSquare  className="instagram"/>
                        </div>
                        <div className="icon_box">
                          <FaYoutube className="youtube" />
                        </div>
                        
                        </div>       
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='banners'>
          <div className='container'>
            <div className='left_box' data-aos ="fade-left">
              <div className='box'>
                <img src='image/Multi-Banner-1.avif' alt='banner'></img>
              </div>
              <div className='box'>
                <img src='image/Multi-Banner-2.avif' alt='banner' className="banner-2"></img>
              </div>
            </div>
            <div className='right_box' data-aos ="fade-right">
              <div className='top'>
                <img src='image/Multi-Banner-3.webp' alt='' data-aos ="fade-left"></img>
                <img src='image/Multi-Banner-4.avif' alt=''></img>
              </div>
              <div className='bottom'>
                <img src='image/Multi-Banner-5.webp' alt=''></img>
              </div>
            </div>
          </div>
        </div>
        <div className='product_type'>
          <div className="container">
            <div className="box" data-aos="fade-left">
              <div className="header">
                <h2>New Product</h2>
                {
                  newProduct.map((product)=>{
                    return(
                      <>
                      <div className='productbox'>
                        <div className='img-box'>
                          <img src={product.image} alt=''></img>
                        </div>
                        <div className='detail'>
                          <h3>{product.Name}</h3>
                          <p>$ {product.price}</p>
                          <div className='icon'>
                            <button><AiFillEye /></button>
                            <button><AiFillHeart /></button>
                            <button ><AiOutlineShoppingCart /></button>
                          </div>
                        </div>
                      </div>
                      </>
                    )
                  })
                }
              </div>
            </div>
            <div className="box" data-aos="fade-up">
              <div className="header">
                <h2>Featured</h2>
                {
                  featureProduct.map((product)=>{
                    return(
                      <>
                      <div className='productbox'>
                        <div className='img-box'>
                          <img src={product.image} alt=''></img>
                        </div>
                        <div className='detail'>
                          <h3>{product.Name}</h3>
                          <p>$ {product.price}</p>
                          <div className='icon'>
                            <button><AiFillEye /></button>
                            <button><AiFillHeart /></button>
                            <button ><AiOutlineShoppingCart onClick={()=>addCart(product)}/></button>
                          </div>
                        </div>
                      </div>
                      </>
                    )
                  })
                }
              </div>
            </div>
            <div className="box" data-aos="fade-right">
              <div className="header">
                <h2>Top Selling</h2>
                {
                  topProduct.map((product)=>{
                    return(
                      <>
                      <div className='productbox'>
                        <div className='img-box'>
                          <img src={product.image} alt=''></img>
                        </div>
                        <div className='detail'>
                          <h3>{product.Name}</h3>
                          <p>$ {product.price}</p>
                          <div className='icon'>
                            <button><AiFillEye /></button>
                            <button><AiFillHeart /></button>
                            <button ><AiOutlineShoppingCart /></button>
                          </div>
                        </div>
                      </div>
                      </>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
