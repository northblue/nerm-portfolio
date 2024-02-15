import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import Portrait from '../assets/portrait.jpeg';
import { Link } from 'react-scroll';

function Home() {
  return (
    <div name='home' className='w-full h-screen bg-[color:var(--primary-bg-color)]'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            {/* Container */}

            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='text-[color:var(--primary-text-color-normal)] py-4 max-w-[700px]'>
                    <p>I'm <span className='text-blue-500 text-2xl font-bold'>Bin Li</span>, a Full Stack Developer based in Sydney, 
                        Australia, specializing in the LAMP stack and currently expanding my skills to include the NERM stack. 
                        Additionally, I have a strong interest in AI and Big Data technologies.</p>
                    <Link
                        to="work"
                        smooth={true}
                        duration={500}
                            >
                        <button className='text-[color:var(--primary-text-color-normal)] group border-2 px-6 py-3 my-10 flex items-center hover:bg-blue-500'>
                            View Work 
                            <span className='group-hover:rotate-90 duration-300'>
                                <HiArrowNarrowRight className='ml-3 ' />
                            </span>
                            
                        </button>
                    </Link>
                </div>
                <div>
                <img src={Portrait} alt="Tailwind icon" className='w-60 float-right mx-0 my-5 max-w-[300px] rounded-full' />  
                </div>
            </div>

        </div>
    </div>
  )
}

export default Home