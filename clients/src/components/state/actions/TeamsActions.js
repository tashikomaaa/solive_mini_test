import {TeamsService} from '../../../services/TeamsService';

export const FETCH_TEAMS = 'FETCH_TEAMS';

const fetchTeamsAction = () => ({
    type: FETCH_TEAMS,
    payload: TeamsService()
});

export { fetchTeamsAction as fetchTeams};