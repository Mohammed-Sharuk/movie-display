import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrev = () => onPageChange(currentPage - 1);
  const handleNext = () => onPageChange(currentPage + 1);

  return (
    <div className="flex justify-center mt-4">
      <button disabled={currentPage === 1} onClick={handlePrev} className="px-4 py-2 border rounded mr-2">Previous</button>
      <button disabled={currentPage === totalPages} onClick={handleNext} className="px-4 py-2 border rounded">Next</button>
    </div>
  );
};

export default Pagination;
