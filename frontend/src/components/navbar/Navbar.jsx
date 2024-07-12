import React from "react";
import { GoHomeFill } from "react-icons/go";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { CiCirclePlus } from "react-icons/ci";
import { PiBellLight } from "react-icons/pi";
import { LiaUser } from "react-icons/lia";

export const Navbar = () => {
  return (
      <section className='navbar shadow-up-md bg-custom-violet flex px-4 justify-between items-center'>
        <button className="home text-white text-2xl p-3"><GoHomeFill/></button>
        <button className="search text-white text-2xl p-3"><HiOutlineMagnifyingGlass/></button>
        <button className="plus text-white text-2xl p-3"><CiCirclePlus/></button>
        <button className="bell text-white text-2xl p-3"><PiBellLight/></button>
        <button className="user text-white text-2xl p-3"><LiaUser/></button>
          
      </section>
  )
}
