import * as React from 'react'
// import { Link } from 'gatsby'

import Page from '../components/page'
import IndexLayout from '../layouts'
import Services from '../components/services'
import SectionText from '../components/sectionText'
import BreadCrumb from '../components/breadCrumb'

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <BreadCrumb title='Services' />
      <SectionText title='Services'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
        in culpa qui officia deserunt mollit anim id est laborum.
      </SectionText>
      <Services hideTitle={true} />
    </Page>
  </IndexLayout>
)

export default IndexPage
