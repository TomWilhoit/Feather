import { combineReducers } from 'redux';
import { locationsReducer } from './locationsReducer'
import { weatherReducer } from './weatherReducer';


export const rootReducer = combineReducers({
	locations: locationsReducer,
	weather: weatherReducer
})