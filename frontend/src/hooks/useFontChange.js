import { useState } from "react"

export const useFontChange = () => {
    const [fontChange, setFontChange] = useState('montserrat')
    

    const handleFontChange = () => {
        if (fontChange == 'montserrat')
        { playfair()}
        else if (fontChange == 'playfair')
            { oswald()}
        else if (fontChange == 'oswald')
            { dancing()}
        else if (fontChange == 'dancing')
            { bitter()}
        else {
            montserrat()
        }
    }
    

    const montserrat = () => {
        setFontChange('montserrat')
    }    
    const playfair = () => {
        setFontChange('playfair')
    }
    const oswald = () => {
        setFontChange('oswald')
    }
    const dancing = () => {
        setFontChange('dancing')
    }
    const bitter = () => {
        setFontChange('bitter')
    }

    return { handleFontChange, fontChange}
}