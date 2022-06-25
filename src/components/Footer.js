import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';




function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className='footer'>
            <div className='Icons'>
                <a href=''>
                <InstagramIcon />
                </a>
            
              
            </div>

            <p>Copyright  {year}</p>

        </footer>
    )
}

export default Footer;