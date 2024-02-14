import React from 'react'
import a from '../assets/1.png'
import b from '../assets/2.png'
import c from '../assets/3.png'
import aiftp from '../assets/aiftp.jpg'
import ctc from '../assets/ctc.jpg'
import wirc from '../assets/wirc.jpg'
import gstpam from '../assets/gstpam.png'




function Experience() {
    return (
        <>
            <div className='project-main'>
                <div className='project-bg'>
                <img style={{ left: "47%", filter:'blur(140px)' }} src={a} alt="a" />
                    <img style={{ left: "80%", top:"-30px", filter:'blur(140px)' }} src={c} alt="a" />

                </div>
                <div className='project-content'>
                    <div className='exs-container'>
                        <div>
                            <div>
                                <div className='myname'>My &nbsp; Experience </div>
                                <p style={{ color: "rgb(84, 84, 84)", fontFamily: "sans-serif" }}>Below is my working experience from start to till now   </p>
                            </div>

                            <div>
                            <div style={{ width: "400px" }} id='ex1'>
                                <p className='p'>&nbsp;</p>
                                <div className='card-no'>01</div>
                                <div className='card-haeding'>Front End Engineer - Intern</div><br />
                                <span style={{ fontFamily: "sans-serif" }}>HashbaSoft Pvt, Ltd</span><br />
                                <span style={{ fontFamily: "sans-serif", lineHeight:"34px" }}>10/11/2021 - 24/02/2022</span><br /><br />
                                <span style={{ fontFamily: "sans-serif" }}> <b>Redevlope Multiple Api End to End and decraesed response time 32%</b> </span><br /><br />

                                <span style={{ fontFamily: "sans-serif" }}>There worked as a front development engineer and contributed to User Interface in multiple client-based project.</span><br /><br />
                                <span style={{ fontFamily: "sans-serif" }}>Maintain and Handle Multiple Client Wordpress Website, <b>[aiftponline.org, ctconline.org, gstpam.org]</b></span><br /><br />
                            </div>

                            </div>
                        </div>
                        <div>
                            <div style={{ width: "400px" }} id='ex1'>
                                <p className='p'>&nbsp;</p>
                                <div className='card-no'>02</div>
                                <div className='card-haeding'>Front End Engineer</div><br />
                                <span style={{ fontFamily: "sans-serif" }}>Worldex India Exhibitoion Promotion Pvt Ltd</span><br />
                                <span style={{ fontFamily: "sans-serif",lineHeight:"34px" }}>19-08-2022 to Present</span><br /><br />
                                <span style={{ fontFamily: "sans-serif" }}>Wrote highly <b>scalable, secure and optimized</b> backend for  two shows to scratch and <b>exhibitor, buyer and admin dashboard UI</b>, in the latest technology</span><br />
                                <span style={{ fontFamily: "sans-serif" }}><strong>Note</strong> : Previous backend was built in php, MySQL, new backend build on  redux toolkit with node express, mongodb, and react, RTK queries, JWT authentication.</span><br /><br />
                                <span style={{ fontFamily: "sans-serif" }}>Converted <b>15+</b> dead websites in fast  performance, fully optimized including SEO, and decreased load time from <b>10s to below 6s</b>.</span><br /><br />
                                <span style={{ fontFamily: "sans-serif" }}>I Have created more than 8+ websites  using <b>React.js and Next.js</b> and from scratch and alonlly. Those are fully optomized.</span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Experience