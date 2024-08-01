import { useState, useRef } from 'react'
import { UploadIcon } from '../icons/UploadIcon';






const Upload = ({ sendClean, onImageChange, selectedImage}) => {
  
    
    const inputFile = useRef()

    const handleOpenInput = () => {
      inputFile.current.click()
      sendClean(true)
    }

    const handleUpload = (e) => {        
        const file = e.target.files[0]
        if (file) {
          const reader = new FileReader()
          reader.onloadend = () => {
            const imageResult = reader.result                            
            sendClean(false)
            onImageChange(imageResult) // Pasamos la imagen seleccionada al componente padre
          }
          reader.readAsDataURL(file)
        }
    }
    
    /* console.log('selectedImage en componente upload', selectedImage) */

    

    return (
        <div>
            <input type="file" ref={inputFile} className="hidden" accept="image/*" onChange={handleUpload}/>
            <button onClick={handleOpenInput} className='upload border border-gray-300 shadow-md rounded-[6px] p-3 magnifying-glass_icon_menu'>
                <UploadIcon/>                 
            </button> 
        </div>
    )
}

export default Upload