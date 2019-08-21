import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const RiverCard = (props) => {
    const river = props
                // id={river.id} 
                // dateTime={river.ob.dateTimeISO} 
                // height={river.ob.heightFT} 
                // cFS={river.ob.flowCFS} 
                // status={river.ob.status} 
                // gaugeLocation={river.place.name} 
                // itself={river.profile.waterbody}
    
    return ( 
        <Card style={{ width: '18rem' }} class="bg-transparent">
            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRw6PCp2nIwEwEC-sCZW1_89CXdfGxU288usS96_7zgaw9gtOsDA" />
            <Card.Body>
                <Card.Title>{river.itself}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>CFS: {river.cFS}</ListGroupItem>
                <ListGroupItem>Water Height: {river.height}</ListGroupItem>
                <ListGroupItem>Status: {river.status}</ListGroupItem>
                <ListGroupItem>Gauge Location: {river.gaugeLocation}</ListGroupItem>
                <ListGroupItem>Date and Time of Last Reading: {river.dateTime}</ListGroupItem>
            </ListGroup>
            <Card.Body>
                <Card.Link href="#">Add to Favorites</Card.Link>
            </Card.Body>
        </Card>
     );
}
 
export default RiverCard;