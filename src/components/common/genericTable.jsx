import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const GenericTable = props => {
    const {
        columns,
        sortColumn,
        onSort,
        data
    } = props;
    return (
        <table className="table table-striped table-sm">
            <TableHeader
                columns={columns}
                sortColumn={sortColumn}
                onSort={onSort}
            />
            <TableBody
                data={data}
                columns={columns}
            />
        </table>
    );
}

export default GenericTable;