import React from 'react';
import Header from './header';
import NavBar from './navBar';
import Socials from './socials';
import About from './about';
import Videos from './videos';

const Home = () => {
    return (
        <div className='home-container bg-gradient-to-r from-gray-700 via-green-700 to-gray-700 p-10'>
            <NavBar />
            <Header />
            <About />
            <Videos />
            <Socials />
        </div>
    );
}

export default Home;