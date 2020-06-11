import React from 'react';
import {ThemeProvider} from 'react-jss';
import Sidebar from './Sidebar';
import Header from './Header';
import {Router, Route, Switch} from 'react-router-dom';
import MyEditor from './pages/RichEditor';
import SubmitButton from '../atoms/SubmitButton';
import PortfolioPage from './pages/PortfolioPage';
import HomePage from './pages/HomePage';
import PostsPage from './pages/PostsPage';
import PostPage from './pages/PostPage';
import PortfolioBasicInfo from './forms/PortfolioBasicInfo';
import PortfolioArrayInfo from './forms/PortfolioArrayInfo';
import SerisePage from './pages/SerisePage';
import BooksPage from './pages/BooksPage';
import Login from './pages/LoginPage';
import history from '../history';
import SignUpPage from './pages/SignUpPage.js';
import PrivateRoute from './logins/PrivateRoute';
import PostEditor from './pages/post/PostCreatePage';

const theme = {
  background: '#f6f6f6',
  color: '#24292e',
};

const App = () => {
  return (
    <div className="container">
      <Router history={history}>
        <div className="ui-header-container">
          <Switch>
            <Route exact path="/" component={null} />
            <Route component={Header} />
          </Switch>
          <Route exact path="/">
            <ThemeProvider theme={theme}>
              <HomePage />
            </ThemeProvider>
          </Route>
        </div>
        <div className="posting">
          <Route exact path="/posts" component={PostsPage}></Route>
          <Route exact path="/posting">
            <div className="editor">
              <PostEditor />
            </div>
          </Route>
        </div>
        <div className="main ui container">
          <Route exact path="/posts/:id" component={PostPage}></Route>
          <Switch>
            <Route exact path="/login">
              <Login />
            </Route>
            <PrivateRoute exact path="/profile">
              <PortfolioBasicInfo />
              <PortfolioArrayInfo />
            </PrivateRoute>
          </Switch>
          <Route exact path="/serise">
            <SerisePage />
          </Route>
          <Route exact path="/books">
            <BooksPage />
          </Route>
          <Route exact path="/search">
            search
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <SignUpPage />
          </Route>
        </div>
        <Route exact path="/portfolio">
          <PortfolioPage />
        </Route>
      </Router>
    </div>
  );
};

export default App;
