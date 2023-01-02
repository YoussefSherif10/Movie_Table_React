import React, {Component} from "react";
import {getMovies, deleteMovie} from "../services/fakeMovieService";
import "bootstrap/dist/css/bootstrap.css"
import button from "bootstrap/js/src/button";

class Table extends Component {
    state = {
        movies: getMovies(),
    };

    render() {
        return (
            <div className="col-lg-8 mx-auto p-4 py-md-5">
                <main>
                    {this.titleText()}
                    {this.showingMovies()}
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

        else {
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
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.movies.map( movie => {
                            return (
                                <tr>
                                    <td>{movie.title}</td>
                                    <td>{movie.genre.name}</td>
                                    <td>{movie.numberInStock}</td>
                                    <td>{movie.dailyRentalRate}</td>
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
    }

    handleDelete = (id) => {
        deleteMovie(id);
        this.setState({movies: getMovies()})
    }
}

export default Table;