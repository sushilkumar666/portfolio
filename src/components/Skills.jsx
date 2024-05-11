import React from 'react'
import a from '../assets/1.png'
import b from '../assets/2.png'
import w from '../assets/w.png'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import react from '../assets/reactjs.png'
import tailwind from '../assets/tailwind.png'
import redux from '../assets/redux.png'
import next from '../assets/next.png'
import typescript from '../assets/typescript.png'
import nodejs from '../assets/nodejs.png'
import mongodb from '../assets/mongodb.png'
import git from '../assets/git.png'
import express from '../assets/express.png'


import { Reveal } from './Reveal'

function Skill() {
    return (
        <>
            <div className='project-main'>
                <div className='project-bg'>
                    <img style={{ left: "20%", filter: 'blur(220px)' }} src={w} alt="a" />
                    <img style={{ right: "20%", top: "66%", filter: 'blur(250px)' }} src={a} alt="a" />
                </div>
                <div className='skill-container'>
                    <div className='skill'>
                        <Reveal><div className='myname'>Below is my &nbsp; skill </div></Reveal>
                        <Reveal><p style={{ color: "rgb(84, 84, 84)", fontFamily: "sans-serif" }}>Below Mentioned is My Technical Skill  </p></Reveal>
                    </div>
                </div>
                <div className='skill-container'>
                    <div className='skill'>
                        <div className='skill-div'>
                            <div className='slikone'>
                                <p>&nbsp;</p>
                                <Reveal>
                                    <div style={{ color: "#788898", fontSize: "40px", letterSpacing: "3px" }} className='myname'>Out of 100%, I am 70% frontend engineer and 30% backend engineer. </div>
                                </Reveal>

                                <div>

                                </div>
                            </div>

                            <div className='slikone' style={{ marginLeft: '200px' }}>
                                <div>
                                    <div className='first-div'>
                                        <div>
                                            <img src={html} alt="" />
                                        </div>
                                        <div>
                                            <img src={css} alt="" />
                                        </div>
                                        <div>
                                            <img src={tailwind} alt="" />
                                        </div>
                                        <div>
                                            <img src={javascript} alt="" />
                                        </div>
                                        <div>
                                            <img src={nodejs} alt="" />
                                        </div>
                                        <div>
                                            <img src={mongodb} alt="" />
                                        </div>
                                        <div>
                                            <img src={express} alt="" />
                                        </div>

                                        <div>
                                            <img src={git} alt="" />
                                        </div>
                                        <div className='skill-bg'></div>
                                        <div className='skill-inner'>
                                            <div>
                                                <img src={react} alt="" />
                                            </div>
                                            <div>
                                                <img src={redux} alt="" />
                                            </div>
                                            <div>
                                                <img src={next} alt="" />
                                            </div>
                                            <div>
                                                <img src={typescript} alt="" />
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


        </>

    )
}

export default Skill