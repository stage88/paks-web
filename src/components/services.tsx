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
        <div className='col-sm-6 col-xl-4'>
          <div className='single_feature'>
            <div className='single_service'>
              <span className='flaticon-ui'></span>
              <h4>Major or minor refurbishments</h4>
              <p>We specialise in construction, commercial interiors and building refurbishment.</p>
              {/* <a href="#" className="btn_3">
                read more
              </a> */}
            </div>
          </div>
        </div>
        <div className='col-sm-6 col-xl-4'>
          <div className='single_feature'>
            <div className='single_service'>
              <span className='flaticon-ui'></span>
              <h4>Maintenance, repairs and project management</h4>
              <p>
                We have extensive experience in commercial and domestic building refurbishment and construction projects to the highest
                standard possible.
              </p>
              {/* <a href="#" className="btn_3">
                read more
              </a> */}
            </div>
          </div>
        </div>
        <div className='col-sm-6 col-xl-4'>
          <div className='single_feature'>
            <div className='single_service single_service_2'>
              <span className='flaticon-ui'></span>
              <h4>Government & Statutory Authorities</h4>
              <p>
                We have extensive involvement with various Government & Statutory Authorities ensuring a smooth completion of works
                undertaken
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
