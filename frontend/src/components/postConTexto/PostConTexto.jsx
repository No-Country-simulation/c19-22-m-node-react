import React from "react";




export const PostConTexto = ({colorSeleccionado, changeAlign, fontChange, changeSize, colorSeleccionadoTexto, write, valueTextarea, inputRef, setValueTextarea, profile, homeAndPost, onClick=()=>{}, notifications, publishP1, publishP2}) => {

    //esta clase se aplica en home y postFound
    let classname =  "h-[375px] w-[375px] p-4 mx-auto box-border max-w-full"

    if (publishP1){
        classname = "h-[375px] w-[375px] p-4 mt-6 mx-auto box-border max-w-full"
    }
    /* if (publishP2) {
        classname = "h-[191px] w-[191px] mt-2 p-2 overflow-hidden scale-50"
    } */
    if (profile) {
        classname =  "w-full h-full aspect-square object-cover object-center"
    }
    if (notifications) {
        classname = "origin-top-left w-[375px] h-[375px] rounded-lg scale-0.12"
    } 
    
  
    
    let classnameDiv2 = "mx-auto w-full h-full box-border outline-none border-none bg-transparent focus:ring-0 focus:outline-none resize-none overflow-hidden text-center grid items-center"

    if (profile){
        classnameDiv2 = "mx-auto w-full h-full box-border outline-none border-none bg-transparent focus:ring-0 focus:outline-none text-center grid items-center scale-0.3"
    } 
    if (homeAndPost){
        classnameDiv2 = "mx-auto w-full h-full box-border outline-none border-none bg-transparent focus:ring-0 focus:outline-none text-center grid items-center"
    }


  
    return (
        <div className={classname} style={{backgroundColor: colorSeleccionado}} onClick={onClick}>
                        <div onClick={onClick} className={classnameDiv2} >
                            {profile || homeAndPost? 
                            <div className={`w-full box-border outline-none border-none bg-transparent focus:ring-0 focus:outline-none overflow-hidden resize-none text-${changeAlign} font-${fontChange} text-${changeSize}`}
                            style={{ color: colorSeleccionadoTexto }}>
                                {valueTextarea}
                            </div>
                            :
                            //esto se aplica al publishP1
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



