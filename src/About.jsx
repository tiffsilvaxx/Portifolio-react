import React from "react";

const About = () => { 
  return (
    <div
      name="Sobre mim"
      id="Sobre mim"
      className="w-full h-screen bg-[#000000] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className=" py-16 rounded-md bg-gray-600 flex flex-col justify-center items-center w-4/6">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-purple-500">
                Sobre mim
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
              <p>
                Olá, eu sou Tiffany. Muito prazer!
              </p>
            </div>
            <div>
              <p>
                {" "}
                Eu sou uma desenvolvedora web Front-End, com experiência em Wordpress, 
                JavaScript, HTML, Css e atualmente estudando React.js
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;