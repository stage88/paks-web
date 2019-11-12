import * as React from 'react';

interface Props {
  title: string;
}

const BreadCrumb: React.FC<Props> = ({ title }) => (
  <section className='breadcrumb breadcrumb_bg align-items-center'>
    <div className='container'>
      <div className='row align-items-center justify-content-between'>
        <div className='col-sm-6'>
          <div className='breadcrumb_tittle text-left'>
            <h2>{title}</h2>
          </div>
        </div>
        <div className='col-sm-6'>
          <div className='breadcrumb_content text-right'>
            <p>
              Home<span>/</span>
              {title}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default BreadCrumb;
