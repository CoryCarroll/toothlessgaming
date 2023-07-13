import React from 'react'

export const NavBar = () => {
  return (
    <nav className=' h-24 p-8'>
        <ul className='flex justify-end text-xl'>
            <li className='m-6 rounded border-4 border-slate-950 bg-green-700 hover:bg-blue-600 text-slate-100 shadow-lg shadow-green-700 hover:shadow-blue-600 '>
              <a href='./home.js'>Home</a>
            </li>
            <li className='m-6 rounded border-4 border-slate-950 bg-green-700 hover:bg-blue-600 text-slate-100 shadow-lg shadow-green-700 hover:shadow-blue-600 '>
              <a href='./about.js'>About</a>
            </li>
            <li className='m-6 rounded border-4 border-slate-950 bg-green-700 hover:bg-blue-600 text-slate-100 shadow-lg shadow-green-700 hover:shadow-blue-600 '>
              <a href='./socials.js'>Socials</a>
            </li>
            <li className='m-6 rounded border-4 border-slate-950 bg-green-700 hover:bg-blue-600 text-slate-100 shadow-lg shadow-green-700 hover:shadow-blue-600 '>
              <a href='./videos.js'>Videos</a>
            </li>
            <li className='m-6 rounded border-4 border-slate-950 bg-green-700 hover:bg-blue-600 text-slate-100 shadow-lg shadow-green-700 hover:shadow-blue-600 '>
              <a href='./contact.js'>Contact</a>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar;