
import { useState, useEffect, useRef } from 'react'


import { CiTextAlignCenter } from "react-icons/ci";
import { CiTextAlignLeft } from "react-icons/ci";
import { CiTextAlignRight } from "react-icons/ci";
import { useAlignChange } from '../../hooks/useAlignChange';


const TextAlign = ({ handleChangeAlign, changeAlign, paraPasarRef }) => {
    
    
    
    if (paraPasarRef){
        paraPasarRef()
    }
    
    /* console.log('align en el TextAlign.jsx', changeAlign) */


    return (
        <button onClick={handleChangeAlign} className='aligning_text text-white'>                              
                            
            {changeAlign == 'center'? (
                <CiTextAlignCenter className="h-[24px] w-[24px]"/>
            ): changeAlign == 'left'?
                (<CiTextAlignLeft className="h-[24px] w-[24px]"/>)
            : (<CiTextAlignRight className="h-[24px] w-[24px]"/>
            )
            }
        </button>
    )
}

export default TextAlign