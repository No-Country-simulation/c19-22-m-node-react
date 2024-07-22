/* import Navbar from "./components/navbar/Navbar"; */
import './index.css'
import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { Register } from "./components/register/Register"
import { Home } from './components/home/Home';
import { Navbar } from './components/navbar/Navbar';
import { Header } from './components/header/Header';
import { Profile } from './components/profile/Profile';
import { Notifications } from './components/notifications/Notifications';
import { Login } from './components/login/Login';
import { PublishPic } from './components/publishPic.jsx/PublishPic';
import { PublishColorPicker } from './components/publishColorPicker/PublishColorPicker';
import { Comments } from './components/notifications/Comments';
import { Followers } from './components/notifications/Followers';
import { Find } from './components/find/Find';
import { Hashtags } from './components/find/Hashtags';
import { Accounts } from './components/find/Accounts';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={ 
              <div>
                <Register/>
              </div> }/>
            {<Route path="/login" element={ 
              <div>
                <Login/>
              </div> }/>}

          <Route path="/home" element={ 
              <div>
                <Header/>
                <Home/>
                <Navbar/>
              </div> }/>

          <Route path="/find" element={ 
              <div className='min-h-screen flex flex-col'>
                
                <Find/>
                <Navbar/>
              </div> }/>
          <Route path="/accounts" element={ 
              <div className='min-h-screen flex flex-col'>
                
                <Accounts/>
                <Navbar/>
              </div> }/>
          <Route path="/hashtags" element={ 
              <div className='min-h-screen flex flex-col'>
                
                <Hashtags/>
                <Navbar/>
              </div> }/>
          <Route path="/profile" element={ 
              <div className='min-h-screen flex flex-col'>
                <Header/>
                <Profile/>
                <Navbar/>
              </div> }/> 
          <Route path="/publish" element={ 
              <div className='min-h-screen flex flex-col'>
                <Header/>
                <PublishColorPicker/>
                <Navbar/>
              </div> }/>
          <Route path="/publishpic" element={ 
              <div className='min-h-screen flex flex-col'>
                <Header/>
                <PublishPic/>
                <Navbar/>
              </div> }/>
          <Route path="/publish-color-picker" element={ 
              <div className='min-h-screen flex flex-col'>
                <Header/>
                <PublishColorPicker/>
                <Navbar/>
              </div> }/>
          <Route path="/notifications" element={ 
              <div className='min-h-screen flex flex-col'>
                <Header/>
                <Notifications/>
                <Navbar/>
              </div> }/>
          <Route path="/comments" element={ 
              <div className='min-h-screen flex flex-col'>
                <Header/>
                <Comments/>
                <Navbar/>
              </div> }/>
          <Route path="/followers" element={ 
              <div className='min-h-screen flex flex-col'>
                <Header/>
                <Followers/>
                <Navbar/>
              </div> }/>   
      </Routes>
    </BrowserRouter>      
    </>
  );
}

export default App;
