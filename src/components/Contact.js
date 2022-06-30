import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Navbar from './Navbar';


//                 const form = useRef();


//   const sendEmail = (e) => (
//   {
//     e.preventDefault();

//     emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
//   });


function Contact() {
    return (
        <div>
            < Navbar />

            <div className="content-contact">

                <form>

                    <h2>CONTACT US</h2>
                    <div className='Contact'>

                        <TextField
                            helperText="Please enter your name"
                            id="name-input"
                            label="Name"
                        />
                    </div>

                    <div className='contact'>
                        <TextField
                            id="email"
                            label="Email"
                            type="email"
                            autoComplete="current-email"
                            variant="filled"
                        />
                    </div>


                    <div className='contact'>
                        <TextField
                            id="outlined-textarea"
                            label="Message"
                            placeholder="Message"
                            multiline
                            rows={2}
                        />
                    </div>

                    <div>


                        <Button className='contact' variant="outlined">Submit</Button>

                    </div>


                </form>

                <div className='mail-us'>
                    <span class="fa fa-phone"></span> 📞 +27 78 268 7290
                    <span class="fa fa-envelope-o"></span> info@residencefilms.com   📧
                </div>

            </div>
        </div>
    );
}


//  {
//     return (
//         <div className='content-contact'>
//             <Navbar />
//             <form className="form">
//                 <h2>CONTACT US</h2>
//                 <p type="Name:"><input placeholder="Write your name here.."></input></p>
//                 <p type="Email:"><input placeholder="Let us know how to contact you back.."></input></p>
//                 <p type="Message:"><input placeholder="What would you like to tell us.."></input></p>
//                 <button>Send Message</button>
//                 <div className='mail-us'>
//                     <span class="fa fa-phone"></span>  +27 78 268 7290
//                     <span class="fa fa-envelope-o"></span> info@residencefilms.com
//                 </div>
//             </form>
//         </div>
//     )
// }

export default Contact