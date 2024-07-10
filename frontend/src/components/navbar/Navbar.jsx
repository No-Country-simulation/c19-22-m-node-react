import { CiHeart } from "react-icons/ci";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <header className=" min-height-[100vh] relative overflow-hidden">
      <nav className="w-[100%] max-w-[1200px] mx-auto overflow-hidden flex justify-between items-center my-3">
        <figure className="w-[45%] max-w-[120px] ml-6 my-6">
          <img
            src="/public/free.png"
            alt="logo"
            className="w-[100%] block"
          />
        </figure>
        <div className="flex items-center mr-1 justify-center">
          <CiHeart className="w-[45%] h-8 max-w-[160px] mr-2" />
          <IoChatbubbleEllipsesOutline className="w-[45%] h-8 max-w-[160px]" />
        </div>
      </nav>
      <div className=" flex-grow bg-black h-0.5"></div>
    </header>
  );
};

export default Navbar;
