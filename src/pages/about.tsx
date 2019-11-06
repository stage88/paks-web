import * as React from 'react'

import Page from '../components/page'
import IndexLayout from '../layouts'
import BreadCrumb from '../components/breadCrumb'
import SectionText from '../components/sectionText'

const About = () => (
  <IndexLayout>
    <Page>
      <BreadCrumb title='About' />
      <SectionText title='About'>
        Every avid independent filmmaker has <b>Bold</b> about making that <i>Italic</i> interest documentary, or short film to show off
        their creative prowess. Many have great ideas and want to "wow" the<sup>Superscript</sup> scene, or video renters with their big
        project. But once you have the<sub>Subscript</sub> "in the can" (no easy feat), how do you move from a <del>Strike</del> through of
        master DVDs with the <u>"Underline"</u> marked hand-written title inside a secondhand CD case, to a pile of cardboard boxes full of
        shiny new, retail-ready DVDs, with UPC barcodes and polywrap sitting on your doorstep? You need to create eye-popping artwork and
        have your project replicated. Using a reputable full service DVD Replication company like PacificDisc, Inc. to partner with is
        certainly a helpful option to ensure a professional end result, but to help with your DVD replication project, here are 4 easy steps
        to follow for good DVD replication results:
      </SectionText>
    </Page>
  </IndexLayout>
)

export default About
