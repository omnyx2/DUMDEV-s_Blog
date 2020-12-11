import { combineReducers } from 'redux';
import authGoogleReducer from './authGoogleReducer';
import authLocalReducer from './authLocalReducer';
import postReducer from './postReducer';
import editorReducer from './editorReducer';
import editorMarkdown from './editorMarkdownReducer';
import seriseReducer from './seriseReducer';
import bookReducer from './bookReducer';
import postElementReducer from './postElementReducer';
import { reducer as reduxFormReducer } from 'redux-form';

export default combineReducers({
		authLocal: authLocalReducer,
		auth: authGoogleReducer, 
		posts: postReducer,
		post: postElementReducer,
		serise: seriseReducer,
		books: bookReducer,
		editor: editorReducer,
		editorMarkdown: editorMarkdown,
		form: reduxFormReducer,
}); 
