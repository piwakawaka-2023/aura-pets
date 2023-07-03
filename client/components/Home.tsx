/* eslint-disable react/no-unknown-property */
// import { Link } from 'react-router-dom'
// import { User, useAuth0 } from '@auth0/auth0-react'

// function Home() {

//   const { user, logout, loginWithRedirect } = useAuth0()

//   const handleSignIn = () => {
//     return loginWithRedirect()
//   }

//     return (
//       <>
//      <div className="centered-container">
//       <div className="home-div">
//        <h1 className="welcome-message">Welcome to Aura Pets</h1>
//        <h2 className="home-message">Click the button below to find out your Aura Pet</h2>
//        <button className="quiz-btn-centered">
//          <Link to="/Quiz">
//            <button onClick={handleSignIn}>Sign In</button>
//          </Link>
//        </button>
//       </div>
//      </div>
//       </>
//     )
//   }
  
//   export default Home

import { Link } from 'react-router-dom' 
import { User, useAuth0 } from '@auth0/auth0-react'
import { Canvas } from '@react-three/fiber'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

 function Home() {
  const gltf = useLoader(GLTFLoader, '../imgs/game_boy_advance_sp.glb')

  const { user, logout, loginWithRedirect } = useAuth0()

  return (
    <>
      <div className="container">
        <div className="neon">Aura </div>
        <div className="flux">Pets </div>

        <button>Find your pet</button>
      </div>

      <div className="three-d-parent">
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
          }}
        >
          <Canvas camera={{ position: [0, 0, 2], fov: 45 }} shadows>
            <directionalLight position={[3.3, 2.0, 4.4]} castShadow={true} />
            <pointLight position={[0, 2, 0]} intensity={1} color="#FF1493" />
            <primitive
              object={gltf.scene}
              position={[0, -0.45, 0]}
              rotation={[0, Math.PI * 1.72, 0]}
              children-0-castShadow={true}
              scale={[1.8, 1.8, 1.8]}
            />
          </Canvas>
        </div>
      </div>
    </>
  )
}

export default Home