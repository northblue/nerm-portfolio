import React from 'react'

const About = () => {
  return (
    
    <div name='about' className='w-full h-screen bg-[color:var(--primary-bg-color)] text-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 p-top-80 text-blue-500'>About</p>
                <p className='py-6'> Why I want to create this project</p>
            </div>
            <p className='text-[color:var(--primary-text-color-normal)] py-4 max-w-[700px]'>
            This is my portfolio website, it is a practice project when I'm learning NERM stack. 
            I will show you some of my projects and skills. Will also host some interesting side projects here. 
            This project was hosted on Vercel Hobby plan.
            </p>
        </div>
    </div>
  )
}

export default About