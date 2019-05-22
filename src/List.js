import React from 'react';
import { connect } from "react-redux";

import { SHOW_ALL } from './redux/actions.js'
import { SHOW_COMPLETED } from './redux/actions.js'
import { SHOW_UNCOMPLETED } from './redux/actions.js'


import { toggleComplete } from "./redux/actions"

const mapStateToProps = state => {
    return { 
        items: state.items, 
        filter: state.filter
    };
}; 

const ConnectedList = ({ items, filter, dispatch }) => {

    let filteredItems = []

    if (filter === SHOW_ALL) {
        filteredItems = items
    }
    
    if (filter === SHOW_COMPLETED) {
        filteredItems = items.filter(item => item.completed)
    }

    if (filter === SHOW_UNCOMPLETED) {
        filteredItems = items.filter(item => item.completed === false)
    }

    return (
        <div>
            <h2>The list</h2>
            <ul>
                {filteredItems.map(item => (
                <li key={item.id} onClick={ () => dispatch(toggleComplete(item)) } className={item.completed === true ? 'text-strike' : null}>
                    {item.title}
                </li>
                ))}
            </ul>
        </div>
    );

}

const List = connect(mapStateToProps)(ConnectedList);

export default List