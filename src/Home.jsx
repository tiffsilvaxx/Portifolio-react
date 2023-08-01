import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import me from './assets/me .png'
import { Link } from "react-scroll"; 

const Home = () => {
  return (
    <div
    name="home"
    className="h-screen w-full bg-[#000000]"
  >
    <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
      <div className="flex flex-col justify-center h-full">
        <h2 className="text-2xl sm:text-7xl font-ligth text-white">
          Desenvolvedora Front-end
        </h2>
        <p className="text-gray-500 py-4 max-w-md">
          Eu tenho estudando muito sobre react, tenho experiência em JavaScript, Html, CSS.
          Eu gosto muito de programação e desenvolvimento de sistemas.
          
        </p>

        <div>
          <Link
            to="Sobre"
            smooth
            duration={500}
            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-purple-300 to-purple-500 cursor-pointer"
          >
            Sobre mim
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight size={25} className="ml-3" />
            </span>
          </Link>
        </div>
      </div>
      <div>
        <img
          src={me}  
          alt="my profile"
          className="rounded-full border-double  max-md w-2/3 min-h-[70%]"
        />
      </div>
    </div>
  </div>
  );
};
export default Home;