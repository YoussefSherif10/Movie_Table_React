import React, {Component} from "react";
import Like from "./common/like";
import button from "bootstrap/js/src/button";
import GenericTable from "./common/genericTable";

class MoviesTable extends Component {
    // I define it here not in the state as it doesn't change through the program
    columns = [
        { path: "title", label: "Title"},
        { path: "genre.name", label: "Genre"},
        { path: "numberInStock", label: "Stock"},
        { path: "dailyRentalRate", label: "Rate"},
        {
            key: "like",
            content: item => <Like liked={item.liked} onClick={() => this.props.onLike(item)} />
        },
        {
            key: "delete",
            content: item => <button className="btn btn-danger" onClick={() => this.props.onDelete(item._id)}>
                Delete
            </button>
        },
    ];
    render() {
        const {movies, sortColumn, onSort} = this.props;

        if(movies.length === 0) return ;

        return (
            <GenericTable
                columns={this.columns}
                sortColumn={sortColumn}
                onSort={onSort}
                data={movies}
            />
        );
    }
}

export default MoviesTable;