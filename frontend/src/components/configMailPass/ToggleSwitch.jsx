import { useState, useEffect } from 'react';


export const ToggleSwitch = ({ onActivate, onDeactivate }) => {
    const [isToggled, setIsToggled] = useState(false);

    useEffect(() => {
        onDeactivate();
      }, [onDeactivate]);
      
      const handleToggle = () => {
        setIsToggled((prevState) => {
          const newState = !prevState;
          if (newState) {
            onActivate();
          } else {
            onDeactivate();
          }
          return newState;
        });
      };
  
    return (
      <button
        onClick={handleToggle}
        className={`w-16 h-8 flex items-center rounded-full p-1 duration-300 ease-in-out ${
          isToggled ? 'bg-secundario-light' : 'bg-custom-gray-20'
        }`}
      >
        <div
          className={` w-6 h-6 rounded-full shadow-md transform duration-300 ease-in-out ${
            isToggled ? 'translate-x-8 bg-secundario' : 'bg-custom-gray-50'
          }`}
        ></div>
      </button>
    );
};

