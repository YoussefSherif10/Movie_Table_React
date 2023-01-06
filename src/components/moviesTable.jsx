import React, {Component} from "react";
import Like from "./common/like";
import button from "bootstrap/js/src/button";

class MoviesTable extends Component
{
    render() {
        const {movies, onDelete, onLike, onSort} = this.props;

        if(movies.length === 0) return ;

        return (
            <table className="table table-striped table-sm">
                <thead>
                <tr>
                    <th onClick={() => this.raiseSort('title')} scope="col">Title</th>
                    <th onClick={() => this.raiseSort('genre.name')} scope="col">Genre</th>
                    <th onClick={() => this.raiseSort('numberInStock')} scope="col">Stock</th>
                    <th onClick={() => this.raiseSort('dailyRentalRate')} scope="col">Rate</th>
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

    raiseSort = path => {
        /*
        we pass the path to this method. then, this method passes the object to the props
        handler method
         */
        const sortColumn = {...this.props.sortColumn};
        if(sortColumn.path === path){
            sortColumn.order = (sortColumn.order === 'asc') ? 'desc' : 'asc' ;
        }
        else {
            sortColumn.path = path ;
            sortColumn.order = 'asc' ;
        }
        this.props.onSort(sortColumn);  // pass the sortColumn object to the event raiser
    }
}

export default MoviesTable;