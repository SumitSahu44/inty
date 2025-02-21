import React, { useState, useEffect, useCallback } from 'react';
import './TestimonialCarousel.css';
import image1 from '/images/testimonial1.png';  
import image2 from '/images/testimonial2.png';
import image3 from '/images/testimonial1.png';


const TestimonialCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState('');
 
  const testimonials = [
    {
      image: image1,  
      quote: "Aut nihil mollitia deserunt quia sed rem. Quibusdam amet veniam rerum id rerum beatae. Quas rerum iste necessitatibus. At voluptates ad magnam blanditiis excepturi expedita aut. Aut repellat inventore qui minima illum est.",
      name: "Kyle Merwin",
      title: "Co-owner"
    },
    {
      image: image2,
      quote: "Aut nihil mollitia deserunt quia sed rem. Quibusdam amet veniam rerum id rerum beatae. Quas rerum iste necessitatibus. At voluptates ad magnam blanditiis excepturi expedita aut. Aut repellat inventore qui minima illum est.",
      name: "Jane Smith",
      title: "Product Manager"
    },
    {
      image: image3,
      quote: "Aut nihil mollitia deserunt quia sed rem. Quibusdam amet veniam rerum id rerum beatae. Quas rerum iste necessitatibus. At voluptates ad magnam blanditiis excepturi expedita aut. Aut repellat inventore qui minima illum est.",
      name: "John Doe",
      title: "Senior Developer"
    }
  ];





  const handleTransitionEnd = useCallback(() => {
    setIsTransitioning(false);
  }, []);

  const getSlidePosition = useCallback((index) => {
    if (index === currentSlide) return 'active';
    if (direction === 'next' && index === (currentSlide + 1) % testimonials.length) return 'next';
    if (direction === 'prev' && index === (currentSlide - 1 + testimonials.length) % testimonials.length) return 'prev';
    return '';
  }, [currentSlide, direction, testimonials.length]);

  const handleNext = useCallback(() => {
    if (isTransitioning) return;
    setDirection('next');
    setIsTransitioning(true);
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  }, [isTransitioning, testimonials.length]);

  const handlePrev = useCallback(() => {
    if (isTransitioning) return;
    setDirection('prev');
    setIsTransitioning(true);
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [isTransitioning, testimonials.length]);

  useEffect(() => {
    if (testimonials.length === 0 || !isAutoPlaying || isTransitioning) return;

    const intervalId = setInterval(() => {
      handleNext();
    }, 2500);

    return () => clearInterval(intervalId);
  }, [isAutoPlaying, testimonials.length, isTransitioning, handleNext]);

  if (testimonials.length === 0) {
    return <div className="carousel-container">No testimonials available</div>;
  }

  return (

<section className="py-12 px-6 md:px-12 lg:px-24 text-center  mb-12" >
    <h3 className="text-[#006452] text-lg font-semibold">Testimonials</h3>
    <h2 className="text-3xl md:text-4xl font-bold mt-2">What Our Client Says</h2>
   
    <div className="carousel-container">
      <button 
        className="nav-button prev"
        onClick={handlePrev}
        aria-label="Previous slide"
        disabled={isTransitioning}
      >
        &#8249;
      </button>

      <div className="carousel-window">
        <div className="carousel-track" onTransitionEnd={handleTransitionEnd}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`carousel-slide ${getSlidePosition(index)} ${isTransitioning ? 'transitioning' : ''}`}
            >
              <div className="testimonial-content">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="testimonial-image"
                />
                <div className="testimonial-text">
                  <p className="testimonial-quote">{testimonial.quote}</p>
                  <h3 className="testimonial-name">{testimonial.name}</h3>
                  <p className="testimonial-title">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button 
        className="nav-button next"
        onClick={handleNext}
        aria-label="Next slide"
        disabled={isTransitioning}
      >
        &#8250;
      </button>

      <div className="carousel-indicators">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => {
              if (!isTransitioning) {
                setDirection(index > currentSlide ? 'next' : 'prev');
                setIsTransitioning(true);
                setIsAutoPlaying(false);
                setCurrentSlide(index);
              }
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
    </section>
  );
};

export default TestimonialCarousel;