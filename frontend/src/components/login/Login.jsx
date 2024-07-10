const Login = () => {
  return (
    <div className="min-height-[100vh] relative overflow-hidden">
      <div className="w-[100%] max-w-[1200px] flex justify-center items-center flex-col">
        <figure className=" w-[175px] my-4 ">
          <img
            src="/public/free.png"
            alt="logo"
            className="w-[100%] block "
          />
        </figure>
        <div className="flex flex-col justify-center items-center mt-10">
          <input
            type="text"
            placeholder="Email"
            className="border-2 border-black rounded-lg p-2 w-[270px] mb-4"
          />
          <input
            type="password"
            placeholder="contraseña"
            className="border-2 border-black rounded-lg p-2 w-[270px]"
          />
        </div>

        <div className="mt-4 mb-4">
          <button className="bg-black text-white rounded-lg p-2 w-[270px] mb-2">
            iniciar sesión
          </button>
        </div>

        <div className="w-full flex items-center justify-center my-5">
          <div className="ml-2 flex-grow bg-black h-0.5"></div>
          <div className="text-xl font-bold mx-2">O</div>
          <div className="mr-2 flex-grow bg-black h-0.5"></div>
        </div>

        <div className="">
          <button className="text-xs my-5">olvidaste tu contraseña?</button>
        </div>

        <div className="mt-5 flex items-center justify-center">
          <p className="mr-3 my-5">¿No tienes cuenta?</p>
          <button className="text-blue-800">Registrate</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
