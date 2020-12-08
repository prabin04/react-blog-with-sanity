import React from 'react'
import {BrowserRouter, Router} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
        <Route component={AllPosts} path="/path" exact />
        <Route component={OnePost} path="/:slug" exact />
    </BrowserRouter>
  );
}

export default App;
