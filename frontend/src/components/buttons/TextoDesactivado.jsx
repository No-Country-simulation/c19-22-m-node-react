import React from "react";
import { PiTextT } from "react-icons/pi";


export const TextoDesactivado = () => {

  return (
    <button className="text text-custom-gray border border-gray-300 bg-custom-gray-20 shadow-md rounded-[6px] p-3">
        <PiTextT className="h-[24px] w-[24px]" />
    </button>
  )
}