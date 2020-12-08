import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import AllPosts from './components/AllPosts.js'
import OnePost from './components/OnePost.js'

function App() {
  return (
    <BrowserRouter>
        <Route component={AllPosts} path="/" exact />
        <Route component={OnePost} path="/:slug" exact />
    </BrowserRouter>
  );
}

export default App;
