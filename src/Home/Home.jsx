import React from "react";
import NavigationBar from "./nav";
import CategoriesBar from "./CategoriesBar";
import SpecialDealsCarousel from "./Carousel";
import TrendingProducts from "./TrendingProducts";
import DealOfTheDay from "./DealOfTheDay";
import Footer from "./Footer";
function Home(){
    return (
        <>
          <NavigationBar />
          <CategoriesBar />
          <SpecialDealsCarousel />
          <TrendingProducts />
          <DealOfTheDay />
          <Footer />
         
        </>
      )
}
export default Home