import React, { useState } from 'react';
import chair from "../../assets/chair.png";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Importing arrow icons

const TableCorousel = ({ images = [] }) => {
  // Default images in case none are provided
  const defaultImages = [
    chair,
    chair,
    chair,
  ];

  // Use provided images or default ones
  const carouselImages = images.length > 0 ? images : defaultImages;
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <div className="relative w-full max-w-[600px] mx-auto">
      <div className="relative flex justify-center items-center">
        <button
          className="absolute left-2 sm:left-2 text-white bg-zinc-600 bg-opacity-50 p-2 rounded-full"
          onClick={prevImage}
        >
          <FaChevronLeft size={10} />
        </button>
        <img
          src={carouselImages[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          className="w-full md:h-[313px] sm:h-80 object-cover rounded-md"
        />
        <button
          className="absolute right-2 sm:right-2 text-white bg-zinc-600 bg-opacity-50 p-2 rounded-full"
          onClick={nextImage}
        >
          <FaChevronRight size={10} />
        </button>
        
        {/* Dots for carousel */}
        <div className="absolute bottom-2 sm:bottom-4 left-0 right-0 flex justify-center gap-1 sm:gap-2">
          {carouselImages.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 sm:w-3 h-2 sm:h-1 rounded-full cursor-pointer transition-all duration-300 ${
                currentIndex === index ? 'bg-black' : 'bg-gray-400'
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TableCorousel;