import React from 'react';
import Banner from './Banner/Banner';
import Banner2 from './Banner2/Banner2';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Onother from './Onother/Onother';
import OnotherPart2 from './OnotherPart2/OnotherPart2';
import Products from './Products/Products';
import SwipeableTextMobileStepper from './SwipeableTextMobileStepper/SwipeableTextMobileStepper';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <SwipeableTextMobileStepper></SwipeableTextMobileStepper>
            <Banner></Banner>
            <Products></Products>
            <Banner2></Banner2>
            <Onother></Onother>
            <OnotherPart2></OnotherPart2>
            <Footer></Footer>
        </div>
    );
};

export default Home;