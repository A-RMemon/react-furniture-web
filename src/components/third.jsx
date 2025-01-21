import React from 'react';
import './third.css'
import img1 from '../assests/third-sec.jpg'
import { FaTruck } from 'react-icons/fa';
import { GrServices } from "react-icons/gr";
import { MdShoppingBag } from "react-icons/md";
import { FaArrowsTurnToDots } from 'react-icons/fa6';
export default function Third() {
  return (
    <>

      <div className="third">
        <div className="th-child">
          <b>Why Choose Us</b>
          <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>

          <div className='th-B-Flex'>
            <div className="third-boxes">
              <div>
              <FaTruck size={30}/>
                <h4>Fast & Free Shipping</h4>
                <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
              </div>
              <div>
                <GrServices size={30}/>
                <h4>24/7 Support</h4>
                <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
              </div>
            </div>
          
          <div className="third-boxes">
            <div>
              < MdShoppingBag size={30} />
              <h4>
                Easy to Shop</h4>
              <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
            </div>
            <div>
            <FaArrowsTurnToDots  size={30}/>

              <h4>Hassle Free Returns</h4>
              <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
            </div>
          </div>
        </div>
        </div>
        <div className="th-img-div">
          <img src={img1} alt="" />

        </div>
      </div>

    </>

  )
}
