import * as React from 'react';

const About = () => (
  <section className='about_part section_padding'>
    <div className='container'>
      <div className='row align-items-center justify-content-between'>
        <div className='col-md-6 col-lg-6'>
          <div className='about_part_img'>
            <img src='img/about_part_img.png' alt='' />
          </div>
        </div>
        <div className='col-md-6 col-lg-5'>
          <div className='about_part_text'>
            <h2>Relationships That Matter</h2>
            <p>
              PA & KS Contractors have built strong ongoing relationships with Aged & Child Care Facilities, Retail Centres and Government &
              Private Sector organisations.
            </p>
            <ul>
              <li>
                <span className='flaticon-drop'></span>
                <h3>We are a Certified Company</h3>
                <p>The team hold up to date Police Checks, WWVP Cards (ACT & NSW) and White Cards.</p>
              </li>
              <li>
                <span className='flaticon-ui'></span>
                <h3>WHS Compliant</h3>
                <p>
                  PA & KS Contractors are conversant / compliant with all required WHS Procedures and offer a 24-hour 7-day reactive and
                  emergency service.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
