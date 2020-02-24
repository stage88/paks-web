import * as React from 'react';
const style = {}; //{padding: '1rem', background: 'rgba(255, 255, 255, 0.6)', border: '1px solid #fff', borderRadius: 2, color: '#111'};

// PA & KS Contractors is a family owned Company managed by Paul & Kirsty Saunderson specialising in property related services.
// These include minor/major refurbishments, maintenance, repairs and project management services for commercial and domestic
// buildings throughout Canberra and surrounding areas.
// <br /><br />

const Banner = () => (
  <section className='banner_part'>
    <div className='overlay'></div>
    <div className='container'>
      <div className='row align-items-center'>
        <div className='col-lg-6 col-xl-6'>
          <div className='banner_text'>
            <div className='banner_text_iner'>
              <h1>
                Committed to <span>Superior</span> Quality and Results
              </h1>
              <p style={style}>
                Building repairs and maintenance, both internal and external.
                <br />
                Property minor and major refurbishments for domestic and commercial projects.
                <br />
                Full property service management.
                <br />
                Property project management.
              </p>
              {/* <p>
                  Our company operates with an in house team of qualified tradesmen, supported by numerous contractors who are committed to
                  our clients and quality workmanship. We have extensive involvement with various Government & Statutory Authorities ensuring
                  a smooth completion of works undertaken. Working alongside with clients, PA & KS Contractors act as a one-stop shop
                  delivering safe compliant and cost effective services.
                </p> */}
              {/* <a href="#" className="btn_1">
                  View project{' '}
                </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Banner;
