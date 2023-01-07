import React from "react";
import _ from 'lodash'

const TableBody = ({data, columns}) => {

    return (
        <tbody>
        {data.map( item => {
            return (
                <tr key={item._id}>
                    {columns.map( column => <td key={item._id + (column.path || column.key)}>
                        {(column.content) ? column.content(item) : _.get(item, column.path)}
                    </td>)}
                </tr>
            );
        })}
        </tbody>
    );
}

export default TableBody;