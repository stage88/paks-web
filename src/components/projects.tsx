import * as React from 'react';

const Projects = () => (
  <section className='our_project section_padding' id='portfolio'>
    <div className='container'>
      <div className='row justify-content-between'>
        <div className='col-lg-5 col-sm-10'>
          <div className='section_tittle'>
            <h2>Our Projects</h2>
          </div>
        </div>
        <div className='col-lg-6 col-sm-10'>
          <div className='filters portfolio-filter project_menu_item'>
            <ul>
              <li className='active' data-filter='*'>
                All
              </li>
              <li data-filter='.buildings'>Buildings</li>
              <li data-filter='.rebuild'>Rebuild</li>
              <li data-filter='.architecture'>Architecture</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='filters-content'>
        <div className='row justify-content-between portfolio-grid'>
          <div className='col-lg-4 col-sm-6 all buildings'>
            <div className='single_our_project'>
              <div className='single_offer'>
                <img src='img/project_1.png' alt='offer_img_1' />
                <div className='hover_text'>
                  <p>Bank Protected</p>
                  <a href='#'>
                    <h2>Banking & Finance</h2>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-sm-6 all rebuild'>
            <div className='single_our_project'>
              <div className='single_offer'>
                <img src='img/project_2.png' alt='offer_img_1' />
                <div className='hover_text'>
                  <p>Bank Protected</p>
                  <a href='#'>
                    <h2>Banking & Finance</h2>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-sm-6 all architecture'>
            <div className='single_our_project'>
              <div className='single_offer'>
                <img src='img/project_3.png' alt='offer_img_1' />
                <div className='hover_text'>
                  <p>Bank Protected</p>
                  <a href='#'>
                    <h2>Banking & Finance</h2>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Projects;
