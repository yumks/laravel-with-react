import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Picture extends Component {
    constructor() {
        super();
        this.state = {
            png: ''
        };
    }

    componentDidMount() {
        fetch('/api/png')
        .then(response => {
            return response.json();
        })
        .then(objects => {
            this.setState({png:objects.png});
        })
    }

    renderPicture() 
    {
      return (<img src={this.state.png} />);
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-body">
                                {this.renderPicture()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

if (document.getElementById('picture')) {
    ReactDOM.render(<Picture />, document.getElementById('picture'));
}
