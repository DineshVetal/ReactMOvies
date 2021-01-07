import React from "react";
import propTypes from "prop-types";
import _ from "lodash";
// "page-item active"
const Pagination = ({ currentPage, pageSize, items, onPageSelect }) => {
  const No_of_pages = Math.ceil(items.length / pageSize);
  if (No_of_pages === 1) return null;
  let pageArray = _.range(1, No_of_pages + 1);
  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {pageArray.map(page => (
            <li
              key={page}
              // console.log()
              className={
                page === currentPage ? "page-item active" : "page-item"
              }
            >
              <button className="page-link" onClick={() => onPageSelect(page)}>
                {page}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
Pagination.propTypes = {
  pageSize: propTypes.number.isRequired,
  currentPage: propTypes.number.isRequired,
  items: propTypes.array.isRequired,
  onPageSelect: propTypes.func.isRequired
};
Pagination.defaultProps = {
  currentPage: 2,
  pageSize: 5
};
export default Pagination;
