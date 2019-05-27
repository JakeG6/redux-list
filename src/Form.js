import React, {Component} from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';
import { connect } from "react-redux";
import uuidv1 from "uuid/v1";

import { addItem } from "./redux/actions"

function mapDispatchToProps(dispatch) {
    return {
      addItem: item => dispatch(addItem(item))
    };
}

class ConnectedForm extends Component {
    
    constructor() {
        super()
        this.state = { title: "", }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        const { title } = this.state;
        const completed = false;
        const id = uuidv1();
        this.props.addItem({ title, completed, id });
        this.setState({ title: "", qty: 0 });
    }

    render() {
        const { title } = this.state;
        return (
            <div className="panel">
                <h2 className="poiret-one">Add to the List</h2>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Control
                            placeholder="enter an item"
                            type="text"
                            id="title"
                            value={title}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Button 
                        variant="primary" 
                        type="submit" 
                        disabled={title.trim() === "" ? true : false}
                        block
                    >
                    Add Item
                    </Button>
                </Form>
            </div>
        );
    }

}

const ListForm = connect(null, mapDispatchToProps)(ConnectedForm);

export default ListForm