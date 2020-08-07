import React from 'react';
import logo from './logo.svg';
import './App.css';
import './scss/main.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Navbar from './components/NavBar';
import BackgroundImage from './asset/images/hero-appion.png';
import SignInSignUp from './pages/auth/SignInSignUp';
import { Router, Route, Switch } from 'react-router-dom';
import Services from './pages/Services';
import Products from './pages/products/Products';
import SaveToken from './components/SaveToken';
import ShowSnackbar from './components/common/ShowSnackbar';
import IntroSlider from './sections/IntroSlider/IntroSlider';
import Banner from './sections/Banner/Banner';
import useWidth from './hooks/useWidth';
import Footer from './sections/Footer/Footer';
import history from './services/history';

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
  const width = useWidth();
  console.log('AA', width);
  return (
    <div className="App">
      <ShowSnackbar />
      <Router history={history}>
        {/* <Navbar /> */}
        {/* <IntroSlider /> */}
        {/* <Banner /> */}
        {/* <Products /> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/login" component={SignInSignUp} />
          <Route exact path="/service" component={Services} />
          <Route exact path="/saveToken" component={SaveToken} />
        </Switch>
      </Router>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
