import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RandomButton from './RandomButton/randomButton'
import SeeAllButton from './SeeAllButton/seeAllButton'
import SelectButton from './SelectButton/selectButton'



export default class Button extends Component {
    render(){
        return (
            <Container>
                <Row className="Button-Row">
                    <Col>
                        <SelectButton><Link to='/selectButton'></Link></SelectButton>
                    </Col>
                    <Col>
                        <a href="./Pages/random"><RandomButton /></a>
                    </Col>
                    <Col>
                        <a href="./Pages/beer-list"><SeeAllButton /></a>
                    </Col>
                </Row>
            </Container>
        )        
    }    
}


