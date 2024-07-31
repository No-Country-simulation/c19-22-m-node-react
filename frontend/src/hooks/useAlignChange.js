import { useState } from "react"

export const useAlignChange = () => {
    const [changeAlign, setChangeAlign] = useState('center')
    

    const handleChangeAlign = () => {
        if (changeAlign == 'center') { 
            alignLeft()
        } else if (changeAlign == 'left') { 
            alignRight()
        } else {
            alignCenter()
        }
    }
    

    const alignCenter = () => {
        setChangeAlign('center')
    }
    
    const alignLeft = () => {
        setChangeAlign('left')
    }
    const alignRight = () => {
        setChangeAlign('right')
    }

    return { handleChangeAlign, changeAlign}
}