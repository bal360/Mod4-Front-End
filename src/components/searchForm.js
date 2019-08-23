import React, { Component } from 'react';
import { Form, Row, Col, Button, InputGroup} from 'react-bootstrap';

class SearchForm extends Component {
    
        
    render() { 
        return ( 
            <Form onSubmit={this.props.handleSubmit}>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>Zipcode or City, State</Form.Label>
                            <Form.Control 
                                placeholder="Enter zipcode or city, state"
                                name="cityState"
                                value={this.props.cityState}
                                onChange={this.props.handleChange}
                                />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Search Radius</Form.Label>
                            <InputGroup>
                                <Form.Control 
                                    placeholder="Enter Search Radius"
                                    name="radius"
                                    value={this.props.radius}
                                    onChange={this.props.handleChange}
                                />
                                <InputGroup.Append>
                                    <InputGroup.Text id="inputGroupAppend">Miles</InputGroup.Text>
                                </InputGroup.Append>
                            </InputGroup>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Nearest River Gauges</Form.Label>
                            <Form.Control 
                                placeholder="Enter River Limit"
                                name="riverLimit"
                                value={this.props.riverLimit}
                                onChange={this.props.handleChange}
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Button 
                                className="searchButton" 
                                type="submit" 
                                value="submit"
                                size="lg"
                            >
                                Submit
                            </Button>
                        </Form.Group>
                    </Col>
                </Row>
            </Form>
         
         );
      }
    }
    
    export default SearchForm;
