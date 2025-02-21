
import React, { useState } from 'react';
import backgroundImage from "../../assets/background.png";
import Header from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import FocusLinks from '../../components/FocusLink/Focuslink';
import Carousel from "../../components/TableCorousel/Tablecorousel";
import ProfileCard from '../../components/ProfileCard/Profilecard';
import LogoGrid from '../../components/Logogrid/Logogrid';


// Sample Data (Replace this with actual API data)
const profiles = [
  { id: 1, name: "Rahul Sharma", projectsCompleted: 180 },
  { id: 2, name: "Priya Singh", projectsCompleted: 300 },
  { id: 3, name: "Amit Patel", projectsCompleted: 120 },
  { id: 4, name: "Neha Gupta", projectsCompleted: 200 },
  { id: 5, name: "Vikram Singh", projectsCompleted: 400 },
  { id: 6, name: "Anjali Mehta", projectsCompleted: 150 },
  { id: 7, name: "Suresh Kumar", projectsCompleted: 260 },
];

// Categories & Thresholds
const categories = {
  "Basic": 150,
  "Pro": 250,
  "Pro Max": 300,
  "Luxe": 400
};

const InteriorDesigner = () => {
  const [selectedCategory, setSelectedCategory] = useState("Basic");

  // Filter Profiles based on selected focus category
  const filteredProfiles = profiles.filter(profile => profile.projectsCompleted >= categories[selectedCategory]);

  return (
    <div className="bg-white">
      {/* Header Section */}
      <div className="absolute top-0 left-0 w-full bg-transparent z-50">
        <Header />
      </div>

      {/* Hero Section */}
      <section
        className="relative h-[300px] sm:h-[400px] md:h-[515px] bg-cover bg-center text-white flex items-center justify-center px-4"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(250,250,250,0.85)] to-[rgba(0,100,82,0.85)]"></div>
        <h2 className="z-50 font-inter font-black text-3xl sm:text-4xl md:text-[64px] leading-tight text-white text-center">
          Interior Designers
        </h2>
      </section>

      {/* Focus Links (Pass the setSelectedCategory function) */}
      <div className="mb-12 px-4">
        <FocusLinks setSelectedCategory={setSelectedCategory} />
      </div>

      {/* Carousel & Filtered ProfileCards */}
      {filteredProfiles.length > 0 ? (
        filteredProfiles.map(profile => (
          <div key={profile.id} className="flex flex-col md:flex-row justify-center items-center md:mb-10">
            <div className='w-full max-w-xs sm:max-w-md md:max-w-[550px] md:ml-16 md:transform md:translate-x-1/16 md:translate-y-0 translate-y-5 '>
              <Carousel />
            </div>
            <div className='w-full max-w-[352px] sm:max-w-md md:max-w-[530px] md:pr-12  '>
              <ProfileCard name={profile.name} projectsCompleted={profile.projectsCompleted} />
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500 mt-8">No profiles available for this category.</p>
       )}

       <div className='p-6 flex flex-col  mb-10'>
       <LogoGrid/>

       </div>
      


      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default InteriorDesigner;

