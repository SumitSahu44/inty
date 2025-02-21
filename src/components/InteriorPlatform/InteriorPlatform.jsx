import React from "react";
import { motion } from "framer-motion";
import Magnet from "./Magnet.jsx";
import Squares from "./Squares.jsx";

const InteriorPlatform = () => {
  const avatars = [
    {
      id: 1,
      position: { top: "15%", left: "0%" },
      img: "/images/avatar.jpg",
      arrowRotation: 90, // Updated: Pointing outward from center
    },
    {
      id: 2,
      position: { top: "15%", right: "0%" },
      img: "/images/avatar.jpg",
      arrowRotation: 180, // Updated: Pointing outward from center
    },
    {
      id: 3,
      position: { bottom: "15%", left: "0%" },
      img: "/images/avatar.jpg",
      arrowRotation: 10, // Updated: Pointing outward from center
    },
    {
      id: 4,
      position: { bottom: "15%", right: "0%" },
      img: "/images/avatar.jpg",
      arrowRotation: -90, // Updated: Pointing outward from center
    },
  ];

  const ArrowSvg = ({ rotation }) => (
    <svg
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="25px"
      height="25px"
      viewBox="0 0 188.324 188.324"
      xmlSpace="preserve"
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <g>
        <g>
          <g>
            <path
              fill="#030303"
              d="M104.552,188.324l-1.126-0.023c-8.686-0.485-16.159-6.421-18.601-14.758l-14.164-48.403
               l-52.088-10.344c-8.548-1.675-15.124-8.622-16.348-17.279c-1.224-8.638,3.162-17.134,10.91-21.137L156.295,2.228
               c7.49-3.883,17.143-2.596,23.369,3.119c6.336,5.827,8.371,15.078,5.083,23.018l-61.193,147.287
               C120.334,183.355,112.872,188.324,104.552,188.324z"
            />
          </g>
        </g>
      </g>
    </svg>
  );

  const AvatarWithArrow = ({ img, arrowRotation }) => (
    <div className="relative group">
      {/* Avatar Circle with gap for arrow */}
      <div className="w-14 h-14 rounded-full overflow-hidden border border-gray-200 bg-white shadow-sm ">
        <img
          src={img}
          alt="Designer"
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      {/* Arrow with spacing */}
      <div
        className="absolute"
        style={{
          ...(arrowRotation === 90 && { left: "50px", top: "100%" }),
          ...(arrowRotation === 180 && { right: "45px", top: "120%" }),
          ...(arrowRotation === 10 && { left: "55px", bottom: "45%" }),
          ...(arrowRotation === -90 && { right: "50px", bottom: "50%" }),
          transform: "translateY(-50%)",
        }}
      >
        <ArrowSvg rotation={arrowRotation} />
      </div>
    </div>
  );

  return (
    <div className="relative w-full h-screen bg-white overflow-hidden">
      {/* Background Squares */}
      <div className="absolute inset-0 z-0">
        <Squares
          speed={0.2}
          squareSize={80}
          direction="diagonal"
          borderColor="rgb(0, 96, 69, 0.1)"
        //   hoverFillColor="#006045"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full max-w-4xl mx-auto px-4">
        <motion.h1
          className="text-[2.5rem] md:text-[3.5rem] font-bold text-center text-emerald-800 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          One Platform to Solve Your
          <br />
          all Interior Problem
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <button className="bg-emerald-800 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-emerald-700 transition-colors">
            Get Matched with Designers
          </button>
        </motion.div>

        {/* Avatar Magnets */}
        {avatars.map(({ id, position, img, arrowRotation }) => (
          <div key={id} className="absolute" style={position}>
            <Magnet
              padding={100}
              magnetStrength={5}
              activeTransition="transform 0.3s cubic-bezier(0.17, 0.67, 0.83, 0.67)"
              inactiveTransition="transform 0.5s cubic-bezier(0.17, 0.67, 0.83, 0.67)"
            >
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 * id }}
              >
                <AvatarWithArrow img={img} arrowRotation={arrowRotation} />
              </motion.div>
            </Magnet>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InteriorPlatform;