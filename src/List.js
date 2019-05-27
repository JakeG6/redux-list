import React from 'react';
import Filter from './Filter';
import { connect } from "react-redux";

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'


import { SHOW_ALL } from './redux/actions.js'
import { SHOW_COMPLETED } from './redux/actions.js'
import { SHOW_UNCOMPLETED } from './redux/actions.js'

import { toggleComplete } from "./redux/actions"

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

library.add(faTrash)

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
        <div className="panel">
            <Container>
                <Row>
                    <Col>
                        <h2 className="poiret-one">The List</h2>
                    </Col>
                    <Col>
                        <Filter />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ListGroup variant="flush">
                            {filteredItems.map(item => (
                                <ListGroup.Item  
                                    key={item.id} 
                                    variant="dark"
                                    onClick={ () => dispatch(toggleComplete(item)) } 
                                    className={(item.completed === true ? 'text-strike item' : 'item') }
                                >
                                    {item.title}
                                    
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </div>
    );

}

const List = connect(mapStateToProps)(ConnectedList);

export default List