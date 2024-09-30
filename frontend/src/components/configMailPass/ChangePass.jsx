import { useNavigate } from 'react-router-dom';
import { ArrowBackIcon } from "../icons/ArrowBackIcon";
import { useState, useEffect } from "react";


export const ChangePass = () => {

    const [oldPassword, setOldPassword] = useState(null);
    const [errorOldP, setErrorOldP] = useState(null);
    const [newPassword, setNewPassword] = useState(null);
    const [repeatP, setRepeatP] = useState(null);
    const [errorNewP, setErrorNewP] = useState(null);


    useEffect(() => {
        if (newPassword != repeatP) {
          setErrorNewP(true);
          return;
        } else {
          setErrorNewP(false);
        }
      }, [newPassword, repeatP]);


/* hacer un fetch de tipo GET para traerme el password viejo y comparar con el old password que ingresa el user en este formulario */
/* hacer una validacion dentro de un useEffect, de que si password (traido del fetch) y oldPassword no son iguales, poner setErrorOldP(true)
Entonces en el return del componente, si setErrorOldP es true, renderizo un elemento p que diga contraseña incorrecta*/



      function enviar(e) {
        e.preventDefault();    

        if (newPassword != repeatP) {
            setErrorNewP(true);
            return;
          } else {
            setErrorNewP(false);
          }

        // fetch(urlFer, {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //     Accept: "application/json",
        //   },
        //   body: JSON.stringify({            
        //     password: newPassword,
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
            <h2 className='text-base text-white font-semibold'>Cambiar contraseña</h2>
        </div>


      <form className=" p-6 pt-6 pb-6 flex flex-col justify-between min-h-[530px]">
        
                <div className='div-superior-del-form'>
                        <div className="old-password_div mb-4">
                            <label
                                htmlFor="password"
                                className="block text-sm text-gray-700 font-semibold mb-0">
                                Contraseña actual
                            </label>
                            <input
                                onChange={(e) => setOldPassword(e.target.value)}
                                type="password"
                                id="password"
                                name="password"
                                placeholder="********"
                                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primario focus:border-transparent border-gray-300  ${oldPassword && 'bg-secundario-light'}`}
                            />
                            {/* {oldPassword !== null &&
                              oldPassword !== "" &&
                              (errorOldP ? (
                                <p className="text-custom-errores text-xs pt-1">
                                  Contraseña incorrecta
                                </p>
                              ) : null)} */}          
                            </div>        

                        <div className="new-password_div mb-4">
                        <label
                            htmlFor="newpassword"
                            className="block text-sm text-gray-700 font-semibold mb-0">
                            Contraseña nueva
                        </label>
                        <input
                            onChange={(e) => setNewPassword(e.target.value)}
                            type="password"
                            id="newpassword"
                            name="newpassword"
                            placeholder="********"
                            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primario focus:border-transparent border-gray-300  ${newPassword && 'bg-secundario-light'}`}
                        />
                        <p className="text-xs text-custom-gray-80 pt-1">
                            Debe contener al menos 8 caracteres e incluir 1 número.
                        </p>
                        </div>

                        <div className="repeat-new-password_div mb-4">
                        <label
                            htmlFor="repeatPassword"
                            className="block text-sm text-gray-700 font-semibold mb-0">
                            Confirmar contraseña nueva
                        </label>
                        <input
                            onChange={(e) => setRepeatP(e.target.value)}
                            type="password"
                            id="repeatPassword"
                            name="repeatPassword"
                            placeholder="********"
                            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primario focus:border-transparent border-gray-300  ${repeatP && 'bg-secundario-light'}`}
                        />
                        {/* {errorP? 
                                <p className="text-custom-errores text-xs">Las contraseñas no coinciden</p>:
                                <p className="text-green-700 text-xs">Las contraseñas coinciden</p>                 
                                } */}
                        {newPassword !== null &&
                            newPassword !== "" &&
                            (errorNewP ? (
                            <p className="text-custom-errores text-xs pt-1">
                                Las contraseñas no coinciden
                            </p>
                            ) : (
                            <p className="text-green-700 text-xs pt-1">
                                Las contraseñas coinciden
                            </p>
                            ))}
                        </div>
                        {/* {errorMessage && (
                        <div className="mb-4 text-center text-red-600">{errorMessage}</div>
                        )} */}
                        <p className='text-center text-secundario text-xs'>Olvidaste tu contraseña?</p>
                </div>

                
                <button
                onClick={enviar}
                type="submit"
                id="registrarme"
                className={`mt-auto w-full py-2 px-4 rounded-lg ${
                    oldPassword && newPassword && repeatP
                      ? "bg-primario text-white"
                      : "bg-custom-gray-20 text-custom-gray-80"}
                  `}>
                Cambiar
                </button>       
        
      </form>
    </section>
  )
}