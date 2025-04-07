import React from 'react';
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {img} from './images/data'
import classes from './CarouselEffect.module.css';
function CarouselEffect() {
  return (
    <div>
      <Carousel
      autoPlay={true}
      infiniteLoop={true}
      showIndicators={true}
      showThumbs={false}
      >
        {
            img.map((imgItemLink)=>{
                return <img key={imgItemLink} src={imgItemLink}/>
            })
        }
      </Carousel>
      <div className={classes.hero_img}>

      </div>
    </div>
  )
}

export default CarouselEffect;
