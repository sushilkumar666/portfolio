import React from 'react'
import a from '../assets/1.png'
import b from '../assets/2.png'
import c from '../assets/3.png'
import { Reveal } from './Reveal'




function Experience() {
    return (
        <>
            <div className='project-main'>
                <div className='project-bg'>
                    <img style={{ left: "47%", filter: 'blur(140px)' }} src={a} alt="a" />
                    <img style={{ left: "80%", top: "-30px", filter: 'blur(140px)' }} src={c} alt="a" />

                </div>
                <div className='timeline-main'>
                    <div className='timeline-container'>
                        <nav class="jump-to">
                            <ul>
                                <Reveal>
                                    <div className='myname'>Experiences &  Education </div>
                                </Reveal>

                            </ul>
                        </nav>

                        <div class="timelines">

                            <section class="timeline education">
                                <Reveal>
                                    <h2 class="timeline-title" id="education">Education</h2>
                                </Reveal>
                                <Reveal>
                                    <ul class="timeline-items">
                                        <li class="timeline-item">
                                            <h3>Bachlor in Information Technology</h3>
                                            <p class="date-interval">
                                                <time datetime="2017-09">2019</time> &ndash; <time datetime="2019-07">2022</time>
                                            </p>
                                            <p class="location">Pillai HOC College of Arts, Science and Commerce - Rasayani</p>
                                        </li>
                                        <li class="timeline-item">
                                            <h3>Intermediate Science</h3>
                                            <p class="date-interval">
                                                <time datetime="2011-09">2017</time> &ndash; <time datetime="2017-07">2019</time>
                                            </p>
                                            <p class="location">St. Wilfred College - Panvel</p>
                                        </li>
                                        <li class="timeline-item">
                                            <h3>Primary School </h3>
                                            <p class="location">Janta Vidyalaya English Medium School - Rasayani</p>
                                        </li>
                                    </ul>
                                </Reveal>
                            </section>

                            <section class="timeline experience" id='exeperienc2'>
                                <Reveal>
                                    <h2 class="timeline-title" id="experience" >Experience</h2>
                                </Reveal>

                                <Reveal>
                                    <ul class="timeline-items">
                                        <li class="timeline-item">
                                            <h3>Junior Front End Engineer</h3>
                                            <p class="date-interval">
                                                <time datetime="2021-04">April, 2023</time> &ndash; <time datetime="2023">Present</time>
                                            </p>

                                        </li>
                                        <li class="timeline-item">
                                            <h3>Worldex India Pvt Ltd,</h3>
                                            <p class="location">Lower Parel, Mumabi, 400013</p>
                                        </li>
                                        <li class="timeline-item">
                                            <h3>Works & Techonolgy</h3>
                                            <p class="location">10+ Dead wesbite converted into fast and fully optimized website with SEO, Load time Decreased 10s to 6s, Performance increased 67% to 97%</p>
                                            <p class="location">Wrote  highly scalable, secure and optimized full stack application for 2 Mega shows from scratch, created exhibitor, buyer and admin dashboard UI, in the latest technology</p>
                                            <p class="location">  I Have created more than 8+ websites using React.js and Next.js and from scratch and alonlly. Those are fully optomized.</p>
                                        </li>
                                    </ul>
                                </Reveal>
                            </section>

                        </div>


                    </div>
                </div>
            </div>

        </>

    )
}

export default Experience