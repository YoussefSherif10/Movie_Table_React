import React, {Component} from "react";
import {getMovies, deleteMovie} from "../services/fakeMovieService";
import "bootstrap/dist/css/bootstrap.css"
import button from "bootstrap/js/src/button";
import Like from "./common/like";
import "font-awesome/css/font-awesome.css"
import Pagination from "./common/pagination";
import {paginate} from "../utils/paginate";

class Table extends Component {
    state = {
        movies: getMovies(),
        pageSize: 4,
        currentPage: 1,
    };

    render() {
        // destructuring the state for cleaner code
        const {pageSize, currentPage} = this.state;
        const {length: count} = this.state.movies;

        return (
            <div className="col-lg-8 mx-auto p-4 py-md-5">
                <main>
                    {this.titleText()}
                    {this.showingMovies()}
                    <Pagination
                        itemCount={count}
                        pageSize={pageSize}
                        onPageChange={this.handlePageChange}
                        currentPage={currentPage}
                    />
                </main>
            </div>
        );
    }

    titleText = () => {
        if(this.state.movies.length > 1) {
            return <h1>Showing {this.state.movies.length} movies in the database.</h1>
        }
        else if (this.state.movies.length === 1){
            return <h1>Showing 1 movie in the database.</h1>
        }
        else {
            return <h1>No movies in the DB.</h1>
        }
    }

    showingMovies = () => {
        if(this.state.movies.length === 0){
            return ;
        }

        // get the movies in a single page
        const movies = paginate(this.state.movies, this.state.currentPage, this.state.pageSize);

        return (
            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Genre</th>
                        <th scope="col">Stock</th>
                        <th scope="col">Rate</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                    </thead>
                    <tbody>
                    {movies.map( movie => {
                        return (
                            <tr>
                                <td>{movie.title}</td>
                                <td>{movie.genre.name}</td>
                                <td>{movie.numberInStock}</td>
                                <td>{movie.dailyRentalRate}</td>
                                <td> <Like id={movie._id}
                                           liked={movie.liked}
                                           onClick={() => this.handleLike(movie)}
                                /> </td>
                                <td><button className="btn btn-danger" onClick={() => this.handleDelete(movie._id)}>
                                    Delete
                                </button></td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            </div>
        );
    }

    // EVENT HANDLERS

    handleDelete = (id) => {
        deleteMovie(id);
        this.setState({movies: getMovies()})
    }

    handleLike = movie => {
        const movies = [...this.state.movies]; // copy the movies from state
        const index = movies.indexOf(movie);   // get the index of the wanted movie
        movie.liked = !movie.liked;            // toggle the liked property
        movies[index] = movie;                 // change that in the copied list
        this.setState({movies});
    }

    handlePageChange = page => {
        this.setState({currentPage: page});
    }

}

export default Table;