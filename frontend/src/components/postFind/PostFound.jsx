/* import React from "react"; */

import { HeartOutlineIcon } from "../icons/HeartOutlineIcon";
import { HeartFilledIcon } from "../icons/HeartFilledIcon";
import { CommentsIcon } from "../icons/CommentsIcon";

import { useParams } from 'react-router-dom';
import { useState, useEffect, } from "react";
/* import user1 from '../../assets/user1.jpg' */






import { PostConTexto } from "../postConTexto/PostConTexto";




/* const mockPosts = 
    { id: 1, pic: null, username: 'lara.tobala', userPic:user1 , likes: 2, description: 'Me gusta', content: 'Hola probando texto', backgroundColor: '#000000', textColor: '#712F8E', fontSize: 'lg', fontFamily: 'playfair', fontAlign: 'left' }   */
  


export const PostFound = () => {


    const [postFound, setPostFound] = useState({});
    const { postId } = useParams()



  useEffect(()=>{
    fetch(`http://viaduct.proxy.rlwy.net:25260/api/v1/posts/${postId}`,{
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json'
        }
    })
    .then((data)=> data.json())
    .then(data => setPostFound(data.data))
}, [])




const darLike = () => {
    fetch(`http://viaduct.proxy.rlwy.net:25260/api/v1/posts/like/${postId}`,
        {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: `Bearer ${localStorage.getItem('token')}`
            }                
        }
    )
    .then(data => data.json())
    .then((data)=> {
        console.log(data)
        fetch(`http://viaduct.proxy.rlwy.net:25260/api/v1/posts/${postId}`,{
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            }
        })
        .then((data)=> data.json())
        .then(data => setPostFound(data.data))
    })
}


const deleteLike = () => {
    fetch(`http://viaduct.proxy.rlwy.net:25260/api/v1/posts/like/${postId}`,
        {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: `Bearer ${localStorage.getItem('token')}`
            }                
        }
    )
    .then(data => data.json())
    .then((data)=> {
        console.log(data)
        fetch(`http://viaduct.proxy.rlwy.net:25260/api/v1/posts/${postId}`,{
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            }
        })
        .then((data)=> data.json())
        .then(data => setPostFound(data.data))
    })
}






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
                    {postFound.pic? 
                        <img src={postFound.pic} alt="image post" className="w-full h-full object-cover"/>
                    : <PostConTexto colorSeleccionado={postFound.backgroundColor} changeAlign={postFound.fontAlign} fontChange={postFound.fontFamily} changeSize={postFound.fontSize} colorSeleccionadoTexto={postFound.textColor} write={false} valueTextarea={postFound.content}/>
                    }  
                </div>
                <div className="likes-comments py-3 px-4 flex flex-col gap-1.5 items-start">
                    <div className="fav-comment-icons flex gap-4 items-center">
                           {postFound.isLikedByCurrentUser? 
                            <button onClick={deleteLike} className="fav"><HeartFilledIcon/></button>
                            :<button onClick={darLike} className="fav"><HeartOutlineIcon/></button>
                            }
                        <button className="comment"><CommentsIcon/></button>
                    </div>
                    <p className="text-xxs">
                            {postFound.likes} {postFound.likes === 1 ? 'like' : 'likes'}
                        </p>
                    <div className="comments">
                        <p className="text-xxs leading-custom"><strong className="mr-1">{postFound.username}</strong>{postFound.description}</p>                                
                    </div>                
                </div>
            </div>
        </section>
    )
  }