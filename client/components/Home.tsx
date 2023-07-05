/* eslint-disable react/no-unknown-property */
import { Canvas } from '@react-three/fiber'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { IfAuthenticated, IfNotAuthenticated } from '../utilities/Authenticated'
import { UserProfile } from '../../models/types'
import { fetchProfile } from '../apis/users'
import { motion } from 'framer-motion'
import AnimatedPage from './AnimatedPage'

function Home() {
  const gltf = useLoader(GLTFLoader, '../imgs/game_boy_advance_sp.glb')
  const { user, logout, loginWithRedirect } = useAuth0()
  const [profileInfo, setProfileInfo] = useState({} as UserProfile)

  const handleSignIn = () => {
    return loginWithRedirect()
  }
  const handleSignOut = () => {
    logout()
  }

  useEffect(() => {
    async function getProfileData() {
      const profileData = await fetchProfile(user?.nickname)
      return profileData
    }
    getProfileData()
      .then((profileData) => {
        const profile = profileData[0]
        if (profile == undefined) {
          setProfileInfo({
            usersId: 0,
            username: '',
            petNickname: 'string',
            usersPetId: 0,
            petSprite: '',
            userBio: '',
          })
        } else {
          setProfileInfo(profile)
        }
      })
      .catch(() => 'oh no error!')
  }, [user])

  const navigate = useNavigate()

  return (
    <>
    <AnimatedPage>
    <motion.div
      initial={{ opacity:0 }}
      animate={{ opacity:1 }}
      exit={{ opacity: 0 }}>
    <div className="container">
        <div className="neon">Aura </div>
        <div className="flux">Pets </div>
        <IfAuthenticated>
          {user?.nickname === profileInfo.username &&
          profileInfo.petNickname !== '' ? (
            <button onClick={() => navigate(`/home/${user?.nickname}`)}>
              Go to Home
            </button>
          ) : (
            <button onClick={() => navigate('/quiz')}>Find your pet</button>
          )}
          <button onClick={handleSignOut}>Log-Out</button>
        </IfAuthenticated>
        <IfNotAuthenticated>
          <button onClick={handleSignIn}>Login-in/Sign Up</button>
        </IfNotAuthenticated>
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
    </motion.div>
    </AnimatedPage>
   
    </>
  )
}

export default Home
