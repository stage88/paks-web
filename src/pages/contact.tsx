import * as React from 'react'

import Page from '../components/page'
import IndexLayout from '../layouts'
import BreadCrumb from '../components/breadCrumb'

const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3255.2643632719164!2d149.16947591550473!3d-35.324256180278994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b164c4a17dc00c3%3A0x54fe8f9df1f66638!2s1%20Gladstone%20St%2C%20Fyshwick%20ACT%202609!5e0!3m2!1sen!2sau!4v1573034992669!5m2!1sen!2sau`

const ContactUs = () => {
  return (
    <IndexLayout>
      <Page>
        <BreadCrumb title="Contact" />
        <section className="contact-section section_padding">
          <div className="container">
            <div className="d-none d-sm-block mb-5 pb-4">
              <iframe src={mapUrl} width="100%" height="450" style={{ border: 0 }}></iframe>
            </div>
            <div className="row">
              <div className="col-12">
                <h2 className="contact-title">Get in Touch</h2>
              </div>
              <div className="col-lg-8">
                <form className="form-contact contact_form" id="contactForm">
                  <div className="row">
                    <div className="col-12">
                      <div className="form-group">
                        <textarea
                          className="form-control w-100"
                          name="message"
                          id="message"
                          cols={30}
                          rows={9}
                          placeholder="Enter Message"
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <input className="form-control" name="name" id="name" type="text" placeholder="Enter your name" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <input className="form-control" name="email" id="email" type="email" placeholder="Enter email address" />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <input className="form-control" name="subject" id="subject" type="text" placeholder="Enter Subject" />
                      </div>
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <button type="button" className="button button-contactForm btn_1">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
              <div className="col-lg-4">
                <div className="media contact-info">
                  <span className="contact-info__icon">
                    <i className="ti-home"></i>
                  </span>
                  <div className="media-body">
                    <h3>Buttonwood, California.</h3>
                    <p>Rosemead, CA 91770</p>
                  </div>
                </div>
                <div className="media contact-info">
                  <span className="contact-info__icon">
                    <i className="ti-tablet"></i>
                  </span>
                  <div className="media-body">
                    <h3>00 (440) 9865 562</h3>
                    <p>Mon to Fri 9am to 6pm</p>
                  </div>
                </div>
                <div className="media contact-info">
                  <span className="contact-info__icon">
                    <i className="ti-email"></i>
                  </span>
                  <div className="media-body">
                    <h3>support@colorlib.com</h3>
                    <p>Send us your query anytime!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Page>
    </IndexLayout>
  )
}

export default ContactUs
