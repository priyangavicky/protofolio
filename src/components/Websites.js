import websiteImg1 from '../assets/Coffee Shop.png';
import websiteImg2 from '../assets/Atema.jpg';
import websiteImg3 from '../assets/Arsha.jpg';

export default function Websites() {

    const config = {
        projects : [
            {
                image: websiteImg1,
                description: 'A Coffeeshop Website. Built with Front-End.',
                link: 'https://priyangavicky.github.io/CoffeeShop/'
            },
            {
                image: websiteImg2,
                description: 'A LAW Page with Front-End',
                link: 'https://priyangavicky.github.io/Atema/'
            },
            {
                image: websiteImg3,
                description: 'Basic Business Page with Front-End',
                link: 'https://priyangavicky.github.io/Arsha/'
            }
        ]
    }

    return <section id='websites' className="flex  flex-col py-40 px-5 justify-center bg-primary text-white">
        <div className="w-full">
            <div className="flex flex-col px-10 py-5">
                <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[150px] font-bold">Websites</h1>
                <p>These are some of my best websites. I have built these with Html, Css,Bootstrap and Javascript. Check them out.</p>
            </div>
        </div>
        <div className="w-full">
            <div className='flex flex-col md:flex-row px-10 gap-5'>
                {config.projects.map((project) => (
                     <div className='relative'>
                        <img className='h-[200px] w-[500px]' src={project.image} alt=""/>
                        <div className='project-desc'>
                            <p className='text-center px-5 py-5'>{project.description}</p>
                            <div className='flex justify-center'>
                                <a className='btn' target='_blank' rel="noreferrer" href={project.link}>View Project</a>
                            </div>
                        </div>
                    </div>
                ))}
               
               
            </div>
        </div>
    </section>
}