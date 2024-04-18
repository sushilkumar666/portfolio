import React from 'react'
import arman from '../assets/arman.png'
import { Reveal } from './Reveal'

function Banner() {
    return (
        <>
            <div className='bannrMain'>
                <div className='bannerContainer'>
                    <div className='bannerDiv'>
                        
                        <Reveal>
                            <div className='myname'>Hy! &nbsp; I Am <br /><span style={{ color: "rgb(14, 40, 91)" }}>Md Arman Shekh</span></div>
                       
                            <p style={{ color: "rgb(84, 84, 84)", fontFamily: "sans-serif" }}><span style={{ color: "rgb(14, 40, 91)" }}>Hi</span>, I m Arman Shekh having 1-year experienced React developer dedicated to crafting seamless and user-friendly web experiences. Seeking collaborative opportunities to excel in front-end development.</p>

                        </Reveal>
                        <Reveal>
                        <div style={{ display: "flex", gap: "20px" }}>
                            <div><a className='button-81' href="tel:7091554628">Let's Talk &nbsp;  <i class="fa fa-phone"></i></a></div>
                            <div><a className='button-81' href="https://armanportfolio-orpin.vercel.app/">Download CV &nbsp; <i class="fa fa-download"></i></a></div>
                        </div>
                        </Reveal>
                        <div className='followme'>Follow Me  <i class="fa fa-long-arrow-right"></i> <span> &nbsp; &nbsp;

                            <a href="https://www.facebook.com/mdarman.shekh.5201"><i class="fa fa-facebook"></i></a> &nbsp;
                             <a href="https://github.com/ArmanA12"><i class="fa fa-github-alt"></i></a> &nbsp;
                            <a href="https://www.instagram.com/arman_aishakar/"><i class="fa fa-instagram"></i></a>

                            &nbsp;   <a href="https://www.linkedin.com/in/arman-shekh12/"><i class="fa fa-linkedin"></i></a>
                            &nbsp; <a href="https://twitter.com/AAishakar"><i class="fa fa-twitter"></i></a>
                        </span></div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "center" }} className='bannerDiv'>
                        <div className='banner-div-bg'>
                           <Reveal>
                           <img style={{ zIndex: "100" , objectFit:'fill'}} src={arman} alt="img" />
                           </Reveal>
                            <div className='something'></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner