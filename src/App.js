import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'; 
import SearchPage from './SearchPage';
import ArticlePage from './NewsArticlePage';


function App() {
  return (
    <BrowserRouter>
      <div className='App'>
            <Route exact path='/' component={SearchPage} />
            <Route exact path='/articles' component={ArticlePage} />
      </div>
    </BrowserRouter>
  );
}

export default App;
