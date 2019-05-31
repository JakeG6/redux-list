import React from 'react'
import List from './List'
import ListForm from './Form'
import Filter from './Filter'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import './App.css';

library.add(faArrowLeft)

function App() {
  return (
      <div className="App">
        <div className="portfolioBar">
          <div className="arrowContainer">
            <a href="https://jake-guss.herokuapp.com/portfolio"><FontAwesomeIcon className="arrow-icon" icon="arrow-left" color="white" size="3x" /></a>
          </div>
        </div>
        <Container>
          <Row>
            <Col xs={12}><h1 className="title">The Greatest Redux List Ever</h1></Col>
          </Row>
          <Row>
            <Col sm={6}>
              <ListForm />
            </Col>
            <Col sm={6}>
              <List />
            </Col>
          </Row>
        </Container>        
      </div>
  );
}

export default App;
