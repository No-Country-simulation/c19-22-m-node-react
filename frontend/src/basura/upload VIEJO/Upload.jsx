import './Upload.scss'
import { useState, useEffect, useRef } from 'react'
import imagePost from '../../assets/imagePost.jpg'
import imageP2 from '../../assets/imageP2.jpg'
import imageP3 from '../../assets/imageP3.jpg'
import imageP4 from '../../assets/imageP4.jpg'
import imageP5 from '../../assets/imageP5.jpg'
import imageP6 from '../../assets/imageP6.jpg'
import imageP7 from '../../assets/imageP7.jpg'
import imageP8 from '../../assets/imageP8.jpg'



const Upload = ({ onImgChange }) => {
    const [showCamEditor, setShowCamEditor] = useState(false)
    

    const handleOpenCam = () => {
        setShowCamEditor(true)
    }

    const handleCloseCam = () => {
        setShowCamEditor(false)
    }

    const images = [imagePost, imageP2, imageP3, imageP4, imageP5, imageP6, imageP7, imageP8];
    const [selectedImg, setSelectedImg] = useState(images[0]);

    const handleImgChange = (image) => {
        setSelectedImg(image);
        onImgChange(image); // Descomenta esta línea si necesitas enviar la imagen al componente padre
    };

    return (
    
        <div className={showCamEditor ? "mg_menu-active mg_menu" : "mg_menu"}>
            <div>
                <button onClick={handleOpenCam} className='camera border border-gray-300 shadow-md rounded-[6px] p-3 magnifying-glass_icon_menu'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                    </svg>                    
                </button>                
            </div>
    
            {showCamEditor && (
                <div className='bg-transparent 
                        fixed 
                        inset-0   
                        transition-all 
                        duration-150 
                        delay-200
                        flex 
                        flex-col 
                        items-center 
                        justify-center
                        z-50'>
                    <div className="bg-black 
                        absolute 
                        w-full 
                        bottom-0 
                        p-5 
                        transition-[top] 
                        duration-150 
                        ease-in-out 
                        z-[1]">
                        <div className='flex justify-start items-start text-start  gap-2 pb-2'>
                            <button onClick={handleCloseCam} className='cursor-pointer text-white'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
                                </svg>
                            </button>                            
                        </div>                        
                        
                        <div className='img-container grid grid-cols-4 gap-0'>
                            {images.map((image) => (                                    
                                <div key={image} className="aspect-square w-full overflow-hidden relative">
                                    <button 
                                        onClick={() => handleImgChange(image)}
                                        className="w-full h-full"
                                    >
                                        <img 
                                            src={image} 
                                            className="absolute inset-0 w-full h-full object-cover object-center" 
                                            alt="" 
                                        />
                                        {selectedImg === image && (
                                            <div className="absolute inset-0 bg-white bg-opacity-50 border-4 border-black"></div>
                                        )}
                                    </button>
                                </div>
                            ))}                                
                        </div>                        
                    </div>   
                </div>
            )}
        </div>
    )
}

export default Upload