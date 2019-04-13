export const weatherReducer = (state = [], action) => {
	switch(action.type){
		case 'ADD_WEATHER':
			return action.weatherLocals
		default:
		return state
	}
}