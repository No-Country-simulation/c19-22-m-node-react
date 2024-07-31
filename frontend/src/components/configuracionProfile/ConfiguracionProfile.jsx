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
            
            <button onClick={handleEndSession}>
                <h4 className=" text-red-400 font-semibold">CERRAR SESION</h4>
            </button>               
          </div>
          
        </section>
    )
  }