import React from 'react';
import code from './assets/code2.png';

const Works = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#000000]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8 w-full flex justify-center items-center flex-col'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-purple-500'>
            Projetos de Estudos.
          </p>
          <p className='py-6 text-2xl'>Aqui alguns estudos/Bootcamp que realizei</p>
        </div>
{/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${code})` }}
            className='shadow-lg shadow-[#7d4299cb] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className=' text-lg font-bold text-white tracking-wider'>
                NLW Calendário dos Jogos
              </span>
              <p className='text-center'>NLW Bootcamp Rocketseat</p>
              <div className='pt-8 text-center'>
                <a href='https://github.com/tiffsilvaxx/nlw-10-study-case'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${code})` }}
            className='shadow-lg shadow-[#7d4299cb] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className=' text-lg font-bold text-white tracking-wider'>
                Ignite Feed
              </span>
              <p className='text-center'>Bootcamp da Rocketseat</p>
              <div className='pt-8 text-center'>
                <a href='https://github.com/tiffsilvaxx/Ignite-Feed'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
     </div>
        </div>
        </div>
    </div>
  );
};
export default Works;