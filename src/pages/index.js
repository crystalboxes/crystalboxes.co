import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import socialIcon from "../components/socialicon"

// const IndexPage = () => (
//   <Layout>
//     <SEO title="Home" />
//     <h1>Hi people</h1>
//     <p>Welcome to your new Gatsby site.</p>
//     <p>Now go build something great.</p>
//     <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
//       <Image />
//     </div>
//     <Link to="/page-2/">Go to page 2</Link> <br />
//     <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
//   </Layout>
// )

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Crystal Boxes</h1>
    <p>under construction</p>
    <div className="social-network-icons">
      {socialIcon("behance")}
      {socialIcon("instagram")}
      {socialIcon("twitter")}
      {socialIcon("email")}
    </div>
  </Layout>
)

export default IndexPage
