import React from "react";
// lodash is a drive from underscore library
import _ from 'lodash'
import PropTypes, {number} from "prop-types";

const Pagination = ({itemCount, pageSize, onPageChange, currentPage}) => {
    const numberOfPages = itemCount/pageSize ;
    const pages = _.range(1, numberOfPages + 1);  // + 1 as the end number is not included.

    if(pages.length === 1) return ; // in single page don't show any element

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                {pages.map(page => <li
                    key={page}
                    className={page === currentPage ? "page-item active" : "page-item"}>
                    <a className="page-link" href="#" onClick={() => onPageChange(page)}>
                        {page}
                    </a>
                </li>)}
            </ul>
        </nav>
    );
}

// prop types are used for checking the props and determine the required ones.
// it produces a warning in the console
// it is a good practice to use it for reusable components. it also gives a documentation to
// the needed props for that function
Pagination.propTypes = {
    itemCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired
};

export default Pagination;