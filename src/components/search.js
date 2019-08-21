import React from 'react';
import RiverCard from './riverCard'
import Form from './form'
import { Container, Row } from 'react-bootstrap';

const Search = (props) => {
    
    const rivers = props.riverData.map(river => {
        return <RiverCard 
                id={river.id} 
                dateTime={river.ob.dateTimeISO} 
                height={river.ob.heightFT} 
                cFS={river.ob.flowCFS} 
                status={river.ob.status} 
                gaugeLocation={river.place.name} 
                itself={river.profile.waterbody}/>
    });


    return(
        <div className="search">
            <h1>River Search</h1>
            <Form 
                handleChange={props.handleChange} 
                handleSubmit={props.handleSubmit}/>
                <Container>
                    <Row>
                        {rivers}
                    </Row>
                </Container>
        </div>
    )
};

export default Search;