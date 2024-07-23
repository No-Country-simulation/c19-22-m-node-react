import React from "react";
import user1 from '../../assets/user1.jpg'
import user2 from '../../assets/user2.jpg'
import imagePost from '../../assets/imagePost.jpg'

import { useNavigate } from 'react-router-dom';
import { useRef, useEffect } from "react";




export const Accounts = () => {



    let navigate = useNavigate();


  
    const redirectToAccounts = () => {
        navigate('/accounts');
    };
  
    const redirectToHashtags = () => {
      navigate('/hashtags');
    };


    const inputRef = useRef(null)
    
    useEffect(() => {
        
        inputRef.current.focus()
        
    }, [])



  return (
      <section className='notifications'>
        <div className='header-find py-4 px-4 shadow-md' >
                        <input type="text"
                                                    className="w-full bg-transparentborder border-2 border-custom-gray-50 focus:outline-custom-gray-50 pt-3 pr-4 pb-3 pl-5 rounded-md"
                                                    placeholder="Buscar"
                                                    id="buscar"
                                                    ref={inputRef} />
                        </div>
        <div className=" bg-custom-gray-10 flex items-start gap-10 px-4 "></div>

        <div className=" bg-custom-gray-10 flex items-center justify-center gap-10 px-4 pb-1 shadow-up-dark-md">
        <div className="border-b-4  pt-2 pb-1 border-primario w-[188px] flex justify-center">
                <button onClick={redirectToAccounts}>
                    <h4 className="font-semibold text-center">Cuentas</h4>
                </button>
                
            </div>
            <div className="border-b-4  pt-2 pb-1 w-[188px] flex justify-center">
                <button onClick={redirectToHashtags}>
                    <h4 className="font-semibold text-center">Etiquetas</h4>
                </button>            
            </div>            

        </div>
        
        
        <div className="shadow-up-dark-md pt-2">                    

          <div className="fila-usuario1 py-2 px-4 flex justify-between items-center">
              <div className="profilepic-nombre flex gap-2 items-center">
              <div className="para-recortar-foto w-[44px] h-[44px] overflow-hidden rounded-full">
                    <img className='w-full h-full object-cover' src={user1} alt="" />
                </div>
                <div className="w-[230px]">
                    <p className="text-sm font-semibold">marimaher</p>
                    <p className="text-sm">Marina Maher</p>
                </div>                
              </div>              
          </div>



          
          <div className="fila-usuario1 py-2 px-4 flex justify-between items-center">
              <div className="profilepic-nombre flex gap-2 items-center">
              <div className="para-recortar-foto w-[44px] h-[44px] overflow-hidden rounded-full">
                    <img className='w-full h-full object-cover' src={user2} alt="" />
                </div>
                <p className="font-semibold text-sm">marimaher</p>
              </div>
              
          </div>


         
          
          <div className="fila-usuario1 py-2 px-4 flex justify-between items-center">
              <div className="profilepic-nombre flex gap-2 items-center">
              <div className="para-recortar-foto w-[44px] h-[44px] overflow-hidden rounded-full">
                    <img className='w-full h-full object-cover' src={user2} alt="" />
                </div>
                <p className="font-semibold text-sm">marimaher</p>
              </div>
              
          </div>



        </div>
          
                   
      </section>
  )
}