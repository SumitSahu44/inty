import { useNavigate } from "react-router-dom";
import defaultBanner from "../../assets/banner.png";

export default function CompanyCard({ company }) {
  const navigate = useNavigate();

  // Determine the banner image source dynamically
  const getBannerImage = () => {
    // Try to use banner images in order of priority
    if (company.bannerImage1) return company.bannerImage1;
    if (company.logo) return company.logo;
    
    // If no image is available, use the default banner as fallback
    return defaultBanner;
  };

  return (
    <div className="w-[294px] h-auto  bg-white shadow-2xl rounded-[16px]">
      {/* Review Section - Custom Google Review */}
      <div className="flex justify-between p-4">
        <div className="flex items-center">
          {/* Google Logo */}
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 48 48"
            >
              <path
                fill="#EA4335"
                d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
              />
              <path
                fill="#4285F4"
                d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
              />
              <path
                fill="#FBBC05"
                d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
              />
              <path
                fill="#34A853"
                d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
              />
            </svg>
          </div>

          {/* Review Info */}
          <div className="flex flex-col ml-2">
            {/* Text mentioning 23 reviews */}
            <span className="text-md text-gray-600 ml-1">80 reviews</span>

            {/* Star Rating */}
            <div className="flex">
              {/* 5 gold stars */}
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-4 h-4 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              ))}
            </div>
          </div>
        </div>

        <a href="./compare">
          <button className="button cursor-pointer w-[96px] h-[31px] bg-[rgba(0,100,82,0.4)] text-white rounded-[8px] mt-3.5 hover:bg-[#006452]">
            Compare
          </button>
        </a>
      </div>

      {/* Image Section - Now using Cloudinary image */}
      <div className="flex justify-center items-center w-full h-36 overflow-hidden">
        <img 
          className="max-w-full h-auto object-cover" 
          src={getBannerImage()} 
          alt={company.name || "Company Banner"} 
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = defaultBanner;
          }}
        />
      </div>

      {/* Company Details */}
      <div className="bg-[rgba(0,100,82,0.4)] text-white w-full p-4 rounded-[16px] hover:bg-[#006452] transition duration-300 flex flex-col gap-4">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <p
              className="text-[22px] font-bold"
              style={{
                fontWeight: 700,
                fontSize: "22px",
                lineHeight: "26.63px",
                letterSpacing: "0%",
              }}
            >
              {company.projects}+
            </p>
            <p
              className="text-[12px]"
              style={{
                fontWeight: 500,
                fontSize: "12px",
                lineHeight: "14.52px",
                letterSpacing: "0%",
              }}
            >
              Projects Completed
            </p>
          </div>
          <button className="bg-[rgba(254,97,0,1)] text-sm h-5 w-25 text-white rounded-[2px]">
            USP
          </button>
        </div>
        <div className="flex-col">
          <p
            className="text-2xl font-bold"
            style={{
              fontWeight: 700,
              fontSize: "22px",
              lineHeight: "26.63px",
              letterSpacing: "0%",
            }}
          >
            {company.experience}+
          </p>
          <p
            style={{
              fontWeight: 500,
              fontSize: "12px",
              lineHeight: "14.52px",
              letterSpacing: "0%",
            }}
          >
            Years Experience
          </p>
        </div>
        <div className="flex-col">
          <p
            className="text-2xl font-bold"
            style={{
              fontWeight: 700,
              fontSize: "22px",
              lineHeight: "26.63px",
              letterSpacing: "0%",
            }}
          >
            {company.branches}+
          </p>
          <p
            style={{
              fontWeight: 500,
              fontSize: "12px",
              lineHeight: "14.52px",
              letterSpacing: "0%",
            }}
          >
            Branches
          </p>
        </div>
        
        <a href="./CompanyProfile">
          <button className="mt-1 p-2 cursor-pointer bg-white w-full rounded-4xl text-blue-500">
            Know More
          </button>
        </a>
      </div>
    </div>
  );
}
