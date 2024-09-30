import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { urlBase } from "../../constants/urlBase";
import { X } from "../icons/X";
import { Header } from "../header/Header";




export const Register = () => {
  const [name, setName] = useState(null);
  const [surname, setSurname] = useState(null);
  const [email, setEmail] = useState(null);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [repeatP, setRepeatP] = useState(null);
  const [errorP, setErrorP] = useState(null);
  const [errorFetch, setErrorFetch] = useState(null);


  const urlFer = `${urlBase}/api/v1/users/register`; 


  let navigate = useNavigate()

  useEffect(() => {
    if (password != repeatP) {
      setErrorP(true);
      return;
    } else {
      setErrorP(false);
    }
  }, [password, repeatP]);


  function enviar(e) {
    e.preventDefault();

    if (password != repeatP) {
      setErrorP(true);
      return;
    } else {
      setErrorP(false);
    }

    fetch(urlFer, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        lastname: surname,
        mail: email,
        username,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        /* data.status */
        const token = data.token
        localStorage.setItem('token', token)
        navigate('/home')
      })
      .catch (error =>{
        console.log(error)
        setErrorFetch(true)
      })
  }



  if (errorFetch) {
    return (
      <div>
        <Header/>
        <p className="text-center text-sm font-semibold mt-8">No puedes crear una cuenta por ahora</p>
      </div>
    );
  }

  return (
    <section className="register flex flex-col justify-center items-center">
      <div className="shadow-md p-4 flex justify-center items-center gap-2.5 w-full">
        <a href="/login">
          <X/>
        </a>
        <h2 className=" font-bold text-2xl w-full max-w-sm">Registrarme</h2>
      </div>

      <form className=" p-6 pt-6 pb-6 rounded-lg w-full max-w-sm">
        <div className="mb-4">
          <label
            htmlFor="nombre"
            className="block text-sm text-gray-700 font-semibold mb-0">
            Nombre
          </label>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            id="nombre"
            name="nombre"
            placeholder="María"
            className="w-full px-4 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primario focus:border-transparent border-gray-300"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="apellido"
            className="block text-sm text-gray-700 font-semibold mb-0">
            Apellido
          </label>
          <input
            onChange={(e) => setSurname(e.target.value)}
            type="text"
            id="apellido"
            name="apellido"
            placeholder="Perez"
            className="w-full px-4 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primario focus:border-transparent border-gray-300"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm text-gray-700 font-semibold mb-0">
            Email
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
            name="email"
            placeholder="tuemail@mail.com"
            className="w-full px-4 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primario focus:border-transparent border-gray-300"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-sm text-gray-700 font-semibold mb-0">
            Nombre de usuario
          </label>
          <input
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            id="username"
            name="username"
            placeholder="Maria123"
            className="w-full px-4 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primario focus:border-transparent border-gray-300"
          />
          <p className="text-xs text-custom-gray-80 pt-1">
            Podrás modificarlo después.
          </p>
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm text-gray-700 font-semibold mb-0">
            Contraseña
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="password"
            name="password"
            placeholder="********"
            className="w-full px-4 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primario focus:border-transparent border-gray-300"
          />
          <p className="text-xs text-custom-gray-80 pt-1">
            Debe contener al menos 8 caracteres e incluir 1 número.
          </p>
        </div>

        <div className="mb-12">
          <label
            htmlFor="repeatPassword"
            className="block text-sm text-gray-700 font-semibold mb-0">
            Repetir contraseña
          </label>
          <input
            onChange={(e) => setRepeatP(e.target.value)}
            type="password"
            id="repeatPassword"
            name="repeatPassword"
            placeholder="********"
            className="w-full px-4 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primario focus:border-transparent border-gray-300"
          />
          {/* esto comentado no tiene que estar en github */}
          {/* {errorP? 
                <p className="text-custom-errores text-xs">Las contraseñas no coinciden</p>:
                <p className="text-green-700 text-xs">Las contraseñas coinciden</p>                 
                } */}
          {password !== null &&
            password !== "" &&
            (errorP ? (
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
        <button
          onClick={enviar}
          type="submit"
          id="registrarme"
          className="w-full py-2 px-4 bg-primario text-white rounded-lg hover:bg-primario-hover focus:outline-none focus:bg-primario-hover">
          Registrarme
        </button>
      </form>

      <p className="text-center text-xs pb-6">
        Ya tienes una cuenta?{" "}
        <a
          href="/login"
          className="text-secundario font-semibold">
          INICIA SESION
        </a>
      </p>
    </section>
  );
};