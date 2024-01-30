import React from 'react';
import CSS from '../assets/css.png';
import GitHub from '../assets/github.png';
import HTML from '../assets/html.png';
import JavaScript from '../assets/javascript.png';
import Mongo from '../assets/mongo.png';
import Node from '../assets/node.png';
import ReactImg from '../assets/react.png';
import Tailwind from '../assets/tailwind.png';


const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[color:var(--primary-bg-color)] text-gray-300'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Experience</p>
                <p className='py-6'>// These are the technologies I have worked with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={HTML} alt="HTML icon" className='w-20 mx-auto' />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={CSS} alt="CSS icon" className='w-20 mx-auto' />
                    <p className='my-4'>CSS</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={JavaScript} alt="JavaScript icon" className='w-20 mx-auto' />
                    <p className='my-4'>JavaScript</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={ReactImg} alt="ReactImg icon" className='w-20 mx-auto' />
                    <p className='my-4'>React</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={Node} alt="Node icon" className='w-20 mx-auto' />
                    <p className='my-4'>Node</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={Mongo} alt="Mongo icon" className='w-20 mx-auto' />
                    <p className='my-4'>Mongo</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={GitHub} alt="GitHub icon" className='w-20 mx-auto' />
                    <p className='my-4'>GitHub</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={Tailwind} alt="Tailwind icon" className='w-20 mx-auto' />
                    <p className='my-4'>Tailwind</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills