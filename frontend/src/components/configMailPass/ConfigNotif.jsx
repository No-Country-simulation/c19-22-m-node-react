import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { ArrowBackIcon } from "../icons/ArrowBackIcon";
import { ToggleSwitch } from "./ToggleSwitch";


export const ConfigNotif = () => {

    let navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    }

    const handleActivate = () => {
        console.log('Función activada');
        // Aquí puedes poner la lógica que quieres ejecutar cuando se activa
      };
    
      const handleDeactivate = () => {
        console.log('Función desactivada');
        // Aquí puedes poner la lógica que quieres ejecutar cuando se desactiva
      };




    return (
        <section>
            <div className='bg-custom-gray-90 flex items-center h-[48px] shadow-down-dark-md'>
                <button onClick={handleBack} className='text-white px-4 py-2'>
                    <ArrowBackIcon/>
                </button>
                <h2 className='text-base text-white font-semibold'>Notificaciones</h2>
            </div>
        
        <div className="p-4 flex flex-col gap-6">
            <div className='pausar_row flex justify-between'>
                <div>
                    <h4 className='text-base font-semibold'>Pausar todas</h4>
                    <p className='text-xs'>Pausar notificaciones temporalmente</p>
                </div>
                <ToggleSwitch onActivate={handleActivate} onDeactivate={handleDeactivate} />              
            </div>

            <div className='linea-div flex justify-center items-center '>
                    <div className='linea-divisoria w-[343px] h-[2px] bg-custom-gray-20'></div>
            </div>

            <div className='comentarios flex justify-between'>
                <div>
                    <h4 className='text-base font-semibold'>Comentarios recibidos</h4>
                    <p className='text-xs'>maria.perez comentó tu publicación.</p>
                </div>
                <ToggleSwitch onActivate={handleActivate} onDeactivate={handleDeactivate} />              
            </div>

            <div className='comentarios flex justify-between'>
                <div>
                    <h4 className='text-base font-semibold'>Me gusta recibidos</h4>
                    <p className='text-xs'>A maria.perez le gustó tu publicación.</p>
                </div>
                <ToggleSwitch onActivate={handleActivate} onDeactivate={handleDeactivate} />              
            </div>

            <div className='nuevos-seguidores flex justify-between'>
                <div>
                    <h4 className='text-base font-semibold'>Nuevos seguidores</h4>
                    <p className='text-xs'>maria.perez comenzo a seguirte.</p>
                </div>
                <ToggleSwitch onActivate={handleActivate} onDeactivate={handleDeactivate} />              
            </div>
        </div>
            



        </section>
    )
}