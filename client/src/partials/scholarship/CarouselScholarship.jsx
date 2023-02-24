import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image } from 'pure-react-carousel';

import 'pure-react-carousel/dist/react-carousel.es.css';

export default class extends React.Component {
  render() {
    return (
      <CarouselProvider className="carousel-size"
          naturalSlideWidth={500}
          naturalSlideHeight={150}
          totalSlides={3}
          isPlaying = {true}
          interval={4000}
      >
    <Slider className="slider">
     <Slide index={0}>
        <div className=" mt-10 flex justify-center items-center">
          <img src="https://source.unsplash.com/random/500x249/?architecture" alt="" />
        </div>
     </Slide>
     <Slide index={1}>
        <div className="mt-10 flex justify-center items-center">
          <img src="https://source.unsplash.com/random/500x250/?architecture" alt=""/>
        </div>
     </Slide>
     <Slide index={2}>
        <div className="mt-10 flex justify-center items-center">
          <img src="https://source.unsplash.com/random/500x251/?architecture" alt=""/>
        </div>
     </Slide>
    </Slider>
    <div className="mt-10 mb-10 flex justify-center items-center">
        <ButtonBack className='mr-10 px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium'>Back</ButtonBack>

        <ButtonNext className='mr-10 px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium'>Next</ButtonNext>

    </div>
    
   </CarouselProvider>
    );
  }
}