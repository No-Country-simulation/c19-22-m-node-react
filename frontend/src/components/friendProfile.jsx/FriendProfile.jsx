import { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { PostConTexto } from "../postConTexto/PostConTexto";
import { HamburguerIcon } from "../icons/HamburguerIcon";
import { urlBase } from "../../constants/urlBase";





export const FriendProfile = () => {

  let navigate = useNavigate();

  const [user, setUser] = useState({})
  const [posts, setPosts] = useState([]);
  const { id } = useParams()


  useEffect(()=>{
    fetch(`${urlBase}/api/v1/users/searchprofile/${id}`,{
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
  };


  //cuando clickean en hamburguesa
  const handleConfig = () => {
    navigate('/configuracion');    
  };
  


  return (
      <section className='profile pt-4'>
        <div>
          <div className="flex justify-between">
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