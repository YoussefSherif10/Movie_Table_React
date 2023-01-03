import React from "react";
import "font-awesome/css/font-awesome.css"

const Like = ({liked , onClick}) => {
    let classes = "fa fa-heart" ;
    if(liked === false) classes += "-o"
return (
    <i
        className={classes}
        aria-hidden="true"
        style={{cursor: "pointer"}}
        onClick={onClick}
    />
);
}

export default Like;