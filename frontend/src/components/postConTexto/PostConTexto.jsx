import React from "react";




export const PostConTexto = ({colorSeleccionado, changeAlign, fontChange, changeSize, colorSeleccionadoTexto, write, valueTextarea, inputRef, setValueTextarea, profile, onClick=()=>{}, notifications}) => {

    let classname =  "h-[375px] w-[375px] mt-6 p-4 mx-auto box-border max-w-full"
    if (profile) {
        classname =  "w-full h-full aspect-square object-cover object-center"
    }
    if (notifications) {
        classname = "origin-top-left w-[375px] h-[375px] rounded-lg scale-0.12"
    } 
    /* if (publish) {
        classname = "origin-top-left w-[375px] h-[375px] rounded-lg scale-0.12"
    } */
  
    
  
    return (
        <div className={classname} style={{backgroundColor: colorSeleccionado}} onClick={onClick}>
                        <div onClick={onClick} className="mx-auto w-full h-full box-border outline-none border-none bg-transparent focus:ring-0 focus:outline-none resize-none overflow-hidden text-center grid items-center" >
                            {profile? 
                            <div className={`w-full box-border outline-none border-none bg-transparent focus:ring-0 focus:outline-none overflow-hidden resize-none text-${changeAlign} font-${fontChange} text-${changeSize} text-right`}
                            style={{ color: colorSeleccionadoTexto }}>
                                {valueTextarea}
                            </div>
                            :
                            <textarea onClick={onClick}
                            name="" 
                            id="" 
                            className={`w-full box-border outline-none border-none bg-transparent focus:ring-0 focus:outline-none overflow-hidden resize-none text-${changeAlign} font-${fontChange} text-${changeSize}`}
                            style={{ color: colorSeleccionadoTexto }}
                            disabled={!write}
                            value = {valueTextarea}
                            onChange={(e) => {
                            inputRef.current.style.height = 'auto'
                            inputRef.current.style.height = (inputRef.current.scrollHeight) + 'px';
                            setValueTextarea(e.target.value)
                            }}
                            ref={inputRef}
                            ></textarea>
                            }
                            
                        </div>
                    </div>
    )
  }



