export const fetchTeams = () => {
    return fetch('localhost:4000/teams').then(response => {
        return response.json();
    }).catch(error => {
        return error;
    });
};