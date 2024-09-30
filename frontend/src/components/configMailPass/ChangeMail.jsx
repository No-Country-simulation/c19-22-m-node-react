import { useNavigate } from 'react-router-dom';
import { ArrowBackIcon } from "../icons/ArrowBackIcon";
import { useState, useEffect } from "react";


export const ChangeMail = () => {

    const [password, setPassword] = useState(null);
    const [errorP, setErrorP] = useState(null);
    const [newEmail, setNewEmail] = useState(null);
    


/* hacer un fetch de tipo GET para traerme el password guardado en db y comparar con el password actual que ingresa el user en este formulario */
/* hacer una validacion dentro de un useEffect, de que si password (traido del fetch) y oldPassword no son iguales, poner setErrorP(true)
Entonces en el return del componente, si setErrorOldP es true, renderizo un elemento p que diga contraseña incorrecta*/



      function enviar(e) {
        e.preventDefault();    

        
        // fetch(urlFer, {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //     Accept: "application/json",
        //   },
        //   body: JSON.stringify({            
        //     mail: newEmail,
        //   }),
        // })
        //   .then((res) => res.json())
        //   .then((data) => {
        //     navigate('/profile')
        //   })
        //   .catch (error =>{
        //     console.log(error)
        //     /* setErrorFetch(true) */
        //   })
      }
    

    let navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    }


return(
    <section className="bg-gray-100 min-h-screen">
        <div className='bg-custom-gray-90 flex items-center h-[48px] shadow-down-dark-md'>
            <button onClick={handleBack} className='text-white px-4 py-2'>
                <ArrowBackIcon/>
            </button>
            <h2 className='text-base text-white font-semibold'>Cambiar mail</h2>
        </div>

        
        

      <form className=" p-6 pt-6 pb-6 flex flex-col justify-between min-h-[530px]">
            <div className='div-superior-del-form'>
                <div className='div-viejo-mail mb-4'>
                    <h4 className='text-base font-semibold'>Mail</h4>
                    <p className='text-xs'>lara.molina@gmail.com</p>
                </div>

                <div className='linea-div flex justify-center items-center mb-4'>
                    <div className='linea-divisoria w-[343px] h-[2px] bg-custom-gray-20'></div>
                </div>

                <div className="new-email_div mb-4">
                    <label
                        htmlFor="newemail"
                        className="block text-sm text-gray-700 font-semibold mb-0">
                        Nuevo mail
                    </label>
                    <input
                        onChange={(e) => setNewEmail(e.target.value)}
                        type="email"
                        id="newemail"
                        name="newemail"
                        placeholder="********"
                        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primario focus:border-transparent focus:bg-white border-gray-300  ${newEmail && 'bg-secundario-light'}`}
                    />                        
                </div>                

                <div className="old-password_div mb-4">
                    <label
                        htmlFor="password"
                        className="block text-sm text-gray-700 font-semibold mb-0">
                        Contraseña actual
                    </label>
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        id="password"
                        name="password"
                        placeholder="********"
                        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primario focus:border-transparent border-gray-300  ${password && 'bg-secundario-light'}`}
                    />
                    {/* {password !== null &&
                        password !== "" &&
                        (errorP ? (
                        <p className="text-custom-errores text-xs pt-1">
                            Contraseña incorrecta
                        </p>
                        ) : null)} */}          
                </div>
            </div>

                
                <button
                onClick={enviar}
                type="submit"
                id="cambiar"
                className={`mt-auto w-full py-2 px-4 rounded-lg ${
                    password && newEmail
                      ? "bg-primario text-white"
                      : "bg-custom-gray-20 text-custom-gray-80"}
                  `}>
                Cambiar
                </button>       
        
      </form>
    </section>
  )
}