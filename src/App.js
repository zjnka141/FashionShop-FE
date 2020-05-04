import React from 'react';
import logo from './logo.svg';
import './App.css';
import './scss/main.css';
import Navbar from './sections/Navbar/Navbar';
import BackgroundImage from './asset/images/hero-appion.png';
import SignInSignUp from './pages/auth/SignInSignUp';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Services from './pages/Services';
import CenteredGrid from './pages/Products';

const Home = () => (
  <div
    className="content"
    style={{
      marginTop: '100px',
      background: `url(${BackgroundImage})`,
      height: '100vh',
      width: '100%',
    }}
  ></div>
);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/login" component={SignInSignUp} />
          <Route exact path="/service" component={Services} />
        </Switch>
      </BrowserRouter>
      {/* <CenteredGrid /> */}
    </div>
  );
}

export default App;
