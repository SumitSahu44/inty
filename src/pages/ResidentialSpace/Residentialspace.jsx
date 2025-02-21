import { useState, useEffect } from 'react';
import { useUser } from "@clerk/clerk-react";
import axios from 'axios';
import { Button } from "../../components/ui/Button";
import backgroundImage from "../../assets/background.png";
import lock from "../../assets/lock.png";
import CompanyCard from "../../components/Cards/Cards";
import Header from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Search from "../../components/Search/Search";

const API_URL = 'https://inty-backend.onrender.com/api/companies'; // Fixed API URL
const ITEMS_PER_PAGE = 6;

export default function ResidentialSpace() {
  const { isSignedIn } = useUser();
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  const fetchCompanies = async (page = 1, search = '') => {
    try {
      setLoading(true);
      setError(null);

      console.log('Fetching from:', `${API_URL}?page=${page}&limit=${ITEMS_PER_PAGE}&search=${search}`); // Debug log

      const response = await axios.get(API_URL, {
        params: {
          page,
          limit: ITEMS_PER_PAGE,
          search
        }
      });

      console.log('API Response:', response.data); // Debug log

      if (response.data && Array.isArray(response.data.companies)) {
        setCompanies(response.data.companies);
        setTotalPages(Math.max(1, response.data.totalPages));
        setCurrentPage(response.data.currentPage);
      } else {
        throw new Error('Invalid data format received from server');
      }
    } catch (err) {
      console.error('Error fetching companies:', err);
      setError(
        err.response?.data?.message || 
        err.message || 
        'Failed to fetch companies. Please try again later.'
      );
      setCompanies([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCompanies(currentPage, searchQuery);
  }, [currentPage, searchQuery]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1); // Reset to first page when searching
  };

  const Pagination = () => {
    if (totalPages <= 1) return null;

    return (
      <div className="flex justify-center items-center space-x-4 mt-20 mb-8">
        <button
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 rounded-md bg-[#006452] text-white disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Previous
        </button>

        <div className="flex space-x-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-4 py-2 rounded-md ${
                currentPage === page
                  ? 'bg-[#006452] text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {page}
            </button>
          ))}
        </div>

        <button
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 rounded-md bg-[#006452] text-white disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    );
  };

  return (
    <div className="bg-white">
      <div className="absolute top-0 left-0 w-full bg-transparent z-50">
        <Header isResidentialPage={true} />
      </div>

      <section
        className="relative h-[515px] bg-cover bg-center text-white flex items-center justify-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(250,250,250,0.85)] to-[rgba(0,100,82,0.85)]"></div>
        <h2 className="z-50 font-inter font-black text-4xl md:text-[64px] leading-[77.45px] tracking-normal text-white">
          Residential Space
        </h2>
      </section>

      <div className="p-4">
        <div className="bg-white p-4">
          <Search onSearch={handleSearch} />
        </div>

        {error && (
          <div className="text-red-500 text-center my-4 p-4 bg-red-50 rounded">
            {error}
          </div>
        )}

        {loading && (
          <div className="flex justify-center items-center my-12">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#006452]"></div>
          </div>
        )}

        {!loading && !error && (
          <>
            {isSignedIn ? (
              <div>
                <div className="flex justify-evenly mt-4 flex-wrap gap-14 md:gap-16 ml-[20px] mr-[20px] md:ml-[139px] md:mr-[139px]">
                  {companies.map((company) => (
                    <CompanyCard key={company._id} company={company} />
                  ))}
                </div>
                
                <Pagination />
              </div>
            ) : (
              <div>
                <div 
                  className="absolute w-full inset-x-0 mt-[1340px] md:mt-[420px] mb-0 h-[1340px] md:h-[496px] backdrop-blur-sm flex flex-col items-center justify-center text-white py-8" 
                  style={{
                    background: `linear-gradient(180deg, rgba(250, 250, 250, 0.85) 0%, rgba(0, 0, 0, 0.50) 100%),
                                 linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)`
                  }}
                >
                  <img className="w-16 h-16" src={lock} alt="Lock" />
                  <h3 className="text-2xl font-semibold mb-4">Login to see all...</h3>
                  <Button
                    onClick={() => (window.location.href = "/login")}
                    className="bg-teal-600 hover:bg-teal-700"
                  >
                    Login
                  </Button>
                </div>

                <div className="flex justify-evenly mt-4 flex-wrap gap-14 md:gap-16 ml-[20px] mr-[20px] md:ml-[139px] md:mr-[139px]">
                  {companies.slice(0, 6).map((company) => (
                    <CompanyCard key={company._id} company={company} />
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>

      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
}
