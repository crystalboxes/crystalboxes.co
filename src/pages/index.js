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


class IndexPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <div style={{ overflow: 'hidden', maxHeight: '100%' }}>
      <Fade delay={200}>
        <Canvas className='uc-boxes'
          style={{ width: '50%', height: '100%', position: 'absolute' }}
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
        <div className="uc-flex-container">
          <div style={{height:'100px'}}></div>
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

      </Layout >
    </div >
  }
}

export default () => (<IndexPage />)
