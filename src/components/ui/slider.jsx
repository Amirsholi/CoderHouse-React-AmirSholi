import React, { Component } from "react";
import Slider from "react-slick";

const Carrucel = ({list}) => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1500,
        autoplaySpeed: 5000,
        cssEase: "linear"
      
    };
    return (
      <div >
        <Slider {...settings} >
         {list.map((item,index) => (
            
            <img className="w-full h-[500px] object-cover" src={item} key={index}></img>
         ) )}
         
        </Slider>
      </div>
    );
  
}
export default Carrucel;