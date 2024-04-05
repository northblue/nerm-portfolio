import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import Typewriter from 'typewriter-effect';
import Portrait from '../assets/portrait.jpeg';

function Home() {
  return (
    <div name='home' className='w-full md:h-screen bg-[color:var(--primary-bg-color)] md:py-10'>
        <div className='flex flex-col justify-center items-center w-full pt-[100px]'>
            {/* Container */}

            <div className='max-w-[1000px] w-full grid sm:grid-cols-3 gap-8 px-4'>
                <div className='text-[color:var(--primary-text-color-normal)] py-4 max-w-[700px] col-span-2'>
                    <p>
                        I'm <span className='text-blue-500 text-2xl font-bold'>
                        <Typewriter
                            options={{
                                strings: [' Bin Li', ' a Full Stack Developer', ' Practically Glued to AWS ^_^', ' also an AI Enthusiast'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                        </span> 
                    </p>
                    <p className='py-10'>
                    My expertise lies in the LAMP stack, and I am currently broadening my skill 
                    set to include the NERM stack. In addition to my proficiency in web 
                    development technologies, I have a keen interest in exploring AI and Big Data technologies to create innovative solutions.</p>
                    <Link
                        to="work"
                        smooth={true}
                        duration={500}
                            >
                        <button className='text-[color:var(--primary-text-color-normal)] group border-2 px-6 py-3 my-10 flex items-center hover:bg-blue-500'>
                        Peek at My Adventures 
                            <span className='group-hover:rotate-90 duration-300'>
                                <HiArrowNarrowRight className='ml-3 ' />
                            </span>
                            
                        </button>
                    </Link>
                </div>
                <div>
                <img src={Portrait} alt="Tailwind icon" className='w-60 float-right sm:float-none mx-0 my-5 max-w-[300px] rounded-full' />  
                </div>
            </div>

        </div>
    </div>
  )
}

export default Home