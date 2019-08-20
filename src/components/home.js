import React from 'react';
import RiverCard from './riverCard'
import Form from './form'

const Home = (props) => {
    
    const rivers = props.riverData.map(river => {
        return <RiverCard 
                riverId={river.id} 
                riverDateTime={river.ob.dateTimeISO} 
                riverHeight={river.ob.heightFT} 
                riverCFS={river.ob.flowCFS} 
                riverStatus={river.ob.status} 
                riverGaugeLocation={river.place.name} 
                riverItself={river.profile.waterbody}/>
    })


    return(
        <div className="home">
            <h1>Home Here</h1>
            <Form 
                handleChange={this.props.handleChange} 
                handleSubmit={this.props.handleSubmit}/>
            {rivers}
        </div>
    )
};

export default Home;