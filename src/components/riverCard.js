import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

class RiverCard extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            favorited: false,
        }
    }
    
    handleClick = (...riverStuff) => { 
        if (this.props.addFavorite) {
            this.props.addFavorite(...riverStuff)
            this.setState({ favorited: true })        
        } else {
            this.props.deleteFavorite(this.props.id)
            this.setState({ favorited: false })        
        }
    }

    render() {
        return ( 
            <Card style={{ width: '18rem' }} >
                <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRg-5duaT2NLzsdmUzNbGr0v87M7FANaYQbKVfNTfWPhD_dRcwd" />
                <Card.Body>
                    <Card.Title>{this.props.itself.toUpperCase()}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>CFS: {this.props.cFS}</ListGroupItem>
                    <ListGroupItem>Water Height: {this.props.height}</ListGroupItem>
                    <ListGroupItem>Status: {this.props.status}</ListGroupItem>
                    <ListGroupItem>Gauge Location: {this.props.gaugeLocation}</ListGroupItem>
                    <ListGroupItem>Date and Time of Last Reading: {this.props.dateTime}</ListGroupItem>
                </ListGroup>
                { this.state.favorited ? null :
                    <Card.Body>
                        <Card.Link onClick={() => this.handleClick(
                            this.props.itself, 
                            this.props.cFS, 
                            this.props.height, 
                            this.props.status, 
                            this.props.gaugeLocation, 
                            this.props.dateTime
                        )}>
                            {this.props.addFavorite ? "Add Favorite" : "Delete Favorite"}
                        </Card.Link> 
                    </Card.Body> 
                }
            </Card>
            );
        }
    }
        
        export default RiverCard;