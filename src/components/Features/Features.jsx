import React from "react";

const Features = () => {
  const partners = [
    { image: "/images/feature1.png" },
    { image: "/images/feature2.png" },
    { image: "/images/feature3.png" },
    { image: "/images/feature4.png" },
  ];

  return (
    <section className="py-12 px-6 md:px-12 lg:px-24 text-center">
      {/* Headings */}
      <h3 className="text-[#006452] text-lg font-semibold">Our Features</h3>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-2">
      Why We Stand Out
      </h2>

      {/* Partner Logos */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4  gap-6 md:gap-10 lg:justify-center w-[80%] pt-10 m-auto items-center">
        {partners.map((partner, index) => (
          <img  data-aos="fade-right"
            key={index}
            src={partner.image}
            className="w-20 md:w-32 sm:w-40 lg:w-30 object-contain mx-auto"
            alt={`Partner ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;
