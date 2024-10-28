import React from 'react'
import './Footer.css'

import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';

function Footer() {
    return (
        <div className='footer'>
            <div>
                <div className='footer-data'>
                   
                    <div className='student-details'>
                        <h1>Team Member 1</h1>
                        <p>Jagathpranesh</p>
                        <p>22CDR034</p>
                    </div>

                    <div className='student-details'>
                        <h1>Team Member 2</h1>
                        <p>GOKUL ANAND S</p>
                        <p>22CDR025</p>
                    </div>

                    <div className='student-details'>
                        <h1>Team Member 3</h1>
                        <p>MITHRUN R S</p>
                        <p>22CDR055</p>
                    </div>
                    
                </div>
                <div className="contact-social" >
                    <a href='https://x.com/AswinRameshbabu' target='blank' className='social-icon'><TwitterIcon style={{ fontSize: 40,color:"rgb(283,83,75)"}} /></a>
                    <a href='https://www.linkedin.com/in/jagathpranesh-r/' target='blank' className='social-icon'><LinkedInIcon style={{ fontSize: 40,color:"rgb(283,83,75)"}} /></a>
                    <a href='https://www.instagram.com/itz_mint_jp/' target='blank' className='social-icon'><InstagramIcon style={{ fontSize: 40,color:"rgb(283,83,75)"}} /></a>
                </div>
            </div>
            <div className='copyright-details'>
                <p className='footer-copyright'><span>Designed by Jagath Gokul Mithrun</span></p>
            </div>
        </div>
    )
}

export default Footer