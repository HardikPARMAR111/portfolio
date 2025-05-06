import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className='flex justify-around bg-black text-white py-8 sticky bottom-0 z-50'>
        <div className='text-center'>Copyright C facebook | All Rights Reserved.</div>
        <ul className='flex gap-2 text-sm'>
            <Link href="/"><li className='text-sm'>home</li></Link>
            <Link href="/about"><li className='text-sm'>about</li></Link>
            <Link href="/contact"><li className='text-sm'>contact</li></Link>
        </ul>
      </footer>
    </div>
  )
}

export default Footer
