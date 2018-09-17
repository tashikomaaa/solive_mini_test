import React, { Component } from 'react';

export default class PlayersPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            teams: [],
            clicked: false,
        };

    }

    handleClick() {
        console.log('click');
        this.setState(state => ({
            clicked: !state.clicked
        }));
    }
    componentDidMount() {
        fetch('http://localhost:4000/players')
            .then(response => response.json())
            .then(data => this.setState({ data }));

        fetch('http://localhost:4000/teams')
            .then(response => response.json())
            .then(teams => this.setState({ teams })); 
    }

    render() {

        return (
            <div>
                <button onClick={this.handleClick}>create player</button>
                {this.state.clicked ? 
                    <form>
                        name<br />
                        <input />
                        firstname<br />
                        <input />
                        team< br />
                        <input />
                    </form> : null    
                }
                <table className="table">
                    <tr className="table_header">
                        <th>name</th>
                        <th>fisrtname</th>
                        <th>sport</th>
                    </tr>
                    {this.state.data.map(player => {
                        return (
                            <tr key={player.id}>
                                <td key={player.name}>{player.name}</td>
                                <td key={player.id}>{player.firstname}</td>
                                <td key={player.sport}>
                                    {
                                        this.state.teams.map(team => {
                                            if(team.id === player.team) {
                                                return team.name;
                                            }
                                        })
                                    }
                                </td>
                            </tr>
                        );
                    })}
                </table>
            </div>
        );
    }
}
