import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import logo from "../../assets/logoSVG.svg";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate()


  const urlFer = "http://viaduct.proxy.rlwy.net:25260/api/v1/users/login";
  

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
        console.log(data);
               
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-5">
                    <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                    <path
                      fillRule="evenodd"
                      d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-5">
                    <path d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM22.676 12.553a11.249 11.249 0 01-2.631 4.31l-3.099-3.099a5.25 5.25 0 00-6.71-6.71L7.759 4.577a11.217 11.217 0 014.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113z" />
                    <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0115.75 12zM12.53 15.713l-4.243-4.244a3.75 3.75 0 004.244 4.243z" />
                    <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 00-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 016.75 12z" />
                  </svg>
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
