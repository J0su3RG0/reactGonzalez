import React from "react";
import Title from '../Title/index';

export const ItemListContainer = (props) => {
    return (
        <Title greeting={props.numeroItem} />
    )
}

export default ItemListContainer;