import { blog, auth } from '../apis/serverRequest';

export const signInLocal = ({username, password}) => async (dispatch)=> {
	const loginInfo = { email:username, password:password };
	const response = await auth.post('/local', loginInfo);
	console.log(response);
	dispatch({
	 type: "LOCAL_SIGN_IN",
	 payload: username
	 });
}
/*
export const signOutLocal = () => {

}*/

export const signIn = (id) => {
	return ({
			type: "SIGN_IN",
			payload: id
	});
}
export const signOut = () => {
	return ({
		type: "SIGN_OUT",
	});

};
export const updateEditorState = (TextValue) => {
	return {
		type: "UPDATE_EDITOR_STATE",
		payload: TextValue.editorState
	}
}

export const updateEditorMarkdownState = (TextValue) => {
	return {
		type: "UPDATE_EDITOR_MARKDOWN",
		payload: TextValue
	}
}


// this is relatied with posts
export const createPost = ( content, userId) => async (dispatch) => {	
	const JsonData = JSON.stringify({ ...content, userId })
	console.log(JsonData);
	const res =  await blog.post('/posts', JsonData);
	dispatch ({
		type: "CREATE_POST",
		payload: content
	});
}
export const editPost = (formValue) => {	
	return ({
		type: "EDIT_POST",
		payload: formValue
	});
}

export const fetchPost = (id) => async dispatch => {	
		
	try{
		const response = await blog.get(`/posts/${id}`);
		dispatch({
			type: "FETCH_POST",
			payload: response.data
		});
	}catch(error){
		console.log("error occured"+error);
		dispatch({
			type: "FETCH_POST",
			payload: { error: "error" }
		});
	}
}

export const fetchPosts = (page) => async dispatch => {
	const start = page*5;
	const end = (page+1)*5;
	const posts = [];
	for ( let i=start; i<end; i++){
		try{
			const response = await blog.get(`/posts/${i}`);
			posts.push(response.data);
		} catch(error) {
			console.log("error!"+error);
			return false;
		}
	}
	dispatch ({
			type: "FETCH_POSTS",
			payload: posts
	});
}

export const deletePost = () => {	
	return ({
		type: "DELETE_POST"
	});
}

//this is related with Serise
export const fetchSerises = (page) => async dispatch => {
	const start = page*5;
	const end = (page+1)*5;
	const serise = [];
	for ( let i=start; i<end; i++){
		try{
			const response = await blog.get(`/serise/${i}`);
			serise.push(response.data);
		} catch(error) {
			console.log("error!"+error);
			return false;
		}
	}
	dispatch ({
			type: "FETCH_SERISES",
			payload: serise
	});
}

export const fetchSeriseElements = () => dispatch => {
}

export const fetchBooks = (page) => async dispatch => {
	const start = page*5;
	const end = (page+1)*5;
	const books = [];
	
	for ( let i=start; i<end; i++ ) {
		try{
			const response = await blog.get(`books/${i}`);
			books.push(response.data);
		}catch(error){
			console.log("error!"+error);
			return false;
		}
	}

	dispatch({
		type: "FETCH_BOOKS",
		payload: books
	});
}





