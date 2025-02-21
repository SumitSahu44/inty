import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import banner from "../../assets/banner.png";
import googlereview from "/images/google-icon.png";

const CarouselCard = ({ data, position }) => {
  const getCardStyles = () => {
    switch (position) {
      case "center":
        return "translate-x-0 scale-105 opacity-100 z-10";
      case "left":
        return "-translate-x-[120%] scale-95 opacity-60 z-0";
      case "right":
        return "translate-x-[120%] scale-95 opacity-60 z-0";
      case "farLeft":
        return "-translate-x-[240%] scale-90 opacity-30 z-0";
      case "farRight":
        return "translate-x-[240%] scale-90 opacity-30 z-0";
      default:
        return "translate-x-0 opacity-0";
    }
  };

  const getStarRating = () => {
    const rating = Math.min(5, Math.max(1, Math.round(data.reviews / 10))); // Example logic
    return rating;
  };

  return (



 <div className={`absolute transition-all  duration-700 ease-in-out transform ${getCardStyles()}`}>
        
        <div className="bg-white rounded-lg shadow-lg p-4 w-72 mx-3"> 
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-1">
              <img src={googlereview} alt="Google Icon" className="w-10 " />
              <p>
                <span className="text-sm text-gray-600">{data.reviews} Reviews</span>
                <div className="flex items-center gap-1">
                {[...Array(getStarRating())].map((_, index) => (
                  <Star key={index} className="w-2 h-2 text-orange-500" fill="currentColor" />
                ))}
              </div>
              </p>
           </div>
           <a href="./compare">
           <button className="px-3 py-1 bg-[#006452] text-white rounded-md text-sm">
              Compare
            </button>
           </a> 
          </div>
  
          <div className="flex justify-center mb-4">
            <img src={banner} alt="Interior Company Logo" className="h-10" />
          </div>
  
          <div className="bg-[#006452] p-4 rounded-lg">
            <div className="mb-4">
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-white">{data.projects}+</span>
                {data.isTopRated && (
                  <span className="bg-orange-500 text-white px-2 py-1 rounded text-xs">
                    Top Rated
                  </span>
                )}
              </div>
              <span className="text-sm text-white">Projects Completed</span>
            </div>
  
            <div className="mb-4">
              <div className="text-2xl font-bold text-white">{data.experience}+</div>
              <span className="text-sm text-white">Years of Experience</span>
            </div>
  
            <div className="mb-4">
              <div className="text-2xl font-bold text-white">{data.branches}+</div>
              <span className="text-sm text-white">Branches</span>
            </div>
  
            <a href="./CompanyProfile">
            <button className="w-full bg-white text-[#006452] py-2 rounded-md hover:bg-teal-50 transition-colors">
              Know More
            </button>
              </a>
          </div>
        </div>
      </div>

  );
};

const Carousel = () => {
  const cardsData = [
    { id: 1, reviews: 23, projects: 250, experience: 10, branches: 20, isTopRated: false },
    { id: 2, reviews: 45, projects: 280, experience: 12, branches: 25, isTopRated: true },
    { id: 3, reviews: 32, projects: 260, experience: 8, branches: 18, isTopRated: false },
    { id: 4, reviews: 56, projects: 300, experience: 15, branches: 30, isTopRated: false }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const getCardPosition = (index) => {
    const total = cardsData.length;
    const diff = (index - currentIndex + total) % total;

    if (diff === 0) return "center";
    if (diff === 1) return "right";
    if (diff === total - 1) return "left";
    if (diff === 2) return "farRight";
    if (diff === total - 2) return "farLeft";
    return "hidden";
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % cardsData.length);
    setTimeout(() => setIsAnimating(false), 700);
  };

  const handlePrevious = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + cardsData.length) % cardsData.length);
    setTimeout(() => setIsAnimating(false), 700);
  };

  return (
    <div className="flex items-center justify-center  min-h-scree">
      <div className="flex items-center w-[90%]  m-auto gap-8">
        <button
          onClick={handlePrevious}
          disabled={isAnimating}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-black/30 hover:bg-black/40 transition-colors group z-10"
        >
          <ChevronLeft className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
        </button>

        <div className="relative w-full h-[600px] overflow-hidden">
          <div className="absolute inset-0 flex items-center  w-full justify-center gap-6">
            {cardsData.map((card, index) => (
              <CarouselCard key={card.id} data={card} position={getCardPosition(index)} />
            ))}
          </div>
        </div>

        <button
          onClick={handleNext}
          disabled={isAnimating}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-black/30 hover:bg-black/40 transition-colors group z-10"
        >
          <ChevronRight className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
