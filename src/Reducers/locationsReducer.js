export const locationsReducer = (state = [], action) => {
	switch(action.type){
		case 'ADD_LOCATIONS':
			return action.locations
		default:
		return state
	}
}