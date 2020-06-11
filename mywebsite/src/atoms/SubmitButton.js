import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { createPost }from '../actions';
import { useDispatch, useSelector } from 'react-redux';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

export default function TextButtons() {
   const markdownContent  = useSelector( state => state.editorMarkdown );
   const userId = useSelector( state => state.auth.userId);
   const dispatch = useDispatch();
   const classes = useStyles();
 	console.log(markdownContent);
  return (
    <div>
      <label htmlFor="text-button-file">
        <Button onClick={()=>dispatch( createPost(markdownContent, userId))} component="span" className={classes.button}>
          Upload
        </Button>
      </label>
    </div>
  );
}



