import React from "react";

const List = ({onItemSelect, listGroup, textProperty, valueProperty, selectedItem}) => {
    return (
        <ul className="list-group">
            <li onClick={() => onItemSelect(0)}
                className={ selectedItem === 0 ? "list-group-item active" : "list-group-item"}
                style={{cursor: "pointer"}}>
                All Genres
            </li>
            {listGroup.map(item =>
                <li key={item[valueProperty]} onClick={() => onItemSelect(item)}
                    className={selectedItem === item ? "list-group-item active" : "list-group-item"}
                    style={{cursor: "pointer"}}>
                    {item[textProperty]}
                </li>)}
        </ul>
    );
}

/* default props are used to simplify the interface of the component
we can override it in case of any changes.
 */
List.defaultProps = {
    textProperty: "name",
    valueProperty: "_id"
};

export default List;