import React, {Component} from 'react';
import { connect } from "react-redux";
import uuidv1 from "uuid/v1";

import { addItem } from "./redux/actions"

function mapDispatchToProps(dispatch) {
    return {
      addItem: item => dispatch(addItem(item))
    };
}

class ListForm extends Component {
    constructor() {
        super()

        this.state = {
            title: "",
        }

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
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                    <label >Item</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={this.handleChange}
                    />
                    </div>
                    <button type="submit" >
                    SAVE
                    </button>
                </form>
            </div>
        );
    }


}

const Form = connect(null, mapDispatchToProps)(ListForm);

export default Form