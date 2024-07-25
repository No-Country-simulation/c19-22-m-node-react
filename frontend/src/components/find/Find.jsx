import React from "react";
import user1 from "../../assets/user1.jpg";
import user2 from "../../assets/user2.jpg";
import imagePost from "../../assets/imagePost.jpg";
import { useState, useEffect, useRef } from "react";

export const Find = () => {
  const [users, setUsers] = useState([]);
  const [hash, setHash] = useState([]);
  const urlFer = "http://localhost:3000/api/v1/users/users";
  const urlFer2 = "http://localhost:3000/api/v1/tags";

  const inputRef = useRef(null);

  useEffect(() => {
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

  return (
    <section className="notifications">
      <div className="header-find py-4 px-4 shadow-md">
        <input
          type="text"
          className="w-full bg-transparentborder border-2 border-custom-gray-50 focus:outline-custom-gray-50 pt-3 pr-4 pb-3 pl-5 rounded-md"
          placeholder="Buscar"
          id="buscar"
          ref={inputRef}
        />
      </div>
      <div className=" bg-custom-gray-10 flex items-start gap-10 px-4 pb-1"></div>
      <div className="">
        <h2 className="py-2 px-4 font-semibold text-lg">Recientes</h2>

        <div className="fila-usuario1 py-2 px-4 flex justify-between items-center">
          <div className="profilepic-nombre flex gap-2 items-center">
            <div className="para-recortar-foto w-[44px] h-[44px] overflow-hidden rounded-full">
              <img
                className="w-full h-full object-cover"
                src={user1}
                alt=""
              />
            </div>
            <div className="w-[230px]">
              <p className="text-sm font-semibold">marimaher</p>
              <p className="text-sm">Marina Maher</p>
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="size-5">
            <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
          </svg>
        </div>

        <div className="fila-usuario1 py-2 px-4 flex justify-between items-center">
          <div className="profilepic-nombre flex gap-2 items-center">
            <div className="para-recortar-foto w-[44px] h-[44px] overflow-hidden rounded-full">
              <img
                className="w-full h-full object-cover"
                src={user2}
                alt=""
              />
            </div>
            <div className="w-[230px]">
              <p className="text-sm font-semibold">lulubac</p>
              <p className="text-sm">Luiza Baccelli</p>
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="size-5">
            <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
          </svg>
        </div>
      </div>
    </section>
  );
};
