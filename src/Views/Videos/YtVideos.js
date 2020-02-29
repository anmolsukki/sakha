import React, { Component } from 'react';
import axios from 'axios';
import '../../Assets/PortalTheme.css';

const APIKEY = 'AIzaSyBxujbq_EZ3pWG2pJDpeF3dbFSx7ew-xoc';
const ChannelID = 'UCkGuHlaIAyotWi2CeY8f44w';
const result = 50;
var finalURL = `https://www.googleapis.com/youtube/v3/search?key=${APIKEY}&channelId=${ChannelID}&part=snippet,id&order=date&maxResults=${result}`;

class YtVideos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultYt: []
    };
  }

  VideoListing = () => {
    axios
      .get(finalURL)
      .then((response) => {
        const resultYt = response.data.items.map(
          (obj) => 'https://www.youtube.com/embed/' + obj.id.videoId
        );
        this.setState({
          resultYt
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  componentDidMount = () => {
    this.VideoListing();
  };

  render() {
    return (
      <div className="fade-in">
        <div className="row clear-margins">
          <div className="Videos-header">VIDEOS</div>
          {this.state.resultYt.map((link, i) => {
            return (
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 clear-padings" key={i}>
                <iframe
                  className="video-style"
                  src={link}
                  title="reactjs"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen></iframe>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default YtVideos;
