import React from 'react';
import NavBar from '../NavBar/NavBar';
import Header from './Header';
import "./Home.css"
import Newsletter from './Newsletter';
import TrendingProducts from './TrendingProducts';

const Home = () => {
    return (
        <div>
            <NavBar/>
            <Header/>
            <TrendingProducts/>
            <Newsletter/>
            {/* <Footer/> */}
        </div>
    );
};

export default Home; 