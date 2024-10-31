import React from 'react';
import "./Footer.css";
import { FaPiggyBank, FaShippingFast, FaHeadphonesAlt, FaWallet} from 'react-icons/fa';


export default function Footer() {
  return (
   <>
   <div className='footer'>
    <div className='container'>
      <div className='left-box'>
        <div className='box'>
          <div className='icon-box'>
          <FaPiggyBank />
          </div>
          <div className='details'>
            <h3>Graet Saving</h3>
            <p>lopesum data is here</p>
          </div>
        </div>
        <div className='box'>
          <div className='icon-box'>
          <FaShippingFast />
          </div>
          <div className='details'>
            <h3>Free Delivery</h3>
            <p>Provide Free Delivery</p>
          </div>
        </div>
        <div className='box'>
          <div className='icon-box'>
          <FaHeadphonesAlt />
          </div>
          <div className='details'>
            <h3>24x7 Support</h3>
            <p>We Provide 24 Support</p>
          </div>
        </div>
        <div className='box'>
          <div className='icon-box'>
          <FaWallet />
          </div>
          <div className='details'>
            <h3>Money Back</h3>
            <p>Money Back is Gurantee</p>
          </div>
        </div>
      </div>
      <div className='right-box'>
          <div className='top'>
            <div className='logo'>
            <img src="image/logo.webp" alt="logo" />
            </div>
          </div>
          <div className='center'>
            <div className='para'>
              <p>lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel libero id ligula semper scelerisque. Sed ac velit vel lectus tristique convallis vel vel nunc.</p>
            </div>
          </div>
          <div className='bottom'>
            <div className='heading'>
              <h3>Your Account</h3>
              <div className='list'>
              <ul>
                  <li>Category 1</li>
                  <li>Category 2</li>
                  <li>Category 3</li>
                  <li>Category 4</li>
                  <li>Category 5</li>
                </ul>
              </div>
            </div>
            <div className='heading'>
              <h3>Products</h3>
              <div className='list'>
                <ul>
                  <li>Category 1</li>
                  <li>Category 2</li>
                  <li>Category 3</li>
                  <li>Category 4</li>
                  <li>Category 5</li>
                </ul>
              </div>
            </div>
            <div className='heading'>
              <h3>Contact Us</h3>
              <div className='list'>
              <ul>
                  <li>Category 1</li>
                  <li>Category 2</li>
                  <li>Category 3</li>
                  <li>Category 4</li>
                  <li>Category 5</li>
                </ul>
              </div>
            </div>
          </div>
      </div>
    </div>
    <div className='copyright'>
          <p>Copyright © 2024. All Rights Reserved.</p>
        </div>
   </div>
   </>
  )
}
