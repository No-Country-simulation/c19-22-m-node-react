




import { useState, useEffect, useRef } from 'react'





const Upload = ({ sendClean, onImageChange}) => {
  
    const [selectedImage, setSelectedImage] = useState(null);
  const inputFile = useRef()

  const handleOpenInput = () => {
    inputFile.current.click()
  }

  const handleUpload = (e) => {        
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        const imageResult = reader.result
        setSelectedImage(imageResult)                
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
            <button onClick={handleOpenInput} className='upload border-gray-300 shadow-md rounded-[6px] p-3 magnifying-glass_icon_menu'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                </svg>                    
            </button> 
        </div>
    )
}

export default Upload