
import ColorPicker from "../colorPicker/ColorPicker.jsx";
import { useState, useRef, useEffect } from "react";
import TextButton from "../textButton/TextButton.jsx";
import Upload from "../upload/Upload.jsx";
import { useAlignChange } from '../../hooks/useAlignChange.js';
import { useFontChange } from '../../hooks/useFontChange.js';
import { useSizeChange } from "../../hooks/useSizeChange.js";
import { X } from "../icons/X.jsx";
import { useNavigate } from "react-router-dom";
import { PostConTexto } from "../postConTexto/PostConTexto.jsx";

import { CameraIcon } from "../icons/CameraIcon.jsx";
import { TextoDesactivado } from "../buttons/TextoDesactivado.jsx";
import { PantallaLimpia } from "./PantallaLimpia.jsx";
import { urlBase } from "../../constants/urlBase.js";




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

    let navigate = useNavigate()


//****************************************************************************** */
    
    //FUNCION PARA MANEJAR EL UPLOAD IMAGE

    const [selectedImage, setSelectedImage] = useState(null);

    
   //FUNCIONES PARA TRAER DEL COMPONENTE UPLOAD LAS VARIABLES
  

   const handleImageChange = (image) => {
     setPantallaLimpia(false)
     setSelectedImage(image)     
   }
   
 
   const handleClean = (value) => {
        setPantallaLimpia(true)
        setValueTextarea('')
        setColorSeleccionado('')
        setPicDone(null)    
   }


   /* useEffect(() => {
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
   
//    const [selectedImage, setSelectedImage] = useState(null);

//     const inputFile = useRef()

//     const handleOpenInput = () => {
//          /* setPantallaLimpia(true) */
//          setValueTextarea('')
//          setColorSeleccionado('')
//          setPicDone(null)
//          inputFile.current.click()
//      }

