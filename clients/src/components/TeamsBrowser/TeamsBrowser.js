import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchTeams } from '../state/actions/TeamsActions';
import { TeamsList } from './TeamsList';
import { LoadingIndicator } from '../shared/LoadingIndicator/LoadingIndicator';
import { Error } from '../shared/Error/Error';

class TeamsBrowser extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchTeams();
    }

    render() {
        return (
            <div>
                {
                    this.props.fetched && <TeamsList Teamss={this.props.Teams} />
                }
                {
                    <LoadingIndicator busy={this.props.fetching} />
                }
                {
                    this.props.failed && <Error message="Failed to fetch list of zip codes" />
                }
            </div>
        );
    }
}

TeamsBrowser.propTypes = {
    fetchTeams: PropTypes.func.isRequired,
    fetched: PropTypes.bool.isRequired,
    fetching: PropTypes.bool.isRequired,
    failed: PropTypes.bool,
    Teams: PropTypes.array.isRequired
};

const mapStateToProps = state => {
    const { fetching, fetched, failed, teams } = state.teams;
    return { fetching, fetched, failed, teams };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ fetchTeams }, dispatch)
);
const hoc = connect(mapStateToProps, mapDispatchToProps)(TeamsBrowser);

export { hoc as TeamsBrowser};