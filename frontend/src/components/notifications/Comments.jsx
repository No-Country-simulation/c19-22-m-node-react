import React from "react";
import user1 from '../../assets/user1.jpg'
import user2 from '../../assets/user2.jpg'
import imagePost from '../../assets/imagePost.jpg'

import { useNavigate } from 'react-router-dom';




export const Comments = () => {

    let navigate = useNavigate();


  const redirectToNotifications = () => {
    navigate('/notifications');
  };
  
    const redirectToComments = () => {
        navigate('/comments');
    };
  
    const redirectToFollowers = () => {
      navigate('/followers');
    };



  return (
      <section className='notifications'>
        <div className=" bg-custom-gray-10 flex items-start gap-10 px-4 pb-1 shadow-up-dark-md">
            <div className="border-b-4  pt-4 pb-3">
                <button onClick={redirectToNotifications}>
                    <h4 className="font-semibold">Likes</h4>
                </button>
                
            </div>
            <div className="border-b-4 border-primario pt-4 pb-3">
                <button onClick={redirectToComments}>
                    <h4 className="font-semibold">Comentarios</h4>
                </button>            
            </div>
            <div className="border-b-4  pt-4 pb-3">
                <button onClick={redirectToFollowers}>
                    <h4 className="font-semibold">Seguidores</h4>
                </button>
            </div>

        </div>
        <div className="shadow-up-dark-md">
          <h2 className="py-2 px-4 font-semibold text-lg">Hoy</h2>

          

          <div className="fila-usuario1 py-2 px-4 flex justify-between items-center">
              <div className="profilepic-nombre flex gap-2 items-center">
              <div className="para-recortar-foto w-[44px] h-[44px] overflow-hidden rounded-full">
                    <img className='w-full h-full object-cover' src={user2} alt="" />
                </div>
                <div className="w-[230px]">
                    <p className="text-sm"><strong className="text-sm">abeltol:</strong> Hermosa combinación! De qué marca son?</p>
                </div>                
              </div>
              <img className="w-[44px] h-[44px] overflow-hidden rounded-lg" src={imagePost} alt="" />
          </div>

          <div className="fila-usuario1 py-2 px-4 flex justify-between items-center">
              <div className="profilepic-nombre flex gap-2 items-center">
              <div className="para-recortar-foto w-[44px] h-[44px] overflow-hidden rounded-full">
                    <img className='w-full h-full object-cover' src={user1} alt="" />
                </div>
                <div className="w-[230px]">
                    <p className="text-sm"><strong className="text-sm">marimaher:</strong> Me encanta</p>
                </div>                
              </div>
              <img className="w-[44px] h-[44px] overflow-hidden rounded-lg" src={imagePost} alt="" />
          </div>


        </div>
          
                   
      </section>
  )
}