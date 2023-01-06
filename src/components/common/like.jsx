import React from "react";
import "font-awesome/css/font-awesome.css"

const Like = ({liked , onClick, id}) => {
    let classes = "clickable fa fa-heart" ;
    if(liked === false) classes += "-o"
return (
    <i
        key={id}
        className={classes}
        aria-hidden="true"
        onClick={onClick}
    />
);
}

export default Like;