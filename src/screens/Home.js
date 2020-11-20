import React from 'react';
import {Link} from 'react-router-dom'
import background from '../assets/images/background.png'


function Home() {
    return (
        <div className="Home">
        <img className="backgroundHome" src ={background} alt="people with phones"/>
        <h1><Link to="/signin">Sign-in</Link></h1>
        </div>
    )
}

export default Home
