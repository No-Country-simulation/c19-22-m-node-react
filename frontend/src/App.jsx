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
import { Publish } from './components/publish/Publish';
import { Comments } from './components/notifications/Comments';
import { Followers } from './components/notifications/Followers';
import { Find } from './components/find/Find';
import { TagGrid } from './components/find/TagGrid';
import { FindMockeado } from './components/find/FindMockeado';
import { PostFind } from './components/postFind/PostFind';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/register"
            element={
              <div>
                <Register />
              </div>
            }
          />
          {
            <Route
              path="/login"
              element={
                <div>
                  <Login />
                </div>
              }
            />
          }

          <Route
            path="/"
            element={
              <div>
                <Header />
                <Home />
                <Navbar />
              </div>
            }
          />

          <Route path="/find" element={ 
              <div className='min-h-screen flex flex-col'>                
                <FindMockeado/>
                <Navbar/>
              </div> }/>

          <Route path="/find/account/:id" element={ 
              <div className='min-h-screen flex flex-col'>                
                {/* <Accounts/> */}
                <Navbar/>
              </div> }/>

          <Route path="/find/tag/:tagName" element={ 
              <div className='min-h-screen flex flex-col'> 
                <Header/>               
                <TagGrid/>
                <Navbar/>
              </div> }/>
          <Route path="/post/:postId" element={ 
              <div className='min-h-screen flex flex-col'>
                <Header/>
                <PostFind/>
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
                <Publish/>
                <Navbar/>
              </div> }/>

          <Route path="/publishpic" element={ 
              <div className='min-h-screen flex flex-col'>
                <Header/>
                <PublishPic/>
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
