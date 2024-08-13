import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect} from "react";
import { PostTextoProfile } from '../postTextoProfile/PostTextoProfile';
import { urlBase } from '../../constants/urlBase';




export const TagGrid = () => {

    const [posts, setPosts] = useState([]);
    const { tagId } = useParams()
    const urlFer2 = `${urlBase}/api/v1/posts/search?tagId=${tagId}`


  useEffect (()=>{
    fetch(urlFer2, {
      method: "GET",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: `Bearer ${localStorage.getItem('token')}`
            }
    })
      .then((response) => response.json())
      .then((data) => {          
          setPosts(data.data)
          
      })
      .catch((error) => console.error('Error fetching tags:', error));
  }, [])

    



      let navigate = useNavigate();

      //cuando clickean en 1 foto
      const handleTagClick = (tag) => {
        navigate(`/post/${tag.id}`);
      };
      



  return (
      <section className='find accounts'>
        <div className="shadow-down-dark-gray">
            <div className='grid-results grid grid-cols-3 overflow-hidden'>
                {posts.map((post) => (
                    <div key={post.id}>                            
                            {post.imageUrl? 
                            <img src={post.imageUrl} className="w-full h-full aspect-square object-cover object-center" alt="image post" onClick={() => handleTagClick(post)}/>
                            : <PostTextoProfile onClick={() => handleTagClick(post)} colorSeleccionado={post.backgroundColor} changeAlign={post.fontAlign} fontChange={post.fontFamily} changeSize={post.fontSize} colorSeleccionadoTexto={post.textColor} write={false} valueTextarea={post.content} profile/>
                            }  
                    </div>
                    ))}  
            </div>
        </div>
        
      </section>
  )
}