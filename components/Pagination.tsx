import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }: {currentPage: number, totalPages: number, onPageChange: any}) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="flex items-center justify-between px-4 py-3 bg-white sm:px-6">
      <ul className="flex items-center space-x-3 rounded-md border-1">
        {pageNumbers.map((pageNumber) => (
          <li key={pageNumber} className={pageNumber === currentPage ? 'active' : ''}>
            <button onClick={() => onPageChange(pageNumber)}>{pageNumber}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
