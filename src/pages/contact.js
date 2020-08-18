import React from "react"
import HeroSection from '../components/Reuseable/HeroSection'
import InfoBlock from '../components/Reuseable/InfoBlock'
import {graphql} from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

//main content
const ContactPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection title="i write code" subtitle="Contact Us" heroclass="hero-background" img={data.img.childImageSharp.fluid}/>
    <InfoBlock heading="About Us"/>
  </Layout>
)

//creating graphql query hero section / cart / bundles
export const query = graphql`
  {
    img : file(relativePath: {eq: "contact.png"}) {
      childImageSharp {
        fluid{
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    courses:allContentfulCourses{
      edges{
        node {
          title
          price
          category
          description{
            description
          }
          image {
            fixed(width:200, height:120){
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`




export default ContactPage
