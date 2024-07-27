import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const [name, setName] = useState(null);
  const [surname, setSurname] = useState(null);
  const [email, setEmail] = useState(null);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [repeatP, setRepeatP] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const [errorP, setErrorP] = useState(null);

  const [errorFetch, setErrorFetch] = useState(null);

  const [usernameAlreadyExists, setUsernameAlreadyExists] = useState(null);

  const urlFer = "http://localhost:3000/api/v1/users/register";

  useEffect(() => {
    if (password != repeatP) {
      setErrorP(true);
      return;
    } else {
      setErrorP(false);
    }
  }, [password, repeatP]);

  console.log(password);

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
        if (data.token) {
          localStorage.setItem("token", data.token);
          navigate("/");
        } else {
          // Manejo de otros casos si el token no está presente pero la solicitud fue exitosa
          setErrorMessage(
            "No se pudo registrar con las credenciales proporcionadas..."
          );
        }
      })
      .catch((error) => {
        setErrorMessage(error.message || "Error al conectar con el servidor");
      });
    /* en el then vamos a capturar mensajes del servidor */
    /* Fer va a ponerle una propiedad a data para que si esa propiedad es true, yo voy a 
      hacer un condicional, de que si es true se setee por ejemplo el estado de usernameAlreadyExists en true
      y en el return del componente voy a hacer un renderizado condicional como con los otros mensajes */

    /* el catch lo vamos a usar solo para atrapar errores del servidor */
  }

  if (errorFetch) {
    return (
      <div>
        <p>No puedes crear una cuenta por ahora</p>
      </div>
    );
  }

  return (
    <section className="register">
      <div className="shadow-md p-4 flex items-center gap-2.5">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6">
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <h2 className=" font-bold text-2xl">Registrarme</h2>
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
        {errorMessage && (
          <div className="mb-4 text-center text-red-600">{errorMessage}</div>
        )}
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
          href="#"
          className="text-secundario font-semibold">
          INICIA SESION
        </a>
      </p>
    </section>
  );
};
