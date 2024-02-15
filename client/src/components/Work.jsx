import React from 'react';
import Bigcommerce from '../assets/bigcommerce.webp';
import WorkImg from '../assets/projects/workImg.jpeg';
import Showpo from '../assets/showpo-logo.jpeg';
import Canon from '../assets/canon.png';

function Work() {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[color:var(--primary-bg-color)]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full md:h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-blue-500'>Work</p>
                <p className='py-6'>// Latest places I have been working with</p>
            </div>
            {/* Container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4' >
                {/* Grid Item */}
                <div style={{backgroundImage: `url(${Bigcommerce})`}} className='shadow-lg shadow-[#040c16] group container round-md flex justify-center items-center mx-auto content-div md:bg-contain '>
                    {/* Hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-1xl font-bold text-white tracking-wider'>
                            Senior Engineer
                        </span>
                        <div className='pt-8 text-center'>
                            2023
                        </div>
                    </div>
                </div>

                {/* Grid Item */}
                <div style={{backgroundImage: `url(${Showpo})`}} className='shadow-lg shadow-[#040c16] group container round-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-1xl font-bold text-white tracking-wider'>
                            Senior Full stack Developer
                        </span>
                        <div className='pt-8 text-center'>
                            2019 - 2022
                        </div>
                    </div>
                </div>

                {/* Grid Item */}
                <div style={{backgroundImage: `url(${Canon})`}} className='shadow-lg shadow-[#040c16] group container round-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-1xl font-bold text-white tracking-wider'>
                            Senior Developer
                        </span>
                        <div className='pt-8 text-center'>
                            2018 - 2019
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </div>
  )
}

export default Work