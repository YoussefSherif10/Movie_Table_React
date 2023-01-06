/* this component encapsulate the logic of sorting and
supports extended table.
 */

import React, {Component} from "react";

class TableHeader extends Component {
    render() {
        const {columns} = this.props;
        return (
            <thead>
            <tr>
                {columns.map(c => <th
                    className="clickable"
                    onClick={() => this.raiseSort(c.path)}
                    scope="col"
                    key={c.path || c.key}>
                    {c.label} {this.renderSortIcon(c)}
                </th>)}
            </tr>
            </thead>
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

    renderSortIcon = column => {
        if(column.path !== this.props.sortColumn.path) return ;
        if (this.props.sortColumn.order === 'asc') return <i className="fa fa-sort-asc"></i>;
        return <i className="fa fa-sort-desc"></i>;
    }
}

export default TableHeader;
