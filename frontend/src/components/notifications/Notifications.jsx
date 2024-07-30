import React from "react";
import user1 from '../../assets/user1.jpg'
import user2 from '../../assets/user2.jpg'
import imagePost from '../../assets/imagePost.jpg'
import { useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect, useCallback } from "react";




export const Notifications = () => {
  const [likesCommentsOrFollowes, setLikesCommentsOrFollowers] = useState('likes');
  /* const [query, setQuery] = useState(''); */
  /* const [likes, setLikes] = useState([]);
  const [comments, setComments] = useState([]);
  const [followers, setFollowers] = useState([]); */


  let navigate = useNavigate();


  //ESTO SE IRIA PORQUE VOY A RENDERIZAR LIKES, COMMENTS Y FOLLOWERS TODO EN ESTE COMPONENTE
  /* const redirectToNotifications = () => {
    navigate('/notifications');
  };  
  const redirectToComments = () => {
      navigate('/comments');
  };  
  const redirectToFollowers = () => {
    navigate('/followers');
  }; */


  const mockAccounts = [
    { id: 1, username: 'user1', nombre: 'Maria Her', pic: user1 },
    { id: 2, username: 'user2', nombre: 'Lara Dumont', pic: user2 },    
  ];

  const likes = [
    { id: 1, username: 'user1',  userpic: user1, postPic: imagePost },
    { id: 2, username: 'user2', userpic: user2, postPic: imagePost },    
  ];

  const comments = [
    { id: 1, username: 'user1',  userpic: user1, postPic: imagePost, content: 'Que hermoso!' },
    { id: 2, username: 'user2', userpic: user2, postPic: imagePost, content: 'Como se llama la técnica?' },    
  ];

  //falta completar
  const followers = [
    { id: 1, username: 'user1',  userpic: user1, postPic: imagePost, content: 'Que hermoso!' },
    { id: 2, username: 'user2', userpic: user2, postPic: imagePost, content: 'Como se llama la técnica?' },    
  ];


  // const userActivity = { id: 1, posts: [{ id: 101, likes: ['user1', 'user2', 'user3'], comments: ["que bien", "maravilloso"]},
  //     {
  //       id: 102,
  //       likes: ['user4', 'user5'],
  //       comments: [/* ... */]
  //     }
  //   ],
  //   followers: [/* ... */]
  // };


  

  //cambio de pestaña
  const handleLikesTab = () => {
    setLikesCommentsOrFollowers('likes');
  };  
  const handleCommentsTab = () => {
    setLikesCommentsOrFollowers('comments');
  };
  const handleFollowersTab = () => {
    setLikesCommentsOrFollowers('followers');
  };





  return (
      <section className='notifications'>
        {/* BARRA PESTAÑAS */}
        <div className=" bg-custom-gray-10 flex items-start gap-10 px-4 pb-1 shadow-up-dark-md">
          <div className={`border-b-4 pt-4 pb-3 ${likesCommentsOrFollowes === 'likes' ? 'border-primario' : 'border-none'}`}>
            <button onClick={handleLikesTab}>
              <h4 className="font-semibold">Likes</h4>
            </button>
            
          </div>
          <div className={`border-b-4 pt-4 pb-3 ${likesCommentsOrFollowes === 'comments' ? 'border-primario' : 'border-none'}`}>
            <button onClick={handleCommentsTab}>
                <h4 className="font-semibold">Comentarios</h4>
            </button>            
          </div>
          <div className={`border-b-4 pt-4 pb-3 ${likesCommentsOrFollowes === 'followers' ? 'border-primario' : 'border-none'}`}>
            <button onClick={handleFollowersTab}>
                <h4 className="font-semibold">Seguidores</h4>
            </button>
          </div>
        </div>


        {/* CONTENIDO */}
        <div className="shadow-up-dark-md">
          {/* <h2 className="py-2 px-4 font-semibold text-lg">Hoy</h2> */}
          {likesCommentsOrFollowes === 'likes' ? (
          <div>
            {likes.map((likeElement) => (
              <div key={likeElement.id} className="fila-usuario1 py-2 px-4 flex justify-between items-center">
                <div className="profilepic-nombre flex gap-2 items-center">
                  <div className="para-recortar-foto w-[44px] h-[44px] overflow-hidden rounded-full">
                      <img className='w-full h-full object-cover' src={likeElement.userpic} alt="" />
                  </div>
                  <p className="font-semibold text-sm">{likeElement.username}</p>
                </div>
                <img className="w-[44px] h-[44px] overflow-hidden rounded-lg" src={likeElement.postPic} alt="" />
              </div>
            ))}
          </div>
        ) : likesCommentsOrFollowes === 'comments' ?(
          <div>
            {comments.map((commentElement) => (
              <div key={commentElement.id} className="fila-usuario1 py-2 px-4 flex justify-between items-center">
                <div className="profilepic-nombre flex gap-2 items-center">
                  <div className="para-recortar-foto w-[44px] h-[44px] overflow-hidden rounded-full">
                        <img className='w-full h-full object-cover' src={commentElement.userpic} alt="" />
                  </div>
                  <div className="w-[230px]">
                        <p className="text-sm"><strong className="text-sm">{commentElement.username}</strong>{` ${commentElement.content}`}</p>
                  </div>                
                </div>
                <img className="w-[44px] h-[44px] overflow-hidden rounded-lg" src={commentElement.postPic} alt="" />
              </div>
            ))}
          </div>          
        ) : ( 
          <div>
              {followers.map((followersElement) => (
              <div key={followersElement.id} className="fila-usuario1 py-2 px-4 flex justify-between items-center">
                <div className="profilepic-nombre flex gap-2 items-center">
                  <div className="para-recortar-foto w-[44px] h-[44px] overflow-hidden rounded-full">
                        <img className='w-full h-full object-cover' src={followersElement.userpic} alt="" />
                  </div>
                  <p className="font-semibold text-sm">{followersElement.username}</p>
                </div>
                <button className="w-[113px] h-[32px]  px-6 rounded-md bg-secundario-light border border-secundario text-sm font-semibold text-secundario">Seguir</button>
              </div>
            ))}
          </div>
        )
        }


          

          

          


          {/* <h2 className="py-2 px-4 font-semibold text-lg">Ayer</h2> */}

          {/* <h2 className="py-2 px-4 font-semibold text-lg">Esta semana</h2> */}

          

        </div>
          
                   
      </section>
  )
}