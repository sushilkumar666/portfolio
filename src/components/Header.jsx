import React from 'react'
import '../App.css'
import { Reveal } from './Reveal'

function Header() {
    return (
        <>

            <div className='header-main'>
                <div className='header'>
                    <div>
                        <Reveal>
                        <div className='LOGO'>Arman <span style={{color:"rgb(14, 40, 91)"}}>s.</span></div>
                        </Reveal>
                    </div>
                    <div className='links-main'>
                        <div className='links' style={{visibility:"hidden"}}>
                            <li><a href="">Project</a></li>
                            <li><a href="">About Me </a></li>
                            <li><a href="">Experience</a></li>

                        </div>
                        <div>
                            <a className='button-81' href="mailto:mdarmanshekh4@gmail.com"><span className='hidemobile'>Contact Me</span> &nbsp; <i style={{fontSize:"22px"}} class="fa fa-commenting-o"></i></a>
                        </div>
                    </div>
                </div>


            </div>

        </>
    )
}

export default Header