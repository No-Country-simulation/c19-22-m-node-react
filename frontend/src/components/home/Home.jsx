import React from "react";

import { FaHeart } from "react-icons/fa"
import { BiMessage } from "react-icons/bi"
import imagePost from '../../assets/imagePost.jpg'


export const Home = () => {
    return (
        <section className='Home'>
            <div className="pic-username py-3 px-4 flex gap-3 items-center">
                <img className="w-10" src="https://www.kindpng.com/picc/m/394-3947019_round-profile-picture-png-transparent-png.png" alt="Round Profile Picture Png, Transparent Png@kindpng.com"/>
                <p className="font-semibold text-xs">lara.molina</p>
            </div>
            <div className="post-image">
                <img src={imagePost} alt="image post"/>  
            </div>
            <div className="likes-comments py-3 px-4 flex flex-col gap-1.5 items-start">
                <div className="fav-comment-icons flex gap-4 items-center">
                    <button className="fav text-red-700"><FaHeart/></button>
                    <button className="comment"><BiMessage/></button>
                </div>
                <p className="text-xxs">20 likes</p>
                <div className="comments">
                    <p className="text-xxs leading-custom"><strong className="mr-1">lara.molina</strong>Probando tintes y transparencias</p>
                    <p className="text-xxs leading-custom"><strong className="mr-1">tolaba.abel</strong>Hermosa combinación! De qué marca son?</p>
                </div>
                
            </div>            
        </section>
    )
  }