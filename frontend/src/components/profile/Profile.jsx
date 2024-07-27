import React from "react";
import { useNavigate } from 'react-router-dom';
import user1 from '../../assets/user1.jpg'

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


//hacer mock para el usuario, para la pantalla profile, propiedades: id, username, name, surname, picProfile, description(x ej artista plástica), es 1 objeto, 1 solo elemento
/* const mockUser =   { id: 1, pic: imageP1 , etc} */
  

//esto si son varios porque son todos los post que tiene
const mockPosts = [
    { id: 1, pic: imageP1 },
    { id: 2, pic: imageP6 },
    { id: 3, pic: imageP7 },
    { id: 4, pic: pastel1 },
    { id: 5, pic: imageP20 },
    { id: 6, pic: imageP18 },
    { id: 7, pic: imageP16 },
    { id: 8, pic: imageP14 },
    { id: 9, pic: imageP13 },
    { id: 10, pic: imageP12 },
    { id: 11, pic: imageP21 },
    { id: 12, pic: imageP7 },
    { id: 13, pic: imageP20 },
    { id: 14, pic: imageP7 },
    { id: 15, pic: imageP7 },
    { id: 16, pic: imageP7 },
  ];


  let navigate = useNavigate();

  //cuando clickean en 1 foto
  const handlePostClick = (post) => {
    navigate(`/post/${post.id}`);
  };


export const Profile = () => {
  return (
      <section className='profile pt-4'>
        <div>
          <div className="pic-username py-3 pb-6 px-8 flex gap-3 items-center">
                <div className="para-recortar-foto w-[74px] h-[74px] overflow-hidden rounded-full">
                    <img className='w-full h-full object-cover' src={user1} alt="" />
                </div>
                <div>
                  <p className="font-semibold text-lg">lara.molina</p>
                  <p className=" text-sm">Lara Molina</p>
                  <p className=" text-sm">Artista plastica</p>
                </div>                
            </div>

            <div className="grid-results grid grid-cols-3 overflow-hidden">
                {mockPosts.map((post) => (
                        <div key={post.id}>
                                <img onClick={() => handlePostClick(post)} className="w-full h-full aspect-square object-cover object-center" src={post.pic} alt="" />   
                        </div>
                        ))}
            </div>
        </div>
          
      </section>
  )
}