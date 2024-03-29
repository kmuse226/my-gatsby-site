// Step 1: Import React
import { Link } from 'gatsby'
import * as React from 'react'
import Layout from "../components/layout"

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </Layout>
  )
}

export const Head = () => (
    //. Adding such metadata helps search engines like Google to better understand your site. 
    <>
    <title>About Me!</title>
    <meta name="description" content="Your description" />
  </>
)

// Step 3: Export your component
export default AboutPage