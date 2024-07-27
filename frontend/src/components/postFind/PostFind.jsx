import React from "react";

import { FaHeart } from "react-icons/fa"
import { BiMessage } from "react-icons/bi"

import { useNavigate, useParams } from 'react-router-dom';
import { useState, useRef, useEffect, useCallback } from "react";
import user1 from '../../assets/user1.jpg'
import user2 from '../../assets/user2.jpg'

import debounce from 'lodash/debounce';


import imageP1 from '../../assets/imagePost.jpg';
import imageP6 from '../../assets/imageP6.jpg';
import imageP7 from '../../assets/imageP7.jpg';
import pastel1 from '../../assets/pastel1.jpg'
import imageP20 from '../../assets/imageP20.jpg';
import imageP18 from '../../assets/imageP18.jpg';
import imageP16 from '../../assets/imageP16.jpg';
import imageP14 from '../../assets/imageP14.jpg';
import imageP13 from '../../assets/imageP13.jpg';
import imageP12 from '../../assets/imageP12.jpg';
import imageP21 from '../../assets/imageP21.jpg';




const mockPosts = 
    { id: 1, tag: 'acuarela', pic: imageP1, username: 'lara.tobala', userPic:user1 , likes: 2, description: 'Me gusta' }  
  





export const PostFind = () => {


    const [postFound, setPostFound] = useState({});

    const { postId } = useParams()



    const fetchPosts = () => {
      setPostFound(mockPosts);
    }
          
                 
          
        
      
    
      useEffect(() => {
        if (postId) {
          fetchPosts(postId);
        } 
        
      }, [postId]);


console.log(postFound)

    return (
        <section className='Home'>

            
                    <div key={postFound.id}>
                        <div className="pic-username py-3 px-4 flex gap-3 items-center">
                            <div className="para-recortar-foto w-[44px] h-[44px] overflow-hidden rounded-full">
                                <img className="w-full h-full object-cover" src={postFound.userPic} alt="Round Profile Picture Png, Transparent Png@kindpng.com"/>
                                </div>
                            <p className="font-semibold text-xs">{postFound.username}</p>
                        </div>
                        <div className="post-image w-[375px] h-[375px] overflow-hidden">
                            <img src={postFound.pic} alt="image post" className="w-full h-full object-cover"/>  
                        </div>
                        <div className="likes-comments py-3 px-4 flex flex-col gap-1.5 items-start">
                            <div className="fav-comment-icons flex gap-4 items-center">
                                <button className="fav text-red-700"><FaHeart/></button>
                                <button className="comment"><BiMessage/></button>
                            </div>
                            <p className="text-xxs">{postFound.likes} likes</p>
                            <div className="comments">
                                <p className="text-xxs leading-custom"><strong className="mr-1">{postFound.username}</strong>{postFound.description}</p>
                                
                            </div>                
                        </div>
                    </div>
            
            
            
            
            
        </section>
    )
  }