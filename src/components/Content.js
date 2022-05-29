import React from 'react'
import bodyimg from '../images/body.jpg';
import about from '../images/about.png';
import giving from '../images/giving.png';
import involve from '../images/involve.png';
import manpray from '../images/man-pray.jpg';
import oldpray from '../images/old-pray.jpg';
import twopray from '../images/two-pray.jpg';
import shaperight from '../images/shaperight.png';


const Content = () => {
  return (
    <div>
        <div className=''>
            <img
            src={bodyimg}
            className="xl:w-full sm:w-full w-1500 h-663"
            />
            <div className="relative xxs:bottom-32 md:bottom-80 sm:bottom-56 xxs:ml-4 xl:bottom-96 xl:ml-16 lg:bottom-96 lg:ml-16">
                <p id='welcome' className='text-white relative xxs:text-xs lg:text-2xl sm:text-lg md:text-xl xxs:bottom-3 lg:bottom-8'>WELCOME TO OUR CHURCH</p>
                <p id='nav' className='text-white font-bold lg:text-6xl md:text-5xl sm:text-3xl xxs:text-base'>BECOME A PART OF<br/>OUR COMMUNUNITY</p>
                <p id='welcome' className='bg-amber-500 xxs:pl-3 xxs:py-0.5 lg:px-5 lg:py-2 xxs:rounded-sm lg:rounded-md xxs:text-xs lg:text-sm font-small xxs:w-24 lg:w-32 hover:bg-amber-300'><a href='#'>LEARN MORE</a></p>
                <p className='text-white relative top-2 xxs:text-xs xxs:tracking-tighter xxs:leading-none lg:text-xl'>Lorem ipsum dolor sit amet,<br/>consectetur adipiscing elit, sed do.</p>
            </div>
        </div>
        <div className='text-center'>
              <p id='welcome'className='relative xxs:bottom-16 lg:bottom-52 xxs:text-lg sm:text-2xl lg:text-xl'>SUB-HEADLINE</p>
              <p id='nav'className='relative xxs:bottom-12 lg:bottom-48 font-bold xxs:text-xl sm:text-3xl lg:text-5xl'>A CHURCH THAT'S RELEVANT</p>
        </div>

      <div className='flex justify-center'>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-12 relative lg:bottom-40 xl:bottom-40 xxs:bottom-8">
          {/* Card 1 */}
          <div className="overflow-hidden shadow-lg bg-orange-100 w-72 lg:h-72 border-b-8 border-amber-500">
            <img src={about} className='ml-6 h-9 w-9 relative top-8' />
          <div className="px-6 py-4 mt-16">
          <div id='nav' className="font-bold text-xl mb-2">ABOUT US</div>
          <p id='nav' className="text-gray-700 text-sm tracking-tight">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
      </div>
    </div>
    {/* Card 2 */}
    <div className='overflow-hidden shadow-lg bg-orange-100 w-72 lg:h-72 border-b-8 border-amber-500'>
            <img className='ml-6 h-9 w-9 relative top-8' src={involve} />
      <div class="px-6 py-4 mt-16">
        <div id='nav' class="font-bold text-xl mb-2">GET INVOLVED</div>
        <p id='nav' class="text-gray-700 text-sm tracking-tight">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>

    {/* Card 3 */}
    <div class="overflow-hidden shadow-lg bg-orange-100 w-72 lg:h-72 border-b-8 border-amber-500">
            <img src={giving} className='ml-6 h-9 w-9 relative top-8' />
      <div class="px-6 py-4 mt-16">
        <div id='nav' class="font-bold text-xl mb-2">GIVING BACK</div>
        <p id='nav' class="text-gray-700 text-sm tracking-tight">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  </div>
      </div>

      <div className='text-center relative xxs:bottom-8 lg:bottom-16 xl:bottom-16'>
        <p id='welcome'className='relative xxs:text-lg sm:text-2xl lg:text-xl lg:bottom-8 xl:bottom-8'>SUB-HEADLINE</p>
        <p id='nav'className='relative font-bold xxs:text-xl sm:text-3xl lg:text-5xl'>LOVE AND COMPASSION</p>
        <p id='nav' className='relative xl:left-56 lg:left-56 md:left-40 sm:left-28 xs:left-[80px] xxs:left-16 top-6 tracking-tight w-4/6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
          ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
          dolore eu fugiat nulla pariatur.
        </p>
        <p id='welcome' className='relative top-16 xl:left-[600px] lg:left-[560px] md:left-[420px] 
        sm:left-[280px] xs:left-[200px] bg-amber-500 xxs:pl-3 xxs:left-[142px] xxs:py-1 xxs:px-4 md:px-4 md:py-3 sm:px-0.5 sm:py-2 
        xs:px-0.5 xs:py-2 lg:px-[24px] lg:py-[14px] xxs:rounded-sm lg:rounded-md md:rounded-md
        xxs:text-xs lg:text-sm font-small xxs:w-24 lg:w-32 hover:bg-amber-300'><a href='#'>READ MORE</a></p>
      </div>
        
      
        <div>
        <img className='absolute xl:w-[293px] xl:h-[384px] xl:left-[163px] xl:top-[1639px] lg:w-[220px] lg:h-[291px] lg:left-[250px] 
        lg:top-[1600px] md:w-[220px] md:h-[291px] md:left-[150px] md:top-[1380px] sm:w-[270px] sm:h-[341px] sm:left-[220px] sm:top-[1900px] 
        xs:w-[270px] xs:h-[341px] xs:left-[115px] xs:top-[1780px] xxs:w-[220px] xxs:h-[291px] xxs:left-[79px] xxs:top-[1780px]' src={manpray} />
        <img className='absolute xl:w-[390px] xl:h-[512px] xl:left-[480px] xl:top-[1733px] lg:w-[250px] lg:h-[345px] lg:left-[500px] 
        lg:top-[1650px] md:w-[220px] md:h-[291px] md:left-[400px] md:top-[1430px] sm:w-[270px] sm:h-[341px] sm:left-[220px] sm:top-[2270px] 
        xs:w-[270px] xs:h-[341px] xs:left-[115px] xs:top-[2140px] xxs:w-[220px] xxs:h-[291px] xxs:left-[79px] xxs:top-[2100px]' src={twopray} />
        <img className='absolute xl:w-[293px] xl:h-[384px] xl:left-[894px] xl:top-[1639px] lg:w-[220px] lg:h-[291px] lg:left-[780px] 
        lg:top-[1600px] md:w-[220px] md:h-[291px] md:left-[650px] md:top-[1380px] sm:w-[270px] sm:h-[341px] sm:left-[220px] sm:top-[2645px] 
        xs:w-[270px] xs:h-[341px] xs:left-[115px] xs:top-[2503px] xxs:w-[220px] xxs:h-[291px] xxs:left-[79px] xxs:top-[2420px]' src={oldpray} />
        </div>

        <div className='text-center'>
        <p id='welcome'className='absolute xxs:text-lg sm:text-2xl xs:text-2xl xxs:text-2xl lg:text-xxl xl:left-[590px] xl:top-[2250px] lg:left-[515px] lg:top-[2020px] md:left-[400px] md:top-[1740px] sm:left-[250px] sm:top-[3010px] xs:left-[135px] xs:top-[2855px] xxs:left-[80px] xxs:top-[2715px]'>OUR MISSION & VISION</p>
        <p id='nav'className='absolute font-bold xxs:text-xl sm:text-3xl xs:text-3xl xxs:text-2xl lg:text-5xl xl:left-[460px] xl:top-[2280px] lg:left-[385px] lg:top-[2050px] md:left-[360px] md:top-[1780px] sm:left-[215px] sm:top-[3035px] xs:left-[100px] xs:top-[2890px] xxs:left-[72px] xxs:top-[2745px]'>CELEBRATE WITH US</p>
        <p id='nav' className='absolute tracking-tight sm:w-[500px] xs:w-[400px] xxs:w-[280px] xl:left-[450px] xl:top-[2365px] lg:left-[340px] lg:top-[2145px] md:left-[225px] md:top-[1830px] sm:left-[106px] sm:top-[3075px] xs:left-[50px] xs:top-[2930px] xxs:left-[50px] xxs:top-[2785px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <a href="#" id='welcome' className='absolute xl:top-[2430px] xl:left-[630px] lg:top-[2210px] lg:left-[630px] md:top-[1890px] sm:top-[3140px] sm:left-[] xs:top-[3020px] xs:left-[207px] xxs:top-[2890px] xxs:left-[145px]'>Read More
        <img src={shaperight} className="absolute xl:top-[7px] xl:left-[75px] lg:top-[7px] lg:left-[78px] md:top-[7px] md:left-[76px] sm:top-[7px] sm:left-[75px] xs:top-[7px] xs:left-[75px] xxs:top-[7px] xxs:left-[70px]" /></a>
        </div>

        <div className='text-center'>
          <p id='welcome' className='relative xl:top-[950px]'>Watch and listen</p>
          <p id='nav' className='relative xl:top-[950px] xl:left-[340px] lg:text-5xl font-bold w-[650px]'>THE BENEFITS OF JOINING OUR CHURCH</p>
          <img></img>
        </div>
      
      <footer></footer>
    </div>
  )
}

export default Content