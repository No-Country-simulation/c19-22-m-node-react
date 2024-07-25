import { useState, useRef, useEffect, useCallback } from "react";
import { useNavigate } from 'react-router-dom';
import debounce from 'lodash/debounce';

import user1 from '../../assets/user1.jpg';
import user2 from '../../assets/user2.jpg';
import user3 from '../../assets/imagePost.jpg';
import imageP1 from '../../assets/imagePost.jpg';
import imageP6 from '../../assets/imageP6.jpg';
import imageP7 from '../../assets/imageP7.jpg';
import pastel1 from '../../assets/pastel1.jpg'
import imageP20 from '../../assets/imageP20.jpg';
import imageP18 from '../../assets/imageP18.jpg';
import imageP16 from '../../assets/imageP16.jpg';
import imageP14 from '../../assets/imageP14.jpg';
import imageP13 from '../../assets/imageP13.jpg';
import imageP12 from '../../assets/imageP12.jpg';
import imageP21 from '../../assets/imageP21.jpg';

const mockAccounts = [
  { id: 1, username: 'user1', nombre: 'Maria Her', pic: user1 },
  { id: 2, username: 'user2', nombre: 'Lara Dumont', pic: user2 },
  { id: 3, username: 'art.topia', nombre: 'Artopia', pic: user3 }
];

const mockTags = [
    { id: 1, name: 'acuarela', pic: imageP1 },
    { id: 2, name: 'acuarela', pic: imageP6 },
    { id: 3, name: 'acuarela', pic: imageP7 },
    { id: 4, name: 'pastel', pic: pastel1 },
    { id: 5, name: 'acuarela', pic: imageP20 },
    { id: 6, name: 'acuarela', pic: imageP18 },
    { id: 7, name: 'acuarela', pic: imageP16 },
    { id: 8, name: 'acuarela', pic: imageP14 },
    { id: 9, name: 'acuarela', pic: imageP13 },
    { id: 10, name: 'acuarela', pic: imageP12 },
    { id: 11, name: 'acuarela', pic: imageP21 },
    { id: 12, name: 'acuarela', pic: imageP7 },
    { id: 13, name: 'acuarela', pic: imageP20 },
    { id: 14, name: 'acuarela', pic: imageP7 },
    { id: 15, name: 'acuarela', pic: imageP7 },
    { id: 16, name: 'acuarela', pic: imageP7 },
  ];


const countTagsByName = (tags) => {
    const tagCounts = {};
    tags.forEach(tag => {
      if (tagCounts[tag.name]) {
        tagCounts[tag.name]++;
      } else {
        tagCounts[tag.name] = 1;
      }
    });
    return Object.keys(tagCounts).map(name => ({
      name,
      quantity: tagCounts[name]
    }));
  };



export const FindMockeado = () => {
  const [accountOrTag, setAccountOrTag] = useState('accounts');
  const [query, setQuery] = useState('');
  const [accounts, setAccounts] = useState([]);
  const [tags, setTags] = useState([]);

  const navigate = useNavigate();



  //cambio de pestaña
  const handleAccountTab = () => {
    setAccountOrTag('accounts');
  };  
  const handleHashtagTab = () => {
    setAccountOrTag('tags');
  };


  //focus en lupa
  const inputRef = useRef(null);  
  useEffect(() => {
    inputRef.current.focus();
  }, []);


  //TAGS
  const fetchTags = useCallback(
    debounce((searchQuery) => {
      // Simular la búsqueda de etiquetas
      const filteredTags = mockTags.filter(tag => tag.name.startsWith(searchQuery));
      const countedTags = countTagsByName(filteredTags);
      setTags(countedTags);
    }, 300), []
  );

  useEffect(() => {
    if (query && accountOrTag === 'tags') {
      fetchTags(query);
    } else {
      setTags([]);
    }
  }, [query, fetchTags, accountOrTag]);


  //ACCOUNTS
  const fetchAccounts = useCallback(
    debounce((searchQuery) => {
      // Simular la búsqueda de cuentas
      const filteredAccounts = mockAccounts.filter(account => account.username.startsWith(searchQuery));
      setAccounts(filteredAccounts);
    }, 300), []
  );

  useEffect(() => {
    if (query && accountOrTag === 'accounts') {
      fetchAccounts(query);
    } else {
      setAccounts([]);
    }
  }, [query, fetchAccounts, accountOrTag]);



  //FUNCIONES PARA REDIRIGIR AL PERFIL DEL USER CLICKEADO O A GRILLA DE RESULTADOS DE ETIQUETAS
  const handleAccountClick = (account) => {
    navigate(`/find/account/${account.id}`);
  };

  const handleTagClick = (tag) => {
    navigate(`/find/tag/${tag.name}`);
  };



  return (
    <section className='notifications'>
      <div className='header-find py-4 px-4 shadow-md'>
        <input
          type="text"
          className="w-full bg-transparent border-2 border-custom-gray-50 focus:outline-custom-gray-50 pt-3 pr-4 pb-3 pl-5 rounded-md"
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
            <h4 className="font-semibold text-center">Cuentas</h4>
          </button>
        </div>
        <div className={`border-b-4 pt-2 pb-1 w-[188px] flex justify-center ${accountOrTag === 'tags' ? 'border-primario' : 'border-none'}`}>
          <button onClick={handleHashtagTab}>
            <h4 className="font-semibold text-center">Etiquetas</h4>
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
                    <img className='w-full h-full object-cover' src={account.pic} alt="" />
                  </div>
                  <div className="w-[230px]">
                    <p onClick={() => handleAccountClick(account)} className="text-sm font-semibold">{account.username}</p>
                    <p className="text-sm">{account.nombre}</p>
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