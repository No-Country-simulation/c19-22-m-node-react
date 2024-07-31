import './ColorPicker.scss'
import { useState, useEffect, useRef } from 'react'
import colorPickerIcon from '../../assets/iconoColorPicker.png'
import { X } from '../icons/X'



const ColorPicker = ({ onColorChange, sendClean, paraPasarRef, background, textColor }) => {
    const [showCP, setShowCP] = useState(false)

    
    console.log('showCP', showCP)
    
    const handleOpenCP = () => {
        setShowCP(true)        
        sendClean(true)
    }

    const handleCloseCP = () => {
        setShowCP(false)
        if (paraPasarRef){
            paraPasarRef()
        }
        
    }

    const colors = ['#F3F3F3', '#FFF8CA', '#CCD29A', '#B1D9D8', '#CDB9D6', '#FFAAA0', '#9E9E9E', '#C3B170', '#808900', '#10888D', '#945CCB', '#D44939', '#858585', '#73673E', '#545A00', '#0F4956', '#51247E', '#742909',  ];
    const [selectedColor, setSelectedColor] = useState(null);

    const handleColorChange = (color) => {
        setSelectedColor(color);
        onColorChange(color); // Envía el color seleccionado al componente padre
    };


    let classname =  "h-[375px] w-[375px] mt-6 p-4 mx-auto box-border max-w-full"
    if (background) {
        classname =  'color-picker border border-gray-300 shadow-md rounded-[6px] p-3 cursor-pointer'
    } if (textColor) {
        classname = 'color-picker p-3 cursor-pointer'
    }


    return (
        <div className={showCP ? "mg_menu-active mg_menu" : "mg_menu"}> 
            <div>
                <button onClick={handleOpenCP} className={classname}>
                    <img src={colorPickerIcon} className="h-[24px] w-[24px]" alt="" />
                </button>                
            </div>
    
            {showCP && (
                <div className={`mg_menu__backdrop ${showCP ? 'visible' : ''}`}>
                <div className="menucolor">
                    <div className='flex justify-start items-start text-start gap-2 pb-2'>
                        <button onClick={handleCloseCP} className='cursor-pointer text-white'>
                            <X/>
                        </button>  
                        <h4 className='text-white text-base'>Paleta de colores</h4>
                    </div>                                          
                        
                        <div className='container-cp py-1 mb-10'>
                            <div className="color-picker">
                                {colors.map((color) => (
                                    <label key={color} className="color-option">
                                    <input
                                        type="radio"
                                        name="color"
                                        value={color}
                                        checked={selectedColor === color}
                                        onChange={() => handleColorChange(color)}
                                    />
                                    <span className="color-circle" style={{ backgroundColor: color }}>
                                        {selectedColor === color && <span className="inner-circle"></span>}
                                    </span>
                                    </label>
                                ))}
                                
                            </div>
                        </div>
                    </div>   
                </div>
            )}
        </div>
    )
}

export default ColorPicker