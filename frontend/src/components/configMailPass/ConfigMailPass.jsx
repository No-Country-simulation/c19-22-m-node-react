
import { useNavigate } from 'react-router-dom';
import { ArrowBackIcon } from "../icons/ArrowBackIcon";
import { ArrowForwardIcon } from '../icons/ArrowForwardIcon';


export const ConfigMailPass = () => {

let navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    }

    const handleChangePass = () => {
        navigate('/changepass');
    }

    const handleChangeMail = () => {
        navigate('/changemail');
    }


return(
    <section className='min-h-screen'>
      
        <div className='bg-custom-gray-90 flex items-center h-[48px] shadow-down-dark-md'>
            <button onClick={handleBack} className='text-white px-4 py-2'>
                <ArrowBackIcon/>
            </button>
            <h2 className='text-base text-white font-semibold'>Configuración de la cuenta</h2>
        </div>
        <div className='container p-6 flex flex-col gap-6'>
            <div className='email_row flex justify-between'>
                <div>
                    <h4 className='text-base font-semibold'>Mail</h4>
                    <p className='text-xs'>lara.molina@gmail.com</p>
                </div>
                <button onClick={handleChangeMail} className="px-5 py-2.5 rounded-md text-sm font-semibold text-secundario border-2 border-secundario">
                    <div className='flex items-center gap-1.5'>
                        <p>Cambiar</p>
                        <ArrowForwardIcon/>
                    </div>
                </button>              
            </div>
            <div className='password_row flex justify-between'>
                <div>
                    <h4 className='text-base font-semibold'>Contraseña</h4>
                    <p className='text-xs'>******</p>
                </div>
                <button onClick={handleChangePass} className="px-5 py-2.5 rounded-md text-sm font-semibold text-secundario border-2 border-secundario">
                    <div className='flex items-center gap-1.5'>
                        <p>Cambiar</p>
                        <ArrowForwardIcon/>
                    </div>
                </button>            
            </div>
        </div>
        
        
      
    </section>
  )
}