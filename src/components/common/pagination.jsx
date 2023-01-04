import React from "react";
// lodash is a drive from underscore library
import _ from 'lodash'

const Pagination = ({itemCount, pageSize}) => {
    const numberOfPages = itemCount/pageSize ;
    const pages = _.range(1, numberOfPages + 1);  // + 1 as the end number is not included.

    if(pages.length === 1) return ; // in single page don't show any element

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                {pages.map(page => <li key={page} className="page-item"><a className="page-link" href="#">{page}</a></li>)}
            </ul>
        </nav>
    );
}

export default Pagination;