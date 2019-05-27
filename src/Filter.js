import React, {Component} from 'react';
import { connect } from "react-redux";

import { SHOW_ALL } from './redux/actions.js'
import { SHOW_COMPLETED } from './redux/actions.js'
import { SHOW_UNCOMPLETED } from './redux/actions.js'

import { changeFilter } from "./redux/actions"

import Form from 'react-bootstrap/Form';

function mapStateToProps(state) {
    return {
      filter: state.filter
    }
}

function mapDispatchToProps(dispatch) {
  return {
    changeFilter: (newFilter) => {
      dispatch(changeFilter(newFilter))
    }
  };
};


class ConnectedFilter extends Component {

  handleChange = event => {
    console.log(event.target.value)
    this.props.changeFilter(event.target.value)
  }
  
  render() {
    return (
      <div>
        
          <Form>
            <Form.Group>
              
              <Form.Control as="select" onChange={this.handleChange}>
                  <option value={SHOW_ALL}>Show All</option>
                  <option value={SHOW_COMPLETED}>Show Completed</option>
                  <option value={SHOW_UNCOMPLETED}>Show Uncompleted</option>  
              </Form.Control>
              
            </Form.Group> 
          </Form>
      </div>
    )
  }

}



const Filter = connect(mapStateToProps, mapDispatchToProps)(ConnectedFilter);

export default Filter