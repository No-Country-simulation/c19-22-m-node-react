import React from "react";
import user1 from '../../assets/user1.jpg'
import user2 from '../../assets/user2.jpg'
import imagePost from '../../assets/imagePost.jpg'
import imageP6 from '../../assets/imageP6.jpg'
import imageP7 from '../../assets/imageP7.jpg'

import { useNavigate } from 'react-router-dom';
import { useRef, useEffect } from "react";




export const ResultsGrid = () => {





  return (
      <section className='find accounts'>
        <div className='grid-results grid grid-cols-3 overflow-hidden'>            
                <img className="w-full h-full aspect-square object-cover object-center" src={imagePost} alt="" />
                <img className="w-full h-full  aspect-square object-cover object-center" src={user1} alt="" />
                <img className="w-full h-full  aspect-square object-cover object-center" src={imageP7} alt="" />
                <img className="w-full h-full  aspect-square object-cover object-center" src={imageP6} alt="" />
                <img className="w-full h-full  aspect-square object-cover object-center" src={user1} alt="" />
                <img className="w-full h-full  aspect-square object-cover object-center" src={user2} alt="" />
                <img className="w-full h-full  aspect-square object-cover object-center" src={imagePost} alt="" />
                <img className="w-full h-full  aspect-square object-cover object-center" src={imageP7} alt="" />
                <img className="w-full h-full  aspect-square object-cover object-center" src={imageP6} alt="" />
                <img className="w-full h-full  aspect-square object-cover object-center" src={imagePost} alt="" />
                <img className="w-full h-full  aspect-square object-cover object-center" src={user1} alt="" />
                <img className="w-full h-full  aspect-square object-cover object-center" src={user2} alt="" />
                <img className="w-full h-full  aspect-square object-cover object-center" src={imagePost} alt="" />
                <img className="w-full h-full  aspect-square object-cover object-center" src={user1} alt="" />
                <img className="w-full h-full  aspect-square object-cover object-center" src={user2} alt="" />
            
                
        
        </div>
      </section>
  )
}