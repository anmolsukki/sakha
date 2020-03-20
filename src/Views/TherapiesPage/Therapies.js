import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import YouTube from 'react-youtube';
import '../../Assets/PortalTheme.css';

class Therapies extends Component {
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

  onPlatReady = (event) => {
    event.target.setVolume(100);
  };

  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        autoplay: 0
      }
    };
    return (
      <div className="fade-in">
        <section>
          <div className="row clear-margins">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 clear-padings">
              <div className="therapies-bg">
                <div className="therapies-main">
                  <p className="welcome">Therapies</p>
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
                        DEPRESSiON
                      </li>
                      <li
                        className={`${this.state.onStep === 2 ? 'selected-categories' : ''}`}
                        onClick={() => this.goToStep(2)}>
                        STRESS
                      </li>
                      <li
                        className={`${this.state.onStep === 3 ? 'selected-categories' : ''}`}
                        onClick={() => this.goToStep(3)}>
                        ANXIETY
                      </li>
                      <li
                        className={`${this.state.onStep === 4 ? 'selected-categories' : ''}`}
                        onClick={() => this.goToStep(4)}>
                        INSOMNIA
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-12">
                  {this.state.onStep === 1 ? (
                    <div className="row">
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="about-page">
                          <p className="heading">DEPRESSION</p>
                          <p className="therepies-desc">
                            This is a mental disease where a person is in constant misery. A mental
                            health disorder characterized by persistently depressed mood or loss of
                            interest in activities, causing significant impairment in daily life.
                          </p>
                          <p className="therepies-desc">
                            This disease eventually makes the person’s life difficult where he can’t
                            live a normal life. Nowadays depression is a widespread disease.
                            According to the World Health Organization (WHO), 350 million people
                            worldwide suffer from depression. Due to this people are not able to
                            perform well in their professional as well as personal lives. Depression
                            is a mental state where a person feels unable to fulfill desires and
                            aspirations and is trapped in a hopeless inescapable situation. Usual
                            way of treating a depressed person by a psychologist is to provide him
                            medication which makes him more lethargic, and dull, but the problem
                            remains as it is. Nowadays depression even appears in school going
                            children because of parental and social pressure.
                          </p>
                        </div>
                        <div className="about-page mt-5">
                          <p className="therepies-heading">How does it occur ?</p>
                          <p className="therepies-desc">
                            The first step for controlling stress is to know the symptoms. But
                            recognizing stress symptoms may be harder than you think. Most of us are
                            so used to being stressed; we often don’t know we are stressed until we
                            are at the breaking point.
                          </p>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 frastration-mob">
                        <img src="Images/suppression.png" alt="" className="img-fluid" />
                        <p className="depression-occur clear-margins">
                          <span className="num">1</span>
                          <span className="title">SUPPRESSION</span>
                        </p>
                        <p className="depression-occur-description">
                          Is the first stage of Depression. When a person clamps his/her desires and
                          thoughts, it is suppression. 99% people are suppressed.
                        </p>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 frastration-mob">
                        <img src="Images/frustration.png" alt="" className="img-fluid" />
                        <p className="depression-occur">
                          <span className="num">2</span>
                          <span className="title">FRUSTRATION</span>
                        </p>
                        <p className="depression-occur-description">
                          If suppression goes unchecked, it leads to FRUSTRATION. Is the feeling of
                          being upset or annoyed as a result of being unable to change or achieve
                          something. 80% people are frustrated in their lives.
                        </p>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 frastration-mob">
                        <img src="Images/depression.png" alt="" className="img-fluid" />
                        <p className="depression-occur">
                          <span className="num">3</span>
                          <span className="title">DEPRESSION</span>
                        </p>
                        <p className="depression-occur-description">
                          Living long time in frustration affects every part of life. Ignorance of
                          this reaches to the last and major level i.e. DEPRESSION.
                        </p>
                      </div>
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="about-page mt-5">
                          <p className="therepies-heading">Symptoms and Thought Process</p>
                          <p className="therepies-desc">
                            Feeling lonely, sad, unwanted, unloved, abandoned, worthless, tired,
                            emotional, quiet, indifferent, purposeless, suicidal, sleepless, lack or
                            gain of appetite, hopeless and unfocused.
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : this.state.onStep === 2 ? (
                    <div className="row">
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="about-page">
                          <p className="heading">STRESS</p>
                          <p className="therepies-desc">
                            Stress is the body’s reaction to harmful situations — whether they’re
                            real or perceived. When you feel threatened, a chemical reaction occurs
                            in your body that allows you to act to prevent injury. It is the
                            pressure created by circumstances. Ones who aren’t able to handle the
                            pressure finds themselves in stress. During stress response, heart
                            rate increases, breathing quickens, muscles tighten and pressure rises.
                            Nowadays stress is a widespread problem which most people are
                            experiencing because of today’s demanding work load, relationships etc.
                            Financial Worries, Relationship problems or a work deadline all make our
                            body react as strongly as when facing a true life-or-death situation and
                            the more our emergency stress system is activated, the easier it becomes
                            to trigger and the harder it becomes to shut off. Stressful mind can
                            lead to many problems like depression, anxiety, digestive problems,
                            heart disease, Reproductive issues ,Sleep disorders, relationship issues
                            etc.
                          </p>
                        </div>
                        <div className="about-page mt-5">
                          <p className="therepies-heading">Symptoms</p>
                          <p className="therepies-desc">
                            The first step for controlling stress is to know the symptoms. But
                            recognizing stress symptoms may be harder than you think. Most of us are
                            so used to being stressed; we often don’t know we are stressed until we
                            are at the breaking point.
                          </p>
                        </div>
                        <div className="symptoms-point">
                          <ul>
                            <li>Becoming easily agitated, frustrated, and moody.</li>
                            <li>
                              Feeling overwhelmed, like you are losing control or need to take
                              control.
                            </li>
                            <li>Having difficulty relaxing and quieting your mind.</li>
                            <li>
                              Feeling bad about yourself (low self-esteem), lonely, worthless, and
                              depressed.
                            </li>
                            <li>Avoiding others.</li>
                            <li>Low energy.</li>
                            <li>Headaches</li>
                            <li>Upset stomach, including diarrhea, constipation, and nausea.</li>
                            <li>Aches, pains, and tense muscles.</li>
                            <li>Chest pain and rapid heartbeat.</li>
                            <li>Insomnia</li>
                            <li>Frequent colds and infections.</li>
                            <li>Loss of sexual desire and/or ability.</li>
                            <li>
                              Nervousness and shaking, ringing in the ear, cold or sweaty hands and
                              feet.
                            </li>
                            <li>Dry mouth and difficulty swallowing.</li>
                            <li>Clenched jaw and grinding teeth.</li>
                            <li>Changes in appetite - either not eating or eating too much.</li>
                            <li>Procrastinating and avoiding responsibilities.</li>
                            <li>Increased use of alcohol, drugs, or cigarettes.</li>
                            <li>
                              Exhibiting more nervous behaviors, such as nail biting, fidgeting, and
                              pacing.
                            </li>
                            <li>Gastrointestinal problems.</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  ) : this.state.onStep === 3 ? (
                    <div className="row">
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="about-page">
                          <p className="heading">ANXIETY</p>
                          <p className="therepies-desc">
                            Anxiety is a state of inner turmoil in which a person is unable to cope
                            with the upcoming negative events. A feeling of worry, nervousness or
                            unease about something with an uncertain outcome. Anxiety also
                            correlates with fear. It’s like two sides of same coin. A person who has
                            anxiety disorder will always be in constant fear of things that make him
                            withdraw from situations which will provoke anxiety or negative
                            feelings. This disorder eventually creates hell in a person’s life where
                            the person is always anticipating the worst and he/she will always be in
                            an irritated and restless state. It can create a boundary around a
                            person and he/she will not be able to have a fulfilling life.
                          </p>
                          <p className="therepies-desc">
                            Phobia is also a type of Anxiety. It is an irrational fear and avoidance
                            of an object or situation. Phobias relate to a specific cause. The fear
                            may be acknowledged as irrational or unnecessary, but the person is
                            still unable to control the anxiety. Triggers for a phobia may be
                            situations, animals, or even everyday objects.
                          </p>
                        </div>
                        <div className="about-page mt-5">
                          <p className="therepies-heading">Symptoms</p>
                        </div>
                        <div className="symptoms-point">
                          <ul>
                            <li>Frequent sweating</li>
                            <li>Dizziness</li>
                            <li>Trembling</li>
                            <li>Increased or irregular heartbeat.</li>
                            <li>Back pain.</li>
                            <li>Restlessness and fatigue.</li>
                            <li>Muscle tension.</li>
                            <li>Being easily startled.</li>
                            <li>
                              Recurring and ongoing feelings of worry, with or without stress.
                            </li>
                            <li>
                              Avoidance of certain situations that may cause worry, often affecting
                              quality of life.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  ) : this.state.onStep === 4 ? (
                    <div className="row">
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="about-page">
                          <p className="heading">INSOMNIA</p>
                          <p className="therepies-desc">
                            Insomnia is termed as difficulty in falling asleep or staying asleep.
                            One can live without anything but a sound and healthy sleep. Stress or
                            tension, relationship problems etc. affect our sleep. This is a modern
                            day disease. Insomnia mostly happens to people who have unhealthy
                            lifestyle and fluctuating sleep timings. Person who is suffering
                            Insomnia would feel low energy, mood swings, inability to concentrate
                            and it will eventually hamper performance in work life. The National
                            Institute of Health estimates that roughly 30 % of the general
                            population complains of sleep disruption, and approximately 10 % have
                            associated symptoms of daytime functional impairment consistent with the
                            diagnosis of insomnia.
                          </p>
                        </div>
                        <div className="about-page mt-5">
                          <p className="therepies-heading">Symptoms</p>
                        </div>
                        <div className="symptoms-point">
                          <ul>
                            <li>Unsatisfied Sleep.</li>
                            <li>Difficulty falling asleep.</li>
                            <li>Waking up a lot during the night.</li>
                            <li>Waking up too early and not being able to get back to sleep.</li>
                            <li>Waking up not feeling refreshed.</li>
                          </ul>
                        </div>
                        <div className="about-page mt-5">
                          <p className="therepies-heading">A Study states…</p>
                          <p className="therepies-desc">
                            In 2010 National Sleep Foundation (NSF) Poll, more than half of people
                            reported at least one symptom of insomnia (difficulty falling asleep,
                            waking up a lot during the night, waking up too early and not being able
                            to get back to sleep, or waking up not feeling refreshed) at least a few
                            nights per week within the past year.
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section style={{ background: '#F7F7F7' }}>
          <div className="row design-bg-right clear-margins">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mt-5 mb-5 text-center mx-auto">
              <YouTube
                className="youtube-card"
                videoId="M_w_IKDDL1U"
                opts={opts}
                onReady={this.onPlatReady}
              />
            </div>
          </div>
        </section>
        <section style={{ background: '#ffffff' }}>
          <div className="row clear-margins design-bg-right">
            <div
              className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-11 mt-5 mb-5 mx-auto"
              style={{ background: '#009BD1', borderRadius: '5px' }}>
              <div className="text-center">
                <p className="quotes">
                  “अक्सर वक़्त बर्बाद करने वालो के पास ध्यान के लिए वक़्त नहीं होता“
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

export default Therapies;
