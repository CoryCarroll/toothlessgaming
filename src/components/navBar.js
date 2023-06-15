import React from 'react'

export const NavBar = () => {
  return (
    <div className=' h-24 p-8'>
        <ul className='flex justify-evenly text-3xl'>
          <a href='./home.js'>
            <li className='m-6 rounded border-4 border-slate-950 bg-green-700 hover:bg-blue-600 text-slate-100 shadow-lg shadow-green-700 hover:shadow-blue-600 '>Home</li>
            </a>
            <a href='./about.js'>
            <li className='m-6 rounded border-4 border-slate-950 bg-green-700 hover:bg-blue-600 text-slate-100 shadow-lg shadow-green-700 hover:shadow-blue-600'>About</li>
            </a>
            <a href='./videos.js'>
            <li className='m-6 rounded border-4 border-slate-950 bg-green-700 hover:bg-blue-600 text-slate-100 shadow-lg shadow-green-700 hover:shadow-blue-600'>Videos</li>
            </a>
            <a href='./socials.js'>
            <li className='m-6 rounded border-4 border-slate-950 bg-green-700 hover:bg-blue-600 text-slate-100 shadow-lg shadow-green-700 hover:shadow-blue-600'>Socials</li>
            </a>
            <a href='./contact.js'>
            <li className='m-6 rounded border-4 border-slate-950 bg-green-700 hover:bg-blue-600 text-slate-100 shadow-lg shadow-green-700 hover:shadow-blue-600'>Contact Me</li>
            </a>
        </ul>
    </div>
  )
}

export default NavBar;