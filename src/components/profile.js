import React from 'react';
import { Container, Row } from 'react-bootstrap';
import RiverCard from './riverCard'
import { withRouter } from 'react-router-dom'
import { Jumbotron, Button } from 'react-bootstrap';


const Profile = (props) => {
    
    const { user, deleteFavorite } = props

    const RiverCards = user.favorites.map(river => {
            return (
                <RiverCard 
                    id={river.id} 
                    dateTime={river.dateTimeISO} 
                    height={river.height} 
                    cFS={river.cfs} 
                    status={river.status} 
                    gaugeLocation={river.gaugeLocation} 
                    itself={river.itself}
                    deleteFavorite={deleteFavorite}
                />
            )
        });

   return ( 
        <div>
            <Jumbotron 
                className="profileJumbo"
                
            >
                <h1>Name: {user.name} </h1>
                <h2>Location: {user.location}</h2>
                <h3>Email: {user.email}</h3>
                <Button 
                    variant="primary" 
                    className="profileButton"
                    size="lg"
                    onClick={() => {props.history.push('/updateForm')}}
                >
                    Update Profile
                </Button>
            </Jumbotron>
            <Container>
                <Row>
                    {RiverCards}
                </Row>
            </Container>
        </div>
     );
}
 
export default withRouter(Profile);
