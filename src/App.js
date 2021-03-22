import React from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
//
import { Link, Router, Redirect } from 'components/Router'

import Home from "./pages/home";
import Index from "./pages/index";
import NotFound from "./pages/NotFound";

import './app.css'

import 'bootstrap/dist/css/bootstrap.min.css';

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

function App() {
  return (
    <Root>
      <div className="content">
        <React.Suspense fallback={<em>Loading...</em>}>
          <Router>
            <Home path="/home" lang="en-us" />
            <Home path="/accueil" lang="fr-ca" />
            <Index path="/" />
            <NotFound default to="/" />
          </Router>
        </React.Suspense>
      </div>
    </Root>
  )
}

export default App
