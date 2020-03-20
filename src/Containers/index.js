import React, { Suspense, Component } from 'react';
import { Redirect, Route, Switch, Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import routes from '../Config/routes';
import './index.css';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerSelected: false
    };
  }

  loading = () => (
    <div className="loader">
      <div className="sbl-circ-dual"></div>
    </div>
  );

  gotoHome = () => {
    this.props.history.push('home');
    document.getElementById('mySidebar').style.width = '0';
    document.getElementById('main').style.marginLeft = '0';
    document.getElementsByClassName('main-container')[0].style.filter = '';
    this.setState({
      drawerSelected: false
    });
  };

  openNav = () => {
    document.getElementById('mySidebar').style.width = '100%';
    this.props.history.push(this.props.location.pathname);
    document.getElementsByClassName('main-container')[0].style.filter = 'blur(6px)';
    this.setState({
      drawerSelected: !this.state.drawerSelected
    });
  };

  closeNav = () => {
    document.getElementById('mySidebar').style.width = '0';
    document.getElementById('main').style.marginLeft = '0';
    document.getElementsByClassName('main-container')[0].style.filter = '';
    this.setState({
      drawerSelected: !this.state.drawerSelected
    });
  };

  render() {
    return (
      <div>
        <div className="sidenav">
          {this.state.drawerSelected === false ? (
            <div className="hamburger-position">
              <button className="openbtn" onClick={this.openNav}>
                <div className="hamburger-menu"></div>
                <div className="hamburger-menu"></div>
                <div className="hamburger-menu"></div>
              </button>
            </div>
          ) : (
            <div className="hamburger-position">
              <button className="closebtn" onClick={this.closeNav}>
                <div className="line-first"></div>
                <div className="line-second"></div>
              </button>
            </div>
          )}
        </div>
        <div id="mySidebar" className="sidebar">
          {this.state.drawerSelected === true ? (
            <div>
              <ul className="nav-menu">
                <li className="nav-option">
                  <Link to={{ pathname: '/home' }} onClick={this.closeNav}>
                    <img
                      src={
                        this.props.location.pathname === '/home'
                          ? 'icons/home-active.svg'
                          : 'icons/home.png'
                      }
                      alt=""
                      className="home-icon"
                    />
                  </Link>
                </li>
                <li className="nav-option">
                  <Link
                    to={{ pathname: '/about' }}
                    className={this.props.location.pathname === '/about' ? 'nav-option active' : ''}
                    onClick={this.closeNav}>
                    About Sakha
                  </Link>
                </li>
                <li className="nav-option">
                  <Link
                    to={{ pathname: '/meditation' }}
                    className={
                      this.props.location.pathname === '/meditation' ? 'nav-option active' : ''
                    }
                    onClick={this.closeNav}>
                    Meditation
                  </Link>
                </li>
                <li className="nav-option">
                  <Link
                    to={{ pathname: '/therapies' }}
                    className={
                      this.props.location.pathname === '/therapies' ? 'nav-option active' : ''
                    }
                    onClick={this.closeNav}>
                    Therapies
                  </Link>
                </li>
                <li className="nav-option">
                  <Link
                    to={{ pathname: '/quotes' }}
                    className={
                      this.props.location.pathname === '/quotes' ? 'nav-option active' : ''
                    }
                    onClick={this.closeNav}>
                    Quotes By Sakha
                  </Link>
                </li>
                <li className="nav-option">
                  <Link
                    to={{ pathname: '/blog' }}
                    className={this.props.location.pathname === '/blog' ? 'nav-option active' : ''}
                    onClick={this.closeNav}>
                    Blogs
                  </Link>
                </li>
                <li className="nav-option">
                  <Link
                    to={{ pathname: '/videos' }}
                    className={
                      this.props.location.pathname === '/videos' ? 'nav-option active' : ''
                    }
                    onClick={this.closeNav}>
                    Videos
                  </Link>
                </li>
                <li className="nav-option">
                  <Link
                    to={{ pathname: '/testimonial' }}
                    className={
                      this.props.location.pathname === '/testimonial' ? 'nav-option active' : ''
                    }
                    onClick={this.closeNav}>
                    Testimonial
                  </Link>
                </li>
                <li className="nav-option">
                  <Link
                    to={{ pathname: '/pricing' }}
                    className={
                      this.props.location.pathname === '/pricing' ? 'nav-option active' : ''
                    }
                    onClick={this.closeNav}>
                    Pricing
                  </Link>
                </li>
                <li className="nav-option">
                  <Link
                    to={{ pathname: '/contact' }}
                    className={
                      this.props.location.pathname === '/contact' ? 'nav-option active' : ''
                    }
                    onClick={this.closeNav}>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          ) : null}
        </div>
        <Container fluid className="main-container">
          <Suspense fallback={this.loading()}>
            <Switch>
              {routes.map((route, idx) => {
                return route.component ? (
                  <Route
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    render={(props) => <route.component {...props} />}
                  />
                ) : null;
              })}
              <Redirect from="/" to="/home" />
            </Switch>
          </Suspense>
        </Container>
      </div>
    );
  }
}

export default Main;
