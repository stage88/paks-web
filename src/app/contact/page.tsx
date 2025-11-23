'use client';
import * as React from 'react';

import BreadCrumb from '@/components/breadCrumb';
import Page from '@/components/page';

const mapUrl =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3255.263441238843!2d149.17542021524898!3d-35.32427908027913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b164c348a768bed%3A0xa50677f4168ae5fa!2s1%2F75%20Wollongong%20St%2C%20Fyshwick%20ACT%202609!5e0!3m2!1sen!2sau!4v1573129540737!5m2!1sen!2sau';

class ContactUs extends React.Component<Record<string, never>> {
  render() {
    return (
      <Page>
        <BreadCrumb title='Contact' />
        <section className='contact-section section_padding'>
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                <h3 className='text-heading'>Get in Touch</h3>
              </div>
              <div className='col-lg-4'>
                <div className='media contact-info'>
                  <span className='contact-info__icon'>
                    <i className='ti-home'></i>
                  </span>
                  <div className='media-body'>
                    <h3>Fyshwick, ACT</h3>
                    <p>Unit 1 75 Wollongong St Fyshwick ACT 2609</p>
                  </div>
                </div>
                <div className='media contact-info'>
                  <span className='contact-info__icon'>
                    <i className='ti-tablet'></i>
                  </span>
                  <div className='media-body'>
                    <h3>Paul 0411 777 877</h3>
                    <p>Mon to Fri 9am to 5pm</p>
                  </div>
                </div>
                <div className='media contact-info'>
                  <span className='contact-info__icon'>
                    <i className='ti-email'></i>
                  </span>
                  <div className='media-body'>
                    <h3>
                      <a href='mailto:office@pakscontractors.com.au'>
                        office@pakscontractors.com.au
                      </a>
                    </h3>
                    <p>Send us your query anytime</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='d-none d-sm-block mb-5 pb-4'>
              <iframe
                src={mapUrl}
                width='100%'
                height='450'
                style={{ border: 0 }}
                aria-label='PA & KS Contractors map'
              />
            </div>
          </div>
        </section>
      </Page>
    );
  }
}

export default ContactUs;
