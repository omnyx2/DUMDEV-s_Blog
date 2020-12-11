import _ from 'lodash';

export default ( state={}, action ) => {
	switch (action.type){
		case "CREATE_SERISE": return { ...state, [action.payload.id]: action.payload };
		case "FETCH_SERISE": return {...state, [action.payload.id]: action.payload };
		case "EDIT_SERISE": return {...state, [action.payload.id]:action.payload };
		case "FETCH_SERISES": return {...state, ..._.mapKeys(action.payload,'id')};
		case "DELETE_SERISE": return _.omit(state, action.payload);
		default: return state;
	}
}
