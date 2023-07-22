import React, { useRef,useState,useEffect } from 'react';
import Slider from 'react-slick';
import CollectionItem from "../collections/collectionItem"

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./collectionSlider.css"
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
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:false,
    responsive: [
      {
        breakpoint: 1024, // Ekran genişliği 1024px ve altındaysa
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 900, // Ekran genişliği 1024px ve altındaysa
        settings: {
          slidesToShow: 2,
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
    <div className="my-slider-container container">
      <Slider {...settings} ref={sliderRef}>
      {collections?.map((collection) => (
                  <div className='slideItem'> 
                    <CollectionItem key={collection.id} collection={collection} />
                  </div>
                ))}
        
      </Slider>
      <div className="slider-arrows">
        <div className="slider-arrow-left" >
          <MdArrowBackIos className="arrowIcon" onClick={handlePrev} />
        </div>
        <div className="slider-arrow-right" >
          <MdArrowForwardIos className="arrowIcon" onClick={handleNext}/>
        </div>
      </div>
    </div>
  );
};

export default MySlider;
