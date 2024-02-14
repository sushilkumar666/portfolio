import React from 'react'
import whiteboard from '../assets/whiteboard.png'
import c from '../assets/3.png'
import insta from '../assets/insta.png'
import emc from '../assets/emc.png'


function PersonalProject() {
    return (
        <>
            <div className='personal-conatiner'>
                <div className='personal-content'>
                <div className='project-bg'>
                    <img style={{ left: "20%", filter: 'blur(170px)' }} src={c} alt="a" />
                    <img style={{ right: "20%", top: "70%", filter: 'blur(170px)', zIndex:'-1' }} src={c} alt="a" />
                </div>

                    <div className='myname'>Perosnal Project</div>
                    <div>&nbsp;</div>
                    <div className='p-project-cmain'>
                        <div className='p-card'>
                            <div className='card-no'>01</div>
                            <div><img src={whiteboard} alt="1" /></div>
                            <div><h3>Online Collabrative Drawing Board</h3> 
                            </div>
                            <div className='go-git'>
                                <div className='button-81'>Go Live &nbsp; <i class="fa fa-paper-plane"></i> </div>
                                <div className='button-81'>Github &nbsp; <i style={{fontSize:"22px"}} class="fa fa-github-square"></i></div>
                            </div>
                        </div>
                        <div className='p-card'>
                            <div className='card-no'>02</div>
                            <div><img src={insta} alt="1" /></div>
                            <div><h3>Instagram Clone : Like Instagram</h3></div>
                            <div className='go-git'>
                            <div className='button-81'><a href="https://peinsta.netlify.app/">Go Live &nbsp; <i class="fa fa-paper-plane"></i> </a></div>
                            <div className='button-81'>Github &nbsp; <i style={{fontSize:"22px"}} class="fa fa-github-square"></i></div>
                            </div>
                        </div>
                        <div className='p-card'>
                            <div className='card-no'>03</div>
                            <div><img src={emc} alt="1" /></div>
                            <div><h3>E-Commerce: Lile Amazone, Flipkart</h3></div>
                            <div className='go-git'>
                            <div className='button-81'><a href="https://dummy-e.netlify.app/">Go Live &nbsp; <i class="fa fa-paper-plane"></i> </a></div>
                                <div className='button-81'>Github &nbsp; <i style={{fontSize:"22px"}} class="fa fa-github-square"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PersonalProject