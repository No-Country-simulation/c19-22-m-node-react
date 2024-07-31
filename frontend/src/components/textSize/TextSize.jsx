import { useState, useEffect, useRef } from 'react'

import { RxFontSize } from "react-icons/rx";

import { useAlignChange } from '../../hooks/useAlignChange';


const TextSize = ({ handleChangeSize, changeSize}) => {
    
    
    
    /* if (paraPasarRef){
        paraPasarRef()
    } */
    
    console.log('size en el TextSize.jsx', changeSize)


    return (
        <button onClick={handleChangeSize} className='changuing_size text-white text-2xl'>                            
            <RxFontSize />
        </button>
    )
}

export default TextSize