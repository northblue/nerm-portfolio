import React from 'react'

const About = () => {
  return (
    
    <div name='about' className='w-full md:h-screen bg-[color:var(--primary-bg-color)] text-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full pt-[100px]'>
            <div className='pb-2'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 p-top-80 text-blue-500'>About</p>
                <p className='py-6'> Why I want to create this project</p>
            </div>
            <div className='text-[color:var(--primary-text-color-normal)] py-4 max-w-[700px]'>
            <p>Welcome to my portfolio website! This project serves as a hands-on learning experience as 
              I dive into the NERM stack. Here, you'll find a showcase of my projects and skills, 
              along with a space to host intriguing side projects. I also plan to share helpful resources with you in the future.</p>

            <p className='py-3'>As I experiment with new ideas and features, don't be surprised if you encounter occasional 
            hiccups along the way. It's all part of the learning process as I strive to innovate and improve.</p>

            <p className='py-3'>For this project, I've opted to use Tailwind CSS, a framework that has been generating a lot of buzz lately. 
            While it's a departure from my familiar CSS Less approach, I must admit its convenience is undeniable.</p>

            <p className='py-3'>In the ever-changing landscape of technology, staying adaptable is key. Embracing new tools and techniques 
            is essential for growth and innovation. As a tech enthusiast, The only thing I can do is keep learning and experimenting.</p>

            </div>

            
        </div>
    </div>
  )
}

export default About