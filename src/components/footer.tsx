import * as React from 'react';

const Footer = () => (
  <footer className='footer-area'>
    <div className='container'>
      <div className='row justify-content-center'>
        {/* <div className='col-sm-6 col-md-4 col-xl-3'>
          <div className='single-footer-widget footer_1'>
            <a href='/'>
              {' '}
              <img src='paks-images/PAKS-Logo.png' alt='' />{' '}
            </a>
            <p>
              PA & KS Contractors is a family owned Company managed by Paul & Kirsty Saunderson specialising in property related services.
              These include minor/major refurbishments, maintenance, repairs and project management services for commercial and domestic
              buildings throughout Canberra and surrounding areas.
            </p>
          </div>
        </div>
        <div className='col-xl-3 col-sm-6 col-md-4'>
          <div className='single-footer-widget footer_2'>
            <h4>Services</h4>
            <div className='contact_info'>
              <ul>
                <li>Major and minor refurbishments</li>
                <li>Building maintenance and repairs</li>
                <li>Commercial and domestic buildings</li>
                <li>Construction project management</li>
                <li>Property related services</li>
              </ul>
            </div>
          </div>
        </div> */}
        {/* <div className="col-xl-3 col-sm-6 col-md-4">
          <div className="single-footer-widget footer_2">
            <h4>Our Gallery</h4>
            <div className="footer_img">
              <a href="#">
                <img src="img/footer_img/footer_1.png" alt="" />
              </a>
              <a href="#">
                <img src="img/footer_img/footer_2.png" alt="" />
              </a>
              <a href="#">
                <img src="img/footer_img/footer_3.png" alt="" />
              </a>
              <a href="#">
                <img src="img/footer_img/footer_4.png" alt="" />
              </a>
              <a href="#">
                <img src="img/footer_img/footer_5.png" alt="" />
              </a>
              <a href="#">
                <img src="img/footer_img/footer_6.png" alt="" />
              </a>
              <a href="#">
                <img src="img/footer_img/footer_7.png" alt="" />
              </a>
              <a href="#">
                <img src="img/footer_img/footer_8.png" alt="" />
              </a>
            </div>
          </div>
        </div> */}
        <div className='col-xl-12 col-sm-12 col-md-12'>
          <div className='single-footer-widget footer_2 text-center'>
            <h4>Contact info</h4>
            <div className='contact_info'>
              {/* <p>4361 Morningview Lane Artland , Street Latimer, IA 50452 / 23654</p> */}
              <p>
                <span>Address:</span>{' '}
                <a href='https://goo.gl/maps/HuuQMptcZezrV1477' target='_blank' rel='noreferrer noopener'>
                  Unit 1 75 Wollongong St Fyshwick ACT 2609
                </a>
              </p>
              <p>
                <span>Phone:</span> Paul 0411 777 877
              </p>
              <p>
                <span>Email:</span> <a href='mailto:office@pakscontractors.com.au'>office@pakscontractors.com.au</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-lg-12'>
          <div className='copyright_part_text text-center'>
            <div className='row'>
              <div className='col-lg-12'>
                <p className='footer-text m-0'>
                  Copyright &copy; {new Date().getFullYear()} All rights reserved <br />
                  This template is made with <i className='ti-heart' aria-hidden='true'></i> by{' '}
                  <a href='https://colorlib.com' target='_blank' rel='noreferrer noopener'>
                    Colorlib
                  </a>{' '}
                  | Converted to GatsbyJS by{' '}
                  <a href='https://github.com/stage88/paks-web' target='_blank' rel='noreferrer noopener'>
                    Sam Ilic
                  </a>
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
