import * as React from 'react'

import Page from '../components/page'
import IndexLayout from '../layouts'
import BreadCrumb from '../components/breadCrumb'
import SectionText from '../components/sectionText'

const About = () => (
  <IndexLayout>
    <Page>
      <BreadCrumb title="About" />
      <SectionText title="About">
        <p>
          PA & KS Contractors is a family owned Company managed by Paul & Kirsty Saunderson specialising in property related services. These
          include minor/major refurbishments, maintenance, repairs and project management services for commercial and domestic buildings
          throughout Canberra and surrounding areas.
        </p>
        <br />
        <p>
          Our company operates with an in house team of qualified tradesmen, supported by numerous contractors who are committed to our
          clients and quality workmanship. We have extensive involvement with various Government & Statutory Authorities ensuring a smooth
          completion of works undertaken. Working alongside with clients, PA & KS Contractors act as a one-stop shop delivering safe
          compliant and cost effective services.
        </p>
        <br />
        <p>
          PA & KS Contractors have built strong ongoing relationships with Aged & Child Care Facilities, Retail Centres and Government &
          Private Sector organisations.
        </p>
        <br />
        <p>
          PA & KS Contractors are conversant / compliant with all required WHS Procedures and offer a 24-hour 7-day reactive and emergency
          service.
        </p>
        <br />
        <p>The team hold up to date Police Checks, WWVP Cards (ACT & NSW) and White Cards.</p>
      </SectionText>

      <div className="whole-wrap" style={{paddingBottom: '3em'}}>
        <div className="container box_1170">
          <div className="row">
            <div className="col-md-12">
              <img src="/paks-images/PAKS-Building.png" alt="PAKS Building" title="PAKS Building" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </Page>
  </IndexLayout>
)

export default About
