import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import socialIcon from "../components/socialicon"
import Fade from "react-reveal/Fade"


import { Canvas } from 'react-three-fiber'

import Boxes from '../components/3d/boxes'
import * as THREE from 'three'
import Effects from '../components/3d/effects'

import { disableBodyScroll } from 'body-scroll-lock'

disableBodyScroll(document)



class IndexPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      width: window.innerWidth,
      height: window.innerHeight,
    }

    window.addEventListener('resize', (e) => this.setState({
      width: e.target.innerWidth,
      height: e.target.innerHeight,
    }));

  }
  render() {
    return <div style={{ overflow: 'hidden', maxHeight: this.state.height }}>
      <Fade delay={200}>
        <Canvas className='uc-boxes'
          style={{ width: '50%', height: this.state.height, position:'absolute' }}
          gl={{ antialias: true, alpha: true }}
          camera={{ position: [0, 0, 15], fov: 33, near: 5, far: 20 }}
          onCreated={({ gl }) => gl.setClearColor(0x000000, 0)}
        >
          <ambientLight />
          <pointLight position={[150, 150, 150]} intensity={0.55} />
          <Boxes />
          <Effects />
        </Canvas>
      </Fade>
      <Layout>
        <SEO title="Home" />
        <div className="uc-flex-container" style={{width: '90%', height: this.state.height}}>
        <h1 className="uc-big-title">Crystal Boxes</h1>
        <Fade left>
          <div className="uc-social-network-icons">
            {socialIcon('email', 'mailto:crystalboxesgfx@gmail.com')}
            {socialIcon('instagram', 'https://instagram.com/crystalboxes')}
            {socialIcon('twitter', 'https://twitter.com/crystalboxes')}
            {socialIcon('behance', 'https://www.behance.net/crystalboxes')}
          </div>
        </Fade>
        <Fade left distance="80px">
          <div className="uc-under-construction">under construction</div>
        </Fade>
        </div>

      </Layout>
    </div>
  }
}

export default () => (<IndexPage />)
