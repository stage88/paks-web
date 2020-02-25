import * as React from 'react';

interface Props {
  hideTitle?: boolean;
}

const Services: React.FC<Props> = ({ hideTitle }) => (
  <section className='our_service section_padding'>
    <div className='container'>
      {hideTitle != true && (
        <div className='row'>
          <div className='col-xl-5'>
            <div className='section_tittle'>
              <h2>our services</h2>
            </div>
          </div>
        </div>
      )}
      <div className='row'>
        <div className='col-sm-6 col-xl-3'>
          <div className='single_feature'>
            <div className='single_service'>
              <span className='flaticon-ui'></span>
              <h4>Major or minor refurbishments</h4>
              <p>We have built strong ongoing relationships with Aged Care & Child Care Facilities,
                Retail Centres and Government & Private Sector organisations.</p>
              {/* <a href="#" className="btn_3">
                read more
              </a> */}
            </div>
          </div>
        </div>
        <div className='col-sm-6 col-xl-3'>
          <div className='single_feature'>
            <div className='single_service'>
              <span className='flaticon-ui'></span>
              <h4>Maintenance, repairs and project management</h4>
              <p>
                Our company operates with an in-house team of qualified tradesmen, supported by
                numerous contractors who are committed to our clients and quality workmanship.
              </p>
              {/* <a href="#" className="btn_3">
                read more
              </a> */}
            </div>
          </div>
        </div>
        <div className='col-sm-6 col-xl-3'>
          <div className='single_feature'>
            <div className='single_service single_service_2'>
              <span className='flaticon-ui'></span>
              <h4>Government & Statutory Authorities</h4>
              <p>
                We have extensive involvement with various Government & Statutory Authorities ensuring a smooth completion of works
                undertaken.
              </p>
              {/* <a href="#" className="btn_3">
                read more
              </a> */}
            </div>
          </div>
        </div>
        <div className='col-sm-6 col-xl-3'>
          <div className='single_feature'>
            <div className='single_service single_service_2'>
              <span className='flaticon-ui'></span>
              <h4>Compliant & Reactive</h4>
              <p>
                PA & KS Contractors are compliant with all required WHS and offer a 24-hour 7 day reactive and emergency service.
                Our team hold up to date Police Checks, WWVP Cards (ACT & NSW) and White Cards.
              </p>
              {/* <a href="#" className="btn_3">
                read more
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Services;
