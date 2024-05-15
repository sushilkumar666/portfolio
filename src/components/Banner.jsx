import React from 'react'
import sushil from '../assets/sushil-image.png'
import { Reveal } from './Reveal'

function Banner() {
    return (
        <>
            <div className='bannrMain'>
                <div className='bannerContainer'>
                    <div className='bannerDiv'>

                        <Reveal>
                            <div className='myname'>Hii! &nbsp; I Am <br /><span style={{ color: "rgb(14, 40, 91)" }}>Sushilkumar S. Sharma</span></div>

                            <p style={{ color: "rgb(84, 84, 84)", fontFamily: "sans-serif" }}><span style={{ color: "rgb(14, 40, 91)" }}>Hi</span>, I m Sushilkumar Sharma having 1-year experienced React developer dedicated to crafting seamless and user-friendly web experiences. Seeking collaborative opportunities to excel in front-end development.</p>

                        </Reveal>
                        <Reveal>
                            <div style={{ display: "flex", gap: "20px" }}>
                                <div><a className='button-81' href="tel:7249419687">Let's Talk &nbsp;  <i class="fa fa-phone"></i></a></div>
                                <div><a className='button-81' href="/src/assets/sushil-resume-2024.pdf">Download CV &nbsp; <i class="fa fa-download"></i></a></div>
                            </div>
                        </Reveal>
                        <div className='followme'>Follow Me  <i class="fa fa-long-arrow-right"></i> <span> &nbsp; &nbsp;

                            <a href="https://www.facebook.com/profile.php?id=100050058410120"><i class="fa fa-facebook"></i></a> &nbsp;
                            <a href="https://github.com/sushilkumar666"><i class="fa fa-github-alt"></i></a> &nbsp;
                            <a href="https://www.instagram.com/sushil_classy/?next=%2F"><i class="fa fa-instagram"></i></a>

                            &nbsp;   <a href="https://www.linkedin.com/in/i-ssharma/"><i class="fa fa-linkedin"></i></a>
                            &nbsp; <a href="https://twitter.com/sushilkumar_x"><i class="fa fa-twitter"></i></a>
                        </span></div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "center" }} className='bannerDiv'>
                        <div className='banner-div-bg'>
                            <Reveal>
                                <img style={{ zIndex: "100", objectFit: 'fill' }} src={sushil} alt="img" />
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