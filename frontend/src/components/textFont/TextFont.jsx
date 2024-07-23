import { useState, useEffect, useRef } from 'react'

import { useFontChange } from '../../hooks/useFontChange';


const TextFont = ({ handleFontChange, fontChange, paraPasarRef}) => {
    
    
    if (paraPasarRef){
        paraPasarRef()
    }
    /* console.log('fontChange en el textFont', fontChange) */


    return (
        <button onClick={handleFontChange} className='text-font text-white'>                              
                            
            {fontChange == 'montserrat'? (
                <p className="h-[24px] w-[24px] font-montserrat">Aa</p>
            ): fontChange == 'playfair'?(
                <p className="h-[24px] w-[24px] font-playfair">Aa</p>                
            ) : fontChange == 'oswald'?(
                <p className="h-[24px] w-[24px] font-oswald">Aa</p>
            ) : fontChange == 'dancing'?(
                <p className="h-[24px] w-[24px] font-dancing">Aa</p>
            ) : (
                <p className="h-[24px] w-[24px] font-bitter">Aa</p>
            )            
            }
        </button>
    )
}

export default TextFont