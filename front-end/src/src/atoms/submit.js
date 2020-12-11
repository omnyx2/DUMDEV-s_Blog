import { SubmissionError } from 'redux-form';
import { signInLocal } from '../actions';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

function submit(values) {
  const username = values.username;
  const password = values.password;
  return sleep(100).then(() => {
// simulate server latency
    if (!!!username) {
      throw new SubmissionError({
        username: 'User name is empty now',
        _error: 'Login failed!'
      })
    } else if (!!!password) {
      throw new SubmissionError({
        password: 'Password is empty now',
        _error: 'Login failed!'
      })
    } else {
      window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
	  signInLocal(username, password);
    }
  })
}

export default submit
