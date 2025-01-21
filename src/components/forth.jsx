import React from 'react'
import './forth.css'
import img1 from '../assests/f-1.jpg'
import img2 from '../assests/f-2.jpg'
import img3 from '../assests/f-3.jpg'
import { FaCircleDot } from 'react-icons/fa6'

export default function Forth() {
  return (
   <>
   <div className="forth">
    <div className="forth-child">
    <img src={img1} alt="" className='f-img1' />
    <img src={img2} className='f-img2' alt="" />
    <img src={img3}  className='f-img3'alt="" />
    </div>

   <div className="forth-child-2">
    <b>We Help You Make Modern Interior Design</b>
    <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada</p>
    <div className="F-Flex">
      <div className="F-Flex-child">
      <div><FaCircleDot size={'8px'}/> Donec vitae odio quis nisl dapibus malesuada</div>
      <div><FaCircleDot size={'8px'}/> Donec vitae odio quis nisl dapibus malesuada</div>
      <button>Explore</button>
      </div>
      <div className="F-Flex-child">
      <div><FaCircleDot  size={'8px'} /> Donec vitae odio quis nisl dapibus malesuada</div>
      <div><FaCircleDot  size={'8px'} /> Donec vitae odio quis nisl dapibus malesuada</div>
      
      </div>
    </div>
</div>
</div>
   </>
  )
}
