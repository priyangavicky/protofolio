
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import p1 from '../assets/p1.png'
import p2 from '../assets/p2.png'
import p3 from '../assets/p3.png'
// import { RiProgress3Fill } from 'react-icons/ri';



const Project = () => {
  const navigate = useNavigate();
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
   setShowMore(!showMore);
 };

  const handleClick = () => {
    navigate('/dashboard');
  };

  const handleClick1 = () => {
    navigate('/bulkmailoverview');
  };

  const handleClick2 = () => {
    navigate('/todooverview');
  };

 

  return (
    <section className="w-full flex justify-center pb-6 my-0 py-20 bg-secondary text-white" id="projects">
      <div className="w-full max-w-[1050px] flex flex-col gap-0 justify-center md:py-8">
        <div id="skills" className="portfolio-highlighter flex gap-6 items-center my-8 justify-center md:justify-start w-full max-w-[1050px]">
          <h2 className="text-4xl border-b-4 border-secondary mb-5 w-[150px] font-bold">Projects</h2>
          <div className="portfolio-highlighter w-full md:w-full h-[2px] hidden md:block"></div>
        </div>
        <div className="bg-red shadow-md w-full h-fit rounded-[20px] p-4 md:p-8 flex gap-4 flex-col justify-between mb-10 hover:bg-white hover:text-black">
          <div className="flex gap-4 md:flex-row flex-col-reverse justify-between">
            <div className="md:min-h-[350px] md:w-1/2 text-center md:text-left">
              <h3 className="text-portfolio-highlighter text-2xl md:text-4xl font-manrope font-extrabold">Bulkmail Project</h3>
              <p className="text-portfolio-text-dark my-2 text-sm md:text-base font-rubik font-normal">Sep 2023</p>
              <p className="text-portfolio-text-medium text-xs text-left md:text-sm font-rubik font-normal">
                <div className="html-parser">
                  <div>
                    <div className="">
                      <span className="leading-relaxed ">
                        <p>BulkMailify is a project focused on sending bulk emails efficiently and reliably, built using the MERN (MongoDB, Express.js, React.js, Node.js) stack.</p>
                        <p>During the course of this project,</p>
                        <ul>
                          <li>Developed BulkMailify using the MERN stack to handle both frontend and backend aspects</li>
                          <li>Implemented features such as dynamic email templates, recipient management, and real-time email tracking</li>
                          <li>Utilized MongoDB for database management, Express.js and Node.js for server-side logic, and React.js for building the user interface</li>
                          <li>Integrated with email APIs and utilized MERN stack's capabilities for efficient handling of bulk email sending</li>
                        </ul>
                      </span>
                    </div>
                  </div>
                </div>
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-2">
                <div className="bg-portfolio-background text-portfolio-text-dark w-fit flex justify-center items-center px-2 py-1 md:px-3 md:py-2 rounded-md shadow-sm font-semibold text-xs md:text-md">HTML</div>
                <div className="bg-portfolio-background text-portfolio-text-dark w-fit flex justify-center items-center px-2 py-1 md:px-3 md:py-2 rounded-md shadow-sm font-semibold text-xs md:text-md">Css</div>
                <div className="bg-portfolio-background text-portfolio-text-dark w-fit flex justify-center items-center px-2 py-1 md:px-3 md:py-2 rounded-md shadow-sm font-semibold text-xs md:text-md">Tailwind</div>
                <div className="bg-portfolio-background text-portfolio-text-dark w-fit flex justify-center items-center px-2 py-1 md:px-3 md:py-2 rounded-md shadow-sm font-semibold text-xs md:text-md">React</div>
                <div className="bg-portfolio-background text-portfolio-text-dark w-fit flex justify-center items-center px-2 py-1 md:px-3 md:py-2 rounded-md shadow-sm font-semibold text-xs md:text-md">Express.js</div>
                {showMore && (
                  <>
                    <div className="bg-portfolio-background text-portfolio-text-dark w-fit flex justify-center items-center px-2 py-1 md:px-3 md:py-2 rounded-md shadow-sm font-semibold text-xs md:text-md">Node.js</div>
                    <div className="bg-portfolio-background text-portfolio-text-dark w-fit flex justify-center items-center px-2 py-1 md:px-3 md:py-2 rounded-md shadow-sm font-semibold text-xs md:text-md">Nodemailer</div>
                    <div className="bg-portfolio-background text-portfolio-text-dark w-fit flex justify-center items-center px-2 py-1 md:px-3 md:py-2 rounded-md shadow-sm font-semibold text-xs md:text-md">Vercel</div>
                    <div className="bg-portfolio-background text-portfolio-text-dark w-fit flex justify-center items-center px-2 py-1 md:px-3 md:py-2 rounded-md shadow-sm font-semibold text-xs md:text-md">Deployment</div>
                    {/* Add more items here as needed */}
                  </>
                )}
                <div onClick={toggleShowMore} className="cursor-pointer flex justify-center items-center rounded-[26px] px-4 py-1 text-portfolio-text-dark font-bold text-xs md:text-md">
                  {showMore ? 'Show Less' : 'Show More'}
                  <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon={showMore ? 'chevron-up' : 'chevron-down'} className="svg-inline--fa fa-chevron-down ml-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path fill="currentColor" d={showMore ? 'M207.9 271.4L16.6 80.3c-9.3-9.4-24.5-9.4-33.8 0L.7 62.4c-9.4 9.4-9.4 24.6 0 34L207.9 327.6c9.4 9.4 24.6 9.4 34 0L447.3 96.4c9.4-9.4 9.4-24.6 0-34l-17.1-17.9c-9.3-9.4-24.5-9.4-33.8 0L207.9 271.4z' : 'M432.6 209.3L224 392.4 15.4 209.3c-9.5-9.2-24.7-8.9-33.9.7s-8.9 24.7.7 33.9L224 444.8l192.9-201c9.5-9.2 8.9-24.7-.7-33.9-9.6-9.6-24.8-9.9-34.4-.6z'}></path>
                  </svg>
                </div>
              </div>
              <div className="flex flex-col items-center md:flex-row gap-6 md:gap-4 mt-4">
                <button onClick={handleClick1} type="button" className="chakra-button transition duration-300 shadow-md rounded-full self-center font-bold p-4 md:p-8 py-5 md:py-6 min-w-[180px] text-portfolio-highlighter bg-portfolio-background border-portfolio-highlighter border-2 mb-2 md:mb-0">View Project Details </button>
                <button className="chakra-button transition duration-300 shadow-md rounded-full self-center font-bold p-4 md:p-8 py-5 md:py-6 min-w-[180px] text-portfolio-highlighter bg-portfolio-background border-portfolio-highlighter border-2 mb-2 md:mb-0 css-jxyevw"><a href="https://actodo-three.vercel.app/" target='new'>View Project</a></button>
              </div>
            </div>
            <div className="md:h-[350px] relative md:w-5/12 rounded-[20px]">
              <div className="image-container undefined">
                <img alt="pic" src={p1} className="md:h-[350px] h-[200px] object-contain real-image relative duration-700 ease-in-out grayscale-0 blur-0 scale-100" />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-portfolio-fold-bg shadow-md w-full h-fit rounded-[20px] p-4 md:p-8 flex gap-4 flex-col justify-between mb-10 hover:bg-white hover:text-black">
          <div className="flex gap-4 md:flex-row flex-col-reverse justify-between">
            <div className="md:min-h-[350px] md:w-1/2 text-center md:text-left">
              <h3 className="text-portfolio-highlighter text-2xl md:text-4xl font-manrope font-extrabold">To-Do App</h3>
              <p className="text-portfolio-text-dark my-2 text-sm md:text-base font-rubik font-normal">May 2022</p>
              <p className="text-portfolio-text-medium text-xs text-left md:text-sm font-rubik font-normal">
                <div className="html-parser">
                  <div>
                    <div className="">
                      <span className="leading-relaxed ">
                        <p>My To-Do App is a productivity tool designed to help users manage their tasks efficiently.</p>
                        <p>During the course of this project,</p>
                        <ul>
                          <li>Built a responsive and intuitive user interface using React.js</li>
                          <li>Implemented features such as task creation, editing, deletion, and completion tracking</li>
                          <li>Utilized local storage to persist user data and ensure tasks are saved between sessions</li>
                          <li>Created custom hooks to manage state and handle side effects effectively</li>
                        </ul>
                      </span>
                    </div>
                  </div>
                </div>
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-2">
                <div className="bg-portfolio-background text-portfolio-text-dark w-fit flex justify-center items-center px-2 py-1 md:px-3 md:py-2 rounded-md shadow-sm font-semibold text-xs md:text-md">React</div>
                <div className="bg-portfolio-background text-portfolio-text-dark w-fit flex justify-center items-center px-2 py-1 md:px-3 md:py-2 rounded-md shadow-sm font-semibold text-xs md:text-md">JavaScript</div>
                <div className="bg-portfolio-background text-portfolio-text-dark w-fit flex justify-center items-center px-2 py-1 md:px-3 md:py-2 rounded-md shadow-sm font-semibold text-xs md:text-md">HTML</div>
                <div className="bg-portfolio-background text-portfolio-text-dark w-fit flex justify-center items-center px-2 py-1 md:px-3 md:py-2 rounded-md shadow-sm font-semibold text-xs md:text-md">CSS</div>
                <div className="bg-portfolio-background text-portfolio-text-dark w-fit flex justify-center items-center px-2 py-1 md:px-3 md:py-2 rounded-md shadow-sm font-semibold text-xs md:text-md">Tailwind</div>
                {showMore && (
                  <>
                    <div className="bg-portfolio-background text-portfolio-text-dark w-fit flex justify-center items-center px-2 py-1 md:px-3 md:py-2 rounded-md shadow-sm font-semibold text-xs md:text-md">Redux</div>
                    <div className="bg-portfolio-background text-portfolio-text-dark w-fit flex justify-center items-center px-2 py-1 md:px-3 md:py-2 rounded-md shadow-sm font-semibold text-xs md:text-md">Node.js</div>
                    <div className="bg-portfolio-background text-portfolio-text-dark w-fit flex justify-center items-center px-2 py-1 md:px-3 md:py-2 rounded-md shadow-sm font-semibold text-xs md:text-md">Express.js</div>
                    {/* Add more items here as needed */}
                  </>
                )}
                <div onClick={toggleShowMore} className="cursor-pointer flex justify-center items-center rounded-[26px] px-4 py-1 text-portfolio-text-dark font-bold text-xs md:text-md">
                  {showMore ? 'Show Less' : 'Show More'}
                  <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon={showMore ? 'chevron-up' : 'chevron-down'} className="svg-inline--fa fa-chevron-down ml-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path fill="currentColor" d={showMore ? 'M207.9 271.4L16.6 80.3c-9.3-9.4-24.5-9.4-33.8 0L.7 62.4c-9.4 9.4-9.4 24.6 0 34L207.9 327.6c9.4 9.4 24.6 9.4 34 0L447.3 96.4c9.4-9.4 9.4-24.6 0-34l-17.1-17.9c-9.3-9.4-24.5-9.4-33.8 0L207.9 271.4z' : 'M432.6 209.3L224 392.4 15.4 209.3c-9.5-9.2-24.7-8.9-33.9.7s-8.9 24.7.7 33.9L224 444.8l192.9-201c9.5-9.2 8.9-24.7-.7-33.9-9.6-9.6-24.8-9.9-34.4-.6z'}></path>
                  </svg>
                </div>
              </div>
              <div className="flex flex-col items-center md:flex-row gap-6 md:gap-4 mt-4">
                <button onClick={handleClick2} type="button" className="chakra-button transition duration-300 shadow-md rounded-full self-center font-bold p-4 md:p-8 py-5 md:py-6 min-w-[180px] text-portfolio-highlighter bg-portfolio-background border-portfolio-highlighter border-2 mb-2 md:mb-0">View Project Details </button>
                <button className="chakra-button transition duration-300 shadow-md rounded-full self-center font-bold p-4 md:p-8 py-5 md:py-6 min-w-[180px] text-portfolio-highlighter bg-portfolio-background border-portfolio-highlighter border-2 mb-2 md:mb-0 css-jxyevw"><a href="https://actodo-three.vercel.app/" target='new'>View Project</a></button>
              </div>
            </div>
            <div className="md:h-[350px] relative md:w-5/12 rounded-[20px]">
              <div className="image-container undefined">
                <img alt="pic" src={p2} className="md:h-[350px] h-[200px] object-contain real-image relative duration-700 ease-in-out grayscale-0 blur-0 scale-100" />
              </div>
            </div>
          </div>
        </div>
        <div>
      <div className="bg-portfolio-fold-bg shadow-md w-full h-fit rounded-[20px] p-4 md:p-8 flex gap-4 flex-col justify-between hover:bg-white hover:text-black">
         <div className="flex gap-4 md:flex-row flex-col-reverse justify-between">
            <div className="md:min-h-[350px] md:w-1/2 text-center md:text-left">
               <h3 className="text-portfolio-highlighter text-2xl md:text-4xl font-manrope font-extrabold">Dashboard(Frontend)</h3>
               <h2><a href="https://dashboard-chi-ochre.vercel.app/" target='new'>View Project</a></h2>
               <p className="text-portfolio-text-dark my-2 text-sm md:text-base font-rubik font-normal">Dec 2021</p>
               <p className="text-portfolio-text-medium text-xs text-left md:text-sm font-rubik font-normal">
               <div className="html-parser">
                        <div>
                           <div className="">
                                 <span className="leading-relaxed ">
                                    <p>Welcome to our Dashboard frontend clone! Explore top-rated destinations. Analysis your perfect details with our comprehensive list guide and user-friendly interface.
                                    </p>
                                    <p>During the course of this project,</p>
                                    <ul>
                                       <li>Developed 1 distinct web pages based on layouts using HTML and CSS</li>
                                       <li>Implemented Media Queery extensively for ensuring responsive design</li>
                                       <li>&nbsp;Deployed the website to Github/Vercel</li>
                                    </ul>
                                 </span>
                           </div>
                        </div>
                     </div>

               </p>
               <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-2">
                <div className="bg-portfolio-background text-portfolio-text-dark w-fit flex justify-center items-center px-2 py-1 md:px-3 md:py-2 rounded-md shadow-sm font-semibold text-xs md:text-md">HTML</div>
                <div className="bg-portfolio-background text-portfolio-text-dark w-fit flex justify-center items-center px-2 py-1 md:px-3 md:py-2 rounded-md shadow-sm font-semibold text-xs md:text-md">CSS</div>
                <div className="bg-portfolio-background text-portfolio-text-dark w-fit flex justify-center items-center px-2 py-1 md:px-3 md:py-2 rounded-md shadow-sm font-semibold text-xs md:text-md">Javascript</div>
                <div className="bg-portfolio-background text-portfolio-text-dark w-fit flex justify-center items-center px-2 py-1 md:px-3 md:py-2 rounded-md shadow-sm font-semibold text-xs md:text-md">Git</div>
                <div className="bg-portfolio-background text-portfolio-text-dark w-fit flex justify-center items-center px-2 py-1 md:px-3 md:py-2 rounded-md shadow-sm font-semibold text-xs md:text-md">Github</div>
              </div>
              
               <div className="flex flex-col items-center md:flex-row gap-6 md:gap-4 mt-4">
               <button onClick={handleClick} type="button" className="chakra-button transition duration-300 shadow-md rounded-full self-center font-bold p-4 md:p-8 py-5 md:py-6 min-w-[180px] text-portfolio-highlighter bg-portfolio-background border-portfolio-highlighter border-2 mb-2 md:mb-0 css-jxyevw">View Project Details </button>
               <button className="chakra-button transition duration-300 shadow-md rounded-full self-center font-bold p-4 md:p-8 py-5 md:py-6 min-w-[180px] text-portfolio-highlighter bg-portfolio-background border-portfolio-highlighter border-2 mb-2 md:mb-0 css-jxyevw"><a href="https://dashboard-chi-ochre.vercel.app/" target='new'>View Project</a></button>


                  </div>







            </div>
            <div className="md:h-[350px] relative md:w-5/12 rounded-[20px]">
               <div className="image-container undefined">
               <img alt="" src={p3} className="md:h-[350px] h-[200px] object-contain real-image relative
            duration-700 ease-in-out grayscale-0 blur-0 scale-100" />
                  </div>
            </div>
         </div>
      </div>
   </div>
      </div>
    </section>
  );
};

export default Project;