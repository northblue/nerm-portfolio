import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full md:h-screen bg-[color:var(--primary-bg-color)] flex justify-center items-center p-4 '>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full pt-[100px]'>
            <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-blue-500'>Contact</p>
                <p className='text-gray-300 py-4'>Submit the form below or shoot me an email - northblue@gmail.com</p>
            </div>
            <div className='w-full'>
          <form action="https://getform.io/f/kaz13meJ" method="POST" className='flex flex-col max-w-[600px] mx-auto'>
              <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Email' name='email' />
              <input className='my-4 p-2 bg-[#ccd6f6]' type="text" placeholder='Subject' name='subject' />
              <textarea className='bg-[#ccd6f6] p-2' name="message" rows="5" placeholder='Message'></textarea>
              <button className='text-[color:var(--primary-text-color-normal)] border-2 hover:bg-blue-500 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
          </form>
        </div>
        </div>


    </div>
  )
}

export default Contact