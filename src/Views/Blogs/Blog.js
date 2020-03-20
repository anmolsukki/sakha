import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../Assets/PortalTheme.css';

class Blog extends Component {
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
              <div className="blogs-bg">
                <div className="home-main">
                  <p className="meditation-desc">Blogs</p>
                </div>
              </div>
              <Link to="#" onClick={() => this.scrollPage(500)} className="home-more">
                Learn More
              </Link>
            </div>
          </div>
        </section>
        <section style={{ background: '#ffffff' }}>
          <div className="row clear-margins">
            <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-12 mt-5 mx-auto">
              <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 mb-3 text-center">
                  <div className="hvrbox">
                    <img src="Images/blog1.png" alt="" className="img-fluid blog-img" />
                    <div className="hvrbox-layer_top hvrbox-layer_slideup">
                      <div className="hvrbox-text">
                        मेरा धर्म सारे रंगो का स्वीकार है मैं उनके लिए हूँ जो जीना जानते है और
                        शिकायतों से नहीं भरे मैं शाकाहारी के लिए हूँ लेकिन मासाहार से मेरा कोई विरोध
                        नहीं मैं शराब न पीने वालो का स्वागत करूँगा लेकिन मैं शराब पीने वालो का अपमान
                        नहीं कर सकता मैं ब्रह्मचारी को प्रेम करूँगा लेकिन सेक्स में भी आनंद उठाने
                        वालो को भी मेरे प्रणाम
                      </div>
                      <div className="view-more">
                        <a href="http://00lovedharma.blogspot.com/2020/02/blog-post_25.html">
                          VIEW MORE
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 mb-3 text-center">
                  <div className="hvrbox">
                    <img src="Images/blog2.png" alt="" className="img-fluid blog-img" />
                    <div className="hvrbox-layer_top hvrbox-layer_slideup">
                      <div className="hvrbox-text">
                        ये बात पुरानी हुई कि इंसान की तीन ज़रूरतें है रोटी कपड़ा और मकान आज के इंसान
                        की ज़रूरतें बहुत आगे निकल गई है रोटी के भंडार लगे है लेकिन लोग फिर भी भूंख़े
                        मरते है ... क्यूँकि जिन लोगों को इसकी ज़िम्मेवारी दी गई ... उनके ह्रदय
                        मानवता की बातो से रिक्त है
                      </div>
                      <div className="view-more">
                        <a href="http://00lovedharma.blogspot.com/2020/02/blog-post_21.html">
                          VIEW MORE
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 mb-3 text-center">
                  <div className="hvrbox">
                    <img src="Images/blog3.png" alt="" className="img-fluid blog-img" />
                    <div className="hvrbox-layer_top hvrbox-layer_slideup">
                      <div className="hvrbox-text">
                        ~~कागज की नाव~~ज़िंदगी की इस दौड़ मे कितना कुछ पाया कुछ कागज के टुकड़े .....
                        जिन्हे लक्ष्मी कहते हैं और खो दी .... तो बस ..... वो कागज की नावकितनी दूर
                        दूर तक घूम कर आए हैं लेकिन उस सुकून को .... आज भी पा न सके जो हमे दे देती थी
                        .... वो कागज की नावकितने सपनों को
                      </div>
                      <div className="view-more">
                        <a href="http://00lovedharma.blogspot.com/2020/02/blog-post_19.html">
                          VIEW MORE
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 mb-3 text-center">
                  <div className="hvrbox">
                    <img src="Images/blog4.png" alt="" className="img-fluid blog-img" />
                    <div className="hvrbox-layer_top hvrbox-layer_slideup">
                      <div className="hvrbox-text">
                        मैंने हर दौर में हर नस्ल के क़ातिल देखे है कुछ बेगाने कुछ अपने और कुछ जो
                        कहते थे अपने।
                      </div>
                      <div className="view-more">
                        <a href="http://00lovedharma.blogspot.com/2020/02/blog-post.html">
                          VIEW MORE
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 mb-3 text-center">
                  <div className="hvrbox">
                    <img src="Images/blog5.png" alt="" className="img-fluid blog-img" />
                    <div className="hvrbox-layer_top hvrbox-layer_slideup">
                      <div className="hvrbox-text">
                        मानसिक देशभक्ति = देशभक्ति से विरक्ति देशभक्ति अगर यूँ ही चलती रही देखिये एक
                        दिन ये खो जायगी
                      </div>
                      <div className="view-more">
                        <a href="http://00lovedharma.blogspot.com/2017/03/blog-post.html">
                          VIEW MORE
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Blog;
