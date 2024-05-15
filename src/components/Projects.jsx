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
                                <div><a className='button-81' href="https://github.com/sushilkumar666">Github Profile &nbsp; <i style={{ fontSize: "22px" }} class="fa fa-github-square"></i></a></div>
                            </div>
                            <div>
                                <Tilty glare={true} maxGlare={0.2} scale={1} perspective={3000}>
                                    <div className='project-card' id='pcard1'>

                                        <Reveal><div className='card-no'>01</div></Reveal>
                                        <Reveal> <div className='card-haeding'>World Furniture Expo</div></Reveal>
                                        <Reveal> <center><span style={{ fontFamily: "sans-serif" }}>In two days converted the whole website into the new website from WordPress theme to Html, Css, Javascript, Jquery, Boostrap,  with <b>performance, accessibility</b> and <b>SEO</b>, every things in above <b>88%</b>, and load time is just <b>3S</b>. <br /><br />Made 6+ Big Form with API for Buyer & Exhibitor Enquiry</span><br /></center></Reveal>
                                        <Reveal><span style={{ fontFamily: "sans-serif" }}> </span></Reveal>
                                        <Reveal><center>
                                            <span style={{ fontFamily: "sans-serif" }}>Tech :Html, Css, Javascript, Tailwind, Next.js</span> <div><a href='https://www.wofxworldexpo.com/' target='_blank' style={{ letterSpacing: "1px" }} className='button-81'>Live  Website &nbsp;&nbsp;<i class="fa fa-telegram"></i></a>&nbsp; </div></center></Reveal>







                                    </div>
                                </Tilty>
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
                                        <div><a href='https://www.intexsouthasia.com/' target='_blank' style={{ letterSpacing: "1px" }} className='button-81'>Live  Website &nbsp;&nbsp;<i class="fa fa-telegram"></i></a>&nbsp; </div>
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
                                            <div className='card-haeding'>Blog Application</div>
                                        </center>
                                    </Reveal>
                                    <Reveal>
                                        <center>
                                            <span style={{ fontFamily: "sans-serif" }}>Created Blog website including Authentication, Blog Posts, Realtime text Editor .</span>
                                        </center>
                                    </Reveal>
                                    <Reveal>
                                        <center>
                                            <span style={{ fontFamily: "sans-serif" }}>I have written all the frontend code alone and deployed it from scratch.</span>
                                        </center>
                                    </Reveal>

                                    <Reveal>
                                        <center>
                                            <span style={{ fontFamily: "sans-serif" }}>Tech : React, Redux Toolkit, RTK , react-hook-form</span>
                                        </center>
                                    </Reveal>
                                    <Reveal>
                                        <center>
                                            <div><a href='https://blog-amber-xi.vercel.app/' target='_blank' style={{ letterSpacing: "1px" }} className='button-81'>Live  &nbsp;&nbsp;<i class="fa fa-telegram"></i></a>&nbsp; </div>
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