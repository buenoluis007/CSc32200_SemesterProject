import React, { Component } from 'react';

import Manager from '../Manager/Manager';

class Accounts extends Component {
    constructor() {
        super();
        this.state =
        {
            Users : []
        };
    }

    componentDidMount() {
      fetch('/user')
        .then(res => res.json())
        .then(user => this.setState({ Users: user }))
    }

    render() {
        let display = null;
        if(this.state.Users.type === 'Manager'){
            this.props.history.push('/Account/Manager')
                display = (
                    <div>
                        < Manager />
                    </div>
                )
        }
        return (
            <div>
                <h1>Your Email: {this.state.Users.email}</h1>
                <h1>Account Type: {this.state.Users.type}</h1>
                {display}
            </div>
        );
    }
}

export default Accounts
