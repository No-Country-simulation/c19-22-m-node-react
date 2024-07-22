
import React from "react";
import { PiTextT } from "react-icons/pi";
import ColorPicker from "../colorPicker/ColorPicker";

import { useState, useRef, useEffect } from "react";
import TextButton from "../textButton/TextButton";
import Upload from "../upload/Upload";




export const PublishColorPicker = () => {
    const [colorSeleccionado, setColorSeleccionado] = useState('');
    const [colorSeleccionadoTexto, setColorSeleccionadoTexto] = useState('');
    const [pantallaLimpia, setPantallaLimpia] = useState(true);
    const [videoRender, setVideoRender] = useState(null);
    const [picDone, setPicDone] = useState(null);
    const [write, setWrite] = useState(false);
    const videoRef = useRef()
    const pic = useRef()
    const imageR = useRef()

    const manejarCambioColor = (color) => {
        setColorSeleccionado(color);
        setPicDone(null);
        setPantallaLimpia(false);
    };


    const manejarCambioColorTexto = (color) => {
        setColorSeleccionadoTexto(color);
    };

    const handleWrite = (bool) => {
        setWrite(bool);
    };



    const [currentStream, setCurrentStream] = useState(null);

    const abrirWebcam = async () => {
        try {
            // Si hay un stream activo, detenerlo primero
            if (currentStream) {
                currentStream.getTracks().forEach(track => track.stop());
            }
    
            setColorSeleccionado('');
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


    const handleColorPickerClick = (bool) => {
        setPantallaLimpia(bool)
    };

    return (
        <section className='publish'>
            {pantallaLimpia ? (
                <div className="h-[375px] w-[375px] bg-custom-gray-10 mt-6 p-4">
                    <div className="h-[343px] w-[343px] border-2 border-dashed border-gray-500 rounded-[16px] flex flex-col items-center justify-center"> 
                        <p className="w-[265px] text-base text-center text-custom-black">
                            Sube una imagen de tu galería, toma una foto o elige un color de fondo.
                        </p>
                    </div>            
                </div>
            ) : (colorSeleccionado || picDone) ? (
                <div className="h-[375px] w-[375px] mt-6 p-4" style={{backgroundColor: colorSeleccionado}}>
                    <div  className="w-full h-full box-border outline-none border-none bg-transparent focus:ring-0 focus:outline-none resize-none overflow-hidden text-center" >
                    <textarea 
                            name="" 
                            id="" 
                            className="w-full h-full box-border outline-none border-none bg-transparent focus:ring-0 focus:outline-none resize-none overflow-hidden text-center"
                            style={{ color: colorSeleccionadoTexto }}
                            disabled={!write}
                            ref={inputRef}
                        ></textarea>
                    </div>
                    
                </div>
            ) : picDone ? (
                <div className="h-[375px] w-[375px] mt-6">
                    <img src={picDone} alt="Foto capturada" className="w-full h-full object-cover" />
                </div>
            ) : videoRender ? (
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
                <Upload/>
                <button onClick={abrirWebcam} className="upload border border-gray-300 shadow-md rounded-[6px] p-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
                    </svg>
                    
                </button>
                <canvas className="hidden" ref={pic}></canvas>

                <ColorPicker sendClean={handleColorPickerClick} onColorChange={manejarCambioColor} />
                
                {colorSeleccionado || picDone?
                    <TextButton readyToWrite={handleWrite} textColorSelected={manejarCambioColorTexto}/> :
                    <button className="text text-custom-gray border border-gray-300 bg-custom-gray-20 shadow-md rounded-[6px] p-3">
                        <PiTextT className="h-[24px] w-[24px]"/>
                    </button>
                }
            </div>
            
            <div>
                <h4 className="text-center text-custom-gray-80 text-sm p-4">CONTINUAR</h4>
                
            </div>
        </section>
    )
}