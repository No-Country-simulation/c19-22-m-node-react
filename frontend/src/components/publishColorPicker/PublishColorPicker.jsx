
import React from "react";
import { PiTextT } from "react-icons/pi";
import ColorPicker from "../colorPicker/ColorPicker";

import { useState } from "react";
import TextButton from "../textButton/TextButton";
import Camera from "../camera/Camera";




export const PublishColorPicker = () => {

    const [colorSeleccionado, setColorSeleccionado] = useState('');
    const [colorSeleccionadoTexto, setColorSeleccionadoTexto] = useState('');

    const manejarCambioColor = (color) => {
        setColorSeleccionado(color);
    };

    const manejarCambioColorTexto = (color) => {
        setColorSeleccionadoTexto(color);
    };

    console.log(colorSeleccionado)

    return (
        <section className='publish'>
            {colorSeleccionado?
            <div className="h-[375px] w-[375px] mt-6 p-4" style={{backgroundColor: colorSeleccionado}}>
                <textarea className="w-full h-full box-border outline-none border-none bg-transparent focus:ring-0 focus:outline-none resize-none overflow-hidden text-center" style={{ color: colorSeleccionadoTexto }}></textarea>
            </div>:
            <div className="h-[375px] w-[375px] bg-custom-gray-10 mt-6 p-4">
                <div className=" h-[343px] w-[343px] border-2 border-dashed border-gray-500 rounded-[16px] flex flex-col items-center justify-center"> 
                    <p className="w-[265px] text-base text-center text-custom-black">Sube una imagen de tu galería, toma una foto o elige un color de fondo.</p>
                </div>            
            </div>}
            
            
            
            <div className="icons flex gap-4 items-center justify-center py-4">
                <button className="upload border border-gray-300 shadow-md rounded-[6px] p-3"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                    </svg>
                    {/* <input type="filled" accept="image/*" capture='user'/> */}
                </button>
                {/* <button className="camera border border-gray-300 shadow-md rounded-[6px] p-3"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
                    </svg>
                </button> */}
                <Camera/>
                {/* <button className="color-picker border border-gray-300 shadow-md rounded-[6px] p-3"><img src={colorPicker} className="h-[24px] w-[24px]" alt="" />
                </button> */}
                <ColorPicker onColorChange={manejarCambioColor}/>
                
                
                {colorSeleccionado?
                    
                    <TextButton textColorSelected={manejarCambioColorTexto}/>:
                    <button className="text text-custom-gray border border-gray-300 bg-custom-gray-20 shadow-md rounded-[6px] p-3"><PiTextT className="h-[24px] w-[24px]"/>
                    </button>}
            </div>
            
            <div>
                <h4 className="text-center text-custom-gray-80 text-sm p-4">CONTINUAR</h4>
            </div>
            
            
            
        </section>
    )
  }