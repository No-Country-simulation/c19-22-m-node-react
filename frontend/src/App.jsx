/* import Navbar from "./components/navbar/Navbar"; */
import './index.css'
import './App.css'
import { BrowserRouter, Routes, Route, Navigate, redirect } from "react-router-dom"
import { Register } from "./components/register/Register"
import { Home } from './components/home/Home';
import { Navbar } from './components/navbar/Navbar';
import { Header } from './components/header/Header';
import { Profile } from './components/profile/Profile';
import { Notifications } from './components/notifications/Notifications';
import { Login } from './components/login/Login';

import { Publish } from './components/publish/Publish';
import { Comments } from './components/notifications/Comments';
import { Followers } from './components/notifications/Followers';
import { Find } from './components/find/Find';
import { TagGrid } from './components/find/TagGrid';
import { FindMockeado } from './components/find/FindMockeado';
import { PostFound } from './components/postFind/PostFound';
import { ConfiguracionProfile } from './components/configuracionProfile/ConfiguracionProfile';
import { EditProfile } from './components/editProfile/EditProfile';
import { FriendProfile } from './components/friendProfile.jsx/FriendProfile';
import { HeaderBack } from './components/headerBack/HeaderBack';


function App() {

  

  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route
            path="/" element={            
              localStorage.getItem('token')? <Navigate to='/home'/> : <Navigate to='/login'/>
            }
          />
          <Route
            path="/register" element={
              <div>
                <Register />
              </div>
            }
          />
          {
            <Route
              path="/login" element={
                <div>
                  <Login />
                </div>
              }
            />
          }

          <Route
            path="/home" element={
              <div className='min-h-screen flex flex-col'>
                <Header />
                <div className='flex-grow'>
                  <Home />
                </div>
                <Navbar />
              </div>
            }
          />

          {/* BUSCAR */}
          <Route path="/find" element={ 
              <div className='min-h-screen flex flex-col'>                
                <Find/>
                <Navbar/>
              </div> }/>

          {/* ENTRAR AL PERFIL DE UN AMIGO */}
          <Route path="/find/account/:id" element={ 
              <div className='min-h-screen flex flex-col'> 
                <Header/>               
                <FriendProfile/>
                <Navbar/>
              </div> }/>

          {/* ENTRAR A LA GRILLA DE POST SEGUN ETIQUETA BUSCADA */}
          <Route path="/find/tag/:tagId" element={ 
              <div className='min-h-screen flex flex-col'> 
                <Header/>               
                <TagGrid/>
                <Navbar/>
              </div> }/>

          {/* ENTRAR AL POST SELECCIONADO DE LA GRILLA DE POSTS DE BUSQUEDA DE ETIQUETA O DE LA GRILLA DEL PERFIL */}
          <Route path="/post/:postId" element={ 
              <div className='min-h-screen flex flex-col'>
                <HeaderBack/>
                <PostFound/>
                <Navbar/>
              </div> }/>

           

          <Route path="/publish" element={ 
              <div className='min-h-screen flex flex-col'>
                <Header/>
                <Publish/>
                <Navbar/>
              </div> }/>

                   

          <Route path="/notifications" element={ 
              <div className='min-h-screen flex flex-col'>
                <Header/>
                <Notifications/>
                <Navbar/>
              </div> }/>



          {/* PERFIL PROPIO */}
          <Route path="/profile" element={ 
              <div className='min-h-screen flex flex-col'>
                <Header/>
                <Profile/>
                <Navbar/>
              </div> }/>

          <Route path="/configuracion" element={ 
              <div className='min-h-screen flex flex-col'>                            
                <ConfiguracionProfile/>
                <Navbar/>
              </div> }/> 

          <Route path="/editprofile" element={ 
              <div className='min-h-screen flex flex-col'>            
                <EditProfile/>
                <Navbar/>
              </div> }/>            
      </Routes>
    </BrowserRouter>      
    </>
  );
}

export default App;
