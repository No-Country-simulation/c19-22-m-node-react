import { useState, useRef, useEffect, useCallback  } from "react";
import { useNavigate } from 'react-router-dom';
import debounce from 'lodash/debounce';

import user1 from '../../assets/user1.jpg'
import user2 from '../../assets/user2.jpg'
import user3 from '../../assets/imagePost.jpg'







export const Find = () => {

    const [accountOrTag, setAccountOrTag] = useState('accounts')
    const [query, setQuery] = useState('');
    const [accounts, setAccounts] = useState([]);
    const [tags, setTags] = useState([]);


    let navigate = useNavigate();

  
    //cambio de pesta;a
    const handleAccountTab = () => {
        setAccountOrTag('accounts')    
    };  
    const handleHashtagTab = () => {
        setAccountOrTag('tags')      
    };


    // Foco en input lupa
    const inputRef = useRef(null)    
    useEffect(() => {        
        inputRef.current.focus()        
    }, [])



    // Función de búsqueda DE TAGS con debounce
    const fetchTags = useCallback(
        debounce((searchQuery) => {
        fetch(`/api/tags?search=${searchQuery}`)
            .then((response) => response.json())
            .then((data) => setTags(data))
            .catch((error) => console.error('Error fetching tags:', error));
        }, 300), // 300 ms de debounce
        []
    );

    useEffect(() => {
        if (query && accountOrTag == 'tags') {
        fetchTags(query);
        } else {
        setTags([]);
        }
    }, [query, fetchTags]);


    // Función de búsqueda DE ACCOUNTS con debounce
    const fetchAccounts = useCallback(
        debounce((searchQuery) => {
        fetch(`/api/tags?search=${searchQuery}`)
            .then((response) => response.json())
            .then((data) => setTags(data))
            .catch((error) => console.error('Error fetching tags:', error));
        }, 300), // 300 ms de debounce
        []
    );

    useEffect(() => {
        if (query && accountOrTag == 'accounts') {
        fetchAccounts(query);
        } else {
        setAccounts([]);
        }
    }, [query, fetchAccounts]);



    //FUNCIONES PARA REDIRIGIR AL PERFIL DEL USER CLICKEADO O A GRILLA DE RESULTADOS DE ETIQUETAS
    const handleAccountClick = (account) => {
        navigate(`/find/account/${account.id}`);
      };
    const handleTagClick = (tag) => {
        navigate(`/find/tag/${tag.id}`);
    };


/* console.log("accountOrTag", accountOrTag) */

  return (
      <section className='notifications'>
        <div className='header-find py-4 px-4 shadow-md' >
                        <input type="text"
                                                    className="w-full bg-transparentborder border-2 border-custom-gray-50 focus:outline-custom-gray-50 pt-3 pr-4 pb-3 pl-5 rounded-md"
                                                    placeholder="Buscar"
                                                    id="buscar"
                                                    value={query}
                                                    onChange={(e) => setQuery(e.target.value)}
                                                    ref={inputRef} />
        </div>
        <div className=" bg-custom-gray-10 flex items-start gap-10 px-4 "></div>

        <div className=" bg-custom-gray-10 flex items-center justify-center gap-10 px-4 pb-1 shadow-up-dark-md">
            <div className={`border-b-4  pt-2 pb-1 border-primario w-[188px] flex justify-center ${accountOrTag == 'accounts'? 'border-primario': 'border-none'}`}>
                    <button onClick={handleAccountTab}>
                        <h4 className="font-semibold text-center">Cuentas</h4>
                    </button>
                    
            </div>
            <div className={`border-b-4  pt-2 pb-1 border-primario w-[188px] flex justify-center ${accountOrTag == 'tags' ? 'border-primario': 'border-none'}`}>
                <button onClick={handleHashtagTab}>
                    <h4 className="font-semibold text-center">Etiquetas</h4>
                </button>            
            </div>            

        
        
        </div>
                
        <div className="shadow-up-dark-md pt-2">                    
            {accountOrTag == 'accounts'?
            (<div>

                {accounts.map((account) => (
                    <div className="fila-usuario1 py-2 px-4 flex justify-between items-center">
                        <div className="profilepic-nombre flex gap-2 items-center">
                            <div className="para-recortar-foto w-[44px] h-[44px] overflow-hidden rounded-full">
                                <img className='w-full h-full object-cover' src={account.pic} alt="" />
                            </div>
                            <div className="w-[230px]">
                                <p key={account.id} onClick={() => handleAccountClick(account)} className="text-sm font-semibold">{account.username}</p>
                                <p className="text-sm">{account.nombre}</p>
                            </div>
                        </div>
                    </div>
                ))}
                

                {/* VIEJO USUARIO HARDCODEADO */}
                {/* <div className="fila-usuario1 py-2 px-4 flex justify-between items-center">
                    <div className="profilepic-nombre flex gap-2 items-center">
                        <div className="para-recortar-foto w-[44px] h-[44px] overflow-hidden rounded-full">
                            <img className='w-full h-full object-cover' src={user1} alt="" />
                        </div>
                        <div className="w-[230px]">
                            <button onClick={handleAccountClick}>
                                <p className="text-sm font-semibold">marimaher</p>
                            </button>
                            <p className="text-sm">Marina Maher</p>
                        </div>                
                    </div>              
                </div> */}
            </div>)


                //CUANDO SELECCIONA LA PESTA;A ETIQUETAS
            :   <div>
                    {tags.map((tag) => (
                        <div className="fila-tag py-2 px-4 flex justify-between items-center">
                            <div className=" flex gap-2 items-center">                                
                                <div className="w-[230px]">
                                    <p key={tag.id} onClick={() => handleTagClick(tag)} className="text-sm font-semibold">{tag.name}</p>
                                    <p className="text-sm">{tag.quantity}</p>
                                </div>
                            </div>
                        </div>
                    ))}        
                </div>            
            }
        </div>  
      </section>
  )
}