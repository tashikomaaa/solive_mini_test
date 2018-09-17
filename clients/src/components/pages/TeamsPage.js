import React, { Component } from 'react';

export default class TeamsPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
        };
    }

    componentDidMount() {
        fetch('http://localhost:4000/teams')
            .then(response =>  response.json())
            .then(data => this.setState({ data })); 
    }


    render() {
        return (
            <table className="table">
                <tr className="table_header">
                    <th>name</th>
                    <th>sport</th>
                </tr>
                {this.state.data.map(team => {
                    return (
                        <tr key={team.id}>
                            <td key={team.name}>{team.name}</td>
                            <td key={team.sport}>{team.sport}</td>
                        </tr>
                    );
                })}
            </table>
        );
    }
}
