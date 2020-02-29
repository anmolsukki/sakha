import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../Assets/PortalTheme.css';

class Footer extends Component {
  constructor() {
    super();
    this.state = {
      email: ''
    };
  }

  subscribeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <div className="row clear-margins">
          <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-12 mt-5 mb-5 mx-auto">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-4 mx-auto">
                <div className="single-widget">
                  <h2>Category</h2>
                  <hr className="hr-line" />
                  <ul className="footer-sub-title">
                    <li>
                      <Link to="#">About</Link>
                    </li>
                    <li>
                      <Link to="#">Meditation</Link>
                    </li>
                    <li>
                      <Link to="#">Quotes</Link>
                    </li>
                    <li>
                      <Link to="#">Blogs</Link>
                    </li>
                    <li>
                      <Link to="#">Videos</Link>
                    </li>
                    <li>
                      <Link to="#">Testimonial</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-4 mx-auto">
                <div className="single-widget">
                  <h2>Therapies</h2>
                  <hr className="hr-line" />
                  <ul className="footer-sub-title">
                    <li>
                      <Link to="#">Depression</Link>
                    </li>
                    <li>
                      <Link to="#">Stress</Link>
                    </li>
                    <li>
                      <Link to="#">Anxiety</Link>
                    </li>
                    <li>
                      <Link to="#">Insomnia</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-4 mx-auto">
                <div className="single-widget">
                  <h2>Follow us</h2>
                  <hr className="hr-line" />
                  <ul className="footer-sub-title">
                    <li>
                      <Link to="#">
                        <img src="icons/fb.png" alt="" className="social-icons" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <img src="icons/yt.png" alt="" className="social-icons" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <img src="icons/insta.png" alt="" className="social-icons" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                <div className="single-widget">
                  <h2>Subscribe Now</h2>
                  <hr className="hr-line" />
                  <form action="#" className="subscribe">
                    <input
                      type="text"
                      value={this.state.email}
                      name="email"
                      onChange={this.subscribeHandler}
                      placeholder="Your email"
                    />
                    <button className="mt-3 food-btn">Subscribe Now</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 clear-margins"
            style={{ background: '#009BD1' }}>
            <div className="row">
              <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-12 mx-auto">
                <div className="footer-bottom">
                  <p className="text-right">
                    <span>Terms of Service</span> &nbsp;&nbsp;&nbsp;
                    <span>Privacy Policy</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
