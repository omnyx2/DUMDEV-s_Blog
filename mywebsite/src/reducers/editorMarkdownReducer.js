export default (state={}, action) => {
	if(action.type === "UPDATE_EDITOR_MARKDOWN"){
		return { ...state, editorMarkdown: action.payload };
	} else {
		return state;
	}
}
