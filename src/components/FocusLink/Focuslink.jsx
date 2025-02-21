import { useState } from "react";

const FocusLinks = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Handle mouse enter event to set the hovered word
  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  // Handle mouse leave event to reset hover
  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="flex justify-center  gap-2 md:gap-16 mt-12 ">
      {["Basic", "Standard", "Premium", "Luxery"].map((text, index) => (
        <span
          key={index}
          className={`transition-all duration-300 ease-in-out font-normal  text-xl md:text-4xl leading-[45.99px] tracking-normal
            ${hoveredIndex !== null && hoveredIndex !== index ? "filter blur-xs" : "filter-none font-bold text-[#006452]"}
            hover:text-[#006452] hover:scale-110 cursor-pointer`}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          {text}
        </span>
      ))}
    </div>
  );
};

export default FocusLinks;