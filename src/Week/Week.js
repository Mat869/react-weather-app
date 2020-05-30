import React, { Component } from 'react';
import './Week.css';
import Day from './Day/Day';

class Week extends Component {

    constructor(props) {
        super(props);
        this.state = {
            days: [],
        };
    }

    componentDidMount() {
        fetch('https://my-json-server.typicode.com/evyros/react-weather-app/forecast')
            .then(data => data.json())
            .then(days => {
                this.setState({days});
            })
    }

    getDay(day) {
        switch (day) {
        case 0:
          day = "Sunday";
          break;
        case 1:
          day = "Monday";
          break;
        case 2:
           day = "Tuesday";
          break;
        case 3:
          day = "Wednesday";
          break;
        case 4:
          day = "Thursday";
          break;
        case 5:
          day = "Friday";
          break;
        case 6:
          day = "Saturday";
      }
      return day
    }

    render() {
        return (
            <body>
                <div className='Week'>
                    {this.state.days.map((day, index) => {
                        return (
                            <Day key={index}
                                day={this.getDay(day.day)}
                                icon={day.icon}
                                temperature={day.temperature+'°'}
                                description={day.description}
                            />
                        );
                    })}
                </div>
            </body>
          );
    }
  
}

export default Week;