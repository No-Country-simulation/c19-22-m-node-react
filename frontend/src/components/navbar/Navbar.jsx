import React from "react";
/* import { useHistory } from 'react-router-dom'; */
import { useNavigate } from 'react-router-dom';

import { HomeOutlineIcon } from "../icons/HomeOutlineIcon";
import { HomeFilledIcon } from "../icons/HomeFilledIcon";
import { PublishOutlineIcon } from "../icons/PublishOutlineIcon";
import { PublishFilledIcon } from "../icons/PublishFilledIcon";
import { ProfileFilledIcon } from "../icons/ProfileFilledIcon";
import { ProfileOutlineIcon } from "../icons/ProfileOutlineIcon";
import { NotificationsFilledIcon } from "../icons/NotificationsFilledIcon";
import { NotificationsOutlineIcon } from "../icons/NotificationsOutlineIcon";
import { FindIcon } from "../icons/FindIcon";


export const Navbar = () => {

  let navigate =useNavigate();

  const redirectToProfile = () => {
      navigate('/profile');
  };

  const redirectToHome = () => {
    navigate('/home');
  };

  const redirectToFind = () => {
    navigate('/find');
  };

  const redirectToPublish = () => {
    navigate('/publish');
  };

  const redirectToNotifications = () => {
    navigate('/notifications');
  };
  
  const pathname = window.location.pathname
  


  return (
      <section className='navbar sticky bottom-0 mt-auto shadow-up-md bg-primario flex px-4 justify-between items-center'>
        <button onClick={redirectToHome} className="home text-white p-3">
          {pathname == "/home"? <HomeFilledIcon/>: <HomeOutlineIcon/>}
        </button>        
        {/* <MGlassMenu/> */}
        <button onClick={redirectToFind} className="find text-white p-3">
          {pathname == "/find"? <FindIcon/>: <FindIcon/>}
        </button>
        <button onClick={redirectToPublish} className="plus text-white p-3">
          {pathname == "/publish"? <PublishFilledIcon/>: <PublishOutlineIcon/>}
        </button>
        <button onClick={redirectToNotifications} className="notifications text-white p-3">
          {pathname == "/notifications"? <NotificationsFilledIcon/>: <NotificationsOutlineIcon/>}
        </button>
        <button onClick={redirectToProfile} className="bell text-white p-3">
          {pathname == "/profile"? <ProfileFilledIcon/>: <ProfileOutlineIcon/>}
        </button>
      </section>
  )
}
