import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
//import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import picture from './components/Images/mugtransparent.png'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Sup
        </header>
        <div className="PictureRow">
          <Container>
          <Row>
            <Col>
              <Image src={ picture } rounded className="Pictures"/>
            </Col>
            <Col>
              <Image src={ picture } className="Pictures"/>
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={4}>
              <Image src={ picture } rounded className="Pictures"/>
            </Col>
            <Col xs={6} md={4}>
              <Image src={ picture } thumbnail className="Pictures"/>
            </Col>
          </Row>
        </Container>
        </div>
        
      </div>   
    );
  }
}

export default App;
