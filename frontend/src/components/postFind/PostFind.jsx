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




const mockPosts = [
    { id: 1, tag: 'acuarela', pic: imageP1, username: 'lara.tobala', userPic:user1 , likes: 2, description: 'Me gusta el arte'  },
    { id: 2, tag: 'acuarela', pic: imageP6, username: 'ailin.mocha', userPic:user2 , likes: 1, description: 'Mi obra de arte' },
    { id: 3, tag: 'acuarela', pic: imageP7, username: 'lara.tobala', userPic:user1 , likes: 7, description: 'Saludos' },
    { id: 4, tag: 'pastel', pic: pastel1, username: 'ailin.mocha', userPic:user2 , likes: 2, description: 'Hola'},
    { id: 5, tag: 'acuarela', pic: imageP20, username: 'lara.tobala', userPic:user1 , likes: 2, description: 'Probando colores'},
    { id: 6, tag: 'acuarela', pic: imageP18, username: 'ailin.mocha', userPic:user2 , likes: 2, description: 'Probando texturas' },
    { id: 7, tag: 'acuarela', pic: imageP16, username: 'lara.tobala', userPic:user1 , likes: 3, description: 'A veces armo cosas' },
    { id: 8, tag: 'acuarela', pic: imageP14, username: 'lara.tobala', userPic:user1 , likes: 20, description: 'Todo tipo de arte' },
    { id: 9, tag: 'acuarela', pic: imageP13, username: 'lara.tobala', userPic:user1 , likes: 2 },
    { id: 10, tag: 'acuarela', pic: imageP12, username: 'lara.tobala', userPic:user1 , likes: 15 },
    { id: 11, tag: 'acuarela', pic: imageP21, username: 'lara.tobala', userPic:user1 , likes: 2 },
    { id: 12, tag: 'acuarela', pic: imageP7, username: 'lara.tobala', userPic:user1 , likes: 2 },
    { id: 13, tag: 'acuarela', pic: imageP12, username: 'lara.tobala', userPic:user1 , likes: 3, },
    { id: 14, tag: 'acuarela', pic: imageP7, username: 'ailin.mocha', userPic:user2 , likes: 2},
    { id: 15, tag: 'acuarela', pic: imageP7, username: 'ailin.mocha', userPic:user2 , likes: 4},
    { id: 16, tag: 'acuarela', pic: imageP7, username: 'ailin.mocha', userPic:user2 , likes: 2},
  ];





export const PostFind = () => {


    const [postFound, setPostFound] = useState([]);

    const { postId } = useParams()



    const fetchPosts = useCallback(
        debounce((searchQuery) => {
          // Simular la búsqueda de etiquetas
          const filteredPosts = mockPosts.filter(p => p.id == postId);          
          setPostFound(filteredPosts);
        }, 300), []
      );
    
      useEffect(() => {
        if (postId) {
          fetchPosts(postId);
        } else {
          setTags([]);
        }
      }, [postId]);


console.log(postFound)

    return (
        <section className='Home'>

            {postFound.map((p) => (
                    <div key={p.id}>
                        <div className="pic-username py-3 px-4 flex gap-3 items-center">
                            <div className="para-recortar-foto w-[44px] h-[44px] overflow-hidden rounded-full">
                                <img className="w-full h-full object-cover" src={p.userPic} alt="Round Profile Picture Png, Transparent Png@kindpng.com"/>
                                </div>
                            <p className="font-semibold text-xs">{p.username}</p>
                        </div>
                        <div className="post-image w-[375px] h-[375px] overflow-hidden">
                            <img src={p.pic} alt="image post" className="w-full h-full object-cover"/>  
                        </div>
                        <div className="likes-comments py-3 px-4 flex flex-col gap-1.5 items-start">
                            <div className="fav-comment-icons flex gap-4 items-center">
                                <button className="fav text-red-700"><FaHeart/></button>
                                <button className="comment"><BiMessage/></button>
                            </div>
                            <p className="text-xxs">{p.likes} likes</p>
                            <div className="comments">
                                <p className="text-xxs leading-custom"><strong className="mr-1">{p.username}</strong>{p.description}</p>
                                
                            </div>                
                        </div>
                    </div>
            ))}
            
            
            
            
        </section>
    )
  }