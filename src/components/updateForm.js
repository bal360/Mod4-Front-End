import React from 'react'
import { Form, Button } from 'react-bootstrap';

class UpdateForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: "",
            location: ""
        }
    }

    componentDidMount() {
        this.setState({
            name: this.props.user.name,
            email: this.props.user.email,
            location: this.props.user.location
        })
    }
    
    handleChange = (event) => {
        this.setState({ 
            [event.target.name]: event.target.value
        })
    };
    
    handleUpdate = (event) => {
        event.preventDefault()
            fetch('http://localhost:3000/users/1', {
                method: 'PATCH',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(
                    this.state
                )
              }
            )
        .then(response => this.props.getUser())
    };
        
        render() {
            console.log('update', this.state);
            return (
            <Form onSubmit={this.handleUpdate}>
                <Form.Group controlId="form-name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control 
                        type="text" 
                        value={this.state.name}
                        name="name"
                        onChange={this.handleChange}
                        />
                </Form.Group>
                <Form.Group controlId="form-location">
                    <Form.Label>Location</Form.Label>
                    <Form.Control 
                        type="text" 
                        value={this.state.location}
                        name="location"
                        onChange={this.handleChange}
                        />
                </Form.Group>
                <Form.Group controlId="form-email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                        type="email" 
                        value={this.state.email}
                        name="email"
                        onChange={this.handleChange}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        )
    }    
};

export default UpdateForm;

