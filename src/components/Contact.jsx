import React from 'react'
import a from '../assets/1.png'
import b from '../assets/2.png'
import c from '../assets/3.png'
import w from '../assets/w.png'
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2'
import { Reveal } from './Reveal'


export default function Contact() {


    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_g98ol3a', 'template_usgr0ib', e.target, '8qOefhQJ3w6-iPF7U')
        Swal.fire({
            title: 'Thank You',
            text: 'Message has been sended',
            icon: 'success',
            confirmButtonText: 'OK'
        });
        window.location.reload();

    }



    return (
        <>
            <div className='contact'>
                <div className='project-bg'>
                    <img style={{ left: "20%", filter: 'blur(200px)' }} src={c} alt="a" />
                    <img style={{ right: "30%", top: "70%", filter: 'blur(170px)', zIndex: '-1' }} src={c} alt="a" />
                </div>

                <div className='contact-container'>
                    <div className='contant1'>
                        <Reveal><div className='myname'>Contact Me </div></Reveal>
                        <Reveal><div><p><i class="fa fa-phone"></i>&nbsp;<a href="tel:+91 7091554628">+91 7091554628</a></p></div></Reveal>
                        <Reveal><div><p><i class="fa fa-whatsapp"></i>&nbsp;<a href="#">+91 7091554628</a></p></div></Reveal>
                        <Reveal><div><p><i id="con-icon" class="fa fa-envelope"></i>&nbsp;<a href="mailto: +91 7091554628">mdarmanshekh4@gmail.com</a></p></div></Reveal>
                        <p>&nbsp;</p>
                        <div className='social-icons'>
                            <a href="https://www.facebook.com/mdarman.shekh.5201"><div><i class="fa fa-facebook-f"></i></div></a>
                            <a href="https://www.instagram.com/arman_aishakar/"><div><i class="fa fa-instagram"></i></div></a>
                            <a href="https://www.linkedin.com/in/arman-shekh12/"><div><i class="fa fa-linkedin"></i></div></a>
                            <a href="https://twitter.com/AAishakar"><div><i class="fa fa-twitter"></i></div></a>
                            <a href="https://github.com/ArmanA12"><div><i class="fa fa-github-alt"></i></div></a>
                        </div>
                    </div>
                    <div className='contant2'>
                        <form onSubmit={sendEmail}>
                            <div className='firstlast'>
                                <input type="text" name="name" placeholder='Your Name' required /> &nbsp;
                            </div>

                            <div>
                                <input type="text" name="user_email" id="" placeholder='Your Email' required />
                            </div>
                            <div>
                                <textarea style={{ height: "110px" }} name="message" placeholder='Write Message' cols="40" rows="8" required></textarea>
                            </div>
                            <br />
                            <div>
                                <button className='submit' type='submit'>Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
