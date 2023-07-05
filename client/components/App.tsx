import { MotionConfig } from 'framer-motion'
import { Outlet } from 'react-router-dom'
import AnimatedPage from './AnimatedPage'

function App() {
  return (
    <>
    <AnimatedPage>
      <Outlet />
    </AnimatedPage>

    
    </>
  )
}

export default App
