import React from 'react'
const images = [
  { src: "/images/desiger1.png", logo: "/images/designer-logo1.png" },
  { src: "/images/desiger2.png", logo: "/images/designer-logo2.png" },
  { src: "/images/desiger3.png", logo: "/images/designer-logo3.png" },
  { src: "/images/desiger4.png", logo: "/images/designer-logo4.png" },
  { src: "/images/desiger5.png", logo: "/images/designer-logo1.png" },
  { src: "/images/desiger6.png", logo: "/images/designer-logo6.png" },
];
const Designers = () => {
  return (
    <section className="py-12 px-6 md:px-12 lg:px-24 text-center">
       
        <h3 className="text-[#006452] text-lg font-semibold">Popular Designers</h3>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">Our Most Rated Designing Companies</h2>
     
            <div className="flex justify-center gap-1 pt-10 sm:p-6">
      {images.map((img, index) => (
        <div key={index} className="relative group overflow-hidden w-64 h-96">
          {/* Image */}
          <img
            src={img.src}
            alt="Design"
            className="w-full h-full object-cover transition-all duration-500 group-hover:blur-md"
          />
          
          {/* Logo Overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-white/80 py-4 flex justify-center items-center transition-all duration-500 group-hover:bottom-1/2">
            <img src={img.logo} alt="Logo" className="w-[50%] h-15 object-contain  transition-all duration-500" />
          </div>
        </div>
      ))}
    </div>
    </section>
  )
}

export default Designers
