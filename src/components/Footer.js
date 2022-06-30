import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';






function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className='footer'>
            <div className='Icons'>
                <a href=''>
                    <InstagramIcon />
                </a>


            </div>
            <div className='Icons'>
                <FontAwesomeIcon icon="fa-brands fa-vimeo" />
            </div>


            <p>Copyright  {year}</p>

        </footer>
    )
}

export default Footer;