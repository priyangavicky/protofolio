import AboutImg from '../assets/about.png';
import skillimage1 from '../assets/skill1.png';
import skillimage2 from '../assets/skill2.png';
import skillimage3 from '../assets/skill3.png';
import skillimage4 from '../assets/skill4.png';
import skillimage5 from '../assets/skill5.png';
import skillimage6 from '../assets/skill6.png';
import skillimage7 from '../assets/skill7.png';
import skillimage8 from '../assets/skill8.png';
import skillimage9 from '../assets/skill9.png';
import skillimage10 from '../assets/skill10.webp';
import skillimage11 from '../assets/skill11.png';
import skillimage12 from '../assets/skill12.png';
import skillimage13 from '../assets/skill13.png';
import skillimage14 from '../assets/skill14.webp';
import skillimage15 from '../assets/skill15.png';
import skillimage16 from '../assets/skill16.png';

export default function About () {
    const config  = {
        line1: 'Hi, My name is Priyanga Rajendran. I am a Full stack web developer. I built beautiful Websites with React.js , Tailwind CSS + Bootstrap',
        line2: 'I am proficient in Frontend skills like React.js, Redux, Redux Tool Kit, Axios, Tailwind CSS, SaSS, Css3 and many more.',
        line3: 'In backend I know few of skills below'
    }

    return <div><section className='flex flex-col md:flex-row bg-secondary pt-40 px-5' id='about'>
        <div className='py-10 md:w-1/2'>
            <img src={AboutImg} alt='' />
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
                <p className='pb-5'>{config.line1}</p>
                <p className='pb-5'>{config.line2}</p>
                <p className='pb-5'>{config.line3}</p>
            </div>
        </div>
    </section>
    
    <section className="w-full flex justify-center pb-20 bg-secondary " id="about">
        <div className="w-full max-w-[1050px] flex flex-col gap-0 justify-center md:py-8">
        <div id="skills" className="portfolio-highlighter flex gap-6 items-center my-8 justify-center md:justify-start w-full max-w-[1050px] undefined">
           <h2 className="min-w-fit text-2xl md:text-4xl font-manrope font-extrabold flex gap-2 items-center text-white border-b-4">Skills</h2>
           <div className="portfolio-highlighter w-full md:w-full h-[2px] hidden md:block"></div>
        </div>
        <div className="grid grid-cols-4 md:grid-cols-6 gap-6 md:gap-12 justify-between transition duration-300 mx-4 mb-8">
           <div className="flex flex-col items-center">
           <div className="bg-skill shadow-md group  relative h-[50px] w-[50px] md:h-[80px] md:w-[80px] rounded-[10px] md:rounded-[20px] flex justify-center items-center">
                 <div className="h-[30px] w-[30px] md:h-[50px] md:w-[50px] hover:scale-125">
                    <div className="image-container undefined">
                     <img alt="" src={skillimage1}
                    className="real-image relative
                       duration-700 ease-in-out grayscale-0 blur-0 scale-100" /></div>
                 </div>
              </div>
              <p className="text-portfolio-highlighter text-center mt-1 font-rubik font-normal md:text-base text-xs text-white">HTML</p>
           </div>
           <div className="flex flex-col items-center">
           <div className="bg-skill shadow-md group  relative h-[50px] w-[50px] md:h-[80px] md:w-[80px] rounded-[10px] md:rounded-[20px] flex justify-center items-center">
                 <div className="h-[30px] w-[30px] md:h-[50px] md:w-[50px] hover:scale-125">
                    <div className="image-container undefined">
                     <img alt="" src={skillimage2}
                    className="real-image relative
                       duration-700 ease-in-out grayscale-0 blur-0 scale-100" /></div>
                 </div>
              </div>
              <p className="text-portfolio-highlighter text-center mt-1 font-rubik font-normal md:text-base text-xs text-white">CSS</p>
           </div><div className="flex flex-col items-center">
           <div className="bg-skill shadow-md group  relative h-[50px] w-[50px] md:h-[80px] md:w-[80px] rounded-[10px] md:rounded-[20px] flex justify-center items-center">
                 <div className="h-[30px] w-[30px] md:h-[50px] md:w-[50px] hover:scale-125">
                    <div className="image-container undefined">
                     <img alt="" src={skillimage3}
                    className="real-image relative
                       duration-700 ease-in-out grayscale-0 blur-0 scale-100" /></div>
                 </div>
              </div>
              <p className="text-portfolio-highlighter text-center mt-1 font-rubik font-normal md:text-base text-xs text-white">TAILWIND</p>
           </div>
           <div className="flex flex-col items-center">
           <div className="bg-skill shadow-md group  relative h-[50px] w-[50px] md:h-[80px] md:w-[80px] rounded-[10px] md:rounded-[20px] flex justify-center items-center">
                 <div className="h-[30px] w-[30px] md:h-[50px] md:w-[50px] hover:scale-125">
                    <div className="image-container undefined">
                     <img alt="" src={skillimage4}
                    className="real-image relative
                       duration-700 ease-in-out grayscale-0 blur-0 scale-100" /></div>
                 </div>
              </div>
              <p className="text-portfolio-highlighter text-center mt-1 font-rubik font-normal md:text-base text-xs text-white">BOOTSTRAP</p>
           </div>
           <div className="flex flex-col items-center">
           <div className="bg-skill shadow-md group  relative h-[50px] w-[50px] md:h-[80px] md:w-[80px] rounded-[10px] md:rounded-[20px] flex justify-center items-center">
                 <div className="h-[30px] w-[30px] md:h-[50px] md:w-[50px] hover:scale-125">
                    <div className="image-container undefined">
                     <img alt="" src={skillimage5}
                    className="real-image relative
                       duration-700 ease-in-out grayscale-0 blur-0 scale-100" /></div>
                 </div>
              </div>
              <p className="text-portfolio-highlighter text-center mt-1 font-rubik font-normal md:text-base text-xs text-white">JAVASCRIPT</p>
           </div><div className="flex flex-col items-center">
           <div className="bg-skill shadow-md group  relative h-[50px] w-[50px] md:h-[80px] md:w-[80px] rounded-[10px] md:rounded-[20px] flex justify-center items-center">
                 <div className="h-[30px] w-[30px] md:h-[50px] md:w-[50px] hover:scale-125">
                    <div className="image-container undefined">
                     <img alt="" src={skillimage8}
                    className="real-image relative
                       duration-700 ease-in-out grayscale-0 blur-0 scale-100" /></div>
                 </div>
              </div>
              <p className="text-portfolio-highlighter text-center mt-1 font-rubik font-normal md:text-base text-xs text-white">REACT</p>
           </div><div className="flex flex-col items-center">
           <div class="bg-skill shadow-md group  relative h-[50px] w-[50px] md:h-[80px] md:w-[80px] rounded-[10px] md:rounded-[20px] flex justify-center items-center">
                 <div className="h-[30px] w-[30px] md:h-[50px] md:w-[50px] hover:scale-125">
                    <div className="image-container undefined">
                     <img alt="" src={skillimage11}
                    class="real-image relative
                       duration-700 ease-in-out grayscale-0 blur-0 scale-100" /></div>
                 </div>
              </div>
              <p className="text-portfolio-highlighter text-center mt-1 font-rubik font-normal md:text-base text-xs text-white">PHP</p>
           </div><div className="flex flex-col items-center">
           <div class="bg-skill shadow-md group  relative h-[50px] w-[50px] md:h-[80px] md:w-[80px] rounded-[10px] md:rounded-[20px] flex justify-center items-center">
                 <div className="h-[30px] w-[30px] md:h-[50px] md:w-[50px] hover:scale-125">
                    <div className="image-container undefined">
                     <img alt="" src={skillimage12}
                    className="real-image relative
                       duration-700 ease-in-out grayscale-0 blur-0 scale-100" /></div>
                 </div>
              </div>
              <p className="text-portfolio-highlighter text-center mt-1 font-rubik font-normal md:text-base text-xs text-white">MY SQL</p>
           </div><div className="flex flex-col items-center">
           <div class="bg-skill shadow-md group  relative h-[50px] w-[50px] md:h-[80px] md:w-[80px] rounded-[10px] md:rounded-[20px] flex justify-center items-center">
                 <div className="h-[30px] w-[30px] md:h-[50px] md:w-[50px] hover:scale-125">
                    <div className="image-container undefined">
                     <img alt="" src={skillimage7}
                    className="real-image relative
                       duration-700 ease-in-out grayscale-0 blur-0 scale-100" /></div>
                 </div>
              </div>
              <p className="text-portfolio-highlighter text-center mt-1 font-rubik font-normal md:text-base text-xs text-white">NODE</p>
           </div><div className="flex flex-col items-center">
           <div class="bg-skill shadow-md group  relative h-[50px] w-[50px] md:h-[80px] md:w-[80px] rounded-[10px] md:rounded-[20px] flex justify-center items-center">
                 <div className="h-[30px] w-[30px] md:h-[50px] md:w-[50px] hover:scale-125">
                    <div className="image-container undefined">
                     <img alt="" src={skillimage9}
                    className="real-image relative
                       duration-700 ease-in-out grayscale-0 blur-0 scale-100" /></div>
                 </div>
              </div>
              <p className="text-portfolio-highlighter text-center mt-1 font-rubik font-normal md:text-base text-xs text-white">MONGODB</p>
           </div><div className="flex flex-col items-center">
           <div className="bg-skill shadow-md group  relative h-[50px] w-[50px] md:h-[80px] md:w-[80px] rounded-[10px] md:rounded-[20px] flex justify-center items-center">
                 <div className="h-[30px] w-[30px] md:h-[50px] md:w-[50px] hover:scale-125">
                    <div className="image-container undefined">
                     <img alt="" src={skillimage13}
                    className="real-image relative
                       duration-700 ease-in-out grayscale-0 blur-0 scale-100" /></div>
                 </div>
              </div>
              <p className="text-portfolio-highlighter text-center mt-1 font-rubik font-normal md:text-base text-xs text-white">EXPRESS</p>
           </div><div className="flex flex-col items-center">
           <div class="bg-skill shadow-md group  relative h-[50px] w-[50px] md:h-[80px] md:w-[80px] rounded-[10px] md:rounded-[20px] flex justify-center items-center">
                 <div className="h-[30px] w-[30px] md:h-[50px] md:w-[50px] hover:scale-125">
                    <div className="image-container undefined">
                     <img alt="" src={skillimage6}
                    className="real-image relative
                       duration-700 ease-in-out grayscale-0 blur-0 scale-100" /></div>
                 </div>
              </div>
              <p className="text-portfolio-highlighter text-center mt-1 font-rubik font-normal md:text-base text-xs text-white">GIT</p>
           </div>
           <div className="flex flex-col items-center">
           <div className="bg-skill shadow-md group  relative h-[50px] w-[50px] md:h-[80px] md:w-[80px] rounded-[10px] md:rounded-[20px] flex justify-center items-center">
                 <div className="h-[30px] w-[30px] md:h-[50px] md:w-[50px] hover:scale-125">
                    <div className="image-container undefined">
                     <img alt="" src={skillimage10}
                    className="real-image relative
                       duration-700 ease-in-out grayscale-0 blur-0 scale-100" /></div>
                 </div>
              </div>
              <p className="text-portfolio-highlighter text-center mt-1 font-rubik font-normal md:text-base text-xs text-white">PYTHON</p>
           </div>
           <div className="flex flex-col items-center">
           <div className="bg-skill shadow-md group  relative h-[50px] w-[50px] md:h-[80px] md:w-[80px] rounded-[10px] md:rounded-[20px] flex justify-center items-center">
                 <div className="h-[30px] w-[30px] md:h-[50px] md:w-[50px] hover:scale-125">
                    <div className="image-container undefined">
                     <img alt="" src={skillimage14}
                    className="real-image relative
                       duration-700 ease-in-out grayscale-0 blur-0 scale-100" /></div>
                 </div>
              </div>
              <p className="text-portfolio-highlighter text-center mt-1 font-rubik font-normal md:text-base text-xs text-white">JAVA</p>
           </div>
           <div className="flex flex-col items-center">
           <div className="bg-skill shadow-md group  relative h-[50px] w-[50px] md:h-[80px] md:w-[80px] rounded-[10px] md:rounded-[20px] flex justify-center items-center">
                 <div className="h-[30px] w-[30px] md:h-[50px] md:w-[50px] hover:scale-125">
                    <div className="image-container undefined">
                     <img alt="" src={skillimage15}
                    className="real-image relative
                       duration-700 ease-in-out grayscale-0 blur-0 scale-100" /></div>
                 </div>
              </div>
              <p className="text-portfolio-highlighter text-center mt-1 font-rubik font-normal md:text-base text-xs text-white">ASP.net</p>
           </div>
           <div className="flex flex-col items-center">
           <div className="bg-skill shadow-md group  relative h-[50px] w-[50px] md:h-[80px] md:w-[80px] rounded-[10px] md:rounded-[20px] flex justify-center items-center">
                 <div className="h-[30px] w-[30px] md:h-[50px] md:w-[50px] hover:scale-125">
                    <div className="image-container undefined">
                     <img alt="" src={skillimage16}
                    className="real-image relative
                       duration-700 ease-in-out grayscale-0 blur-0 scale-100" /></div>
                 </div>
              </div>
              <p className="text-portfolio-highlighter text-center mt-1 font-rubik font-normal md:text-base text-xs text-white">C</p>
           </div>
          
         
        </div>
     </div>
  </section>
  </div>
  
 
}