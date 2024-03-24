import React from 'react';
import Image from 'next/image';


const HeroSection = () => {
  return (
    <section>
      <div className='flex flex-col lg:flex-row items-center lg:justify-around'>
        <div className='lg:w-1/2 mb-4 lg:mb-0'>
          <Image
              src="/images/me.png"
              alt="img"
              width={800}
              height={800}
            /> 
        </div>
        <div className='text-center'>
        <p className="font-normal text-[1rem] lg:text-[1.25rem] 2xl:text-[1.5rem] px-8 sm:px-0 sm:w-[250px] md:w-[450px]">As a frontend developer, I am constantly on a journey of learning and growth. My motivation drives me to explore new technologies, refine my skills, and push the boundaries of what I can create. 
            <br />
            <br />
            Beyond coding, I thrive on active pursuits, finding solace and inspiration in the mountains. When I&apos;m not immersed in code, you might find me piecing together intricate LEGO sets, where creativity knows no bounds. With a passion for both innovation and adventure, I bring a dynamic perspective to every project I undertake.</p>
        </div>
      </div>              
    </section>
  )
}

export default HeroSection