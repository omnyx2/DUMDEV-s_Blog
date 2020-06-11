import _ from 'lodash';

export default ( state={}, action) => {
	switch (action.type){
		case "CREATE_BOOK": return { ...state, [action.payload.id]: action.payload };
		case "FETCH_BOOK": return {...state, [action.payload.id]: action.payload }; 
		case "FETCH_BOOKS": return { ...state, ..._.mapKeys(action.payload, 'id') }; 
		case "EDIT_BOOK": return {...state, [action.payload.id]: action.payload }; 
		case "DELETE_BOOK": return _.omit(state, action.payload);
		default: return state ;
	}
}
