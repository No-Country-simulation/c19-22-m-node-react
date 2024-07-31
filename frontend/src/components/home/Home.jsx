import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"

import user1 from '../../assets/user1.jpg'
import user2 from '../../assets/user2.jpg'
import imagePost from '../../assets/imagePost.jpg'
import imageP6 from '../../assets/imageP6.jpg';
import imageP7 from '../../assets/imageP7.jpg';
import pastel1 from '../../assets/pastel1.jpg'
import { HeartFilledIcon } from "../icons/HeartFilledIcon";
import { HeartOutlineIcon } from "../icons/HeartOutlineIcon";
import { CommentsIcon } from "../icons/CommentsIcon";

import { PostConTexto } from "../postConTexto/PostConTexto";
import { urlBase } from "../../constants/urlBase";

/* const mockPosts = [
    { id: 1, tag: 'acuarela', imageUrl: imagePost, username: 'lara.tobala', userProfilePic:user1 , likes: 1, description: 'Me gusta el arte' },
    { id: 2, tag: 'acuarela', imageUrl: imageP6, username: 'melany.hamilton', userProfilePic:user2 , likes: 10, description: 'Me gusta pintar con acuarela' },  
    { id: 3, tag: 'pintura', imageUrl: imageP7, username: 'melany.hamilton', userProfilePic:user2 , likes: 5, description: 'Entrenando mi técnica con pintura' },
    { id: 4, tag: 'pastel', imageUrl: pastel1, username: 'lara.tobala', userProfilePic:user1 , likes: 0, description: 'Mi primer trabajo con pastel' } 
] */




export const Home = () => {

    const [postHome, setPostHome] = useState([])

    const navigate = useNavigate()
    

    useEffect(()=>{
        fetch(`${urlBase}/api/v1/posts/home`,{
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            }
        })
        .then((data)=> data.json()            
        )
        .then(data => {
            setPostHome(data.data)
            const token = localStorage.getItem('token')            
            if (!token){            
            navigate('/login')
            }
        })
    }, [navigate])


    

    const darLike = (id) => {
        fetch(`${urlBase}/api/v1/posts/like/${id}`,
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
            fetch(`${urlBase}/api/v1/posts/home`,{
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
                }
            })
            .then((data)=> data.json()            
            )
            .then(data => {
                setPostHome(data.data)
                const token = localStorage.getItem('token')            
                if (!token){            
                navigate('/login')
                }
            })
        })
    }


    const deleteLike = (id) => {
        fetch(`${urlBase}/api/v1/posts/like/${id}`,
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
            fetch(`${urlBase}/api/v1/posts/home`,{
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
                }
            })
            .then((data)=> data.json()            
            )
            .then(data => {
                setPostHome(data.data)
                const token = localStorage.getItem('token')            
                if (!token){            
                navigate('/login')
                }
            })
        })
    }

    


    return (
        <section className='Home'>
            {postHome?.map((post) => (
                <div key={post.id} className="post pb-6">
                    <div className="pic-username py-3 px-4 flex gap-3 items-center">
                    <div className="para-recortar-foto w-[44px] h-[44px] overflow-hidden rounded-full">
                        <img className="w-full h-full object-cover" src={post.userProfilePic} alt="Round Profile Picture Png, Transparent Png@kindpng.com"/>
                    </div>
                        <p className="font-semibold text-xs">{post.username}</p>
                    </div>
                    <div className="post-image w-[375px] h-[375px] overflow-hidden">
                        {/* <img src={post.imageUrl} alt="image post" className="w-full h-full object-cover"/> */}                            
                        {post.imageUrl? 
                        <img onClick={() => {}} className="w-full h-full aspect-square object-cover object-center" src={post.imageUrl} alt="" />
                        : <PostConTexto onClick={() => {}} profile colorSeleccionado={post.backgroundColor} changeAlign={post.fontAlign} fontChange={post.fontFamily} changeSize={post.fontSize} colorSeleccionadoTexto={post.textColor} write={false} valueTextarea={post.content}/>
                        }                        
                    </div>
                    <div className="likes-comments py-3 px-4 flex flex-col gap-1.5 items-start">
                        <div className="fav-comment-icons flex gap-4 items-center">
                            {post.isLikedByCurrentUser? 
                            <button onClick={()=>deleteLike(post.id)} className="fav"><HeartFilledIcon/></button>
                            :<button onClick={()=>darLike(post.id)} className="fav"><HeartOutlineIcon/></button>
                            }
                            <button className="comment"><CommentsIcon/></button>
                        </div>
                        <p className="text-xxs">
                            {post.likes} {post.likes === 1 ? 'like' : 'likes'}
                        </p>
                        <div className="comments">
                            <p className="text-xxs leading-custom"><strong className="mr-1">{post.username}</strong>{post.description}</p>
                            {/* <p className="text-xxs leading-custom"><strong className="mr-1">tolaba.abel</strong>Hermosa combinación! De qué marca son?</p> */}
                        </div>                
                    </div>
                </div>
                
                        
            ))}
                        
        </section>
    )
  }