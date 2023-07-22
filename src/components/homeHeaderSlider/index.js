import React, { useRef,useState,useEffect } from 'react';
import Slider from 'react-slick';
import CollectionItem from "../collections/collectionItem"

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';

const MySlider = () => {
  const sliderRef = useRef(null);
  const [collections, setCollections] = useState();

  const getData = async () => {
    const res = await fetch("http://localhost:3001/collections");
    return await res.json();
  };

  useEffect(() => {
    getData().then((res) => setCollections(res));
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows:false,
    responsive: [
      {
        breakpoint: 1024, // Ekran genişliği 1024px ve altındaysa
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600, // Ekran genişliği 768px ve altındaysa
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div className="my-slider-container">
      <Slider {...settings} ref={sliderRef}>
      {collections?.map((collection) => (
                  <CollectionItem key={collection.id} collection={collection} />
                ))}
        
      </Slider>
      <div className="slider-arrows">
        <span className="slider-arrow-left" >
          <MdArrowBackIos className="arrowIcon" onClick={handlePrev} />
        </span>
        <span className="slider-arrow-right" >
          <MdArrowForwardIos className="arrowIcon" onClick={handleNext}/>
        </span>
      </div>
    </div>
  );
};

export default MySlider;
