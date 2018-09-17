// IMPORT PACKAGE REFERENCES

import { combineReducers } from 'redux';


// IMPORT REDUCERS

import { FetchTeamsReducer } from '../reducers/FetchTeamsReducer';


// EXPORT APP REDUCER

export const AppReducer = combineReducers({
    Teams: FetchTeamsReducer
});