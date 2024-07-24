import React from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useRef, useEffect, useCallback } from "react";


import debounce from 'lodash/debounce';


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




const mockTags = [
    { id: 1, name: 'acuarela', pic: imageP1 },
    { id: 2, name: 'acuarela', pic: imageP6 },
    { id: 3, name: 'acuarela', pic: imageP7 },
    { id: 4, name: 'pastel', pic: pastel1 },
    { id: 5, name: 'acuarela', pic: imageP20 },
    { id: 6, name: 'acuarela', pic: imageP18 },
    { id: 7, name: 'acuarela', pic: imageP16 },
    { id: 8, name: 'acuarela', pic: imageP14 },
    { id: 9, name: 'acuarela', pic: imageP13 },
    { id: 10, name: 'acuarela', pic: imageP12 },
    { id: 11, name: 'acuarela', pic: imageP21 },
    { id: 12, name: 'acuarela', pic: imageP7 },
    { id: 13, name: 'acuarela', pic: imageP20 },
    { id: 14, name: 'acuarela', pic: imageP7 },
    { id: 15, name: 'acuarela', pic: imageP7 },
    { id: 16, name: 'acuarela', pic: imageP7 },
  ];



export const TagGrid = () => {

    const [tags, setTags] = useState([]);

    const { tagName } = useParams()



    const fetchTags = useCallback(
        debounce((searchQuery) => {
          // Simular la búsqueda de etiquetas
          const filteredTags = mockTags.filter(tag => tag.name == tagName);          
          setTags(filteredTags);
        }, 300), []
      );
    
      useEffect(() => {
        if (tagName) {
          fetchTags(tagName);
        } else {
          setTags([]);
        }
      }, [tagName]);



      let navigate = useNavigate();

      //cuando clickean en 1 foto
      const handleTagClick = (tag) => {
        navigate(`/post/${tag.id}`);
      };
      

  return (
      <section className='find accounts'>
        {/* <div className='header-find py-4 px-4 shadow-md' >
                <input type="text"
                                            className="w-full bg-transparentborder border-2 border-custom-gray-50 focus:outline-custom-gray-50 pt-3 pr-4 pb-3 pl-5 rounded-md"
                                            placeholder="Buscar"
                                            id="buscar"
                                            ref={inputRef} />
        </div>


        <div className=" bg-custom-gray-10 flex items-start gap-10 px-4 "></div> */}


        {/* <div className=" bg-custom-gray-10 flex items-center justify-center gap-10 px-4 pb-1.5 shadow-up-dark-md">
            <div className="border-b-4  pt-2 pb-1 w-[188px] flex justify-center">
                <button onClick={redirectToAccounts}>
                    <h4 className="font-semibold text-center">Cuentas</h4>
                </button>
                
            </div>
            <div className="border-b-4  pt-2 pb-1 border-primario w-[188px] flex justify-center">
                <button onClick={redirectToHashtags}>
                    <h4 className="font-semibold text-center">Etiquetas</h4>
                </button>            
            </div>
            
        </div> */}

        <div className="shadow-down-dark-gray">
            <div className='grid-results grid grid-cols-3 overflow-hidden'>
                {tags.map((tag) => (
                    <div key={tag.id}>
                            <img onClick={() => handleTagClick(tag)} className="w-full h-full aspect-square object-cover object-center" src={tag.pic} alt="" />   
                    </div>
                    ))}  
            </div>
        </div>
        
      </section>
  )
}