import React from 'react'
import a from '../assets/1.png'
import b from '../assets/2.png'
import aiftp from '../assets/aiftp.jpg'
import ctc from '../assets/ctc.jpg'
import wirc from '../assets/wirc.jpg'
import gstpam from '../assets/gstpam.png'
import Tilty from 'react-tilty';
import { Reveal } from './Reveal'



function Projects() {
    return (
        <>
            <div className='project-main'>
                <div className='project-bg'>
                    <img src={a} alt="a" />
                    <img src={b} alt="c" />
                </div>
                <div className='project-content'>
                    <div className='project-container'>
                        <div>
                            <div>
                                <Reveal>
                                     <div className='myname'>Project &nbsp; Work </div>
                                <p style={{ color: "rgb(84, 84, 84)", fontFamily: "sans-serif" }}>Work and Handled Some India Biggest CA and Tax Institute Website</p>
                               
                                </Reveal>
                                <Reveal>
                                <div className='ca'>
                                    <div><img src={aiftp} alt="" /></div>
                                    <div><img src={ctc} alt="" /></div>
                                    <div><img src={wirc} alt="" /></div>
                                    <div><img src={gstpam} alt="" /></div>
                                </div>
                                </Reveal>
                                <br />
                                <div><a className='button-81' href="https://github.com/ArmanA12">Github Profile &nbsp; <i style={{fontSize:"22px"}} class="fa fa-github-square"></i></a></div>
                            </div>
                            <div>
                                <div className='project-card' id='pcard1'>
                                
                                    <Reveal><div className='card-no'>01</div></Reveal>
                                    <Reveal> <div className='card-haeding'>World Furniture Expo</div></Reveal>
                                    <Reveal> <center><span style={{ fontFamily: "sans-serif" }}>In two days converted the whole website into the new website from WordPress theme to Html, Css, Javascript, Jquery, Boostrap,  with <b>performance, accessibility</b> and <b>SEO</b>, every things in above <b>88%</b>, and load time is just <b>3S</b>. <br /><br />Made 6+ Big Form with API for Buyer & Exhibitor Enquiry</span><br /></center></Reveal>
                                    <Reveal><span style={{ fontFamily: "sans-serif" }}> </span></Reveal>
                                    <Reveal><center>
                                    <span style={{ fontFamily: "sans-serif" }}>Tech :Html, Css, Javascript, Boostrap, Jquery</span> <div><span style={{ letterSpacing: "1px" }} className='button-81'>Live  Website &nbsp;&nbsp;<i class="fa fa-telegram"></i></span>&nbsp; </div></center></Reveal>


                                   
                                   
                                    
                                    
                                    
                                </div>
                            </div>
                        </div>
                        <div>
                            <Tilty glare={true} maxGlare={0.2} scale={1} perspective={3000}>
                            <div className='project-card' id='pcard2'>
                                    <Reveal>
                                    <div className='card-no'>02</div>
                                    </Reveal>
                                    <Reveal>
                                    <div className='card-haeding'>Intex South Asia</div>
                                    </Reveal>
                                    <Reveal>
                                    <span style={{ fontFamily: "sans-serif" }}>_3 website created for intex south asia sub domain in latest technology and just in 16 days and optimized <b>10+ Rest API</b> and decreased their response time from <b>14 Sec to 9 Sec. </b><br /><b>Over all performance increased to 21%.</b></span><br />
                                    </Reveal>
                                    <Reveal>
                                    <span style={{ fontFamily: "sans-serif" }}>Tech :React, Redux,Rest API, Mysql   Javascript, Tailwind</span>
                                    </Reveal>
                                    <Reveal>
                                    <div><span style={{ letterSpacing: "1px" }} className='button-81'>Live  Website &nbsp;&nbsp;<i class="fa fa-telegram"></i></span>&nbsp; </div>
                                    </Reveal>
                                </div>
                            </Tilty>

                            <Tilty glare={true} maxGlare={0.2} scale={1} perspective={3000}>
                                <div className='project-card' id='pcard3'>
                                    <Reveal>
                                    <div className='card-no'>03</div>
                                    </Reveal>
                                    <Reveal>
                                    <center>
                                    <div className='card-haeding'>Full Stack Appliaction with Admin & User Dashboard</div>
                                    </center>
                                    </Reveal>
                                    <Reveal>
                                    <center>
                                    <span style={{ fontFamily: "sans-serif" }}>Created Full stack web app including website, Buyer, Exhibitor and Admin dashboard with 30+ form.</span>
                                    </center>
                                    </Reveal>
                                    <Reveal>
                                    <center>
                                    <span style={{ fontFamily: "sans-serif" }}>I have written all the backend and frontend code alone and deployed it from scratch.</span>
                                    </center>
                                    </Reveal>
                                    <Reveal>
                                    <center>
                                    <span style={{ fontFamily: "sans-serif" }}> <b>Admin can see all Login user and they can interact with user using real time chat</b></span><br />
                                    </center>
                                    </Reveal>
                                    <Reveal>
                                    <center>
                                    <span style={{ fontFamily: "sans-serif" }}>Tech : React, Redux Toolkit, RTK Query, Node.js, Express.js, Mongodb</span>
                                    </center>
                                    </Reveal>
                                    <Reveal>
                                    <center>
                                    <div><span style={{ letterSpacing: "1px" }} className='button-81'>Live  &nbsp;&nbsp;<i class="fa fa-telegram"></i></span>&nbsp; </div>
                                    </center>
                                    </Reveal>
                                </div>
                                </Tilty>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Projects