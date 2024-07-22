import React from "react";
import user1 from '../../assets/user1.jpg'
import user2 from '../../assets/user2.jpg'
import imagePost from '../../assets/imagePost.jpg'

import { useNavigate } from 'react-router-dom';





export const Hashtags = () => {



    let navigate = useNavigate();


  
    const redirectToAccounts = () => {
        navigate('/accounts');
    };
  
    const redirectToHashtags = () => {
      navigate('/hashtags');
    };




  return (
      <section className='notifications'>
        <div className=" bg-custom-gray-10 flex items-start gap-10 px-4 pb-1 shadow-up-dark-md">
            <div className="border-b-4  pt-4 pb-3">
                <button onClick={redirectToNotifications}>
                    <h4 className="font-semibold">Likes</h4>
                </button>
                
            </div>
            <div className="border-b-4  pt-4 pb-3">
                <button onClick={redirectToComments}>
                    <h4 className="font-semibold">Comentarios</h4>
                </button>            
            </div>
            <div className="border-b-4 border-primario pt-4 pb-3">
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
                    <img className='w-full h-full object-cover' src={user1} alt="" />
                </div>
                <p className="font-semibold text-sm">massino.taina</p>
              </div>
              <button className="w-[113px] h-[32px]  px-6 rounded-md bg-secundario-light border border-secundario text-sm font-semibold text-secundario">Seguir</button>
          </div>



          <h2 className="py-2 px-4 font-semibold text-lg">Esta semana</h2>
          
          <div className="fila-usuario1 py-2 px-4 flex justify-between items-center">
              <div className="profilepic-nombre flex gap-2 items-center">
              <div className="para-recortar-foto w-[44px] h-[44px] overflow-hidden rounded-full">
                    <img className='w-full h-full object-cover' src={user2} alt="" />
                </div>
                <p className="font-semibold text-sm">marimaher</p>
              </div>
              <button className="w-[113px] h-[32px] px-5 rounded-md bg-custom-gray-20 border text-sm font-semibold text-custom-gray-70">Siguiendo</button>
          </div>


          <h2 className="py-2 px-4 font-semibold text-lg">Este mes</h2>
          
          <div className="fila-usuario1 py-2 px-4 flex justify-between items-center">
              <div className="profilepic-nombre flex gap-2 items-center">
              <div className="para-recortar-foto w-[44px] h-[44px] overflow-hidden rounded-full">
                    <img className='w-full h-full object-cover' src={user2} alt="" />
                </div>
                <p className="font-semibold text-sm">marimaher</p>
              </div>
              <button className="w-[113px] h-[32px] px-5 rounded-md bg-custom-gray-20 border text-sm font-semibold text-custom-gray-70">Siguiendo</button>
          </div>



        </div>
          
                   
      </section>
  )
}