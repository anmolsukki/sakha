import React, { Suspense, Component } from 'react';
import { Redirect, Route, Switch, Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import routes from '../Config/routes';
import './index.css';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerSelected: false,
      screenWidth: 0
    };
  }

  loading = () => <div>Loading...</div>;

  componentDidMount = () => {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  };

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.updateWindowDimensions);
  };

  updateWindowDimensions = () => {
    this.setState({ screenWidth: window.innerWidth });
  };

  gotoHome = () => {
    this.props.history.push('home');
    document.getElementById('mySidebar').style.width = '0';
    document.getElementById('main').style.marginLeft = '0';
    this.setState({
      drawerSelected: false
    });
  };

  openNav = () => {
    if (this.state.screenWidth <= 767) {
      document.getElementById('mySidebar').style.width = '100%';
    } else {
      document.getElementById('mySidebar').style.width = '260px';
      document.getElementById('main').style.marginLeft = '260px';
    }
    if (this.props.history.location.pathname === '/home') {
      this.props.history.push('about');
    } else {
      this.props.history.push(this.props.location.pathname);
    }
    this.setState({
      drawerSelected: !this.state.drawerSelected
    });
  };

  closeNav = () => {
    document.getElementById('mySidebar').style.width = '0';
    document.getElementById('main').style.marginLeft = '0';
    this.setState({
      drawerSelected: !this.state.drawerSelected
    });
  };

  handleDrawerClick = () => {
    if (this.state.screenWidth <= 767) {
      this.closeNav();
    }
  };

  render() {
    return (
      <div>
        <div className="sidenav">
          {this.state.screenWidth <= 767 ? (
            <div>
              <span className="lh-name" onClick={this.gotoHome}>
                Sakha
              </span>
            </div>
          ) : null}

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
              <p
                className={`${this.state.drawerSelected === true ? 'lh-header-fade' : ''}`}
                onClick={this.gotoHome}>
                Sakha
              </p>
              <ul className="nav-menu">
                <li className="nav-option">
                  <Link
                    to={{ pathname: '/about' }}
                    className={this.props.location.pathname === '/about' ? 'nav-option active' : ''}
                    onClick={this.handleDrawerClick}>
                    About
                  </Link>
                </li>
                <li className="nav-option">
                  <Link
                    to={{ pathname: '/therapies' }}
                    className={
                      this.props.location.pathname === '/therapies' ? 'nav-option active' : ''
                    }
                    onClick={this.handleDrawerClick}>
                    Therapies
                  </Link>
                </li>
                <li className="nav-option">
                  <Link
                    to={{ pathname: '/meditation' }}
                    className={
                      this.props.location.pathname === '/meditation' ? 'nav-option active' : ''
                    }
                    onClick={this.handleDrawerClick}>
                    Beyond Meditation
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