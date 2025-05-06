import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className='flex justify-around bg-black text-white py-8 sticky bottom-0 z-50'>
        <div className='text-center'>Copyright C facebook | All Rights Reserved.</div>
        <ul className='flex gap-2 text-sm'>
            <a href="/"><li className='text-sm'>home</li></a>
            <a href="/about"><li className='text-sm'>about</li></a>
            <a href="/contact"><li className='text-sm'>contact</li></a>
        </ul>
      </footer>
    </div>
  )
}

export default Footer
