import { useState } from "react"

export const useSizeChange = () => {
    const [changeSize, setChangeSize] = useState('base')
    

    const handleChangeSize = () => {
        if (changeSize == 'base')
        { sizeBig()}
        else if (changeSize == 'xl')
            { sizeSmall()}
        else {
            sizeMedium()
        }
    }
    

    const sizeMedium = () => {
        setChangeSize('base')
    }
    
    const sizeSmall = () => {
        setChangeSize('sm')
    }
    const sizeBig = () => {
        setChangeSize('xl')
    }

    return { handleChangeSize, changeSize}
}