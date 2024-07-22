import './ColorPicker.scss'
import { useState, useEffect, useRef } from 'react'
import colorPickerIcon from '../../assets/iconoColorPicker.png'



const ColorPicker = ({ onColorChange, sendClean }) => {
    const [showCP, setShowCP] = useState(false)
    
    const handleOpenCP = () => {
        setShowCP(true)        
        sendClean(true)
    }

    const handleCloseCP = () => {
        setShowCP(false)
    }

    const colors = ['#F3F3F3', '#FFF8CA', '#CCD29A', '#B1D9D8', '#CDB9D6', '#FFAAA0', '#9E9E9E', '#C3B170', '#808900', '#10888D', '#945CCB', '#D44939', '#858585', '#73673E', '#545A00', '#0F4956', '#51247E', '#742909',  ];
    const [selectedColor, setSelectedColor] = useState(null);

    const handleColorChange = (color) => {
        setSelectedColor(color);
        onColorChange(color); // Envía el color seleccionado al componente padre
    };


    return (
        <div className={showCP ? "mg_menu-active mg_menu" : "mg_menu"}> 
            <div>
                <button onClick={handleOpenCP} className='color-picker border border-gray-300 shadow-md rounded-[6px] p-3 magnifying-glass_icon_menu'>
                    <img src={colorPickerIcon} className="h-[24px] w-[24px]" alt="" />
                </button>                
            </div>
    
            {showCP && (
                <div className='mg_menu__backdrop'>
                    <div className="menucolor">
                        <div className='flex justify-start items-start text-start  gap-2 pb-2'>
                            <button onClick={handleCloseCP} className='cursor-pointer text-white'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
                                </svg>
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