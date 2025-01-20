import React from 'react';
import './second.css'
import product1 from '../assests/p-1.png'
import product2 from '../assests/p-2.png'
import product3 from '../assests/p-3.png'

const Second = ( ) => {
    return(
        <>
        <section className='two'>
            <div className="sec-parent">
                <div className='two-text'>
                    <b>Crafted with excellent material.</b>
                    <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
                    <button>Explore</button>
                </div>
                <div className='s-img'><img src={product1} alt="" /><p>Nordic Chair</p><p>$50.00</p></div>
                <div className='s-img'><img src={product2} alt="" /><p>Kruzo Aero Chair</p><p>$78.00</p></div>
                <div className='s-img'><img src={product3} alt="" /><p>Ergonomic Chair</p><p>$43.00</p></div>
            </div>
        </section>
        </>
    )
}
export default Second;