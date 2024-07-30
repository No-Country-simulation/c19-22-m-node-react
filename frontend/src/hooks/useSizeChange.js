import { useState } from "react"

export const useSizeChange = () => {
    const [changeSize, setChangeSize] = useState('lg')
    

    const handleChangeSize = () => {
        if (changeSize == 'lg')
        { sizeBig()}
        else if (changeSize == '2xl')
            { sizeSmall()}
        else {
            sizeMedium()
        }
    }
    

    const sizeMedium = () => {
        setChangeSize('lg')
    }
    
    const sizeSmall = () => {
        setChangeSize('sm')
    }
    const sizeBig = () => {
        setChangeSize('2xl')
    }

    return { handleChangeSize, changeSize}
}