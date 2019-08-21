import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

class RiverCard extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            favorited: false,
        }
    }
    
    river = this.props
    
    handleClick = (...riverStuff) => {
         this.props.addFavorite(...riverStuff)
         this.setState({ favorited: true })        
        }

    render() {
        return ( 
            <Card style={{ width: '18rem' }} >
            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRw6PCp2nIwEwEC-sCZW1_89CXdfGxU288usS96_7zgaw9gtOsDA" />
            <Card.Body>
                <Card.Title>{this.river.itself}</Card.Title>
            </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>CFS: {this.river.cFS}</ListGroupItem>
                    <ListGroupItem>Water Height: {this.river.height}</ListGroupItem>
                    <ListGroupItem>Status: {this.river.status}</ListGroupItem>
                    <ListGroupItem>Gauge Location: {this.river.gaugeLocation}</ListGroupItem>
                    <ListGroupItem>Date and Time of Last Reading: {this.river.dateTime}</ListGroupItem>
                </ListGroup>
                { this.state.favorited ? null :<Card.Body>
                 <Card.Link onClick={() => this.handleClick(this.river.itself, this.river.cFS, this.river.height, this.river.status, this.river.gaugeLocation, this.river.dateTime)}>Add to Favorites</Card.Link> 
                </Card.Body> }
            </Card>
            );
        }
    }
        
        export default RiverCard;
        
        
        
        
        
        // id={river.id} 
        // dateTime={river.ob.dateTimeISO} 
        // height={river.ob.heightFT} 
        // cFS={river.ob.flowCFS} 
        // status={river.ob.status} 
        // gaugeLocation={river.place.name} 
        // itself={river.profile.waterbody}