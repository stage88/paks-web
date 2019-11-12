import * as React from 'react';

const Counts = () => (
  <section className='member_counter padding_bottom'>
    <div className='container'>
      <div className='row'>
        <div className='col-lg-3 col-sm-6'>
          <div className='single_counter_icon'>
            <img src='img/icon/Icon_1.svg' alt='' />
          </div>
          <div className='single_member_counter'>
            <span className='counter'>60</span>
            <h4>
              {' '}
              <span>Satisfied</span> Client
            </h4>
          </div>
        </div>
        <div className='col-lg-3 col-sm-6'>
          <div className='single_counter_icon'>
            <img src='img/icon/Icon_2.svg' alt='' />
          </div>
          <div className='single_member_counter'>
            <span className='counter'>10</span>
            <h4>
              {' '}
              <span>Worldwide</span> Branches
            </h4>
          </div>
        </div>
        <div className='col-lg-3 col-sm-6'>
          <div className='single_counter_icon'>
            <img src='img/icon/Icon_3.svg' alt='' />
          </div>
          <div className='single_member_counter'>
            <span className='counter'>80</span>
            <h4>
              {' '}
              <span>Total</span> Projects
            </h4>
          </div>
        </div>
        <div className='col-lg-3 col-sm-6'>
          <div className='single_counter_icon'>
            <img src='img/icon/Icon_4.svg' alt='' />
          </div>
          <div className='single_member_counter'>
            <span className='counter'>24</span>
            <h4>
              {' '}
              <span>Work</span> Finished
            </h4>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Counts;