//      const handleUpload = (e) => {        
//          const file = e.target.files[0]
//          if (file) {
//              const reader = new FileReader()
//              reader.onloadend = () => {
//                  setSelectedImage(reader.result)
//                  setPantallaLimpia(false)
//              }
//          reader.readAsDataURL(file)
//          }
//      }


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
    const handleColorPickerClick = () => {
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
     
        const handleDeleteTag = (id) => () => {        
         setSelectedTag({
             ...selectedTag, 
             [id]: ''
         })
         }





    // BOTON CANCELAR     
    const handleVolverAEditarPublish = () => {
        setContinuar(false)
        setDescripcionPost('')
        setSelectedTag({1: '', 2: '', 3: '', 4: '', 5: ''})
    }


   

    //TODOS LOS ESTADOS DE MOMENTO
    const handlePublicar = () => {
        /* console.log('total estados: ', 'selectedImage:', selectedImage ,'pic Done:', picDone, 'color Seleccionado:', colorSeleccionado, 'value textarea:', valueTextarea, 'change size', changeSize, 'changeAlign', changeAlign, 'font', fontChange, 'color texto', colorSeleccionadoTexto, 'DescripcionPost:', descripcionPost, 'Etiquetas') */
        
        const formData = new FormData()
        formData.append('content', valueTextarea)
        formData.append('backgroundColor', colorSeleccionado)
        formData.append('textColor', colorSeleccionadoTexto)
        formData.append('fontSize', changeSize)
        formData.append('fontFamily', fontChange)
        formData.append('fontAlign', changeAlign)
        const tagsName = Object.values(selectedTag).filter(value=> value != '')        
        const tagIds = tagsName.map(name => {
            let id
            mockEtiquetas.forEach(etiqueta => {
                if(etiqueta.name == name){
                    id = etiqueta.id
                }
            })
            return id
        }).join(',')        

        formData.append('description', descripcionPost)

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
            formData.append('img', webcamFile, 'foto.png')
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
            formData.append('img', uploadedFile, `imagen.${imageType.split('/')[1]}`)
        }
        

        fetch(`${urlBase}/api/v1/posts`, {
            method: 'POST',
            body: formData,
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(data => data.json())
        .then((data)=> {
            navigate('/profile')
        })            
    }


    




    //************************************************* */
    //RETURN RENDERIZACION

    return (
        <section className='publish'>
            {!continuar? (
            <div>
                {pantallaLimpia ? (
                    <PantallaLimpia/>
                ) : selectedImage ? (
                    <div className="h-[375px] w-[375px] mx-auto box-border max-w-full mt-6 overflow-hidden">                    
                        <img className="w-full h-full object-cover" src={selectedImage} alt=""/>
                    </div>
                ) : colorSeleccionado ? (
                    <PostConTexto colorSeleccionado={colorSeleccionado} changeAlign={changeAlign} fontChange={fontChange} changeSize={changeSize} colorSeleccionadoTexto={colorSeleccionadoTexto} write={write} valueTextarea={valueTextarea} inputRef={inputRef} setValueTextarea={setValueTextarea} publishP1/>
                ) 
                : picDone ? (
                    <div className="picDone relative mx-auto h-[375px] w-[375px] max-w-full box-border mt-6">
                        <div className="w-full h-full box-border outline-none border-none bg-transparent focus:ring-0 focus:outline-none resize-none overflow-hidden text-center grid items-center" >
                            <img src={picDone} alt="Foto capturada" className="w-full h-full object-cover" />
                            {/* <textarea 
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
                            ></textarea> */}
                        </div>                    
                    </div>
                ) 
                : videoRender ? (
                        <div className="h-[375px] w-[375px] mt-6 p-0 overflow-hidden max-w-full mx-auto relative flex flex-col justify-end items-center">
                            <img src="" alt="" className="hidden" ref={imageR}/>
                            <video className="mostrar-video h-full w-full object-cover object-center" autoPlay ref={videoRef}></video>
                            <button onClick={tomarFoto} className="absolute bottom-5 py-2 px-4 bg-white rounded-md">Capturar</button>
                        </div>
                )
                : <PantallaLimpia/>}
                

                {/* FILA DE BOTONES: UPLOAD - CAMARA - COLORPICKER - TEXTO */}
                <div className="ICONS-ROW flex gap-4 items-center justify-center py-4">
                    {/* BOTON UPLOAD */}                    
                    {/* <input type="file" ref={inputFile} className="hidden" accept="image/*" onChange={handleUpload}/>
                    <button onClick={handleOpenInput} className='upload border-gray-300 shadow-md rounded-[6px] p-3 '>
                        <UploadIcon/>                    
                    </button>   */}
                    <Upload sendClean={handleClean} onImageChange={handleImageChange}/>


                    {/* BOTON WEBCAM */}
                    <button onClick={abrirWebcam} className="upload border border-gray-300 shadow-md rounded-[6px] p-3">
                        <CameraIcon/>                        
                    </button>
                    <canvas className="hidden" ref={pic}></canvas>
                    
                
                    {/* BOTON COLOR DE FONDO */}
                    <ColorPicker background sendClean={handleColorPickerClick} onColorChange={manejarCambioColor} />
                    

                    {/* BOTON TEXTO, activado o desactivado */}
                    {colorSeleccionado? (
                        <TextButton fontChange={fontChange} handleFontChange={handleFontChange} handleChangeAlign={handleChangeAlign} changeAlign={changeAlign} crearRef={focus} crearRef1={focus} crearRef2={focus} readyToWrite={handleWrite} textColorSelected={manejarCambioColorTexto} handleChangeSize={handleChangeSize} changeSize={changeSize}/>
                    ) : <TextoDesactivado/>}                    
                </div>
                

                {/* BOTON CONTINUAR */}
                <div className="flex justify-center">
                    <button onClick={handlePasarPantalla}>
                        <h4 className="text-center text-custom-gray-80 text-sm p-4">CONTINUAR</h4>
                    </button>                    
                </div>
            </div>


            /* PANTALLA 2 */
            ) : <div className="">
                    {/* PREVIEW IMAGEN PUBLICACION */}
                    <div className="flex flex-col items-center">
                        <div className="h-[191px] w-[191px] mt-2 p-4 overflow-hidden">
                            {selectedImage && (<img className="w-full h-full object-cover" src={selectedImage} alt="" />)}
                            {picDone && 
                                (
                                    <div className="relative w-full h-full box-border outline-none border-none bg-transparent focus:ring-0 focus:outline-none resize-none overflow-hidden text-center grid items-center" >
                                        <img src={picDone} alt="Foto capturada" className="w-full h-full object-cover" />
                                    </div>                    
                                )}
                            {colorSeleccionado && (
                                <div className="h-full w-full p-2" style={{backgroundColor: colorSeleccionado}}>
                                    <div  className="h-full overflow-hidden outline-none border-none bg-transparent focus:ring-0 focus:outline-none resize-none grid items-center">
                                        <textarea 
                                                name="" 
                                                id="" 
                                                className={`h-full content-center w-full box-border outline-none border-none bg-transparent focus:ring-0 focus:outline-none overflow-hidden resize-none text-${changeAlign} font-${fontChange} ${changeSize == 'lg'&& 'text-2xxs'} ${changeSize == 'sm'&& 'text-mitad-sm'} ${changeSize == '2xl'&& 'text-mitad-2xl'}`}
                                                style={{ color: colorSeleccionadoTexto }}
                                                disabled={!write}
                                                value = {valueTextarea}   
                                                readOnly
                                        ></textarea>
                                    </div>
                                </div>
                            )}
                        </div>                    
                    </div>


                    {/* DESCRIPCION */}
                    <div className="para-centrar-input flex flex-col items-center mt-2">
                        <textarea type="text" placeholder="Puedes agregar texto a modo de pie de imagen o comentario." 
                                value={descripcionPost} onChange={(e) => {setDescripcionPost(e.target.value)}} className="h-[72px] w-[343px] border rounded-lg focus:outline-none focus:ring-2  focus:border-transparent border-gray-300 pl-4 py-2 pr-3"></textarea>
                    </div>
                    


                    {/* ETIQUETAS */}
                    <div className="seccion-etiquetas mt-8"></div>
                        <h4 className="pl-5 font-semibold">Etiquetas de publicación</h4>
                        <p className="w-[350px] pl-5 pb-1 text-custom-gray-50 text-almost-base">Escribe 5 etiquetas clave.</p>
                        <div className="para-centrar-input flex flex-col items-center">
                            <div className="h-[80px] w-[343px] border rounded-lg focus:outline-none focus:ring-2 focus:ring-primario focus:border-transparent border-gray-300 flex flex-wrap p-2">
                                <div className={`input-y-X flex items-center my-1 mr-1 rounded-md ${selectedTag[1] ? 'bg-custom-gray-80 pl-1' : 'bg-transparent'}`}>
                                    <input list="datalistForInput" id="tagInput1" type="text" value={selectedTag[1]} className={`h-[25px] w-[80px] text-sm ${selectedTag[1] ? 'bg-custom-gray-80 text-white'  : 'bg-transparent'}`} onChange={handleSelectTag(1)}/>
                                    {selectedTag[1] &&
                                    <button onClick={handleDeleteTag(1)} className='cursor-pointer text-white'><X/>
                                    </button> }
                                    
                                </div>
                                <div className={`input-y-X flex items-center my-1 mr-1 rounded-md ${selectedTag[2] ? 'bg-custom-gray-80 pl-1' : 'bg-transparent'}`}>
                                    <input list="datalistForInput" id="tagInput1" type="text" value={selectedTag[2]}  className={`h-[25px] w-[80px] text-sm ${selectedTag[2] ? 'bg-custom-gray-80 text-white'  : 'bg-transparent'}`} onChange={handleSelectTag(2)}/>
                                    {selectedTag[2] &&
                                        <button onClick={handleDeleteTag(2)} className='cursor-pointer text-white'>
                                        <X/>
                                        </button> }
                                    
                                </div>
                                <div className={`input-y-X flex items-center my-1 mr-1 rounded-md ${selectedTag[3] ? 'bg-custom-gray-80 pl-1' : 'bg-transparent'}`}>
                                    <input list="datalistForInput" id="tagInput1" type="text" value={selectedTag[3]} className={`h-[25px] w-[80px] text-sm ${selectedTag[3] ? 'bg-custom-gray-80 text-white'  : 'bg-transparent'}`} onChange={handleSelectTag(3)}/>
                                    {selectedTag[3] &&
                                        <button onClick={handleDeleteTag(3)} className='cursor-pointer text-white'>
                                        <X/>
                                        </button> }
                                    
                                </div>
                                <div className={`input-y-X flex items-center my-1 mr-1 rounded-md ${selectedTag[4] ? 'bg-custom-gray-80 pl-1' : 'bg-transparent'}`}>
                                    <input list="datalistForInput" id="tagInput1" type="text" value={selectedTag[4]} className={`h-[25px] w-[80px] text-sm ${selectedTag[4] ? 'bg-custom-gray-80 text-white'  : 'bg-transparent'}`} onChange={handleSelectTag(4)}/>
                                    {selectedTag[4] &&
                                        <button onClick={handleDeleteTag(4)} className='cursor-pointer text-white'>
                                        <X/>
                                        </button> }
                                    
                                </div>
                                <div className={`input-y-X flex items-center my-1 mr-1 rounded-md ${selectedTag[5] ? 'bg-custom-gray-80 pl-1' : 'bg-transparent'}`}>
                                    <input list="datalistForInput" id="tagInput1" type="text" value={selectedTag[5]} className={`h-[25px] w-[80px] text-sm ${selectedTag[5] ? 'bg-custom-gray-80 text-white'  : 'bg-transparent'}`} onChange={handleSelectTag(5)}/>
                                    {selectedTag[5] &&
                                        <button onClick={handleDeleteTag(5)} className='cursor-pointer text-white'>
                                        <X/>
                                        </button> }                                
                                </div>
                        </div>
                        
                            
                        <datalist id="datalistForInput">
                            {mockEtiquetas.map((etiqueta) => (
                                <div key={etiqueta.id}>
                                    <option value={etiqueta.name}>{etiqueta.name}</option>
                                </div>  
                            ))}
                        </datalist>
                    </div>     



                    {/* BOTONES */}
                    <div className="fila-botones flex flex-row justify-center gap-12 pt-6">
                        <button onClick={handleVolverAEditarPublish}>
                            <h4 className="text-center text-custom-gray-80 text-sm p-4">CANCELAR</h4>
                        </button>
                        <button onClick={handlePublicar}>
                            <h4 className="text-center bg-secundario text-sm text-white py-3 px-7 rounded-md ">Publicar</h4>
                        </button>
                    </div>
                </div>                    
                                        
                
            }

        </section>
    )
}