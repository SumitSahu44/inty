import banner from "../../assets/banner.png";
import googlereview from "../../assets/googlereview.png";
import { useNavigate } from "react-router-dom";

export default function CompanyCard({ company }) {
  const navigate = useNavigate();
  return (
    <div className="w-[294px] h-[392px] bg-white shadow-2xl rounded-[8px]">
      {/* Review Section */}
      <div className="flex justify-between p-4">
        <img src={googlereview} alt="Review" />
        <a href="./compare">
          <button className="button cursor-pointer w-[96px] h-[31px] bg-[rgba(0,100,82,0.4)] text-white rounded-[8px] mt-[18px] hover:bg-[#006452]">
            Compare
          </button>
        </a>
      </div>

      {/* Image Section */}
      <div className="flex justify-center items-center w-full">
        <img className="max-w-full h-auto" src={banner} alt="Banner" />
      </div>

      {/* Company Details */}
      <div className="bg-[rgba(0,100,82,0.4)] text-white w-full p-4 rounded-[16px] mt-3 hover:bg-[#006452] transition duration-300 flex flex-col gap-4">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <p className="text-[22px] font-bold" style={{ fontWeight: 700, fontSize: '22px', lineHeight: '26.63px', letterSpacing: '0%' }}>{company.projects}+</p>
            <p className="text-[12px]" style={{ fontWeight: 500, fontSize: '12px', lineHeight: '14.52px', letterSpacing: '0%' }}>Projects Completed</p>
          </div>
          <button className="bg-[rgba(254,97,0,1)] text-sm h-5 w-25 text-white rounded-[2px]">
            USP
          </button>
        </div>
        <div className="flex-col">
          <p className="text-2xl font-bold" style={{ fontWeight: 700, fontSize: '22px', lineHeight: '26.63px', letterSpacing: '0%' }}>{company.experience}+</p>
          <p style={{ fontWeight: 500, fontSize: '12px', lineHeight: '14.52px', letterSpacing: '0%' }}>Years Experience</p>
        </div>
        <div className="flex-col">
          <p className="text-2xl font-bold" style={{ fontWeight: 700, fontSize: '22px', lineHeight: '26.63px', letterSpacing: '0%' }}>{company.branches}+</p>
          <p style={{ fontWeight: 500, fontSize: '12px', lineHeight: '14.52px', letterSpacing: '0%' }}>Branches</p>
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
