import React from "react";

export const Register = () => {
    return (
        <section className='register'>
            <h2 className='pl-6 pb-4 pt-7 font-bold text-2xl'>Registro</h2>
            <form className="bg-white p-6 pt-2 pb-10 rounded-lg shadow-md w-full max-w-sm mb-4">
                <div className="mb-4">
                    <label htmlFor="nombre" className="block text-sm text-gray-700 font-semibold mb-0">
                        Nombre
                    </label>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        placeholder="María"
                        className="w-full px-4 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-violet focus:border-transparent border-gray-300"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="apellido" className="block text-sm text-gray-700 font-semibold mb-0">
                       Apellido
                    </label>
                    <input
                        type="text"
                        id="apellido"
                        name="apellido"
                        placeholder="Perez"
                        className="w-full px-4 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-violet focus:border-transparent border-gray-300"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm text-gray-700 font-semibold mb-0">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="tuemail@mail.com"
                        className="w-full px-4 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-violet focus:border-transparent border-gray-300"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="username" className="block text-sm text-gray-700 font-semibold mb-0">
                    Nombre de usuario
                    </label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Maria123"
                        className="w-full px-4 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-violet focus:border-transparent border-gray-300"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-sm text-gray-700 font-semibold mb-0">
                        Contraseña
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="********"
                        className="w-full px-4 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-violet focus:border-transparent border-gray-300"
                    />
                </div>
                <div className="mb-8">
                    <label htmlFor="repeatPassword" className="block text-sm text-gray-700 font-semibold mb-0">
                        Repetir contraseña
                    </label>
                    <input
                        type="password"
                        id="repeatPassword"
                        name="repeatPassword"
                        placeholder="********"
                        className="w-full px-4 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-violet focus:border-transparent border-gray-300"
                    />
                </div>
                <button type="submit" id="registrarme" className="w-full py-2 px-4 bg-custom-violet text-white rounded-lg hover:bg-custom-violet-hover focus:outline-none focus:bg-custom-violet-hover">
                 Registrarme
                </button>
            </form>     
                
            <p className="text-center text-xs">Ya tienes una cuenta? <a href="#" className="text-custom-violet font-semibold">Inicia sesión</a></p>                       
        </section>
    )
  }