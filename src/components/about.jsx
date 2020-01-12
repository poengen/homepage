import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (
      <div>
        <section
          className="colorlib-about"
          data-section="about"
        >
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-12">
                <div
                  className="row row-bottom-padded-sm animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="col-md-12">
                    <div className="about-desc">
                      <span className="heading-meta">
                        About Me
                      </span>
                      <h2 className="colorlib-heading">
                        Who Am I?
                      </h2>
                      <p>
                        I am a Software Developer and Senior
                        Consultant at Netlight.
                      </p>
                      <p>
                        I have created this page to share my
                        learnings in software development.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="colorlib-about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">
                  What I do?
                </span>
                <h2 className="colorlib-heading">
                  Here are some of my expertise
                </h2>
              </div>
            </div>
            <div className="row row-pt-md">
              <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                  <span className="icon">
                    <i className="icon-bulb" />
                  </span>
                  <div className="desc">
                    <h3>Web Development </h3>
                    <p>
                      I have experience creating websites
                      using JavaScript, React, HTML, CSS,
                      and designwork using Figma
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                  <span className="icon">
                    <i className="icon-phone3" />
                  </span>
                  <div className="desc">
                    <h3>Test Development</h3>
                    <p>
                      Bulding automated tests using Node.js
                      frameworks Protractor, Jasmine,
                      Puppeteer, CodeceptJS
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                  <span className="icon">
                    <i className="icon-data" />
                  </span>
                  <div className="desc">
                    <h3>Project Management</h3>
                    <p>
                      As a consultant I have experience with
                      Agile methods and using tools such as
                      Jira and Confluence
                    </p>
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
