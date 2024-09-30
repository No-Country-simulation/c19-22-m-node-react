import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import logo from "../../assets/logoSVG.svg";
import { urlBase } from "../../constants/urlBase";
import { PassVisible } from "../icons/PassVisible";
import { PassHidden } from "../icons/PassHidden";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate()


  const urlFer = `${urlBase}/api/v1/users/login`;
  

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  function enviar(e) {
    e.preventDefault();

    fetch(urlFer, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {        
        const token = data.token
        localStorage.setItem('token', token)
        if (token){
          navigate('/home')
        } else {
          navigate('/login')
          return
        }                
      }) 
      .catch((error) => {
        console.log(error);        
      }); 
  }

  

  return (
    <section className="login h-[640px] flex flex-col gap-12 items-center justify-center">
      <div className="flex flex-col gap-3.5 items-center">
        <img
          className="w-[44px]"
          src={logo}
          alt=""
        />
        <h1 className="text-lg text-primario font-semibold">VisionArt</h1>
      </div>

      <div className="w-full max-w-sm">
        <form className="bg-white p-6 pt-2 pb-3 rounded-lg mb-4">
          <div className="mb-4">
            <label
              htmlFor="email-username"
              className="block text-base text-gray-700 font-semibold mb-0">
              Email o Usuario
            </label>
            <input
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              id="email-username"
              name="email-username"
              placeholder="mariaperez@gmail.com"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primario focus:border-transparent border-gray-300"
              required
            />
          </div>
          <div className="mb-12">
            <div className="relative w-full">
              <input
                onChange={(e) => setPassword(e.target.value)}
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={password}
                placeholder="********"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primario focus:border-transparent border-gray-300 pr-12"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 flex items-center px-3 text-custom-gray-80 "                
              >
                {showPassword ? (
                  <PassVisible/>
                ) : (
                  <PassHidden/>
                )}
              </button>
            </div>
          </div>

          <button
            onClick={enviar}
            type="submit"
            id="registrarme"
            className={`w-full py-3 text-lg font-semibold px-4 rounded-lg hover:bg-custom-violet-hover focus:outline-none focus:bg-custom-violet-hover ${
              username && password
                ? "bg-primario text-white"
                : "bg-custom-gray-20 text-custom-gray-80"
            }`}>            
            Iniciar sesión
          </button>
        </form>

        <p className="text-center text-sm">
          No tienes una cuenta?{" "}
          <a
            href="/register"
            className="text-secundario font-semibold">
            REGISTRATE
          </a>
        </p>
      </div>
    </section>
  );
};
