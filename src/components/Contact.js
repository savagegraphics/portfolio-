import React from 'react';
import Navbar from './Navbar';


function Contact() {
    return (
        <div className='content-contact'>
            <Navbar />
            <form className="form">
                <h2>CONTACT US</h2>
                <p type="Name:"><input placeholder="Write your name here.."></input></p>
                <p type="Email:"><input placeholder="Let us know how to contact you back.."></input></p>
                <p type="Message:"><input placeholder="What would you like to tell us.."></input></p>
                <button>Send Message</button>
                <div className='mail-us'>
                    <span class="fa fa-phone"></span>  +27 78 268 7290
                    <span class="fa fa-envelope-o"></span> info@residencefilms.com
                </div>
            </form>
        </div>
    )
}

export default Contact