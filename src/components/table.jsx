import React, {Component} from "react";
import {getMovies, deleteMovie} from "../services/fakeMovieService";
import "bootstrap/dist/css/bootstrap.css"
import "font-awesome/css/font-awesome.css"
import Pagination from "./common/pagination";
import {paginate} from "../utils/paginate";
import List from "./common/list";
import {getGenres} from "../services/fakeGenreService";
import MoviesTable from "./moviesTable";
import _ from 'lodash'

class Table extends Component {
    state = {
        movies: [],
        genres: [],
        pageSize: 4,
        currentPage: 1,
        selectedItem: 0,
        sortColumn: {path: 'title', order: 'asc'},
    };

    componentDidMount() {
        // in a real application we would need to get these value from the DB so
        // we get them in that hook right after mounting
        this.setState({movies: getMovies(), genres: getGenres()});
    }

    render() {
        // filtering movies according to their genres
        const filtered = this.state.selectedItem
            ? this.state.movies.filter(m => m.genre._id === this.state.selectedItem._id)
            : this.state.movies ;

        // sorting movies
        const sorted = _.orderBy(filtered, [this.state.sortColumn.path], [this.state.sortColumn.order]);

        // get the movies in a single page
        const movies = paginate(sorted, this.state.currentPage, this.state.pageSize);

        return (
            <div className="mx-auto p-4 py-md-5 row">
                <div className="col-2">
                    <List
                        listGroup={this.state.genres}
                        onItemSelect={this.handleGenreSelect}
                        selectedItem={this.state.selectedItem}
                    />
                </div>
                <main className="col-7">
                        {this.titleText(filtered)}
                        <div className="table-responsive">
                            < MoviesTable
                                movies={movies}
                                onDelete={this.handleDelete}
                                onLike={this.handleLike}
                                onSort={this.handleSort}
                            />
                            <Pagination
                                itemCount={filtered.length}
                                pageSize={this.state.pageSize}
                                onPageChange={this.handlePageChange}
                                currentPage={this.state.currentPage}
                            />
                        </div>
                </main>
            </div>
        );
    }

    titleText = (list) => {
        if(list.length > 1) {
            return <h1>Showing {list.length} movies in the database.</h1>
        }
        else if (list.length === 1){
            return <h1>Showing 1 movie in the database.</h1>
        }
        else {
            return <h1>No movies in the DB.</h1>
        }
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

    handleGenreSelect = genre => {
        this.setState({selectedItem: genre , currentPage: 1});
    }

    handleSort = path => {
        const sortColumn = {...this.state.sortColumn};
        if(sortColumn.path === path){
            sortColumn.order = (sortColumn.order === 'asc') ? 'desc' : 'asc' ;
        }
        else {
            sortColumn.path = path ;
            sortColumn.order = 'asc' ;
        }
        this.setState({sortColumn});
    }

}

export default Table;