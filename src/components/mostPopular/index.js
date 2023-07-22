
import Slider from 'react-slick';
import ProductCards from "../productsCards"
import React, { useEffect, useState ,useRef} from "react";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';

const MySlider = () => {
  const sliderRef = useRef(null);
  const [products, setProducts] = useState();
  const getProducts = async () => {
    const res = await fetch("http://localhost:3001/products");
    return await res.json();
  };

  useEffect(() => {
    getProducts().then((res) => setProducts(res));
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
     

        {products?.map((product) => (
                  <ProductCards key={product.id}
                   img={product.img} 
                   name={product.name} 
                   price={product.price} 
id={product.id}
                   />
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
