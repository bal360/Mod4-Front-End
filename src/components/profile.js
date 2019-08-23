import React from 'react';
import { Container, Row } from 'react-bootstrap';
import RiverCard from './riverCard'
// import UpdateForm from './updateForm'
import { withRouter } from 'react-router-dom'


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
        <div className="profile">
            <div>
                <h1>Name: {user.name}</h1>
            </div>
            <div>
                <h2>Location: {user.location}</h2>
            </div>
            <div>
                <h3>Email: {user.email}</h3>
            </div>
            <div>
                <button type="button" onClick={() => {props.history.push('/updateForm')}}>Update Profile</button>
            </div>
            <Container>
                <Row>
                    {RiverCards}
                </Row>
            </Container>
        </div>
     );
}
 
export default withRouter(Profile);
