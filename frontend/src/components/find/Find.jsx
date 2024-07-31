import React from "react";
import user1 from "../../assets/user1.jpg";
import user2 from "../../assets/user2.jpg";
import imagePost from "../../assets/imagePost.jpg";
import { useState, useRef, useEffect, useCallback } from "react";
import { useNavigate } from 'react-router-dom';
import debounce from 'lodash/debounce';
import { urlBase } from "../../constants/urlBase";

export const Find = () => {
  const [accountOrTag, setAccountOrTag] = useState('accounts');
  const [query, setQuery] = useState('');
  const [accounts, setAccounts] = useState([]);
  const [tags, setTags] = useState([]);
  const urlFer = `${urlBase}/api/v1/users/users`;
  const urlFer2 = (query) => 
  `${urlBase}/api/v1/tags?searchQuery=${query}`


  //focus en lupa
  const inputRef = useRef(null);  
  useEffect(() => {
    inputRef.current.focus();
  }, []);


  const navigate = useNavigate();


  //cambio de pestaña
  const handleAccountTab = () => {
    setAccountOrTag('accounts');
  };  
  const handleHashtagTab = () => {
    setAccountOrTag('tags');
  };



 


// Función de búsqueda DE ACCOUNTS con debounce
const fetchAccounts = useCallback (
  
  debounce((query) => {    
    fetch(urlFer)
        .then((response) => response.json())
        .then((data) => {
          const filteredAccounts = data.filter(account => account.username.startsWith(query))
          setAccounts(filteredAccounts)          
        })
        .catch((error) => console.error('Error fetching accounts:', error));
    }, 300)
  , // 300 ms de debounce
  []
);

useEffect(() => {
  if (query && accountOrTag == 'accounts') {
  fetchAccounts(query);  
  } else {
  setAccounts([]);
  }
}, [query, fetchAccounts]);



// Función de búsqueda DE TAGS con debounce
const fetchTags = useCallback(
  debounce((query) => {    
      fetch(urlFer2(query))
      .then((response) => response.json())
      .then((data) => {
          if(!query){
            setTags([])
          } else{
            setTags(data.data)
          }
      })
      .catch((error) => console.error('Error fetching tags:', error));
  }, 300)  
  , // 300 ms de debounce
  []
);


useEffect(() => {
  if (accountOrTag == 'tags') {
  fetchTags(query);  
  } else {
  setTags([]);
  
  }
}, [query, fetchTags]);






  //LO QUE HIZO FACU
 /*  useEffect(() => {
    inputRef.current.focus();
    fetch(urlFer, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        console.log("estos son los users", data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);




  useEffect(() => {
    fetch(urlFer2, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setHash(data);
        console.log("estos son los hash", data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
 */



  //FUNCIONES PARA REDIRIGIR AL PERFIL DEL USER CLICKEADO O A GRILLA DE RESULTADOS DE ETIQUETAS
  const handleAccountClick = (account) => {
    navigate(`/find/account/${account.id}`);
  };

  const handleTagClick = (tag) => {
    navigate(`/find/tag/${tag.id}`);
  };



  return (
    <section className='notifications'>
      <div className='header-find py-4 px-4 shadow-md'>
        <input
          type="text"
          className="w-full bg-transparent border-2 border-custom-gray-50 focus:outline-custom-gray-50 pt-3 pr-4 pb-3 pl-5 rounded-md text-sm"
          placeholder="Buscar"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          ref={inputRef}
        />
      </div>
      <div className="bg-custom-gray-10 flex items-start gap-10 px-4"></div>

      <div className="bg-custom-gray-10 flex items-center justify-center gap-10 px-4 pb-1 shadow-up-dark-md">
        <div className={`border-b-4 pt-2 pb-1 w-[188px] flex justify-center ${accountOrTag === 'accounts' ? 'border-primario' : 'border-none'}`}>
          <button onClick={handleAccountTab}>
            <h4 className="font-semibold text-sm text-center">Cuentas</h4>
          </button>
        </div>
        <div className={`border-b-4 pt-2 pb-1 w-[188px] flex justify-center ${accountOrTag === 'tags' ? 'border-primario' : 'border-none'}`}>
          <button onClick={handleHashtagTab}>
            <h4 className="font-semibold text-sm text-center">Etiquetas</h4>
          </button>
        </div>
      </div>
      
      <div className="shadow-up-dark-md pt-2">
        {accountOrTag === 'accounts' ? (
          <div>
            {accounts.map((account) => (
              <div key={account.id} className="fila-usuario1 py-2 px-4 flex justify-between items-center">
                <div className="profilepic-nombre flex gap-2 items-center">
                  <div className="para-recortar-foto w-[44px] h-[44px] overflow-hidden rounded-full">
                    <img className='w-full h-full object-cover' src={account.profilePic} alt="" />
                  </div>
                  <div className="w-[230px]">
                    <p onClick={() => handleAccountClick(account)} className="text-almost-xs font-semibold">{account.username}</p>
                    <p className="text-almost-xs">{account.name}{account.lastname}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>
            {tags.map((tag) => (
              <div key={tag.name} className="fila-tag py-2 px-4 flex justify-between items-center">
                <div className="flex gap-2 items-center">
                  <div className="w-[230px]">
                    <p onClick={() => handleTagClick(tag)} className="text-sm font-semibold">{tag.name}</p>
                    <p className="text-sm">{tag.quantity} publicaciones</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
