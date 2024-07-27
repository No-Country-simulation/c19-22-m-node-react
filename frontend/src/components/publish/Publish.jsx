
import React from "react";
import { PiTextT } from "react-icons/pi";
import ColorPicker from "../colorPicker/ColorPicker.jsx";

import { useState, useRef, useEffect } from "react";
import TextButton from "../textButton/TextButton.jsx";
import Upload from "../upload/Upload.jsx";
import { useAlignChange } from '../../hooks/useAlignChange.js';
import { useFontChange } from '../../hooks/useFontChange.js';
import { cloneDeep } from "lodash";
import { useSizeChange } from "../../hooks/useSizeChange.js";




export const Publish = () => {

    const {handleChangeAlign, changeAlign} = useAlignChange()
    const {handleFontChange, fontChange} = useFontChange()
    const {handleChangeSize, changeSize} = useSizeChange()

    
    const [colorSeleccionado, setColorSeleccionado] = useState('');
    const [colorSeleccionadoTexto, setColorSeleccionadoTexto] = useState('#000000');
    const [pantallaLimpia, setPantallaLimpia] = useState(true);
    const [videoRender, setVideoRender] = useState(null);
    const [picDone, setPicDone] = useState(null);
    const [write, setWrite] = useState(false);
    const videoRef = useRef()
    const pic = useRef()
    const imageR = useRef()


//****************************************************************************** */
    
    //FUNCION PARA MANEJAR EL UPLOAD IMAGE
/* 
    const [selectedImage, setSelectedImage] = useState(null);

    
   //FUNCIONES PARA TRAER DEL COMPONENTE UPLOAD LAS VARIABLES

   const [imageData, setImageData] = useState(null);

   const handleImageChange = (newImageData) => {
     setImageData(newImageData);
   }

   
 
   const handleClean = (value) => {
        setValueTextarea('')
        setColorSeleccionado('')
        setPicDone(null)    
   }

   useEffect(() => {
    console.log('imageData actualizado:', imageData);
    if (imageData) {
      setSelectedImage(imageData);
    }
  }, [imageData]);

  useEffect(() => {
    console.log('selectedImage actualizado:', selectedImage);
  }, [selectedImage]); */



/***************************************************************** */
   //VIEJO CODIGO DE UPLOAD EN ESTE MISMO COMPONENTE
   
   const [selectedImage, setSelectedImage] = useState(null);

    const inputFile = useRef()

    const handleOpenInput = () => {
         /* setPantallaLimpia(true) */
         setValueTextarea('')
         setColorSeleccionado('')
         setPicDone(null)
         inputFile.current.click()
     }

     const handleUpload = (e) => {        
         const file = e.target.files[0]
         if (file) {
             const reader = new FileReader()
             reader.onloadend = () => {
                 setSelectedImage(reader.result)
                 setPantallaLimpia(false)
             }
         reader.readAsDataURL(file)
         }
     }


    // *********************************************
    // *********************************************


    //FUNCIONALIDAD PARA TOMAR FOTO CON LA WEBCAM
    const [currentStream, setCurrentStream] = useState(null);

    const abrirWebcam = async () => {
        try {
            setPantallaLimpia(true)
            setSelectedImage(null)
            setColorSeleccionado('');
            setValueTextarea('')

            // Si hay un stream activo, detenerlo primero            
            if (currentStream) {
                currentStream.getTracks().forEach(track => track.stop());
            }
    
            
            setPantallaLimpia(false);

            setPicDone(null); // Resetear la foto tomada
            setVideoRender(true);
    
            const stream = await navigator.mediaDevices.getUserMedia({video: true});
            setCurrentStream(stream);
    
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
                videoRef.current.play();
            }
    
            if (imageR.current) {
                imageR.current.classList.add("hidden");
            }
    
        } catch (error) {
            console.log(error);
            setVideoRender(false);
        }
    };

    const tomarFoto = () => {
        if (videoRef.current) {
            pic.current.width = videoRef.current.videoWidth;
            pic.current.height = videoRef.current.videoHeight;
            pic.current.getContext("2d").drawImage(videoRef.current, 0, 0);
            const foto = pic.current.toDataURL("image/jpg");
            imageR.current.src = foto;
            imageR.current.classList.remove("hidden");
            videoRef.current.classList.add("hidden");
            setPicDone(foto);
            setPantallaLimpia(false);
            setVideoRender(false);
    
            // Detener el stream actual
            if (currentStream) {
                currentStream.getTracks().forEach(track => track.stop());
            }
        }
    };   

    useEffect(() => {
        return () => {
            if (currentStream) {
                currentStream.getTracks().forEach(track => track.stop());
            }
        };
    }, [currentStream]);

    const inputRef = useRef(null)
    
    useEffect(() => {
        if (write && inputRef.current) {
            inputRef.current.focus()
        }
    }, [write])




    //******************************************************* */
    //******************************************************* */

    //FUNCIONALIDAD COLOR DE FONDO

    //FUNCION PARA MANEJAR EL CAMBIO DE COLOR DE FONDO
    const manejarCambioColor = (color) => {
        setColorSeleccionado(color);
        setPicDone(null);
        setSelectedImage(null)
        setPantallaLimpia(false);
    };


    //FUNCION PARA LIMPIAR LA PANTALLA CUANDO SE TOCA EL SELECCIONADOR DE COLOR DE FONDO
    const handleColorPickerClick = (bool) => {
        setPantallaLimpia(true)
        setValueTextarea('')
        setSelectedImage(null)
    };

    /* console.log("imagen", selectedImage)
    console.log("pantalla limpia", pantallaLimpia) */



 //******************************************************* */
  //******************************************************* */


    //FUNCION PARA MANEJAR EL CAMBIO DE COLOR DE TEXTO
    const manejarCambioColorTexto = (color) => {
        setColorSeleccionadoTexto(color);
        inputRef.current.focus()
    };

    //FUNCION PARA PERMITIR O NO ESCRIBIR SOBRE LA FOTO O COLOR DE FONDO SI ESTA ABIERTO O NO EL EDITOR DE TEXTO
    const handleWrite = (bool) => {
        setWrite(bool);
    };

    //FUNCION PARA HACER FOCO EN EL TEXTAREA CUANDO SE ABRE EL EDITOR DE TEXTO
    const focus = () => {
        inputRef.current.focus()
    }
    


    // *********************************************
    // *********************************************


    //PARA PASAR VALOR TEXT AREA A LA PANTALLA 2    
    const [valueTextarea, setValueTextarea ] = useState('')



    //******************************************************** */

    //PANTALLA 2
    const [continuar, setContinuar] = useState(null)
    

    const handlePasarPantalla =() => {
        if (selectedImage || colorSeleccionado || picDone){
            setContinuar(true)
        }
        
        
    }

    const handleVolverAEditarPublish = () => {
        setContinuar(false)
    }

    //TODOS LOS ESTADOS DE MOMENTO
    const handlePublicar = () => {
        console.log('total estados: ', 'selectedImage:', selectedImage ,'pic Done:', picDone, 'color Seleccionado:', colorSeleccionado, 'value textarea:', valueTextarea, 'change size', changeSize, 'changeAlign', changeAlign, 'font', fontChange, 'color texto', colorSeleccionadoTexto, 'DescripcionPost:', descripcionPost, 'Etiquetas',  )
        
        const formData = new FormData()
        formData.append('content', valueTextarea)
        formData.append('backgroundColor', colorSeleccionado)
        formData.append('textColor', colorSeleccionadoTexto)
        formData.append('fontSize', changeSize)
        formData.append('fontFamily', fontChange)
        formData.append('fontAlign', changeAlign)
        const tagsName = Object.values(selectedTag).filter(value=> value != '')
        /* console.log('tagsName', tagsName) */
        const tagIds = tagsName.map(name => {
            let id
            mockEtiquetas.forEach(etiqueta => {
                if(etiqueta.name == name){
                    id = etiqueta.id
                }
            })
            return id
        }).join(',')
        console.log('tagsId', tagIds)

        formData.append('tags', tagIds)
        if(picDone){
            const data = picDone.split(',')[1]
            const binaryString = window.atob(data)
            const arrayBuffer = new ArrayBuffer(binaryString.length)
            const uint8Array = new Uint8Array(arrayBuffer)
            for (let i = 0; i < binaryString.length; i++){
                uint8Array[i] = binaryString.charCodeAt(i)
            }
            const webcamFile = new Blob([uint8Array], {type: 'image/png'})
            console.log('webcamFile', webcamFile)
            formData.append('img', webcamFile)
        }
        if(selectedImage){            
            const splitedData = selectedImage.split(';')[0]
            const imageType = splitedData.slice(5)
            const data = selectedImage.split(',')[1]
            const binaryString = window.atob(data)
            const arrayBuffer = new ArrayBuffer(binaryString.length)
            const uint8Array = new Uint8Array(arrayBuffer)
            for (let i = 0; i < binaryString.length; i++){
                uint8Array[i] = binaryString.charCodeAt(i)
            }
            const uploadedFile = new Blob([uint8Array], {type: imageType})
            console.log('uploadedFile', uploadedFile)
            /* console.log('imageType', imageType) */
            formData.append('img', uploadedFile)
        }
        fetch('urlFacu', {
            method: 'POST',
            body: formData,
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(data => data.json())
        .then((data)=> console.log(data)) 
            
    }


    

    // ESTADO QUE GUARDA LA DESCRIPCION DEL POST
    const [descripcionPost, setDescripcionPost] = useState('')    


   //MOCK DE DATOS PARA ETIQUETAS
   const mockEtiquetas = [
    {id:1, name: 'acuarela'}, {id:2, name: 'pastel'}, {id:3, name: 'pintura'}, {id:4, name: 'azul'}, {id:5, name: 'texturas'}
   ]

   const [selectedTag, setSelectedTag] = useState({1: '', 2: '', 3: '', 4: '', 5: ''})
   const handleSelectTag = (id) => e => {        
        setSelectedTag({
            ...selectedTag, 
            [id]: e.target.value
        })
   }

   const handleDeleteTag = (id) => e => {        
    setSelectedTag({
        ...selectedTag, 
        [id]: ''
    })
}


console.log('change publish', changeSize
)


/* console.log('selectedTag', selectedTag) */


    //************************************************* */
    //RETURN RENDERIZACION



    return (
        <section className='publish'>
            {!continuar? (
            <div>
                {pantallaLimpia ? (
                    <div className="h-[375px] w-[375px] bg-custom-gray-10 mt-6 p-4">
                        <div className="h-[343px] w-[343px] border-2 border-dashed border-gray-500 rounded-[16px] flex flex-col items-center justify-center"> 
                            <p className="w-[265px] text-base text-center text-custom-black">
                                Sube una imagen de tu galería, toma una foto o elige un color de fondo.
                            </p>
                        </div>            
                    </div>
                ) : selectedImage ? (
                    <div className="h-[375px] w-[375px] mt-6 p-4">                    
                        <img className="w-full h-full" src={selectedImage} alt=""/>
                    </div>
                ) : colorSeleccionado ? (
                    <div className="h-[375px] w-[375px] mt-6 p-4" style={{backgroundColor: colorSeleccionado}}>
                        <div  className="w-full h-full box-border outline-none border-none bg-transparent focus:ring-0 focus:outline-none resize-none overflow-hidden text-center grid items-center" >
                            <textarea 
                                    name="" 
                                    id="" 
                                    className={`w-full box-border outline-none border-none bg-transparent focus:ring-0 focus:outline-none overflow-hidden resize-none text-${changeAlign} font-${fontChange} text-${changeSize}`}
                                    style={{ color: colorSeleccionadoTexto }}
                                    disabled={!write}
                                    value = {valueTextarea}
                                    onChange={(e) => {
                                    inputRef.current.style.height = 'auto'
                                    inputRef.current.style.height = (inputRef.current.scrollHeight) + 'px';
                                    setValueTextarea(e.target.value)
                                }}

                                    ref={inputRef}
                            ></textarea>
                        </div>
                    </div>
                ) 
                : picDone ? (
                    <div className="picDone relative h-[375px] w-[375px] mt-6 ">
                        <div className="w-full h-full box-border outline-none border-none bg-transparent focus:ring-0 focus:outline-none resize-none overflow-hidden text-center grid items-center" >
                            <img src={picDone} alt="Foto capturada" className="w-full h-full object-cover" />
                            <textarea 
                                name="" 
                                id="" 
                                className={`absolute w-full box-border outline-none border-none bg-transparent focus:ring-0 focus:outline-none overflow-hidden resize-none text-${changeAlign} font-${fontChange} text-${changeSize}`}
                                style={{ color: colorSeleccionadoTexto }}
                                value = {valueTextarea}
                                    onChange={(e) => {
                                    inputRef.current.style.height = 'auto'
                                    inputRef.current.style.height = (inputRef.current.scrollHeight) + 'px';
                                    setValueTextarea(e.target.value)
                                }}

                                    ref={inputRef}
                            ></textarea>
                        </div>                    
                    </div>
                ) 
            : videoRender ? (
                    <div className="h-[375px] w-[375px] mt-6 p-0 overflow-hidden relative flex flex-col justify-end items-center">
                        <img src="" alt="" className="hidden" ref={imageR}/>
                        <video className="mostrar-video h-full w-full object-cover object-center" autoPlay ref={videoRef}></video>
                        <button onClick={tomarFoto} className="absolute bottom-5 py-2 px-4 bg-white rounded-md">Capturar</button>
                    </div>
                )
                : (
                    <div className="h-[375px] w-[375px] bg-custom-gray-10 mt-6 p-4">
                        <div className="h-[343px] w-[343px] border-2 border-dashed border-gray-500 rounded-[16px] flex flex-col items-center justify-center"> 
                            <p className="w-[265px] text-base text-center text-custom-black">
                                Sube una imagen de tu galería, toma una foto o elige un color de fondo.
                            </p>
                        </div>            
                    </div>
                )}
                
                <div className="ICONS-ROW flex gap-4 items-center justify-center py-4">
                    {/* boton upload */}                    
                    <input type="file" ref={inputFile} className="hidden" accept="image/*" onChange={handleUpload}/>
                    <button onClick={handleOpenInput} className='upload border-gray-300 shadow-md rounded-[6px] p-3 magnifying-glass_icon_menu'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                        </svg>                    
                    </button>  
                    {/* <Upload sendClean={handleClean} onImageChange={handleImageChange}/> */}


                    {/* boton webcam */}
                    <button onClick={abrirWebcam} className="upload border border-gray-300 shadow-md rounded-[6px] p-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
                        </svg>                        
                    </button>
                    <canvas className="hidden" ref={pic}></canvas>
                    
                
                    {/* boton color de fondo */}
                    <ColorPicker sendClean={handleColorPickerClick} onColorChange={manejarCambioColor} />
                    

                    {/* boton texto, activado o desactivado */}
                    {colorSeleccionado || picDone ? (
                        <TextButton fontChange={fontChange} handleFontChange={handleFontChange} handleChangeAlign={handleChangeAlign} changeAlign={changeAlign} crearRef={focus} crearRef1={focus} crearRef2={focus} readyToWrite={handleWrite} textColorSelected={manejarCambioColorTexto} handleChangeSize={handleChangeSize} changeSize={changeSize} />
                    ) : (
                        <button className="text text-custom-gray border border-gray-300 bg-custom-gray-20 shadow-md rounded-[6px] p-3">
                            <PiTextT className="h-[24px] w-[24px]" />
                        </button>
                    )}                    
                </div>
                
                <div className="flex justify-center">
                    <button onClick={handlePasarPantalla}>
                        <h4 className="text-center text-custom-gray-80 text-sm p-4">CONTINUAR</h4>
                    </button>
                    
                    
                </div>
            </div>
            ) : <div>                    
                    <div className="h-[191px] w-[191px] mt-6 p-4">
                        {selectedImage && (<img className="w-full h-full" src={selectedImage} alt="" />)}
                        {picDone && 
                            (
                                <div className="relative w-full h-full box-border outline-none border-none bg-transparent focus:ring-0 focus:outline-none resize-none overflow-hidden text-center grid items-center" >
                                    <img src={picDone} alt="Foto capturada" className="w-full h-full object-cover" />                                 
                                    <textarea 
                                        name="" 
                                        id=""                                         
                                        className={`absolute w-full box-border outline-none border-none bg-transparent focus:ring-0 focus:outline-none overflow-hidden resize-none text-${changeAlign} font-${fontChange} text-${changeSize}`}
                                        style={{ color: colorSeleccionadoTexto }}
                                        value = {valueTextarea}
                                        readOnly                                        
                                    ></textarea>                                    
                                </div>                    
                            )}
                        {colorSeleccionado && (
                            <div className="h-[191px] w-[191px] mt-6 p-4" style={{backgroundColor: colorSeleccionado}}>
                                <div  className="w-full h-full box-border outline-none border-none bg-transparent focus:ring-0 focus:outline-none resize-none overflow-hidden text-center grid items-center" >
                                    <textarea 
                                            name="" 
                                            id="" 
                                            className={` w-full box-border outline-none border-none bg-transparent focus:ring-0 focus:outline-none overflow-hidden resize-none text-${changeAlign} font-${fontChange} text-${changeSize} text-${changeSize}`}
                                            style={{ color: colorSeleccionadoTexto }}
                                            disabled={!write}
                                            value = {valueTextarea}                                            
                                            readOnly
                                    ></textarea>
                                </div>
                            </div>
                        )}
                        

                        
                        <textarea type="text" placeholder="Puedes agregar texto a modo de pie de imagen o comentario." 
                        value={descripcionPost} onChange={(e) => {setDescripcionPost(e.target.value)}} className="h-[72px] w-[343px] border rounded-lg focus:outline-none focus:ring-2 focus:ring-primario focus:border-transparent border-gray-300"></textarea>

                        <p className="w-[350px]">Escribe 5 etiquetas clave.</p>
                        <div className="h-[72px] w-[343px] border rounded-lg focus:outline-none focus:ring-2 focus:ring-primario focus:border-transparent border-gray-300 flex flex-wrap">
                            <div>
                                <input list="datalistForInput" id="tagInput1" type="text" value={selectedTag[1]} className="h-[30px] w-[80px]" onChange={handleSelectTag(1)}/>
                                {selectedTag[1] &&
                                    <button onClick={handleDeleteTag(1)} className='cursor-pointer'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                    </svg>
                                    </button> }
                                
                            </div>
                            <div>
                                <input list="datalistForInput" id="tagInput1" type="text" value={selectedTag[2]} className="h-[30px] w-[80px]" onChange={handleSelectTag(2)}/>
                                {selectedTag[2] &&
                                    <button onClick={handleDeleteTag(2)} className='cursor-pointer'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                    </svg>
                                    </button> }
                                
                            </div>
                            <div>
                                <input list="datalistForInput" id="tagInput1" type="text" value={selectedTag[3]} className="h-[30px] w-[80px]" onChange={handleSelectTag(3)}/>
                                {selectedTag[3] &&
                                    <button onClick={handleDeleteTag(3)} className='cursor-pointer'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                    </svg>
                                    </button> }
                                
                            </div>
                            <div>
                                <input list="datalistForInput" id="tagInput1" type="text" value={selectedTag[4]} className="h-[30px] w-[80px]" onChange={handleSelectTag(4)}/>
                                {selectedTag[4] &&
                                    <button onClick={handleDeleteTag(4)} className='cursor-pointer'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                    </svg>
                                    </button> }
                                
                            </div>
                            <div>
                                <input list="datalistForInput" id="tagInput1" type="text" value={selectedTag[5]} className="h-[30px] w-[80px]" onChange={handleSelectTag(5)}/>
                                {selectedTag[5] &&
                                    <button onClick={handleDeleteTag(5)} className='cursor-pointer'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                    </svg>
                                    </button> }
                                
                            </div> 
                        </div>
                        
                        <datalist id="datalistForInput">
                            {mockEtiquetas.map((etiqueta) => (
                                <div>
                                    <option key={etiqueta.id} value={etiqueta.name}>{etiqueta.name}</option>
                                    
                                </div>  
                            ))}
                        </datalist>
                        <button onClick={handleVolverAEditarPublish}>
                            <h4 className="text-center text-custom-gray-80 text-sm p-4">CANCELAR</h4>
                        </button>
                        <button onClick={handlePublicar}>
                            <h4 className="text-center text-custom-gray-80 text-sm p-4">PUBLICAR</h4>
                        </button>
                    
                    </div>                    
                </div>
            }

        </section>
    )
}