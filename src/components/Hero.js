import HeroImg from '../assets/hero.jpg';

export default function Hero() {
    const config  = {
        subtitle: 'I am a Full-stack developer and Designer , I have built many industry grade projects from scratch and am armed with many technological skills useful for tech projects. Check out my projects below.',
        // social: {
        //     twitter: '',
        //     facebook: 'https://www.facebook.com',
        //     linkedin: 'https://www.linkedin.com/in/priyanga-rajendran-31611b31a/'
        // }
    }


    return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
       <div className='md:w-1/2 flex flex-col'>
            <h1 className=' text-white text-6xl font-hero-font'>Hi, <br/> I am <span className='text-black'>Priyanga</span> Rajendran
                <p className='text-2xl text-portfolio-text-light md:text-base font-normal mt-5'>{config.subtitle}</p>
                <p className="text-portfolio-text-light text-xs md:text-base font-normal"></p>

            </h1>
           
           
       
       <div className="text-portfolio-text-medium flex flex-col md:flex-row items-center gap-2 text-sm md:text-lg font-medium mt-4"></div>
             <div className="bg-portfolio-secondary text-white rounded-[20px] flex gap-y-2 md:gap-0 justify-around items-center mt-6 min-h-[100px] p-2 md:p-0">
                <div className="text-center flex-1 md:border-r-white md:border-r-[1px] last:border-r-0 flex flex-col justify-center items-center md:h-[100px]">
                   <span className="text-3xl md:text-5xl font-bold">12</span> 
                   <p className="text-[8px] md:text-[12px] w-max px-3">VERIFIED<br class="block md:hidden" /> SKILLS</p>
                </div>
                <div className="text-center flex-1 md:border-r-white md:border-r-[1px] last:border-r-0 flex flex-col justify-center items-center md:h-[100px]">
                   <span className="text-3xl md:text-5xl font-bold">10+</span> 
                   <p className="text-[8px] md:text-[12px] w-max px-3">PROFESSIONAL<br class="block md:hidden" /> PROJECTS</p>
                </div>
                <div className="text-center flex-1 md:border-r-white md:border-r-[1px] last:border-r-0 flex flex-col justify-center items-center md:h-[100px]">
                   <span className="text-3xl md:text-5xl font-bold">25+</span> 
                   <p className="text-[8px] md:text-[12px] w-max px-3">DSA PROBLEMS<br class="block md:hidden" /> SOLVED</p>
                </div>
                </div>
                </div>

       <img className='md:w-1/3' src={HeroImg} alt=""/>


    </section>
}