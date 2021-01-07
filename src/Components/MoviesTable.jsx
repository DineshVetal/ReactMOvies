import React, { Component } from "react";
import propTypes from "prop-types";
import TableHead from "./tableHead";
import TableBody from "./tableBody";
import Like from "../Reusable/Like";
import { NavLink } from "react-router-dom";

class MoviesTable extends Component {
  columns = [
    {
      path: "title",
      Label: "Title",
      content: movie => {
        return (
          <NavLink className="nav-item nav-link" to={`/movies/${movie._id}`}>
            {movie.title}
          </NavLink>
        );
      }
    },
    { path: "genre.name", Label: "Genre" },
    { path: "numberInStock", Label: "Stock" },
    { path: "dailyRentalRate", Label: "Rate" },
    {
      key: "Like",
      content: movie => {
        return (
          <Like
            liked={movie.liked}
            onLike={this.props.onLike}
            post={movie}
          ></Like>
        );
      }
    },
    {
      key: "Delete",
      content: movie => {
        return (
          <button
            onClick={() => this.props.onDelete(movie,this.props.currentPage)}
            className="btn btn-warning m-2"
          >
            Delete
          </button>
        );
      }
    }
  ];

  render() {
    const { data, SortOrder, SortPath, onSort } = this.props;
    return (
      <table className="table ">
        <TableHead
          headers={this.columns}
          onSort={onSort}
          SortPath={SortPath}
          SortOrder={SortOrder}
        />
        <TableBody data={data} headers={this.columns} />
      </table>
    );
  }
}
MoviesTable.propTypes = {
  data: propTypes.array.isRequired,
  onLike: propTypes.func.isRequired,
  onSort: propTypes.func.isRequired
};
export default MoviesTable;
