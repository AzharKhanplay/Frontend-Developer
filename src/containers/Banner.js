import React from 'react'
import { Stars } from '../components';

function Banner(props) {
  return (
    <>
      {/* bg-gradient-to-br pb-[100px] from-primary via-[#000a1d] to-[#171719] */}
      <header className={` relative text-white pt-[200px]   ${props.className}`}>
        <div className=' absolute top-0 bottom-0 right-0 left-0 overflow-hidden'>
          <Stars />
        </div>
        <div className='absolute  top-10 left-1/3 w-[130px] h-[130px] md:w-[190px] md:h-[190px] flex items-center justify-center -rotate-[20deg]'>
          <span className=' inline-block p-5 bg-slate-200 bg-opacity-5 rounded-full'>
            <span className='inline-block bg-slate-200 bg-opacity-10 rounded-full w-[90px] h-[90px] md:w-[150px] md:h-[150px]'>
            </span>
          </span>
          <img src='/assets/images/planet_1.png' alt="Planet 1" className='max-w-[120px] md:max-w-[180px] absolute top-0 bottom-0 left-0 right-0 m-auto' />
        </div>

        <div className='absolute top-12 lg:top-[120px] left-3 lg:left-44 w-16 h-16 md:w-[80px] md:h-[80px]'>
          <span className=' inline-block p-2 md:p-3 bg-slate-200 bg-opacity-10 rounded-full w-full h-full'>
            <span className=' inline-block p-2 md:p-3 bg-slate-200 bg-opacity-10 rounded-full w-full h-full'>
              <img src='/assets/images/planet_2.png' alt="Planet 2" className='w-full' />
            </span>
          </span>
        </div>

        <div className='absolute top-5 right-6 lg:top-20 lg:right-20 w-14 h-14 md:w-[80px] md:h-[80px]'>
          <span className=' inline-block p-2 bg-slate-200 bg-opacity-10 rounded-full w-full h-full'>
            <span className=' inline-block p-2 bg-slate-200 bg-opacity-10 rounded-full w-full h-full'>
              <img src='/assets/images/planet_4.png' alt="Planet 4" className=' w-full' />
            </span>
          </span>
        </div>

        <div className='absolute top-[80%] -right-20 md:top-[70%] md:-right-[20%] w-[660px] h-[660px]'>
          <span className='inline-block p-9 bg-slate-200 bg-opacity-10 rounded-full'>
            <span className='inline-block bg-slate-200 bg-opacity-20 rounded-full'>
              <img src='/assets/images/globe.png' alt="planet-earth" className=' w-[500px] m-9 animate-spin-slow' />
            </span>
          </span>
        </div>

        <div className='container mx-auto md:px-6 relative '>
          <div className='flex flex-wrap justify-center items-center'>
            <div className='w-full lg:w-1/2 p-4'>
              <div className='w-100 lg:max-w-lg text-center lg:text-left'>
                <h2 className=' font-bold text-4xl sm:text-5xl md:text-6xl leading-tight'><span className='underline text-yellow-400'>Expand</span> beyound<br /> the <span className='underline'>universe</span></h2>
                <p className=' text-lg mt-5 font-light'>SpaceX is an American aerospace manufacturer and space transportation services company founded in 2002 by entrepreneur Elon Musk. It designs, manufactures, and launches advanced rockets and spacecraft with the goal of enabling people to live on other planets.</p>
              </div>
            </div>
            <div className='w-full lg:w-1/2 p-4 flex items-center justify-center'>
              <img src="/assets/images/capsule.png" alt='capsule' className=' max-w-xs md:max-w-full motion-reduce:animate-bounce ' />
            </div>
          </div>
        </div>
      </header>

    </>
  )
}

export default Banner;