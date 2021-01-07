import React from "react";
import propTypes from "prop-types";
import "../css/vidly.css";

const TableHead = ({ headers, onSort, SortOrder, SortPath }) => {
  return (
    <React.Fragment>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th
              className="headers"
              key={index}
              onClick={() => {
                if (header.path) {
                  onSort(header.path, SortOrder === "asc" ? "desc" : "asc");
                  // console.log()
                }
              }}
            >
              {header.Label || header.key}
              {SortSticker(header.path, SortPath, SortOrder)}
            </th>
          ))}
        </tr>
      </thead>
    </React.Fragment>
  );
};

const SortSticker = (header, SortPath, SortOrder) => {
  if (header !== SortPath) return null;
  if (SortOrder === "asc") return <i className="fa fa-sort-asc" />;
  if (SortOrder === "desc") return <i className="fa fa-sort-desc" />;
};

TableHead.propTypes = {
  headers: propTypes.array.isRequired,
  SortOrder: propTypes.string.isRequired,
  SortPath: propTypes.string.isRequired
};
TableHead.defaultProps = {
  SortPath: "title",
  SortOrder: "asc"
};
export default TableHead;
