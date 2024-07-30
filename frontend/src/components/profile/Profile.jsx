import React, { useEffect, useState } from "react";
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

import { PostConTexto } from "../postConTexto/PostConTexto";


//hacer mock para el usuario, para la pantalla profile, propiedades: id, username, name, surname, picProfile, description(x ej artista plástica), es 1 objeto, 1 solo elemento
const mockUser =   { id: 1, username: 'lara.molina', name: 'Lara', lastname: 'Molina', profilePic: user1, occupation: 'Artista plástica'}
  


/* const mockPosts = [
    { id: 1, imageUrl: imageP1 },
    { id: 2, imageUrl: imageP6 },
    { id: 3, imageUrl: imageP7 },
    { id: 4, imageUrl: pastel1 },
    { id: 5, imageUrl: imageP20 },
    { id: 6, imageUrl: imageP18 },
    { id: 7, imageUrl: imageP16 },
    { id: 8, imageUrl: imageP14 },
    { id: 9, imageUrl: imageP13 },
    { id: 10, imageUrl: imageP12 },
    { id: 11, imageUrl: imageP21 },
    { id: 12, imageUrl: imageP7 },
    { id: 13, imageUrl: imageP20 },
    { id: 14, imageUrl: imageP7 },
    { id: 15, imageUrl: imageP7 },
    { id: 16, imageUrl: imageP7 },
  ]; */


export const Profile = () => {

  let navigate = useNavigate();

  const [user, setUser] = useState({})
  const [posts, setPosts] = useState([]);



  useEffect(()=>{
    fetch('http://viaduct.proxy.rlwy.net:25260/api/v1/users/profile',{
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json'
        }
    })
    .then((data)=> data.json())
    .then(data => {
      setUser(data)
      setPosts(data.posts)
    })
}, [])



  //cuando clickean en 1 foto
  const handlePostClick = (post) => {
    navigate(`/post/${post.id}`);
    console.log('post', post)
  };

  


  return (
      <section className='profile pt-4'>
        <div>
          <div className="pic-username py-3 pb-6 px-8 flex gap-3 items-center">
                <div className="para-recortar-foto w-[74px] h-[74px] overflow-hidden rounded-full">
                    <img className='w-full h-full object-cover' src={user.profilePic} alt="" />
                </div>
                <div>
                  <p className="font-semibold text-lg">{user.username}</p>
                  <p className=" text-sm">{`${user.name} ${user.lastname}`}</p>
                  <p className=" text-sm">{user.occupation}</p>
                </div>                
            </div>

            <div className="grid-results grid grid-cols-3 overflow-hidden">
                {posts.map((post) => (
                    <div key={post.id}>
                        {post.imageUrl? 
                        <img onClick={() => handlePostClick(post)} className="w-full h-full aspect-square object-cover object-center" src={post.imageUrl} alt="" />
                        : <PostConTexto onClick={() => handlePostClick(post)} profile colorSeleccionado={post.backgroundColor} changeAlign={post.fontAlign} fontChange={post.fontFamily} changeSize={post.fontSize} colorSeleccionadoTexto={post.textColor} write={false} valueTextarea={post.content}/>
                        }                                   
                    </div>
                ))}
            </div>
        </div>          
      </section>
  )
}