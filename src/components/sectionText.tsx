import * as React from 'react';

interface Props {
  title: string;
  children: React.ReactNode;
}

const SectionText: React.FC<Props> = ({ title, children }) => (
  <section className='sample-text-area'>
    <div className='container box_1170'>
      <h3 className='text-heading'>{title}</h3>
      <p className='sample-text'>{children}</p>
    </div>
  </section>
);

export default SectionText;
