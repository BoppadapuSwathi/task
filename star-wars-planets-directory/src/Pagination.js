import React from 'react';

const Pagination = ({ prevPage, nextPage }) => {
  return (
    <div className="pagination">
      <button onClick={prevPage}>Previous</button>
      <button onClick={nextPage}>Next</button>
    </div>
  );
};

export default Pagination;