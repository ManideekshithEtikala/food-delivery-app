import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <>
    <main className='flex justify-center w-full '>
      <div className='header'>
        <div className="headercontents">
          <a className='font-serif text-[4rem] text-white font-bold'>Order Now</a>
          <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo recusandae tenetur magni dolor cumque </p>
          <button className='buttonview bg-white rounded-full p-2 text-gray-400 text-xs mt-2 hover:cursor-pointer'>view menu</button>
        </div>
      </div>
    </main>
    <div>
      hello
    </div>
    </>
  )
}

export default Header