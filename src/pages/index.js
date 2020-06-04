import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import socialIcon from "../components/socialicon"
import Fade from "react-reveal/Fade"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 class="uc-big-title">Crystal Boxes</h1>
    <Fade left>
      <div className="uc-social-network-icons">
        {socialIcon('email', 'mailto:crystalboxesgfx@gmail.com')}
        {socialIcon('behance', 'https://www.behance.net/crystalboxes')}
        {socialIcon('instagram', 'https://instagram.com/crystalboxes')}
        {socialIcon('twitter', 'https://twitter.com/crystalboxes')}
      </div>
    </Fade>
    <p class="uc-under-construction">under construction</p>
  </Layout>
)

export default IndexPage
