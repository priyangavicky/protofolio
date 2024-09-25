import React from 'react';
import signup from '../assets/actodo1.png';
import Login from '../assets/actodo4.png';
import landing from '../assets/actodo3.png';
import mblview1 from '../assets/actodo2.png';
import mblview2 from '../assets/actodo5.png';
import Tabview from '../assets/actodo6.png';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

function Mailoverview() {
    return (
        <section>
            <div id="__next" data-reactroot="">
                <div style={{ position: 'fixed', zIndex: 9999, top: '60px', right: '16px', bottom: '16px', left: '16px', pointerEvents: 'none' }}></div>
                <div className="w-screen flex flex-col colors_thLight__C_ILS bg-[#fff]" style={{ height: '641px' }}>
                    <div className="w-full flex flex-col justify-center items-center bg-[#f1f1fa] drop-shadow-lg z-10 px-4 py-4">
                        <div className="flex justify-between items-start w-full max-w-[1050px]">
                            <div className="flex gap-2 md:gap-4 items-start">
                                <div className="w-[30px] md:w-[35px] h-[30px] md:h-[35px] bg-secondary rounded-full drop-shadow-md border-[1px] border-gray-300 flex justify-center items-center cursor-pointer">
                                    <a href="./"> <img src="https://cdn-icons-png.flaticon.com/512/5111/5111424.png" alt="back"></img></a>
                                </div>
                                <div>
                                    <h3 className="text-portfolio-highlighter text-xl md:text-3xl font-manrope font-extrabold max-w-fit md:max-w-full">Act Todo</h3>
                                    <p className="text-portfolio-text-dark my-2 text-sm md:text-base font-rubik font-normal">Jan 2024</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:flex flex-col md:flex-row justify-center gap-4 transition duration-500 overflow-y-auto p-5 md:p-24 sm:hidden" id="details_page">
                        <div className="hidden md:block sticky top-4 md:top-0 max-w-[280px] text-sm ">
                            <ul className="list-none flex flex-col gap-2 mt-8">
                                <li><a href="#overview" className="h-full flex cursor-pointer items-center hover:no-underline px-6 py-2 rounded-full font-rubik font-semibold text-portfolio-text-light">Overview</a></li>
                                <li><a href="#me-actodo-1" className="h-full flex cursor-pointer items-center hover:no-underline px-6 py-2 rounded-full font-rubik font-semibold text-portfolio-text-light">Resonsive Design</a></li>
                                <li><a href="#me-actodo-2" className="h-full flex cursor-pointer items-center hover:no-underline px-6 py-2 rounded-full font-rubik font-semibold text-portfolio-text-light">Implement the Login/Signup page</a></li>
                                <li><a href="#me-actodo-3" className="h-full flex cursor-pointer items-center hover:no-underline px-6 py-2 rounded-full font-rubik font-semibold text-portfolio-text-light">Implement the Landing page</a></li>
                                <li><a href="#me-actodo-4" className="h-full flex cursor-pointer items-center hover:no-underline px-6 py-2 rounded-full font-rubik font-semibold text-portfolio-text-light">Deploy the Actodo website</a></li>
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
                                                    <p>Nostra Ecommerce is an online shopping platform aimed at providing a seamless shopping experience for users.&nbsp;</p>
                                                    <p>During the course of this project,</p>
                                                    <ul>
                                                        <li>Created multiple web pages using HTML, CSS, and JavaScript</li>
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
                                                                        <img alt="pic" src={signup} className="real-image relative duration-700 ease-in-out grayscale-0 blur-0 scale-100" />
                                                                    </Zoom>
                                                                </div>
                                                            </div>
                                                            <p className="mt-2">Act-Todo Signup page</p>
                                                        </div>
                                                        <div className="md:max-w-[320px] inline-flex flex-col text-center">
                                                            <div data-rmiz-wrap="visible">
                                                                <div className="image-container undefined">
                                                                    <Zoom>
                                                                        <img alt="pic" src={Login} className="real-image relative duration-700 ease-in-out grayscale-0 blur-0 scale-100" />
                                                                    </Zoom>
                                                                </div>
                                                            </div>
                                                            <p className="mt-2">Act-Todo Login page</p>
                                                        </div>
                                                        <div className="md:max-w-[320px] inline-flex flex-col text-center">
                                                            <div data-rmiz-wrap="visible">
                                                                <div className="image-container undefined">
                                                                    <Zoom>
                                                                        <img alt="pic" src={landing} className="real-image relative duration-700 ease-in-out grayscale-0 blur-0 scale-100" />
                                                                    </Zoom>
                                                                </div>
                                                            </div>
                                                            <p className="mt-2">Act-Todo Landing page</p>
                                                        </div>
                                                    </div>
                                                </span>
                                                <span className="leading-relaxed "></span>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section className="styles_milestone__Qzjm7" id="me-actodo-1">
                                    <div className="html-parser">
                                        <div>
                                            <div className="">
                                                <span className="leading-relaxed">
                                                    <h1>Responsive Design</h1>
                                                    <h2>Scope of Work</h2>
                                                    <ul>
                                                        <li>Developed a responsive ToDo project with login, signup, and landing pages</li>
                                                        <li>Designed and implemented using Tailwind CSS for responsive layouts</li>
                                                    </ul>
                                                    <h3>Skills Used</h3>
                                                    <p>Responsive Design, Tailwind CSS, Tailwind Classes</p>
                                                </span>
                                                <span>
                                                    <div className="my-4 flex flex-wrap gap-6">
                                                        <div className="md:max-w-[320px] inline-flex flex-col text-center">
                                                            <div data-rmiz-wrap="visible">
                                                                <div className="image-container undefined">
                                                                    <Zoom>
                                                                        <img alt="Login Page Mobile View" src={mblview1} className="real-image relative duration-700 ease-in-out grayscale-0 blur-0 scale-100" />
                                                                    </Zoom>
                                                                </div>
                                                            </div>
                                                            <p className="mt-2">Login Page Mobile View</p>
                                                        </div>
                                                        <div className="md:max-w-[320px] inline-flex flex-col text-center">
                                                            <div data-rmiz-wrap="visible">
                                                                <div className="image-container undefined">
                                                                    <Zoom>
                                                                        <img alt="Signup Page Mobile View" src={mblview2} className="real-image relative duration-700 ease-in-out grayscale-0 blur-0 scale-100" />
                                                                    </Zoom>
                                                                </div>
                                                            </div>
                                                            <p className="mt-2">Signup Page Mobile View</p>
                                                        </div>
                                                        <div className="md:max-w-[320px] inline-flex flex-col text-center">
                                                            <div data-rmiz-wrap="visible">
                                                                <div className="image-container undefined">
                                                                    <Zoom>
                                                                        <img alt="Landing Page Mobile View" src={Tabview} className="real-image relative duration-700 ease-in-out grayscale-0 blur-0 scale-100" />
                                                                    </Zoom>
                                                                </div>
                                                            </div>
                                                            <p className="mt-2">Landing Page Mobile View</p>
                                                        </div>
                                                    </div>
                                                </span>
                                                <span className="leading-relaxed "></span>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section className="styles_milestone__Qzjm7" id="me-actodo-2">
                                    <div className="html-parser">
                                        <div>
                                            <div className="">
                                                <span className="leading-relaxed">
                                                    <h1>Implement the Login/Signup page</h1>
                                                    <p>In this milestone, I implemented the login and signup pages for Act-Todo.</p>
                                                    <h2>Scope of Work</h2>
                                                    <ul>
                                                        <li>Designed and developed the login and signup pages using React and Tailwind CSS</li>
                                                        <li>Ensured responsiveness for different screen sizes</li>
                                                        <li>Integrated form validation and error handling</li>
                                                    </ul>
                                                    <h3>Skills Used</h3>
                                                    <p>React, Tailwind CSS, Form Validation, Responsive Design</p>
                                                </span>
                                                <span>
                                                    <div className="my-4 flex flex-wrap gap-6">
                                                        <div className="md:max-w-[320px] inline-flex flex-col text-center">
                                                            <div data-rmiz-wrap="visible">
                                                                <div className="image-container undefined">
                                                                    <Zoom>
                                                                        <img alt="Login Page" src={Login} className="real-image relative duration-700 ease-in-out grayscale-0 blur-0 scale-100" />
                                                                    </Zoom>
                                                                </div>
                                                            </div>
                                                            <p className="mt-2">Login Page</p>
                                                        </div>
                                                        <div className="md:max-w-[320px] inline-flex flex-col text-center">
                                                            <div data-rmiz-wrap="visible">
                                                                <div className="image-container undefined">
                                                                    <Zoom>
                                                                        <img alt="Signup Page" src={signup} className="real-image relative duration-700 ease-in-out grayscale-0 blur-0 scale-100" />
                                                                    </Zoom>
                                                                </div>
                                                            </div>
                                                            <p className="mt-2">Signup Page</p>
                                                        </div>
                                                    </div>
                                                </span>
                                                <span className="leading-relaxed "></span>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section className="styles_milestone__Qzjm7" id="me-actodo-3">
                                    <div className="html-parser">
                                        <div>
                                            <div className="">
                                                <span className="leading-relaxed">
                                                    <h1>Implement the Landing page</h1>
                                                    <p>In this milestone, I designed and developed the landing page for Act-Todo.</p>
                                                    <h2>Scope of Work</h2>
                                                    <ul>
                                                        <li>Designed a visually appealing landing page layout</li>
                                                        <li>Developed the landing page using React and Tailwind CSS</li>
                                                        <li>Ensured responsiveness for various devices</li>
                                                    </ul>
                                                    <h3>Skills Used</h3>
                                                    <p>React, Tailwind CSS, Responsive Design, UI/UX Design</p>
                                                </span>
                                                <span>
                                                    <div className="my-4 flex flex-wrap gap-6">
                                                        <div className="md:max-w-[320px] inline-flex flex-col text-center">
                                                            <div data-rmiz-wrap="visible">
                                                                <div className="image-container undefined">
                                                                    <Zoom>
                                                                        <img alt="Landing Page" src={landing} className="real-image relative duration-700 ease-in-out grayscale-0 blur-0 scale-100" />
                                                                    </Zoom>
                                                                </div>
                                                            </div>
                                                            <p className="mt-2">Landing Page</p>
                                                        </div>
                                                    </div>
                                                </span>
                                                <span className="leading-relaxed "></span>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section className="styles_milestone__Qzjm7" id="me-actodo-4">
                                    <div className="html-parser">
                                        <div>
                                            <div className="">
                                                <span className="leading-relaxed">
                                                    <h1>Deploy the Actodo website</h1>
                                                    <p>In this milestone, I deployed the Actodo website to a hosting platform.</p>
                                                    <h2>Scope of Work</h2>
                                                    <ul>
                                                        <li>Configured the deployment environment</li>
                                                        <li>Deployed the website to a hosting platform</li>
                                                        <li>Ensured the website was accessible and functional post-deployment</li>
                                                    </ul>
                                                    <h3>Skills Used</h3>
                                                    <p>Deployment, Hosting, Configuration, Troubleshooting</p>
                                                </span>
                                                <span>
                                                    <div className="my-4 flex flex-wrap gap-6">
                                                        <div className="md:max-w-[320px] inline-flex flex-col text-center">
                                                            <div data-rmiz-wrap="visible">
                                                                <div className="image-container undefined">
                                                                    <Zoom>
                                                                        <img alt="Deployment" src={Tabview} className="real-image relative duration-700 ease-in-out grayscale-0 blur-0 scale-100" />
                                                                    </Zoom>
                                                                </div>
                                                            </div>
                                                            <p className="mt-2">Deployment Image</p>
                                                        </div>
                                                    </div>
                                                </span>
                                                <span className="leading-relaxed "></span>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Mailoverview;