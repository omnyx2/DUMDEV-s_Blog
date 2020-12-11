import { EditorState } from 'draft-js';

const INITAL_EDITOR_STATE = {
	editorState: EditorState.createEmpty(),
}

export default (state=INITAL_EDITOR_STATE, action) => {
	if(action.type === 'UPDATE_EDITOR_STATE'){
			return {...state, editorState: action.payload };
	}
		return state;
};


