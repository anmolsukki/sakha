import React, { Component } from 'react';
import '../../Assets/PortalTheme.css';

class HomePage extends Component {
  render() {
    return (
      <div className="fade-in">
        <section>
          <div className="row clear-margins">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 clear-padings">
              <div className="home-bg">
                <div className="row clear-margins">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 clear-padings">
                    <div className="home-btn-group text-center">
                      <img src="Images/logo.png" alt="" />
                    </div>
                  </div>
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 social-section">
                    <ul className="home-social-icon">
                      <li>
                        <img src="icons/followus.png" alt="fb" className="icon-spacer" />
                      </li>
                      <li>
                        <img src="icons/line.png" alt="fb" className="icon-spacer" />
                      </li>
                      <li>
                        <a
                          href="https://www.facebook.com/lovershelplineofficial/"
                          rel="noopener noreferrer"
                          target="_blank">
                          <img src="icons/fb.png" alt="fb" className="icon-spacer" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.youtube.com/channel/UCkGuHlaIAyotWi2CeY8f44w"
                          rel="noopener noreferrer"
                          target="_blank">
                          <img src="icons/yt.png" alt="twitter" className="icon-spacer" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.instagram.com/sakha_shashank?r=nametag"
                          rel="noopener noreferrer"
                          target="_blank">
                          <img src="icons/insta.png" alt="twitter" className="icon-spacer" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="home-main">
                  <p className="welcome">Welcome </p>
                  <span className="heading">“My Life is my message…!”</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default HomePage;
