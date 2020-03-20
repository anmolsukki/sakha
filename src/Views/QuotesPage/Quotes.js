import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../Assets/PortalTheme.css';

class Quotes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onStep: 1
    };
  }

  scrollPage = (value) => {
    window.scrollTo({
      top: value,
      behavior: 'smooth'
    });
  };

  goToStep = (step) => {
    if (step)
      this.setState({
        onStep: step
      });
  };

  render() {
    return (
      <div className="fade-in">
        <section>
          <div className="row clear-margins">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 clear-padings">
              <div className="quotes-bg">
                <div className="quotes-main">
                  <p className="quotes-note">Quotes By Sakha</p>
                </div>
              </div>
              <Link to="#" onClick={() => this.scrollPage(300)} className="home-more">
                Learn More
              </Link>
            </div>
          </div>
        </section>
        <section style={{ background: '#ffffff' }}>
          <div className="row clear-margins">
            <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-12 mt-5 mx-auto">
              <div className="row">
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 mx-auto">
                  <div className="therapies-categories">
                    <ul>
                      <li
                        className={`${this.state.onStep === 1 ? 'selected-categories' : ''}`}
                        onClick={() => this.goToStep(1)}>
                        Meditation
                      </li>
                      <li
                        className={`${this.state.onStep === 2 ? 'selected-categories' : ''}`}
                        onClick={() => this.goToStep(2)}>
                        Love
                      </li>
                      <li
                        className={`${this.state.onStep === 3 ? 'selected-categories' : ''}`}
                        onClick={() => this.goToStep(3)}>
                        Life
                      </li>
                      <li
                        className={`${this.state.onStep === 4 ? 'selected-categories' : ''}`}
                        onClick={() => this.goToStep(4)}>
                        Stress
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-12">
                  {this.state.onStep === 1 ? (
                    <div className="row">
                      <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 mb-3 frastration-mob">
                        <img src="Images/meditation1.png" alt="" className="img-fluid" />
                      </div>
                      <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 mb-3 frastration-mob">
                        <img src="Images/meditation2.png" alt="" className="img-fluid" />
                      </div>
                      <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 mb-3 frastration-mob">
                        <img src="Images/meditation3.png" alt="" className="img-fluid" />
                      </div>
                      <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 mb-3 frastration-mob">
                        <img src="Images/meditation4.png" alt="" className="img-fluid" />
                      </div>
                      <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 mb-3 frastration-mob">
                        <img src="Images/meditation5.png" alt="" className="img-fluid" />
                      </div>
                      <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 mb-3 frastration-mob">
                        <img src="Images/meditation6.png" alt="" className="img-fluid" />
                      </div>
                    </div>
                  ) : this.state.onStep === 2 ? (
                    <div className="row">
                      <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 mb-3 frastration-mob">
                        <img src="Images/love1.png" alt="" className="img-fluid" />
                      </div>
                      <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 mb-3 frastration-mob">
                        <img src="Images/love2.png" alt="" className="img-fluid" />
                      </div>
                      <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 mb-3 frastration-mob">
                        <img src="Images/love3.png" alt="" className="img-fluid" />
                      </div>
                      <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 mb-3 frastration-mob">
                        <img src="Images/love4.png" alt="" className="img-fluid" />
                      </div>
                      <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 mb-3 frastration-mob">
                        <img src="Images/love5.png" alt="" className="img-fluid" />
                      </div>
                      <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 mb-3 frastration-mob">
                        <img src="Images/love6.png" alt="" className="img-fluid" />
                      </div>
                    </div>
                  ) : this.state.onStep === 3 ? (
                    <div className="row">
                      <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 mb-3 frastration-mob">
                        <img src="Images/life1.png" alt="" className="img-fluid" />
                      </div>
                      <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 mb-3 frastration-mob">
                        <img src="Images/life2.png" alt="" className="img-fluid" />
                      </div>
                      <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 mb-3 frastration-mob">
                        <img src="Images/life3.png" alt="" className="img-fluid" />
                      </div>
                      <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 mb-3 frastration-mob">
                        <img src="Images/life4.png" alt="" className="img-fluid" />
                      </div>
                      <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 mb-3 frastration-mob">
                        <img src="Images/life5.png" alt="" className="img-fluid" />
                      </div>
                      <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 mb-3 frastration-mob">
                        <img src="Images/life6.png" alt="" className="img-fluid" />
                      </div>
                      <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 mb-3 frastration-mob">
                        <img src="Images/life7.png" alt="" className="img-fluid" />
                      </div>
                      <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 mb-3 frastration-mob">
                        <img src="Images/life8.png" alt="" className="img-fluid" />
                      </div>
                      <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 mb-3 frastration-mob">
                        <img src="Images/life9.png" alt="" className="img-fluid" />
                      </div>
                    </div>
                  ) : this.state.onStep === 4 ? (
                    <div className="row">
                      <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 mb-3 frastration-mob">
                        <img src="Images/stress1.png" alt="" className="img-fluid" />
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Quotes;
