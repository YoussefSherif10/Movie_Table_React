import React, {Component} from "react";
import Like from "./common/like";
import button from "bootstrap/js/src/button";
import TableHeader from "./common/tableHeader";

class MoviesTable extends Component {
    // I define it here not in the state as it doesn't change through the program
    columns = [
        { path: "title", label: "Title"},
        { path: "genre.name", label: "Genre"},
        { path: "numberInStock", label: "Stock"},
        { path: "dailyRentalRate", label: "Rate"},
        { key: "like"},
        { key: "delete" },
    ];
    render() {
        const {movies, onDelete, onLike, sortColumn, onSort} = this.props;

        if(movies.length === 0) return ;

        return (
            <table className="table table-striped table-sm">
                <TableHeader
                    columns={this.columns}
                    sortColumn={sortColumn}
                    onSort={onSort}
                />
                <tbody>
                {movies.map( movie => {
                    return (
                        <tr key={movie._id}>
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
}

export default MoviesTable;