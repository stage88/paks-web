import * as React from 'react'
// import { Link } from 'gatsby'

import Page from '../components/page'
import IndexLayout from '../layouts'
import Banner from '../components/banner'
import About from '../components/about'
import Services from '../components/services'
import Experience from '../components/experience'
// import Projects from '../components/projects'
// import Counts from '../components/counts'
// import Reviews from '../components/reviews'

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <Banner />
      <About />
      <Services />
      <Experience />
      {/* <Counts /> */}
      {/* <Reviews /> */}
      {/* <Projects /> */}
    </Page>
  </IndexLayout>
)

export default IndexPage
