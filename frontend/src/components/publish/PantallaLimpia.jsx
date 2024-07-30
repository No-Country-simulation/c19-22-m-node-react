import React from "react";


export const PantallaLimpia = () => {

  return (
    <div className="h-[375px] w-[375px] bg-custom-gray-10 mt-6 p-4">
        <div className="h-[343px] w-[343px] border-2 border-dashed border-gray-500 rounded-[16px] flex flex-col items-center justify-center"> 
            <p className="w-[265px] text-base text-center text-custom-black">
                Sube una imagen de tu galería, toma una foto o elige un color de fondo.
            </p>
        </div>            
    </div>
  )
}