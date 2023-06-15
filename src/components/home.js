import React from 'react';
import Header from './header';
import NavBar from './navBar';
import Socials from './socials';
import About from './about';

const Home = () => {
    return (
        <div className='home-container  bg-slate-800 w-screen h-screen'>
            <Header />
            <NavBar />
            <About />
            <Socials />
        </div>
    );
}

export default Home;