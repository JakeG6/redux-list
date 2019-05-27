import React from 'react';
import List from './List';
import ListForm from './Form';
import Filter from './Filter';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import './App.css';

function App() {
  return (
      <div className="App">
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
