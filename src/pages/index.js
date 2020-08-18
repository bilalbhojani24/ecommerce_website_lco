import React from "react"
import HeroSection from '../components/Reuseable/HeroSection'
import InfoBlock from '../components/Reuseable/InfoBlock'
import DualInfo from '../components/Reuseable/DualInfo'
import CourseCart from '../components/Cart/CourseCart'
import {graphql} from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

//main content
const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection title="i write code" subtitle="learncodeonline.com" heroclass="hero-background" img={data.img.childImageSharp.fluid}/>
    <InfoBlock heading="About Us"/>
    <CourseCart courses={data.courses} />
    <DualInfo heading="Our Team" />
  </Layout>
)

//creating graphql query hero section / cart / bundles
export const query = graphql`
  {
    img : file(relativePath: {eq: "heromain.png"}) {
      childImageSharp {
        fluid{
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    courses:allContentfulCourses{
      edges{
        node {
          id
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




export default IndexPage
