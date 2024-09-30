import { useNavigate } from 'react-router-dom';
import { ArrowBackIcon } from "../../icons/ArrowBackIcon"




export const HeaderBack = () => {

    let navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    }

  return (
      <section className='header shadow-md'>
        <div className="px-4 py-2.5 h-[47px] flex items-center">
            <button onClick={handleBack}>
                    <ArrowBackIcon/>
            </button>
        </div>   
      </section>
  )
}