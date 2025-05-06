import React from 'react'

const Main = () => {
  return (
    <div>
      <section className='h-screen flex items-center justify-center bg-gradient-to-br from-white to-black'>
        <div className='text-center px-4'>
            <h2 className='text-4xl md:text-6xl font-bold'>
                I am Hardik Parmar
            </h2>
            <p className='text-xl text-neutral-300 mb-6'>
                A passionate web developer who loves building cool stuff.
            </p>
            <a href="#projects" className='px-6 py-3 bg-gray-700 text-white rounded-full transition-colors duration-300 ease-in-out hover:bg-black '> View My Work </a>
        </div>
      </section>
    </div>
  )
}

export default Main
