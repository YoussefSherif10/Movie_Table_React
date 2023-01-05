import React from "react";
import Like from "./common/like";
import button from "bootstrap/js/src/button";

const MoviesTable = props => {
    const {movies, onDelete, onLike} = props;

    return (
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
                                   onClick={() => onLike(movie)}
                        /> </td>
                        <td><button className="btn btn-danger"
                                    onClick={() => onDelete(movie._id)}>
                            Delete
                        </button></td>
                    </tr>
                );
            })}
            </tbody>
        </table>
    );
}

export default MoviesTable;