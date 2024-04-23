import React from "react";
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

const PrevArrow: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
    <button
        className="absolute top-1/2 -left-10 transform -translate-y-1/2 z-10 text-black border-2 border-gray-500 rounded-full pr-2 py-2 bg-gray-300"
        onClick={onClick}
    >
        <LeftArrowIcon />
    </button>
);

const NextArrow: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
    <button
        className="absolute top-1/2 -right-10 transform -translate-y-1/2 z-10 text-black border-2 border-gray-500 rounded-full pr-2 py-2 bg-gray-300"
        onClick={onClick}
    >
        <RightArrowIcon />
    </button>
);

export default function ImageSlideSection() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        centerPadding: "0px"
    }

    return (
        <div className="flex items-center w-full h-56 border-2 border-gray-500 justify-center">
            <Slider {...settings} className="w-full max-w-[900px]">
                {imageUrls.map((url, index) => (
                    <div key={index} className="px-5">
                        <img src={url} alt={`slideImage${index}`} className="w-[250px] h-[180px] object-cover border-2 border-gray-500"/>
                    </div>
                ))}
            </Slider>
        </div>
    )
}