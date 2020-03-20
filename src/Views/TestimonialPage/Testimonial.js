import React, { Component } from 'react';
import { YtData } from './YoutubeData';
import '../../Assets/PortalTheme.css';

class Testimonial extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultYt: []
    };
  }

  componentDidMount = () => {
    this.setState({
      resultYt: YtData
    });
  };

  render() {
    return (
      <div className="fade-in">
        <div className="row clear-margins">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 clear-padings">
            <div className="testimonial-banner">
              <div className="yuotube-main">
                <span className="heading">Testimonial</span>
              </div>
            </div>
          </div>
          <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-12 mx-auto">
            <div className="Videos-header">VIDEOS</div>
            <div className="row">
              {this.state.resultYt.map((link, i) => {
                return (
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 clear-padings" key={i}>
                    <iframe
                      className="video-style"
                      src={link.video}
                      title="Youtube"
                      frameBorder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen></iframe>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Testimonial;
