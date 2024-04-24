import React, {useEffect, useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {LeftArrowIcon, RightArrowIcon} from "../../ui/Icons";

const imageUrls = [
    "/images/slideImages/slideImage1.jpg",
    "/images/slideImages/slideImage2.jpg",
    "/images/slideImages/slideImage3.jpg",
    "/images/slideImages/slideImage4.jpg",
    "/images/slideImages/slideImage5.jpg",
    "/images/slideImages/slideImage6.jpg",
    "/images/slideImages/slideImage7.jpg",
    "/images/slideImages/slideImage8.jpg",
    "/images/slideImages/slideImage9.jpg",
    "/images/slideImages/slideImage10.jpg",
];

const PrevArrow: React.FC<{ onClick?: () => void }> = ({onClick}) => (
    <button
        className="absolute top-1/2 -left-10 transform -translate-y-1/2 z-10 text-black border-2 border-gray-500 rounded-full pr-2 py-2 bg-gray-300"
        onClick={onClick}
    >
        <LeftArrowIcon/>
    </button>
);

const NextArrow: React.FC<{ onClick?: () => void }> = ({onClick}) => (
    <button
        className="absolute top-1/2 -right-10 transform -translate-y-1/2 z-10 text-black border-2 border-gray-500 rounded-full pr-2 py-2 bg-gray-300"
        onClick={onClick}
    >
        <RightArrowIcon/>
    </button>
);

export default function ImageSlideSection() {

    const settings = {
        className: "w-full max-w-[1740px]",
        dots: false,
        infinite: true,
        speed: 500,
        // autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 6,
        slidesToScroll: 1,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
        responsive: [
            {
                breakpoint: 1870,
                settings: {
                    className: "w-full max-w-[1640px]",
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 1770,
                settings: {
                    className: "w-full max-w-[1540px]",
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 1670,
                settings: {
                    className: "w-full max-w-[1440px]",
                    slidesToShow: 5,
                },
            },
            {
                breakpoint: 1570,
                settings: {
                    className: "w-full max-w-[1340px]",
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 1470,
                settings: {
                    className: "w-full max-w-[1240px]",
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 1370,
                settings: {
                    className: "w-full max-w-[1140px]",
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 1270,
                settings: {
                    className: "w-full max-w-[1040px]",
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 1170,
                settings: {
                    className: "w-full max-w-[880px]",
                    slidesToShow: 3,
                },
            }
        ]
    }


    return (
        <div className="flex items-center w-full h-56 border-2 border-gray-500 justify-center">
            <Slider {...settings}>
                {imageUrls.map((url, index) => (
                    <div key={index} className="px-5">
                        <img src={url} alt={`slideImage${index}`}
                             className="w-[250px] h-[180px] object-cover border-2 border-gray-500"/>
                    </div>
                ))}
            </Slider>
        </div>
    )
}