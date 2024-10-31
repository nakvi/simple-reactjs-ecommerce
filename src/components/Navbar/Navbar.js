import React from "react";
import "./Navbar.css";
import { useAuth0 } from "@auth0/auth0-react";
import { MdLocalShipping } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { IoMdLogIn } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { useNavigate } from 'react-router-dom'; 


const Navabr = ({search,setSearch,searchProduct,cart}) => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  const navigate = useNavigate(); // Initialize navigate
  const itemCount = cart.reduce((total, item) => total + item.qty, 0);


  return (
    <>
      <div className="header">
        <div className="top_header">
          <div className="icon" id="shiiping">
            <MdLocalShipping />
          </div>
          <div className="info" id="shiiping">
            <p>Free shipping on orders over $100</p>
          </div>
          <div className="right-section">
            <div className="icon">
              <MdEmail />
            </div>
            <div className="info">
              <p>dummy@gmail.com</p>
            </div>
            <div className="icon">
              <FaPhoneVolume />
            </div>
            <div className="info">
              <p>+92-3212019999</p>
            </div>
          </div>
        </div>
        <div className="mid_header">
          <div className="logo">
            <img src="image/logo.webp" alt="logo" />
          </div>
          <div className="search_box">
            <input type="text" placeholder="Search for products..." value={search}
            onChange={(e) =>setSearch(e.target.value)}
            />
            <button  onClick={searchProduct}>
              <FaSearch />
            </button>
          </div>
          {isAuthenticated ? (
            <div className="user">
              <div className="icon">
                <CiLogout />
              </div>
              <div className="btn">
                <button
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                >
                  Log Out
                </button>
              </div>
            </div>
          ) : (
            <div className="user">
              <div className="icon">
                <IoMdLogIn />
              </div>
              <div className="btn">
                <button onClick={() => loginWithRedirect()}>Login</button>
              </div>
            </div>
          )}
        </div>
        <div className="last_header">
          <div className="userInfo">
            {isAuthenticated ? (
              <>
              <p>Welcome!</p>
                <h3>{user.name}</h3>
                
              </>
            ) : (
              ""
            )}
          </div>

          <div className="nav">
            <ul>
              <li>
                <Link to="/" className="link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="link">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/about" className="link">
                  About 
                </Link>
              </li>
              <li>
                <Link to="/contact" className="link">
                  Contact 
                </Link>
              </li>
            
            </ul>
          </div>
          <div className="cart">
            <div className="icon">
              <FaCartArrowDown  onClick={() => navigate('/cart')}/>
            </div>
            <div className="btn">
            <button onClick={() => navigate('/cart')}>Cart ({itemCount})</button> 
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navabr;
