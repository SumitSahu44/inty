import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";


const testimonials = [
  {
    id: 1,
    name: "Kyle Merwin",
    position: "Co-owner",
    image: "./images/testimonial1.png", // Replace with actual image URL
    quote:
      "Aut nihil mollitia deserunt quia sed rem. Quibusdam amet veniam rerum id rerum beatae. Quas rerum iste necessitatibus.",
  },
  {
    id: 2,
    name: "Emma Watson",
    position: "CEO, Tech Corp",
    image: "./images/testimonial1.png", // Replace with actual image URL
    quote:
      "At voluptates ad magnam blanditiis excepturi expedita aut. Aut repellat inventore qui minima illum est.",
  },
  {
    id: 3,
    name: "John Doe",
    position: "Marketing Lead",
    image: "./images/testimonial1.png", // Replace with actual image URL
    quote:
      "Quas rerum iste necessitatibus. At voluptates ad magnam blanditiis excepturi expedita aut. Inventore qui minima illum est.",
  },
];


export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [index]);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full mx-auto overflow-hidden">
      <div className="flex justify-center items-center space-x-4">
        {/* Previous Testimonial */}
        <motion.div
          key={`prev-${index}`}
          className="w-1/3 p-4 rounded-2xl shadow-lg opacity-30 transition-all duration-500 hidden md:block"
          initial={{ opacity: 0.3, x: -50 }}
          animate={{ opacity: 0.3, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <TestimonialCard data={testimonials[(index - 1 + testimonials.length) % testimonials.length]} />
        </motion.div>

        {/* Active Testimonial */}
        <motion.div
          key={testimonials[index].id}
          className="w-full md:w-2/3 bg-white p-6 rounded-2xl shadow-xl transition-all"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
        >
          <TestimonialCard data={testimonials[index]} />
        </motion.div>

        {/* Next Testimonial */}
        <motion.div
          key={`next-${index}`}
          className="w-1/3 p-4 rounded-2xl shadow-lg opacity-30 transition-all duration-500 hidden md:block"
          initial={{ opacity: 0.3, x: 50 }}
          animate={{ opacity: 0.3, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <TestimonialCard data={testimonials[(index + 1) % testimonials.length]} />
        </motion.div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-200 p-3 rounded-full shadow-md hover:bg-gray-300"
      >
        <FaChevronLeft className="text-gray-700" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-200 p-3 rounded-full shadow-md hover:bg-gray-300"
      >
        <FaChevronRight className="text-gray-700" />
      </button>
    </div>
  );
}

// Testimonial Card Component
const TestimonialCard = ({ data }) => (
  <div className="flex items-center space-x-6">
    <img src={data.image} alt={data.name} className="w-20 h-20 rounded-lg object-cover" />
    <div className="flex-1">
      <p className="text-gray-700 text-sm">{data.quote}</p>
      <h3 className="text-gray-900 font-bold mt-3">{data.name}</h3>
      <p className="text-gray-500 text-sm">{data.position}</p>
    </div>
    <FaQuoteLeft className="text-teal-500 text-3xl font-bold" />
  </div>
);