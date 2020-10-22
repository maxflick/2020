/* import React, {useState} from 'react' */
import React from 'react'
import { AnimatePresence } from 'framer-motion';
import './App.css';
import { BrowserRouter as Router, Switch, Route, useLocation} from 'react-router-dom';
import Home from './pages';
import Contact from './pages/contact';
import One from './pages/one';
import Two from './pages/two';
import Footer from './components/Footer'

/* import Navbar from './components/Navbar'; */

function App() {

/* const location = useLocation(); */
  /* const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
      setIsOpen(!isOpen)
  }; */

  return (
    <Router>
      {/* <Navbar toggle={toggle} /> */}
      <Route
        render={({ location }) => (
      <AnimatePresence exitBeforeEnter>
        
        <Switch location={location} key={location.pathname}>
        <Route
            path="/" exact
            render={({ location }) => {
              return <Home/>;
            }}
        />
        <Route
            path="/contact" exact
            render={({ location }) => {
              return <Contact/>;
            }}
        />
        <Route 
            path="/one" exact
            render={({ location }) => {
              return <One/>;
            }}
        />
        <Route
            path="/two" exact
            render={({ location }) => {
              return <Two/>;
            }}
        />
        </Switch>
        </AnimatePresence>
      )}
      />
      <Footer />
    </Router>
  );
}

export default App;
