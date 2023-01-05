import React from "react";
import Like from "./common/like";
import button from "bootstrap/js/src/button";

const MoviesTable = props => {
    const {movies, onDelete, onLike, onSort} = props;

    if(movies.length === 0) return ;

    return (
        <table className="table table-striped table-sm">
            <thead>
            <tr>
                <th onClick={() => onSort('title')} scope="col">Title</th>
                <th onClick={() => onSort('genre.name')} scope="col">Genre</th>
                <th onClick={() => onSort('numberInStock')} scope="col">Stock</th>
                <th onClick={() => onSort('dailyRentalRate')} scope="col">Rate</th>
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