import { useState } from 'react';
import ProfileCard from '../ProfileCard/Profilecard';
import Carousel from '../TableCorousel/Tablecorousel';

const PaginationExample = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 4;

  // Example data for ProfileCard
  const cards = [
    <ProfileCard key={1} />,
    <ProfileCard key={2} />,
    <ProfileCard key={3} />,
    <ProfileCard key={4} />,
    <ProfileCard key={5} />,
    <ProfileCard key={6} />,
    <ProfileCard key={7} />,
    <ProfileCard key={8} />,
    // Add more ProfileCard components as needed
  ];

  // Get the current cards to display
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);

  // Handle page change
  const nextPage = () => {
    if (currentPage * cardsPerPage < cards.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="flex justify-center gap-0 mb-9">
      <div className="absolute w-[550px] left-[233px] z-50">
        <Carousel />
      </div>
      <div className="w-[530px] ml-[547px]">
        <div className="grid grid-cols-1 gap-4">
          {currentCards}
        </div>
        <div className="flex justify-between mt-4">
          <button onClick={prevPage} disabled={currentPage === 1}>
            Prev
          </button>
          <button onClick={nextPage} disabled={currentPage * cardsPerPage >= cards.length}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaginationExample;
