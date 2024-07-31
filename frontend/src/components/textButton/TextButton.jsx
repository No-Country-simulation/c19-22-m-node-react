import './textButton.scss'
/* import MenuList from './MenuList' */
import { useState, useEffect, useRef } from 'react'
import colorPickerIcon from '../../assets/iconoColorPicker.png'
import { PiTextT } from "react-icons/pi";
import ColorPicker from '../colorPicker/ColorPicker';
import { CiTextAlignCenter } from "react-icons/ci";
import { RiFontSize } from "react-icons/ri";
import TextAlign from '../textAlign/TextAlign';
import TextFont from '../textFont/TextFont';
import TextSize from '../textSize/TextSize';
import { X } from '../icons/X';




const TextButton = ({textColorSelected, readyToWrite, crearRef, crearRef1, crearRef2, handleChangeAlign, changeAlign, handleFontChange, fontChange, handleChangeSize, changeSize}) => {
    const [showTEditor, setShowTEditor] = useState(false)
    

    const handleOpenT = () => {
    setShowTEditor(true);
    readyToWrite(true);
};

    const handleCloseT = () => {
        setShowTEditor(false);
        readyToWrite(false);
    };

    const [colorSeleccionado, setColorSeleccionado] = useState('');

    const manejarCambioColor = (color) => {
        setColorSeleccionado(color);
        textColorSelected(color)
    };
    
    

    

    return (
        <div className={showTEditor ? "mg_menu-active mg_menu" : "mg_menu"}> 
            <div>
                <button onClick={handleOpenT} className="text text-custom-gray border border-gray-300 bg-custom-light-gray shadow-md rounded-[6px] p-3">
                    <PiTextT className="h-[24px] w-[24px]"/>                    
                </button>                
            </div>
    
            {showTEditor && (
                <div className={`mg_menu__backdrop ${showTEditor ? 'visible' : ''}`}>
                    <div className="bg-custom-gray-90 menutext">
                        <div className='flex justify-between items-start text-start  gap-2 pb-2'>
                            <div className='flex gap-2'>
                                <button onClick={handleCloseT} className='cursor-pointer text-white'>
                                    <X/>
                                </button>  
                                <h4 className='text-white text-base'>Editar texto</h4>
                            </div>
                            {/* <button className='cursor-pointer text-white'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                </svg>
                            </button> */}                      
                        </div>                                          
                        
                        <div className='container-te py-1 mb-10'>
                            
                            <TextAlign paraPasarRef={crearRef1} handleChangeAlign={handleChangeAlign} changeAlign={changeAlign}/>
                            
                            <ColorPicker textColor paraPasarRef={crearRef} sendClean={() => {}} onColorChange={manejarCambioColor}/>

                            <TextFont paraPasarRef={crearRef2} handleFontChange={handleFontChange} fontChange={fontChange}/>

                            <TextSize handleChangeSize={handleChangeSize}  changeSize={changeSize}/>
                            
                            
                        </div>
                        
                           
                                                  
                        
                    </div>   
                </div>
            )}
        </div>
    )
}

export default TextButton