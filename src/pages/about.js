import React from "react"
import HeroSection from '../components/Reuseable/HeroSection'
import InfoBlock from '../components/Reuseable/InfoBlock'
import DualInfo from '../components/Reuseable/DualInfo'
import Team from '../components/AboutComponent/Team'
import {graphql} from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

//main content
const AboutPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection title="About LearCodeOnline" subtitle="" heroclass="about-background" img={data.img.childImageSharp.fluid}/>
    <DualInfo heading="A message from CEO" />
    <InfoBlock heading="About Vision"/>
    <Team />
  </Layout>
)

//creating graphql query and will export to herosection
export const query = graphql`
  {
    img : file(relativePath: {eq: "about.png"}) {
      childImageSharp {
        fluid{
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default AboutPage
