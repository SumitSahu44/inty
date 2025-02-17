// import { useState } from "react";
import { Button } from "./components/ui/button";
import backgroundImage from "./assets/background.png";
import banner from "./assets/banner.png";
import googlereview from "./assets/googlereview.png";
import logo from "./assets/logo.png";
import lock from "./assets/lock.png";

const companies = [
  {
    id: 1,
    reviews: 23,
    name: "INTERIOR COMPANY",
    projects: 250,
    experience: 10,
    branches: 20,
  },
  {
    id: 2,
    reviews: 23,
    name: "INTERIOR COMPANY",
    projects: 250,
    experience: 10,
    branches: 20,
  },
  {
    id: 3,
    reviews: 23,
    name: "INTERIOR COMPANY",
    projects: 250,
    experience: 10,
    branches: 20,
  },
  {
    id: 4,
    reviews: 23,
    name: "INTERIOR COMPANY",
    projects: 250,
    experience: 10,
    branches: 20,
  },
  {
    id: 5,
    reviews: 23,
    name: "INTERIOR COMPANY",
    projects: 250,
    experience: 10,
    branches: 20,
  },
  {
    id: 6,
    reviews: 23,
    name: "INTERIOR COMPANY",
    projects: 250,
    experience: 10,
    branches: 20,
  },
];

export default function Page() {

  return (
    <div className="bg-white">
      <header className="absolute top-0 left-0 w-full flex justify-between p-4 text-white z-10 bg-transparent">
        <img className="px-5 w-24 md:w-auto" src={logo} alt="" />
        <nav className="hidden md:flex space-x-40 gap-5 px-5">
          <a href="#" className="text-white text-xl">
            Home
          </a>
          <a href="#" className="text-white text-xl">
            About
          </a>
          <a href="#" className="text-white text-xl">
            Service
          </a>
          <a href="#" className="text-white text-xl">
            Contact
          </a>
          <button className="bg-gray-200 text-[rgba(0,100,82,1)] px-4 py-2 rounded">
            Book Service
          </button>
        </nav>
        <button className="md:hidden bg-gray-200 text-[rgba(0,100,82,1)] px-4 py-2 rounded">
          Menu
        </button>
      </header>

      <section
        className="relative h-[515px] bg-cover bg-center text-white flex items-center justify-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(250,250,250,0.85)] to-[rgba(0,100,82,0.85)]"></div>
        <h2 className="z-50 font-inter font-black text-4xl md:text-[64px] leading-[77.45px] tracking-normal text-white">
          Residential Space
        </h2>
      </section>

      <div className="p-6">
        <div className="bg-white p-4 shadow-md rounded-md">
          <h3 className="text-center text-[rgb(0,99,81)] font-bold mb-2 text-xl md:text-2xl">
            We help you find and compare the best interior companies, designers,
            and carpenters
          </h3>
          <input
            className="w-full md:ml-[81px] md:mr-[81px] p-3 border bg-[rgb(0,99,81)] rounded-3xl mt-4"
            type="text"
          />
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mt-4 md:ml-[81px] md:mr-[81px] justify-between w-full md:w-[1280px]">
            <select className="p-2 border rounded w-full md:w-1/4">
              <option>Project Type</option>
            </select>
            <select className="p-2 border rounded w-full md:w-1/4">
              <option>Design Style</option>
            </select>
            <select className="p-2 border rounded w-full md:w-1/4">
              <option>Price Range</option>
            </select>
            <select className="p-2 border rounded w-full md:w-1/4">
              <option>Availability</option>
            </select>
          </div>
        </div>

        <div className="absolute inset-x-0 mt-[420px] mb-0 h-[496px] bg-gradient-to-t from-black/80 to-transparent backdrop-blur-sm flex flex-col items-center justify-center text-white py-8">
          <img className="w-12 h-12" src={lock} alt="" />
          <h3 className="text-2xl font-semibold mb-4">Login to see all...</h3>
          <Button onClick={() => (window.location.href = "/login")} className="bg-teal-600 hover:bg-teal-700">
            Login
          </Button>
        </div>

        <div className="flex justify-around mt-4 flex-wrap gap-4 md:gap-16">
          {companies.map((company) => (
            <div
              key={company.id}
              className="w-full md:w-[340px] h-[390px] bg-white shadow-2xl rounded-[8px]"
            >
              <div className="flex justify-between p-4">
                <img src={googlereview} alt="" />
                <button className="w-[96px] h-[31px] bg-[rgba(0,100,82,0.4)] text-white rounded-[8px] mt-[18px] hover:bg-[rgba(0,100,82,0.6)]">
                  Compare
                </button>
              </div>
              <div className="flex justify-center items-center w-full">
                <img className="max-w-full h-auto" src={banner} alt="" />
              </div>

              <div className="bg-[rgba(0,100,82,0.4)] text-white w-full p-2 rounded-t-[8px] mt-2 hover:bg-[#006452] transition duration-300 ">
                <div className="flex justify-between">
                  <div className="flex-col">
                    <p className="text-2xl font-bold left-0">
                      {company.projects}+
                    </p>
                    <p className="">Projects Completed</p>
                  </div>
                  <button className="bg-[rgba(254,97,0,1)] text-sm h-5 w-25 text-white rounded-[2px]">
                    {" "}
                    Top Rated
                  </button>
                </div>

                <div className="flex-col">
                  <p className="text-2xl font-bold left-0">
                    {company.experience}+
                  </p>
                  <p className="">Years Experience</p>
                </div>

                <div className="flex-col">
                  <p className="text-2xl font-bold left-0">
                    {company.branches}+
                  </p>
                  <p className="">Branches</p>
                </div>
                <button className="p-2 bg-white w-full rounded-4xl text-blue-500">
                  Know More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="bg-black text-white p-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <img className="bg-white w-24 md:w-auto" src={logo} alt="" />
              <p className="text-sm">Customer Support</p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Other Links</h3>
              <ul className="text-sm">
                <li><a href="#" className="hover:text-gray-400">Home</a></li>
                <li><a href="#" className="hover:text-gray-400">Contact Us</a></li>
                <li><a href="#" className="hover:text-gray-400">About Us</a></li>
                <li><a href="#" className="hover:text-gray-400">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-gray-400">Terms & Conditions</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Team</h3>
              <ul className="text-sm">
                <li><a href="#" className="hover:text-gray-400">Home</a></li>
                <li><a href="#" className="hover:text-gray-400">About Us</a></li>
                <li><a href="#" className="hover:text-gray-400">Team</a></li>
                <li><a href="#" className="hover:text-gray-400">Join Us</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">FAQs</h3>
              <ul className="text-sm">
                <li><a href="#" className="hover:text-gray-400">Join Us</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}