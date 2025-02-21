import React from 'react';
import backgroundImage from "../../assets/background.png";
import Header from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Table from "../../components/Table/Table";
import CardCrousal from "../../components/CardCrousal/CardCrousal";

const Compare = () => {
  return (
    <>
      <div className="bg-white">
        {/* Header Section */}
        <div className="absolute top-0 left-0 w-full bg-transparent z-50">
          <Header />
        </div>

        {/* Hero Section */}
        <section
          className="relative h-[515px] bg-cover bg-center text-white flex items-center justify-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(250,250,250,0.85)] to-[rgba(0,100,82,0.85)]"></div>
          <h2 className="z-50 font-inter font-black text-4xl md:text-[64px] leading-[77.45px] tracking-normal text-black">
            How <span className='text-[rgba(0,100,82,0.85)]'>We</span> Compare.
          </h2>
        </section>

        <div className='p-4 mb-10'>
          <Table />
        </div>

        <CardCrousal />

        {/* Footer Section */}
        <Footer />
      </div>
    </>
  );
};

export default Compare;