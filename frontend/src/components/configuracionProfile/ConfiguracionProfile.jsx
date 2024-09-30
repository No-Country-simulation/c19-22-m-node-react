import { useNavigate } from 'react-router-dom';
import { PencilIcon } from "../icons/PencilIcon";
import { ArrowBackIcon } from "../icons/ArrowBackIcon";


export const ConfiguracionProfile = () => {

      
    let navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    }

    const handleEditProfile = () => {
        navigate(`/editprofile`);
      };

    const handleEndSession = () => {
    localStorage.removeItem('token');
    navigate('/login')
      };

    const handleNotifications = () => {
        navigate ('/confignotif')
    }

    const handleConfigMailPass = () => {
        navigate ('/configmailpass')
    }



    return (
        <section className='bg-custom-gray-90 min-h-screen'>
            <div>
                <button onClick={handleBack} className='text-white p-4'>
                    <ArrowBackIcon/>
                </button>
            </div>            
            
            
            <div className="bg-custom-gray-90 flex flex-col items-start p-4 pt-7 shadow-up-dark-md">
                <div className='flex items-center pb-3'>
                    <button className='text-white text-sm' onClick={handleEditProfile}>
                        <div className='flex items-center gap-1'>
                        <PencilIcon/>  
                        <h4 className=" text-white text-sm">Editar perfil</h4>
                        </div>                                      
                    </button>                    
                </div>

                <div className='flex items-center pb-3'>
                    <button className='text-white text-sm' onClick={handleNotifications}>
                        <div className='flex items-center gap-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                        </svg>
                        <h4 className=" text-white text-sm">Notificaciones</h4>
                        </div>                                      
                    </button>                    
                </div>

                <div className='flex items-center pb-3'>
                    <button className='text-white text-sm' onClick={handleConfigMailPass}>
                        <div className='flex items-center gap-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>  
                        <h4 className=" text-white text-sm">Configuración de cuenta</h4>
                        </div>                                      
                    </button>                    
                </div>
            
            <button onClick={handleEndSession}>
                <h4 className=" text-red-400 font-semibold">CERRAR SESION</h4>
            </button>               
          </div>
          
        </section>
    )
  }