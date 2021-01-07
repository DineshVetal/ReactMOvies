import React from "react";
import propTypes from "prop-types";
import "../css/vidly.css";

const ListGroup = ({ items, itemSelected, onItemSelect, displayname }) => {
  return (
    <div>
      <ul className="list-group m-2">
        {items.map(item => (
          <li
            key={item._id}
            className={
              itemSelected === item[displayname]
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => onItemSelect(item[displayname])}
          >
            {item[displayname]}
          </li>
        ))}
      </ul>
    </div>
  );
};
ListGroup.propTypes = {
  items: propTypes.array.isRequired,
  onItemSelect: propTypes.func.isRequired
};
ListGroup.defaultProps = {
  itemSelected: "AllGenres",
  displayname: "name"
};
export default ListGroup;
// console.log()