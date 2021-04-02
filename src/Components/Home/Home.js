import React from 'react';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import Header from './Header/Header';
import "./Home.css"
import Newsletter from './Newsletter/Newsletter';
import TrendingProducts from './TrandingProducts/TrendingProducts';

const Home = () => {
    return (
        <div>
            <NavBar/>
            <Header/>
            <TrendingProducts/>
            <Newsletter/>
            <Footer/>
        </div>
    );
};

export default Home; 