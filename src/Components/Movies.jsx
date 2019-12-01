import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import MoviesTable from "./MoviesTable";
import Pagination from "../Reusable/Pagination";
import paginate from "../services/paginate";
import ListGroup from "../Reusable/ListGroup";
import _ from "lodash";
import SearchBox from "../Reusable/SearchBox";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    currentGenre: "AllGenres",
    SortPath: "title",
    SortOrder: "asc",
    searchQuery: ""
  };

  componentDidMount() {
    const movies = getMovies();
    const genres = [{ name: "AllGenres", _id: "daddadadada" }, ...getGenres()];
    // console.log(movies);
    this.setState({ movies, genres });
  }

  handleLike = movie => {
    const likeMovies = [...this.state.movies];
    const index = likeMovies.indexOf(movie);
    likeMovies[index] = { ...likeMovies[index] };
    likeMovies[index].liked = !likeMovies[index].liked;
    this.setState({ movies: likeMovies });
  };
  handleDelete = movie => {
    const deleteMovies = [...this.state.movies];
    const index = deleteMovies.indexOf(movie);
    deleteMovies[index] = { ...deleteMovies[index] };
    deleteMovies.splice(index, 1);
    this.setState({ movies: deleteMovies });
  };
  handlePageSelect = page => {
    this.setState({ currentPage: page });
  };
  handleGenreSelect = genre => {
    this.setState({ currentGenre: genre, searchQuery: "" });
  };
  handleSort = (SortPath, SortOrder) => {
    this.setState({ SortOrder, SortPath });
  };

  handleSearch = query => {
    this.setState({
      searchQuery: query,
      currentGenre: null,
      currentPage: 1
    });
  };

  render() {
    const {
      movies,
      pageSize,
      currentPage,
      genres,
      currentGenre,
      SortPath,
      SortOrder,
      searchQuery
    } = this.state;

    let moviesByGenre = [];
    if (!searchQuery) {
      moviesByGenre =
        currentGenre !== "AllGenres"
          ? movies.filter(movie => movie.genre.name === currentGenre)
          : movies;
    } else {
      moviesByGenre = movies.filter(movie =>
        movie.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    }

    const sortedMovies = _.orderBy(moviesByGenre, SortPath, SortOrder);
    const paginatedMovies = paginate(pageSize, currentPage, sortedMovies);

    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={genres}
            itemSelected={currentGenre}
            onItemSelect={this.handleGenreSelect}
          />
        </div>
        <div className="col-8">
          <button
            onClick={() => {
              this.props.history.push("/movies/new");
            }}
          >
            Add Movie
          </button>
          <SearchBox
            onChange={this.handleSearch}
            value={this.state.searchQuery}
          ></SearchBox>
          <MoviesTable
            data={paginatedMovies}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
            SortPath={SortPath}
            SortOrder={SortOrder}
            onSort={this.handleSort}
          />
          <Pagination
            pageSize={pageSize}
            currentPage={currentPage}
            items={moviesByGenre}
            onPageSelect={this.handlePageSelect}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
