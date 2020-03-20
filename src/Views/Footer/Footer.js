import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { connect } from 'react-redux';
import * as actionCreator from '../../Redux/Actions/ActionTypes/index';
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

  subscribeSubmit = () => {
    const data = {
      email: this.state.email
    };
    this.props && this.props.subscribeNowActionCall(data);
  };

  render() {
    return (
      <div>
        <ToastContainer autoClose={3000} />
        <div className="row clear-margins">
          <div className="col-xl-10 col-lg-10 col-md-9 col-sm-10 col-12 mt-5 mb-5 mx-auto">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-4 mx-auto">
                <div className="single-widget">
                  <h2>Category</h2>
                  <hr className="hr-line" />
                  <ul className="footer-sub-title">
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/meditation">Meditation</Link>
                    </li>
                    <li>
                      <Link to="/quotes">Quotes</Link>
                    </li>
                    <li>
                      <Link to="/blog">Blogs</Link>
                    </li>
                    <li>
                      <Link to="/videos">Videos</Link>
                    </li>
                    <li>
                      <Link to="/testimonial">Testimonial</Link>
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
                      <Link to="/therapies">Depression</Link>
                    </li>
                    <li>
                      <Link to="/therapies">Stress</Link>
                    </li>
                    <li>
                      <Link to="/therapies">Anxiety</Link>
                    </li>
                    <li>
                      <Link to="/therapies">Insomnia</Link>
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
                      <Link to="https://www.facebook.com/lovershelplineofficial/">
                        <img src="icons/fb.png" alt="" className="social-icons" />
                      </Link>
                    </li>
                    <li>
                      <Link to="https://www.youtube.com/channel/UCkGuHlaIAyotWi2CeY8f44w">
                        <img src="icons/yt.png" alt="" className="social-icons" />
                      </Link>
                    </li>
                    <li>
                      <Link to="https://www.instagram.com/sakha_shashank/?r=nametag">
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
                  <div className="subscribe">
                    <input
                      type="text"
                      value={this.state.email}
                      name="email"
                      onChange={this.subscribeHandler}
                      placeholder="Your email"
                    />
                    <button className="mt-3 food-btn" onClick={this.subscribeSubmit}>
                      Subscribe Now
                    </button>
                  </div>
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

const mapStateToProps = (state) => {
  const CtrContactData = state.CtrContact;
  return {
    contactData: CtrContactData
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    subscribeNowActionCall: (data) => dispatch(actionCreator.SubscribeNowAction(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
