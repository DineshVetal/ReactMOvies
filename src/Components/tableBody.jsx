import React from "react";
import propTypes from "prop-types";
import _ from "lodash";
import "../css/vidly.css";
import assassin from "../dist/assets/assasin.jpeg";

{
  /* <NavLink className="nav-item nav-link" to="/counters">
              Counters
            </NavLink> */
}

const TableBody = ({ data, headers }) => {
  if (data.length == 0) return <h1>There are no movies in the database.</h1>;
  return (
    <React.Fragment>
      <tbody>
        {data.map((body, index) => (
          <tr key={body._id}>
            {headers.map((head, ind) => (
              <td
                className="body"
                // style={{ backgroundImage: `url(${assassin})` }}
                key={ind}
              >
                {renderCell(body, head)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </React.Fragment>
  );
};

const renderCell = (body, head) => {
  if (head.content) return head.content(body);
  return _.get(body, head.path || head.key);
};

TableBody.propTypes = {
  data: propTypes.array.isRequired,
  headers: propTypes.array.isRequired
};

export default TableBody;
