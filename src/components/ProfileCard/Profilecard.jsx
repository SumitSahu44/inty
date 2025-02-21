// import React from "react";
// import review from "../../assets/googlereview.png"

// const ProfileCard = () => {
//   return (
//     <div className="bg-[rgba(0,100,82,1)] p-6 rounded-lg shadow-lg mx-auto pl-8">
//       <div className="text-center flex justify-around items-center gap-4">
//         <div className="flex flex-col items-center justify-center">
//         <h2 className="text-3xl font-bold text-gray-100">Som Prakash</h2>
//         <div className="flex justify-start gap-10 mt-2">
//         <p className="font-normal text-sm leading-[16.94px] tracking-normal text-gray-50">200/hr</p>
//         <p className="font-normal text-sm leading-[16.94px] tracking-normal text-gray-50">Whitefield</p>
//         </div>
//         </div>
//         <img src={review} alt="" className="w-[121px] h-[61.30px]" /> 
//       </div>

//       <div className="mt-4 pl-8">
//         <div className="flex justify-between flex-col gap-1.5">
//           <p className="font-bold text-2xl leading-[31.47px] tracking-normal text-gray-100">10+</p>
//           <p className="font-medium text-base leading-[19.36px] tracking-normal text-gray-100"> Years of Experience</p>
//           <p className="font-bold text-2xl leading-[31.47px] tracking-normal text-gray-100">250+ </p>
//           <p className="font-medium text-base leading-[19.36px] tracking-normal text-gray-100">Projects Completed </p>
//         </div>
//       </div>

//       <div className="mt-6 flex gap-4 pl-8 mb-3.5 ">
//         <button className="w-xs h-9 bg-white text-black rounded-md">
//           Contact Directly
//         </button>
//         <button className="w-xs h-9 bg-white text-black rounded-md">
//           Schedule a Meeting
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProfileCard;
// import React from "react";
// import review from "../../assets/googlereview.png";

// const ProfileCard = () => {
//   return (
//     <div className="bg-[rgba(0,100,82,1)] p-5 rounded-r-lg  shadow-lg mx-auto pl-8 w-full max-w-md sm:max-w-lg">
//       <div className="text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-4">
//         <div className="flex flex-col items-center sm:items-start">
//           <h2 className="text-3xl font-bold text-gray-100">Som Prakash</h2>
//           <div className="flex flex-wrap justify-center sm:justify-start gap-4 mt-2">
//             <p className="font-normal text-sm text-gray-50">₹200/hr</p>
//             <p className="font-normal text-sm text-gray-50">Whitefield</p>
//           </div>
//         </div>
//         <img src={review} alt="Google Review" className="w-[121px] h-[61.30px]" />
//       </div>

//       <div className="mt-4 pl-4 sm:pl-8">
//         <div className="flex flex-col gap-1.5 text-center sm:text-left">
//           <p className="font-bold text-2xl text-gray-100">10+</p>
//           <p className="font-medium text-base text-gray-100">Years of Experience</p>
//           <p className="font-bold text-2xl text-gray-100">250+ </p>
//           <p className="font-medium text-base text-gray-100">Projects Completed</p>
//         </div>
//       </div>

//       <div className="mt-6 flex flex-col sm:flex-row gap-4 pl-4 sm:pl-8 mb-3.5">
//         <button className="w-full sm:w-auto h-9 bg-white text-black rounded-md">
//           Contact Directly
//         </button>
//         <button className="w-full sm:w-auto h-9 bg-white text-black rounded-md">
//           Schedule a Meeting
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProfileCard;
import React from "react";
import review from "../../assets/googlereview.png";

// Dummy data for 20 profiles
const dummyProfiles = [
  {
    name: "Rahul Sharma",
    rate: "₹ 250/hr",
    location: "Koramangala",
    reviewImage: review,
    experience: "8+",
    projectsCompleted: "180+",
    buttons: [
      { label: "Contact Directly", onClick: "contactDirectly" },
      { label: "Schedule a Meeting", onClick: "scheduleMeeting" },
    ],
  },
];

// ProfileCard component
const ProfileCard = ({ profile }) => {
  const { name, rate, location, reviewImage, experience, projectsCompleted, buttons } = profile;

  return (
    <div className="bg-[rgba(0,100,82,1)] md:p-3.5 rounded-b-lg md:rounded-r-lg shadow-lg mx-auto md:pl-12 w-full max-w-md sm:max-w-lg p-4">
      <div className="text-center sm:text-left flex flex-col sm:flex-row justify-between items-center md:gap-4 gap-2">
        <div className="flex flex-col items-center sm:items-start">
          <h2 className="text-3xl font-bold text-gray-100">{name}</h2>
          <div className="flex flex-wrap justify-center sm:justify-start md:gap-4 gap-2 mt-2">
            <p className="font-normal text-sm text-gray-50">{rate}</p>
            <p className="font-normal text-sm text-gray-50">{location}</p>
          </div>
        </div>
        <img src={reviewImage} alt="Google Review" className="w-[121px] h-[61.30px]" />
      </div>

      <div className="mt-4 md:pl-3 pl-8">
        <div className="flex flex-col md:gap-1.5 text-center sm:text-left">
          <p className="font-bold text-2xl text-gray-100">{experience}</p>
          <p className="font-medium text-base text-gray-100">Years of Experience</p>
          <p className="font-bold text-2xl text-gray-100">{projectsCompleted}</p>
          <p className="font-medium text-base text-gray-100">Projects Completed</p>
        </div>
      </div>

      <div className="mt-8 flex flex-col sm:flex-row gap-4 md:pl-3 sm:pl-8 mb-3.5">
        {buttons.map((button, index) => (
          <button
            key={index}
            className="w-full sm:w-2xl h-9 bg-white text-black rounded-md"
            onClick={() => console.log(button.onClick)}
          >
            {button.label}
          </button>
        ))}
      </div>
    </div>
  );
};

// ProfileList component to render all profiles
const ProfileList = () => {
  return (
    <div className="flex flex-wrap gap-4 p-4">
      {dummyProfiles.map((profile, index) => (
        <ProfileCard key={index} profile={profile} />
      ))}
    </div>
  );
};

export default ProfileList;
