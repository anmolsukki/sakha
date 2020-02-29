import React, { Component } from 'react';
import YouTube from 'react-youtube';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import '../../Assets/PortalTheme.css';

class BeyondMeditation extends Component {
  onPlatReady = (event) => {
    event.target.playVideo();
  };
  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        autoplay: 1
      }
    };
    return (
      <div className="fade-in">
        <section>
          <div className="row clear-margins">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 clear-padings">
              <div className="meditation-bg">
                <div className="home-main">
                  <p className="meditation-desc">Beyond Meditation</p>
                </div>
              </div>
              <Link to="#" className="home-more">
                Learn More
              </Link>
            </div>
          </div>
        </section>
        <section>
          <div className="row clear-margins">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="row madition-gradiant">
                <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-12 mt-5 mb-5 mx-auto">
                  <div className="about-journey">
                    <p className="heading">Sakha’s Yog Nidra</p>
                    <p className="description">
                      Yog Nidra is “Beyond Meditation”. It is discovered by enlightened master Sakha
                      (Shashank Aanand) with his own experience and journey.  It is an environment
                      which is created by the master in his own presence where anyone can experience
                      the pleasure of deep meditation. His deep vision and understanding has
                      provided many solutions to the problems occurring in our daily life.
                    </p>
                    <p className="description">
                      Yog Nidra is a practice which will change your whole life within days which is
                      a living miracle in this modern time. Living stress free, healthy life is a
                      fairy tale story for today’s humans. Even after trying various forms of yoga
                      and meditation, true moments of bliss are hard to come by. Yog Nidra makes you
                      capable of living your life consciously to its fullest which leads you to the
                      ultimate goal of your life without any friction.
                    </p>
                    <p className="description">
                      Sakha’s Yog Nidra deals in psychological and health solutions without
                      medicines and simultaneously helps in day to day life problems, i.e.,
                      Relationship Problems, Anger, Depression, Anxiety, Stress, Insomnia , Fear and
                      Neurological disorders. It helps even in every level of human behavior i.e.
                      Physical, Emotional, Mental and Conscious Levels. Above all, it gives deep
                      relaxation and a state of meditative consciousness called “Samadhi”.
                    </p>
                    <p className="description">
                      <b>Note:-</b> Yog Nidra has to be practiced under the guidance of the
                      experienced Master or Living awakened Guru.
                    </p>
                    <p className="description">
                      <b>Caution:-</b> Beware of any random broadcast Yog Nidra, circulating on any
                      social media platforms or elsewhere. It may do more harm than good.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section style={{ background: '#F7F7F7' }}>
          <div className="row clear-margins">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mt-5 mb-5 text-center mx-auto">
              <YouTube
                className="youtube-card"
                videoId="oFSUA1I78Zo"
                opts={opts}
                onReady={this.onPlatReady}
              />
            </div>
          </div>
        </section>
        <section>
          <div className="row clear-margins design-bg-right">
            <div
              className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-11 mt-5 mb-5 mx-auto"
              style={{ background: '#009BD1', borderRadius: '5px' }}>
              <div className="text-center">
                <p className="quotes">
                  "अक्सर वक़्त बर्बाद करने वालो के पास ध्यान के लिए वक़्त नहीं होता"
                </p>
                <p className="quotes-writer">
                  <span>-Sakha</span>
                </p>
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

export default BeyondMeditation;
