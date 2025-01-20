import './main.css';
import React from 'react'
import sofa from '../assests/couch.png'
import { FaRegUser, FaShoppingCart } from "react-icons/fa";

export default function Main() {
    return (
        <>
            <div className="container">
                <nav>
                    <h1>Furni</h1>
                    <ul>
                        <li className='hover' ><a href="#">Home</a></li>
                        <li className='hover'><a href="#">Shop</a></li>
                        <li className='hover'><a href="#">About us</a></li>
                        <li className='hover'><a href="#">Services</a></li>
                        <li><FaRegUser color='white' size={'20'} /></li>
                        <li><FaShoppingCart color='white' size={'20'} /></li>
                    </ul>
                </nav>
                <div className="child">
                    <div className="one">
                        <b>Modern Interior Design Studio</b>
                        <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
                             Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
                        <button>Shop Now</button>
                        <button className='explore'>Explore</button>
                    </div>
                    <div className="two">
                        <img src={sofa} align="right" alt="not loaded" />
                    </div>

                </div>
            </div>
        </>

    )
}
