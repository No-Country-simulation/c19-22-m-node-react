/* import Navbar from "./components/navbar/Navbar"; */
import './index.css'
import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { Register } from "./components/register/Register"
import { Home } from './components/home/Home';
import { Navbar } from './components/navbar/Navbar';
import { Header } from './components/header/Header';
import { Profile } from './components/profile/Profile';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={ 
              <div>
                <Register/>
              </div> }/>

          <Route path="/home" element={ 
              <div>
                <Header/>
                <Home/>
                <Navbar/>
              </div> }/>
          <Route path="/profile" element={ 
              <div className='min-h-screen flex flex-col'>
                <Header/>
                <Profile/>
                <Navbar/>
              </div> }/>                    
      </Routes>
    </BrowserRouter>      
    </>
  );
}

export default App;
