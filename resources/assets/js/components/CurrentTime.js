import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class CurrentTime extends Component {
    constructor() {
        super();
        this.state = {
            ctime: ''
        };
    }

    componentDidMount() {
        this.interval = setInterval(() => this.CurrentTime(), 1000);
    }

    CurrentTime() {
        fetch('/api/time')
        .then(response => {
            return response.json();
        })
        .then(objects => {
            this.setState({ctime:objects.date});
        })
    }

    renderCurrentTimes() 
    {
      return (<p>{this.state.ctime}</p>);
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-body">
                                {this.renderCurrentTimes()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

if (document.getElementById('currenttime')) {
    ReactDOM.render(<CurrentTime />, document.getElementById('currenttime'));
}
