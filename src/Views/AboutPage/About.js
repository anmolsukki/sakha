import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import '../../Assets/PortalTheme.css';

class About extends Component {
  scrollPage = (value) => {
    window.scrollTo({
      top: value,
      behavior: 'smooth'
    });
  };

  render() {
    return (
      <div className="fade-in">
        <section>
          <div className="row clear-margins">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 clear-padings">
              <div className="about-bg">
                <div className="about-main">
                  <span className="heading">“My Life is my message…!”</span>
                </div>
              </div>
              <Link to="#" onClick={() => this.scrollPage(300)} className="home-more">
                Learn More
              </Link>
            </div>
          </div>
        </section>
        <section>
          <div className="row clear-margins">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="row design-bg-right">
                <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-12 mt-5 mb-5 mx-auto">
                  <div className="about-page">
                    <p className="heading">About Sakha</p>
                    <p className="description">
                      SAKHA, (SHASHANK AANAND”) is divine, an awakened mystic, a prominent spiritual
                      leader and a visionary humanitarian.
                    </p>
                    <p className="description">
                      He is a name among millions who searched for spirituality, struggled, failed
                      and surged ahead to find success, happiness and contentment. Rowing through
                      ups and downs, it was time that taught him the true meaning of life and he
                      attained enlightenment and with that his true purpose.
                    </p>
                    <p className="description">
                      His mastery of the mechanisms of life, an outcome of his profound experience
                      of the Self, guides in exploring the subtler dimensions of life. Sakha, A
                      contemporary Guru, rooted as strongly in mundane and pragmatic matters as he
                      is in inner experience and wisdom.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="row clear-margins" style={{ background: '#009BD1' }}>
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mt-5 mx-auto">
              <div className="row">
                <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-12 mb-5 mx-auto">
                  <div className="about-journey">
                    <p className="heading">His Journey</p>
                    <p className="description">
                      Sakha acknowledged his thirst for oneself since his childhood. He understood
                      that all aspects and dimensions of life should be fulfilled, no matter how
                      many people he would have to encounter. In the Year 2000, he left his house
                      and spent life like a mystic (Fakeer) for a long time. Facing the endless
                      chaos of society, cutting like a sharp sword, in the search of oneself and in
                      every living condition, he finally came to the extreme highest point. When
                      existence showered its grace. He achieved Enlightenment
                    </p>
                    <p className="description">
                      “Today, this simple and complete mystic power (Sakha) is for all of us, among
                      us all.” Sakha, has not read any scriptures, nor has he ever resorted to
                      anyone else for guidance. Though in his life, Sakha did not only conduct but
                      also guided many camps for thousands of people. He kept on working tirelessly
                      for spiritual, mental, and physical well –being for all and showing the light
                      to who are struggling and are in need of guidance.
                    </p>
                    <p className="description">
                      <b>
                        “Today, this simple & complete mystic power (Sakha) is for all of us, among
                        us all.”
                      </b>
                    </p>
                    <p className="description">
                      Sakha, is not much educated, nor has he read any spiritual scriptures in his
                      lifetime, nor has he ever resorted to anyone to search for himself. Though in
                      his life, Sakha did not only conduct but also guided many camps for thousands
                      of people. He kept on working tirelessly for everyone’s spiritual, mental, and
                      physical well –being for all & <b>SHOWING THE LIGHT TO MANY</b> who are
                      struggling & need guidance. Without reading any scriptures his VAST & DEEP
                      VISION for every aspect of life as in – “ Religion, Society, Meditation ,
                      Tantra , Sex, Love, Politics, Psychology of Love , The secret of soul, Ego ,
                      Guilt , Psychology, Parapsychology” and many more makes him – “Spiritually
                      Genius”.
                    </p>
                    <p className="description">
                      Sakha is reaching out to people through Personal Interactions, Public
                      Initiatives, teachings, workshops, media and public relations. The
                      understanding & sharp logic of Sakha also challenges the thought of people as
                      they expand their thoughts & perceptions about life. Being a DIVINE MYSTIC,
                      Sakha is also an influential speaker.
                    </p>
                    <p className="description">
                      His vision for every aspect of life namely, Religion, Society, Meditation ,
                      Tantra , Sex, Love, Politics, Psychology of Love , The secret of soul, Ego ,
                      Guilt , Psychology, Parapsychology and many more truly make him –{' '}
                      <b>“Spiritually Genius”</b>
                    </p>
                    <p className="description">
                      Sakha is reaching out to people through personal interactions, public
                      initiatives, teachings, workshops and media. The understanding and sharp logic
                      of Sakha also challenges the thought of people as they expand their
                      perceptions of life.
                    </p>
                    <p className="description">
                      Being a DIVINE MYSTIC, Sakha is also an influential speaker. The procedure of
                      his teachings is special and unique in itself, as it is not related to any
                      particular ideology or belief. Rather, the powerful and authentic methods of
                      self-exploration are implemented.
                    </p>
                    <p className="description">
                      Sakha has mastery of treating problems like Depression, Anxiety, Stress,
                      Insomnia, Fear, and Neurological Disorder without any medicine. His mission is
                      to take forward his scientific techniques and deep Spiritual knowledge to
                      reach out to masses so that everyone can live healthy, happy, fearless and
                      blissful life.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="row clear-margins">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mt-5 mx-auto">
              <div className="row design-bg-left">
                <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col- mx-auto">
                  <div className="row">
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12 text-center">
                      <div className="img-hover-zoom img-hover-zoom--slowmo">
                        <img src="Images/about-card1.png" alt="" className="img-fluid" />
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12 text-center">
                      <div className="img-hover-zoom img-hover-zoom--slowmo">
                        <img src="Images/about-card2.png" alt="" className="img-fluid" />
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12 text-center">
                      <div className="img-hover-zoom img-hover-zoom--slowmo">
                        <img src="Images/about-card3.png" alt="" className="img-fluid" />
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12 text-center">
                      <div className="img-hover-zoom img-hover-zoom--slowmo">
                        <img src="Images/about-card4.png" alt="" className="img-fluid" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="row clear-margins">
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
        <section>
          <div className="row clear-margins">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="row">
                <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-12 mt-5 mb-5 mx-auto">
                  <div className="about-page">
                    <p className="heading">Teachings</p>
                    <p className="description">
                      The procedure of his teachings is special & unique in itself, as it is not
                      related to any particular ideology or belief. Rather through these procedures,
                      the powerful & authentic methods of self-exploration are introduced.
                    </p>
                    <p className="description">
                      Sakha has mastery on treating problems like Depression, Anxiety, Stress,
                      Insomnia, Fear, and Neurological Disorder without any medicine. His mission is
                      to take forward his scientific techniques and deep Spiritual knowledge to
                      reach out to masses so that everyone can live healthy, happy, fearless and
                      blissful life.
                    </p>
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

export default About;
