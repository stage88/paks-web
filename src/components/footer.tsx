import * as React from 'react'

const Footer = () => (
  <footer className="footer-area">
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-sm-6 col-md-4 col-xl-3">
          <div className="single-footer-widget footer_1">
            <a href="index.html">
              {' '}
              <img src="img/footer_logo.png" alt="" />{' '}
            </a>
            <p>
              So seeds seed green that winged cattle in Gahesd thing made fly you're no divided deep move lan Gathering thing us land years
              living on floor me the cavaty do buty fresh
            </p>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 col-md-4">
          <div className="single-footer-widget footer_2">
            <h4>Best Services</h4>
            <div className="contact_info">
              <ul>
                <li>
                  <a href="#">General Contracting</a>
                </li>
                <li>
                  <a href="#">Mechanical Engineering</a>
                </li>
                <li>
                  <a href="#">Civil Engineering</a>
                </li>
                <li>
                  <a href="#">Bridge Construction</a>
                </li>
                <li>
                  <a href="#">Electrical Engineering</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 col-md-4">
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
        </div>
        <div className="col-xl-3 col-sm-6 col-md-4">
          <div className="single-footer-widget footer_2">
            <h4>Contact info</h4>
            <div className="contact_info">
              <p>4361 Morningview Lane Artland , Street Latimer, IA 50452 / 23654</p>
              <p>
                <span> Address :</span> Hath of it fly signs bear be one blessed after{' '}
              </p>
              <p>
                <span> Phone :</span> +2 36 265 (8060)
              </p>
              <p>
                <span> Email : </span>info@colorlib.com{' '}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12">
          <div className="copyright_part_text text-center">
            <div className="row">
              <div className="col-lg-12">
                <p className="footer-text m-0">
                  Copyright &copy; {new Date().getFullYear()} All rights reserved <br/>
                  This template is made with{' '}
                  <i className="ti-heart" aria-hidden="true"></i> by{' '}
                  <a href="https://colorlib.com" target="_blank">
                    Colorlib
                  </a> |
                  Converted to GatsbyJS by <a href="https://github.com/stage88/paks-web" target="_blank">
                    Sam Ilic
                  </a><br/>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
