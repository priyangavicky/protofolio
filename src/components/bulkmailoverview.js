import React from 'react';
import bulkmail from '../assets/bulkmail.png'
import mailimg from '../assets/bulkmail (2).png'
import mailimg1 from '../assets/mailmblview.png'
import mailsend from '../assets/mailsend.png'
import mailrecived from '../assets/mailrecived.png'
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';



function Mailoverview(){
    return( <section>
           <div id="__next" data-reactroot="">
<div style={{ position: 'fixed', zIndex: 9999, top: '60px', right: '16px', bottom: '16px', left: '16px', pointerEvents: 'none' }}></div>
    <div className="w-screen flex flex-col colors_thLight__C_ILS bg-[#fff]" style={{height: '641px' }}>
       <div className="w-full flex flex-col justify-center items-center bg-[#f1f1fa] drop-shadow-lg z-10 px-4 py-4">
          <div className="flex justify-between items-start w-full max-w-[1050px]">
             <div className="flex gap-2 md:gap-4 items-start">
                <div className="w-[30px] md:w-[35px] h-[30px] md:h-[35px] bg-secondary rounded-full drop-shadow-md border-[1px] border-gray-300 flex justify-center items-center cursor-pointer">
                  <a href="./"> <img src="https://cdn-icons-png.flaticon.com/512/5111/5111424.png" alt="back"></img></a>
                </div>
                <div>
                   <h3 className="text-portfolio-highlighter text-xl md:text-3xl font-manrope font-extrabold max-w-fit md:max-w-full">Bulk Mail</h3>
                   <p className="text-portfolio-text-dark my-2 text-sm md:text-base font-rubik font-normal">Feb 2024</p>
                </div>
             </div>
             
          </div>
       </div>
       <div className="md:flex flex-col md:flex-row justify-center gap-4 transition duration-500 overflow-y-auto p-5 md:p-24 sm:hidden" id="details_page">
          <div className="hidden md:block sticky top-4 md:top-0 max-w-[280px] text-sm ">
             <ul className="list-none flex flex-col gap-2 mt-8">
                <li><a href="#overview" className="h-full flex cursor-pointer items-center hover:no-underline px-6 py-2 rounded-full font-rubik font-semibold text-portfolio-text-light">Overview</a></li>
                <li><a href="#bulkmailoverview-1" className="h-full flex cursor-pointer items-center hover:no-underline px-6 py-2 rounded-full font-rubik font-semibold text-portfolio-text-light">Sending a mail from node using nodemailer</a></li>
                <li><a href="#bulkmailoverview-3" className="h-full flex cursor-pointer items-center hover:no-underline px-6 py-2 rounded-full font-rubik font-semibold text-portfolio-text-light">Deployed the Bulkmail website</a></li>
             </ul>
          </div>
         
          <div className="pb-10 my-8">
             <div className="bg-[#f1f1fa] p-10 rounded-xl">
                <section className="styles_milestone__Qzjm7" id="overview">
                   <div className="html-parser">
                      <div>
                         <div className="">
                            <span className="leading-relaxed ">
                            <h1>Overview</h1>
                        <p>BulkMailify is a project focused on sending bulk emails efficiently and reliably, built using the MERN (MongoDB, Express.js, React.js, Node.js) stack.</p>
                        <p>During the course of this project,</p>
                        <ul>
                            <li>Created  web pages using HTML, CSS, and JavaScript</li>
                            <li>Utilized Tailwind for responsive design</li>
                            <li>Implemented features such as New arrival, most wanted, collection catalog, and filter functionality</li>
                        </ul>
                               <div className="image-container"></div>
                            </span>
                            <span>
                               <div className="my-4 flex flex-wrap gap-6">
                                  <div className="md:max-w-[320px] inline-flex flex-col text-center">
                                     <div data-rmiz-wrap="visible">
                                        <div className="image-container undefined">
                                        <Zoom>
                                          <img alt="pic" src={mailimg} className="real-image relative duration-700 ease-in-out grayscale-0 blur-0 scale-100" />
                                          </Zoom>                                           </div>
                                        <button aria-label="Zoom image" data-rmiz-btn-open="true"></button>
                                     </div>
                                     <p className="mt-2">Bulkmail Landing page</p>
                                  </div>
                                  <div className="md:max-w-[320px] inline-flex flex-col text-center">
                                     <div data-rmiz-wrap="visible">
                                        <div className="image-container undefined">
                                          <Zoom>
                                          <img alt="pic" src={mailimg1} className="real-image relative duration-700 ease-in-out grayscale-0 blur-0 scale-100" />
                                          </Zoom>
                                           </div>
                                        <button aria-label="Zoom image" data-rmiz-btn-open="true"></button>
                                     </div>
                                     <p className="mt-2">Mobile View</p>
                                  </div>
                               </div>
                            </span>
                            <span className="leading-relaxed "></span>
                         </div>
                      </div>
                   </div>
                </section>
               
                <section className="styles_milestone__Qzjm7" id="bulkmailoverview-1">
                   <div className="html-parser">
                      <div>
                         <div className="">
                         <span className="leading-relaxed ">
                         <h1>Send Email Using Node.js and Nodemailer</h1>
                           <h2>Scope of Work</h2>
                           <ul>
                           <li>Configured Nodemailer to send emails through a Gmail account</li>
                           <li>Created a reusable email template function to dynamically generate email content</li>
                           <li>Implemented a function to send emails with the specified content and recipient</li>
                           <li>Handled potential errors during the email sending process</li>
                           </ul>
                           <h2>Skills Used</h2>
                           <p>Node.js, Nodemailer, JavaScript, Gmail API, Error Handling</p>

                        </span>
                        <span>
                               <div className="my-4 flex flex-wrap gap-6">
                                  <div className="md:max-w-[320px] inline-flex flex-col text-center">
                                     <div data-rmiz-wrap="visible">
                                        <div className="image-container undefined">
                                          <Zoom>
                                          <img alt="pic" src={mailsend} className="real-image relative
                                           duration-700 ease-in-out grayscale-0 blur-0 scale-100" />
                                          </Zoom>
                                           </div>
                                        <button aria-label="Zoom image" data-rmiz-btn-open="true"></button>
                                     </div>
                                     <p className="mt-2">QTrip Landing page</p>
                                  </div>
                                  <div className="md:max-w-[320px] inline-flex flex-col text-center">
                                     <div data-rmiz-wrap="visible">
                                        <div className="image-container undefined">
                                        <Zoom>
                                          <img alt="pic" src={mailrecived} className="real-image relative
                                           duration-700 ease-in-out grayscale-0 blur-0 scale-100" />
                                          </Zoom>
                                        </div>
                                        <button aria-label="Zoom image" data-rmiz-btn-open="true"></button>
                                     </div>
                                     <p className="mt-2">QTrip Adventures page</p>
                                  </div>
                               </div>
                            </span>
                           
                         </div>
                      </div>
                   </div>
                </section>
                <section className="styles_milestone__Qzjm7" id="bulkmailoverview-3">
                   <div className="html-parser">
                      <div>
                         <div className="">
                            <span className="leading-relaxed ">
                                  <h1>Deployed the Bulk Mail Project</h1>
                                             <h2>Scope of Work</h2>
                                             <ul>
                                                <li>Deployed the Bulk Mail website to Vercel using Vercel CLI commands</li>
                                             </ul>
                                             <h3>Skills Used</h3>
                                             <p>Deployment, Vercel, Vercel CLI</p>
                            </span>
                            <span>
                               <div className="my-4 flex flex-wrap gap-6">
                                  <div className="md:max-w-[320px] inline-flex flex-col text-center">
                                     <div data-rmiz-wrap="visible">
                                        <div className="image-container undefined"><Zoom><img alt="pic" src={bulkmail} className="real-image relative
                                           duration-700 ease-in-out grayscale-0 blur-0 scale-100" /></Zoom>
                                        </div>
                                        <button aria-label="Zoom image" data-rmiz-btn-open="true"></button>
                                     </div>
                                     <p className="mt-2">Bulkmail App</p>
                                  </div>
                               </div>
                            </span>
                         </div>
                      </div>
                   </div>
                </section>
                <div className="py-4 md:py-8"><div className="flex flex-col items-center md:flex-row gap-6 md:gap-4 mt-4">
                  <button type="button" className="bg-secondary shadow-md rounded-full self-center font-bold p-4 md:p-8 py-5 md:py-6 min-w-[180px]  border-2 mb-2 md:mb-0 css-jxyevw"><a href="https://bulkmail-nnrlvkswy-monikas-projects-6d3e61a3.vercel.app/" target='blank'>View Website</a> </button>
                  </div>
                  </div>
             </div>
          </div>
       </div>
    </div>
 </div>
    </section>


    );
}

export default Mailoverview