import React from "react";
import user1 from '../../assets/user1.jpg'
import user2 from '../../assets/user2.jpg'
import imagePost from '../../assets/imagePost.jpg'
import { useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect, useCallback } from "react";
import { PostConTexto } from "../postConTexto/PostConTexto";
import { urlBase } from "../../constants/urlBase";



export const Notifications = () => {
  /* const [likesCommentsOrFollowes, setLikesCommentsOrFollowers] = useState('likes'); */
  const [likes, setLikes] = useState([])
  


  let navigate = useNavigate();



  useEffect(()=>{
    fetch(`${urlBase}/api/v1/posts/like`,{
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json'
        }
    })
    .then((data)=> data.json()            
    )
    .then(data => {
        setLikes(data.data)
        const token = localStorage.getItem('token')            
        if (!token){            
        navigate('/login')
        }
    })
}, [navigate])


const handleVisitFriend = (id) => {
  navigate(`/find/account/${id}`)
}



  /* const mockAccounts = [
    { id: 1, username: 'user1', nombre: 'Maria Her', pic: user1 },
    { id: 2, username: 'user2', nombre: 'Lara Dumont', pic: user2 },    
  ]; */

  /* const likes = [
    { id: 1, username: 'user1',  userpic: user1, postPic: imagePost },
    { id: 2, username: 'user2', userpic: user2, postPic: imagePost },    
  ]; */

  /* const comments = [
    { id: 1, username: 'user1',  userpic: user1, postPic: imagePost, content: 'Que hermoso!' },
    { id: 2, username: 'user2', userpic: user2, postPic: imagePost, content: 'Como se llama la técnica?' },    
  ];

  //falta completar
  const followers = [
    { id: 1, username: 'user1',  userpic: user1, postPic: imagePost, content: 'Que hermoso!' },
    { id: 2, username: 'user2', userpic: user2, postPic: imagePost, content: 'Como se llama la técnica?' },    
  ]; */


  


  

  //cambio de pestaña
  /* const handleLikesTab = () => {
    setLikesCommentsOrFollowers('likes');
  };   */
  /* const handleCommentsTab = () => {
    setLikesCommentsOrFollowers('comments');
  };
  const handleFollowersTab = () => {
    setLikesCommentsOrFollowers('followers');
  }; */





  return (
      <section className='notifications'>
        {/* BARRA PESTAÑAS */}
        <div className=" bg-custom-gray-10 flex items-start gap-10 px-4 pb-1 shadow-up-dark-md">
          <div className='border-b-4 pt-4 pb-3'>
            <button /* onClick={handleLikesTab} */>
              <h4 className="font-semibold">Likes</h4>
            </button>
            
          </div>
        {/*   <div className={`border-b-4 pt-4 pb-3 ${likesCommentsOrFollowes === 'comments' ? 'border-primario' : 'border-none'}`}>
            <button onClick={handleCommentsTab}>
                <h4 className="font-semibold">Comentarios</h4>
            </button>            
          </div>
          <div className={`border-b-4 pt-4 pb-3 ${likesCommentsOrFollowes === 'followers' ? 'border-primario' : 'border-none'}`}>
            <button onClick={handleFollowersTab}>
                <h4 className="font-semibold">Seguidores</h4>
            </button>
          </div> */}
        </div>


        {/* CONTENIDO */}
        <div className="shadow-up-dark-md">
          {/* <h2 className="py-2 px-4 font-semibold text-lg">Hoy</h2> */}
          
          <div>
            {likes.map((likeElement) => (
              <div key={likeElement.id} className="fila-usuario1 py-2 px-4 flex justify-between items-center">
                <div onClick={() =>handleVisitFriend(likeElement.likeUserId)} className="profilepic-nombre flex gap-2 items-center">
                  <div className="para-recortar-foto w-[44px] h-[44px] overflow-hidden rounded-full">
                      <img  className='w-full h-full object-cover' src={likeElement.likeUserProfilePic} alt="" />
                  </div>
                  <p className="font-semibold text-sm">{likeElement.likeUserUsername}</p>
                </div>
                <div className="w-[44px] h-[44px] rounded-lg overflow-hidden">
                    {likeElement.imageUrl? 
                        <img src={likeElement.imageUrl} alt="image post" className="w-[44px] h-[44px] overflow-hidden rounded-lg"/>
                        : <PostConTexto colorSeleccionado={likeElement.backgroundColor} changeAlign={likeElement.fontAlign} fontChange={likeElement.fontFamily} changeSize={likeElement.fontSize} colorSeleccionadoTexto={likeElement.textColor} write={false} valueTextarea={likeElement.content} notifications/>
                        }
                </div>               
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}