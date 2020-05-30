import React, { Component } from 'react';
import './Day.css';

class Day extends Component {

    render() {
        return (
            <div className='Day'>
                <h3>{this.props.day}</h3>
                <img src={require(`../../icons/${this.props.icon}.png`)} alt={this.props.description}/>
                <div className='Description'>
                    <p>{this.props.temperature}</p>
                    <p>{this.props.description}</p>
                </div>
            </div>
          );
    }
  
}

export default Day;