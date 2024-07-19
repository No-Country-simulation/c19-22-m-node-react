import './MGlassMenu.scss'
/* import MenuList from './MenuList' */
import { useState, useEffect, useRef } from 'react'



const MGlassMenu = () => {
    const [showMGlass, setShowMGlass] = useState(false)
    const inputRef = useRef(null)

    useEffect(() => {
        if (showMGlass && inputRef.current) {
            inputRef.current.focus()
        }
    }, [showMGlass])

    const handleOpenMG = () => {
        setShowMGlass(true)
    }

    const handleCloseMG = () => {
        setShowMGlass(false)
    }

    return (
        <div className={showMGlass ? "mg_menu-active mg_menu" : "mg_menu"}> 
            <div>
                <button onClick={handleOpenMG} className='magnifying-glass_icon_menu  text-white p-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </button>                
            </div>
    
            {showMGlass && (
                <div className='mg_menu__backdrop' onClick={handleCloseMG}>
                    <div onClick={(e) => e.stopPropagation()} className="mg_menulist">
                        <button onClick={handleCloseMG} className='mg_menulist_close_icon cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </button>                    
                        <div className='mg_row'>
                            <div className="mg_search items-left rounded-md border border-gray-300">                  
                                <input
                                    type="text"
                                    className="w-full bg-transparent focus:outline-none px-2"
                                    placeholder="Search"
                                    id="buscar"
                                    ref={inputRef}
                                />
                            </div>
                            <button className='mg_menulist__link'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                </svg>
                            </button>                         
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default MGlassMenu