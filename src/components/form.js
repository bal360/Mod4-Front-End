import React, { Component } from 'react';

class Form extends Component {
    
        
    render() { 
        return ( 
            <form onSubmit={this.props.handleSubmit}>
                <label htmlFor="cityState">Location: </label>
                <input 
                    type="text" 
                    name="cityState" 
                    value={this.props.cityState} 
                    onChange={this.props.handleChange}/>
                <label htmlFor="radius">Radius: </label>
                <input 
                    type="number" 
                    name="radius" 
                    style={{width: "45px"}}
                    value={this.props.radius} 
                    onChange={this.props.handleChange}/> miles 
                <label htmlFor="Numbers of Rivers to Show">Limit of Rivers: </label>
                <input 
                    type="number" 
                    name="riverLimit" 
                    style={{width: "45px"}}
                    value={this.props.riverLimit} 
                    onChange={this.props.handleChange}/>
                <input type="submit" value="Submit"/>
            </form>
         );
        }
    }
    
    export default Form;
