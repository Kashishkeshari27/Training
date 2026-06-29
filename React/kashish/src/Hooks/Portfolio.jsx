import React from 'react'
// import myImage from '../../Hooks/myImage'
const Portfolio = () => {
  return (
    <div>
      <h1>Portfolio</h1>
      <div>
        <nav className='bg-blue-300'>
          <ul className='flex p-2'>
            <li className='m-2 hover:text-red-500 hover:border-2 border:bg-green-500 border-2 border-green 300'>About Me</li>
            <li className='m-2 hover:text-red-500 hover:border-2 border:bg-green-500 border-2 border-green 300'>Eduction</li>
            <li className='m-2 hover:text-red-500 hover:border-2 border:bg-green-500 border-2 border-green 300'>Project</li>
            <li className='m-2 hover:text-red-500 hover:border-2 border:bg-green-500 border-2 border-green 300'>Contact us</li>
            
          </ul>
        </nav>
        <p className='p-2px text-xl ml-10 hover:bg-red-700 mt-10 '>Kashish Keshari</p>
        <img src="" alt="" />

      </div>
      <div className='border-2 m-100'>
        <h1 className='text-center'>Contact</h1>
        <p className='ml-2'>Mobile no.:</p>
        <p className='ml-2'>Email:</p>
        <p className='ml-2'>Address:</p>
      </div>
    </div>
  )
}

export default Portfolio
