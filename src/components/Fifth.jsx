import React from 'react';
import './fifth.css';
import img1 from '../assests/fifth-1.png'
import img2 from '../assests/fifth-2.png'
import img3 from '../assests/fifth-3.png'


export default function Fifth() {
  return (
    <>
    <div className="fifth-sec">
        <div className="fifth-child">
            <span>
            <img src={img1} alt="" /></span>
            <div>
            <b>Nordic Chair</b>
            <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio</p>
            </div>
        </div>
        <div className="fifth-child">
            <span>
            <img src={img2} alt="" /></span>
            <div className="">
            <b>Kruzo Aero Chair</b>
            <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio</p>
            </div></div>
        <div className="fifth-child">
            <span>
            <img src={img3} alt="" /></span>
            <div className="">
            <b>Ergonomic Chair</b>
            <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio</p>
            </div></div>
    </div>
    </>
)
}
