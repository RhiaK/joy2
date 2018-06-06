import React, { Component } from 'react';
import { 
  BrowserRouter as Router, 
  Route,
   } from 'react-router-dom';
import Navigation from './Navigation';
import Inspiration from './Inspiration';
import Freebies from './Freebies';
import Subscribe from './Subscribe';
import Signin from './Signin';
import HomePage from './Home';
import Header from './Header';
import Footer from './Footer';
import * as routes from '../constants/routes';
import { database, auth } from '../firebase/firebase';
import tulips from '../images/TULIP.png';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authenticated: null,
    };
  }

  componentDidMount() {
  const database=require('../firebase/firebase');
    database.auth.onAuthStateChanged(authenticated => {
      authenticated
        ? this.setState(() => ({ authenticated }))
        : this.setState(() => ({ authenticated: null }));
    });
  }


  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route
            exact path={routes.SIGN_IN}
            component={() => <Signin />}
          />
          <Route
            exact path={routes.HOME}
            component={() => <HomePage />}
          />
          <Route
            exact path={routes.INSPIRATION}
            component={() => <Inspiration />}
          />
          <Route
            exact path={routes.FREEBIES}
            component={() => <Freebies />}
          />
          <Route
            exact path={routes.SUBSCRIBE}
            component={() => <Subscribe />}
          />
          <Navigation authenticated={this.state.authenticated} />
          <img className="img" src={tulips} alt="tulips"></img>
          <Footer />
        </div>
      </Router>
    )
  }
}      

export default App;
