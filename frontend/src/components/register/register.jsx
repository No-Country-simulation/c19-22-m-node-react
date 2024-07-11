import React from "react";
/* import "./register.css"; */

export const Register = () => {
    return (
        <section className='register'>
            <h2 className='pl-6 pb-6 pt-14 font-bold text-2xl'>Registro</h2>
            <form className="bg-white p-6 pt-2 pb-14 rounded-lg shadow-md w-full max-w-sm mb-4">
                <div className="mb-6">                    
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        placeholder="Nombre"
                        className="w-full px-4 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-violet focus:border-transparent border-gray-300"
                    />
                </div>
                <div className="mb-6">                    
                    <input
                        type="text"
                        id="apellido"
                        name="apellido"
                        placeholder="Apellido"
                        className="w-full px-4 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-violet focus:border-transparent border-gray-300"
                    />
                </div>
                <div className="mb-6">                    
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        className="w-full px-4 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-violet focus:border-transparent border-gray-300"
                    />
                </div>
                <div className="mb-6">                    
                    <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Nombre de usuario"
                        className="w-full px-4 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-violet focus:border-transparent border-gray-300"
                    />
                </div>
                <div className="mb-6">                    
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Contraseña"
                        className="w-full px-4 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-violet focus:border-transparent border-gray-300"
                    />
                </div>
                <div className="mb-14">                    
                    <input
                        type="password"
                        id="repeatPassword"
                        name="repeatPassword"
                        placeholder="Repetir contraseña"
                        className="w-full px-4 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-violet focus:border-transparent border-gray-300"
                    />
                </div>
                <button type="submit" id="registrarme" className="w-full py-2 px-4 bg-custom-violet text-white rounded-lg hover:bg-custom-violet-hover focus:outline-none focus:bg-custom-violet-hover">
                 Registrarme
                </button>
            </form>     
                
            <p className="text-center text-xs">¿Ya tienes una cuenta? <a href="#" className="text-custom-violet font-semibold">Inicia sesión</a></p>                       
        </section>
    )
  }