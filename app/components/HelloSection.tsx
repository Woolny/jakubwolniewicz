"use client" 
import React from 'react';
import { TypeAnimation } from 'react-type-animation';


const HelloSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 h-screen justify-center items-center">
        <div className="place-self-center text-center">
          <h1 className="text-black mb-3 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            Hello, I'm
            <br />
            <TypeAnimation
              sequence={[
                'Jakub Wolniewicz',
                1000,
                'Quality Assurances',
                1000,
                'Future',
                200,
                'Frontend Developer',
                2000
              ]}
              wrapper="span"
              speed={45}
              repeat={2}
            />
          </h1>
         </div> 
      </div>  
    </section>
  )
}

export default HelloSection