import React from 'react';
import { Banner, Capsules, Footer } from './containers';
import GetCapsules from './GetCapsules';

function App() {
  //fetching the capuses
  GetCapsules();

  return (
    <div className='bg-gradient-to-br from-primary via-[#000a1d] to-[#171719]'>
      <Banner className="p-4" />
      <Capsules />
      <Footer/>
    </div> 
  );
}

export default App;

