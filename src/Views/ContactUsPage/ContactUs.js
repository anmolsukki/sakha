import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { connect } from 'react-redux';
import * as actionCreator from '../../Redux/Actions/ActionTypes/index';
import { TextInput } from './ContactForm';
import Footer from '../Footer/Footer';
import '../../Assets/PortalTheme.css';

class ContactUs extends Component {
  constructor() {
    super();
    this.state = {
      fullName: '',
      email: '',
      mobileNumber: '',
      subject: '',
      message: ''
    };
  }

  contactUsHandler = (e) => {
    const inputLength = e.target.value;
    if (inputLength.length > 0) {
      const nextLength = e.target.nextElementSibling;
      let addClass = 'unfocus-label unfocus';
      nextLength.className = addClass;
    } else {
      const nextLength = e.target.nextElementSibling;
      let addClass = 'floating-label';
      nextLength.className = addClass;
    }
    if (e.target.name === 'email') {
      this.setState({
        [e.target.name]: e.target.value
      });
    } else {
      this.setState({
        // [e.target.name]: e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1),
        [e.target.name]: e.target.value
          .toLowerCase()
          .split(' ')
          .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
          .join(' ')
      });
    }
  };

  textAreaHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  ContactUsSubmit = () => {
    const data = {
      fullName: this.state.fullName,
      mobileNumber: this.state.mobileNumber,
      email: this.state.email,
      subject: this.state.subject,
      message: this.state.message
    };
    this.props && this.props.contactUsActionCall(data);
  };

  render() {
    return (
      <div
        className="fade-in"
        style={{ backgroundImage: 'linear-gradient( #1B56A1 0%, #005F59 100%)' }}>
        <ToastContainer autoClose={3000} />
        <section>
          <div className="row clear-margins">
            <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10 mb-5 mx-auto">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                  <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <div className="page-header">
                        <div className="contact-title">
                          <span>Contact Us</span>
                        </div>
                        <div className="contact-sub-title">
                          <p>Please submit your details and we will contact you soon.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mt-5">
                      <div className="page-header">
                        <div className="contact-detail-title">
                          <img src="icons/phone.svg" alt="phone" />
                          <span className="contact-details">+91 79858 99179</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <div className="page-header">
                        <div className="contact-detail-title">
                          <img src="icons/mail.svg" alt="mail" />
                          <span className="contact-details">00lovesakha@gmail.com</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mt-5">
                      <div className="page-header">
                        <div className="contact-detail-title">
                          <a href="https://www.facebook.com/lovershelplineofficial/">
                            <img src="icons/fb.png" alt="fb" />
                          </a>
                          <a href="https://www.instagram.com/sakha_shashank?r=nametag">
                            <img src="icons/insta.png" alt="twitter" className="icon-spacer" />
                          </a>
                          <a href="https://www.youtube.com/channel/UCkGuHlaIAyotWi2CeY8f44w">
                            <img src="icons/yt.png" alt="twitter" className="icon-spacer" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mt-5">
                  <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <TextInput
                        type="text"
                        className="contact-form-control"
                        name="fullName"
                        label="Name"
                        maxlength={20}
                        value={this.state.fullName}
                        onChange={(e) => this.contactUsHandler(e)}
                      />
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <TextInput
                        type="text"
                        className="contact-form-control"
                        name="email"
                        label="Email"
                        maxlength={40}
                        value={this.state.email}
                        onChange={(e) => this.contactUsHandler(e)}
                      />
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <TextInput
                        type="number"
                        className="contact-form-control"
                        name="mobileNumber"
                        label="Phone Number"
                        maxlength={10}
                        value={this.state.mobileNumber}
                        onChange={(e) => this.contactUsHandler(e)}
                      />
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <TextInput
                        type="text"
                        className="contact-form-control"
                        name="subject"
                        label="Subject"
                        maxlength={40}
                        value={this.state.subject}
                        onChange={(e) => this.contactUsHandler(e)}
                      />
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <div>
                        <label className="control-label">message</label>
                        <div className="textare-controls">
                          <textarea
                            rows="5"
                            className="form-textarea"
                            value={this.state.message}
                            name="message"
                            onChange={this.textAreaHandler}></textarea>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12 mt-5">
                      <div className="contact-form-vertical">
                        <div className="contact-form-group">
                          <div className="contact-controls">
                            <button className="button-control" onClick={this.ContactUsSubmit}>
                              Contact Us
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section style={{ background: '#009BD1' }}>
          <Footer />
        </section>
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
    contactUsActionCall: (data) => dispatch(actionCreator.ContactUsAction(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactUs);
