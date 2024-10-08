import './postFound.css'

import { HeartOutlineIcon } from "../icons/HeartOutlineIcon";
import { HeartFilledIcon } from "../icons/HeartFilledIcon";
import { CommentsIcon } from "../icons/CommentsIcon";
import { useParams } from 'react-router-dom';
import { useState, useEffect, } from "react";
import { PostConTexto } from "../postConTexto/PostConTexto";
import { urlBase } from "../../constants/urlBase";





export const PostFound = () => {


    const [postFound, setPostFound] = useState({});
    const [loading, setLoading] = useState(true);
    const { postId } = useParams()



  useEffect(()=>{
    fetch(`${urlBase}/api/v1/posts/${postId}`,{
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json'
        }
    })
    .then((data)=> data.json())
    .then(data => {
        setPostFound(data.data)
        setLoading(false);
    })
}, [])




const darLike = () => {
    fetch(`${urlBase}/api/v1/posts/like/${postId}`,
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
        fetch(`${urlBase}/api/v1/posts/${postId}`,{
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
    fetch(`${urlBase}/api/v1/posts/like/${postId}`,
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
        fetch(`${urlBase}/api/v1/posts/${postId}`,{
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


if (loading) {
    return (
      <section className='profile pt-11'>
        <div className="flex justify-center">
          <svg className="spinner" viewBox="25 25 50 50">
            <circle r="20" cy="50" cx="50"></circle>
          </svg>
        </div>
      </section>)
  }



  console.log('postFount.content', postFound.content)
    return (
        <section className='Home'>            
            <div key={postFound.id}>
                <div className="pic_and_username py-3 px-4 flex gap-3 items-center">
                    <div className="pic_circle w-[44px] h-[44px] overflow-hidden rounded-full">
                        <img className="w-full h-full object-cover" src={postFound.userPic} alt="Round Profile Picture Png, Transparent Png@kindpng.com"/>
                    </div>
                    <p className="font-semibold text-xs">{postFound.username}</p>
                </div>
                <div className="post_image mx-auto h-[375px] w-[375px] max-w-full box-border overflow-hidden">
                    {postFound.pic? 
                        <img src={postFound.pic} alt="image post" className="w-full h-full object-cover"/>
                    : <PostConTexto colorSeleccionado={postFound.backgroundColor} changeAlign={postFound.fontAlign} fontChange={postFound.fontFamily} changeSize={postFound.fontSize} colorSeleccionadoTexto={postFound.textColor} write={false} valueTextarea={postFound.content} homeAndPost/>
                    }  
                </div>
                <div className="likes-comments py-3 px-4 flex flex-col gap-1.5 items-start">
                    <div className="fav-comment-icons flex gap-4 items-center">
                           {postFound.isLikedByCurrentUser? 
                            <button onClick={deleteLike} className="fav text-red-600"><HeartFilledIcon/></button>
                            :<button onClick={darLike} className="fav"><HeartOutlineIcon/></button>
                            }
                        <button className="comment"><CommentsIcon/></button>
                    </div>
                    <p className="text-xxs">
                            {postFound.likes} {postFound.likes === 1 ? 'like' : 'likes'}
                    </p>                                   
                    <div className="post_description mb-4">
                        <p className="text-xxs mb-4"><strong className="mr-1">{postFound.username}</strong>{postFound.description}</p>                                
                    </div>                
                </div>
            </div>
        </section>
    )
  }