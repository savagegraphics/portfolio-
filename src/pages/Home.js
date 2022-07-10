import React from 'react'
import '../App.css'
import Content from '../components/Content'
import Navbar from '../components/Navbar'
import Logo from '../assets/residence_logo.png'
import Button from '@mui/material/Button'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import { Link } from 'react-router-dom'






function Home() {
    return (
        <div className="container">

            <div>
                <Navbar />
                <Content />


            </div>

        </div>
    )
}

export default Home;
