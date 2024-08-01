

export const PostTextoProfile = ({colorSeleccionado, changeAlign, fontChange, changeSize, colorSeleccionadoTexto, write, valueTextarea, inputRef, setValueTextarea, profile, homeAndPost, onClick=()=>{}, notifications, publishP1, publishP2}) => {

    
   
        const classname =  "w-full h-full aspect-square object-cover object-center"
    
    
    
  
    
   

    
        const classnameDiv2 = "mx-auto w-full h-full box-border outline-none border-none bg-transparent focus:ring-0 focus:outline-none text-center grid items-center"
     
    


  
    return (
        <div className={classname} style={{backgroundColor: colorSeleccionado}} onClick={onClick}>
                        <div onClick={onClick} className={classnameDiv2} >
                            {profile || homeAndPost? 
                            <div className={`p-1 w-full box-border outline-none border-none bg-transparent focus:ring-0 focus:outline-none overflow-hidden resize-none text-${changeAlign} font-${fontChange} ${changeSize == 'sm'&& 'text-tercio-xs'} ${changeSize == 'lg'&& 'text-tercio-mediano'} ${changeSize == '2xl'&& 'text-tercio-2xl'}`}
                            style={{ color: colorSeleccionadoTexto }}>
                                {valueTextarea}
                            </div>
                            :
                            //esto se aplica al publishP1
                            <textarea onClick={onClick}
                            name="" 
                            id="" 
                            className={`w-full h-full content-center box-border outline-none border-none bg-transparent focus:ring-0 focus:outline-none overflow-hidden resize-none text-${changeAlign} font-${fontChange} text-${changeSize}`}
                            style={{ color: colorSeleccionadoTexto }}
                            disabled={!write}
                            value = {valueTextarea}
                            onChange={(e) => {
                            /* inputRef.current.style.height = 'auto'
                            inputRef.current.style.height = (inputRef.current.scrollHeight) + 'px'; */
                            setValueTextarea(e.target.value)
                            }}
                            ref={inputRef}
                            ></textarea>
                            }
                            
                        </div>
                    </div>
    )
  }