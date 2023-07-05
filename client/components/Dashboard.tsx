import { IfAuthenticated, IfNotAuthenticated } from '../utilities/Authenticated'
import { useParams, useNavigate } from 'react-router-dom'
import Pet from './Pet'
import Navbar from './Navbar'
import AnimatedPage from './AnimatedPage'
import { motion } from 'framer-motion'

function Dashboard() {
  const { username } = useParams()
  const navigate = useNavigate()

  return (
    <>
      <AnimatedPage>
      <motion.div
         initial={{ opacity:0 }}
         animate={{ opacity:1 }}
         exit={{ opacity: 0 }}>
      <Navbar />
      <IfAuthenticated>
        <Pet username={username} />
      </IfAuthenticated>
      <IfNotAuthenticated>
        <p>
          You don&apos;t have a pet yet! Sign up now by following this link:
        </p>
        <button onClick={() => navigate('/')}>
          Back to Sign-in/Sign-up page
        </button>
      </IfNotAuthenticated>
      </motion.div>
      </AnimatedPage>
      
      
    </>
  )
}

export default Dashboard
