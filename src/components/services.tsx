import * as React from 'react'

interface Props {
  hideTitle?: boolean
}

const Services: React.FC<Props> = ({ hideTitle })  => (
  <section className="our_service section_padding">
    <div className="container">
      {hideTitle != true && <div className="row">
        <div className="col-xl-5">
          <div className="section_tittle">
            <h2>our services</h2>
          </div>
        </div>
      </div>}
      <div className="row">
        <div className="col-sm-6 col-xl-4">
          <div className="single_feature">
            <div className="single_service">
              <span className="flaticon-ui"></span>
              <h4>Better Future</h4>
              <p>Set have great you male grasses yielding yielding first their to called deep abundantly Set have great you male</p>
              <a href="#" className="btn_3">
                read more
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-xl-4">
          <div className="single_feature">
            <div className="single_service">
              <span className="flaticon-ui"></span>
              <h4>Qualified Trainers</h4>
              <p>Set have great you male grasses yielding yielding first their to called deep abundantly Set have great you male</p>
              <a href="#" className="btn_3">
                read more
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-xl-4">
          <div className="single_feature">
            <div className="single_service single_service_2">
              <span className="flaticon-ui"></span>
              <h4>Job Oppurtunity</h4>
              <p>Set have great you male grasses yielding yielding first their to called deep abundantly Set have great you male</p>
              <a href="#" className="btn_3">
                read more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Services
