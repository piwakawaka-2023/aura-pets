import { useAuth0 } from '@auth0/auth0-react'
import { IfAuthenticated, IfNotAuthenticated } from '../utilities/Authenticated'
import { useNavigate } from 'react-router-dom'

function Navbar() {
  const { user, logout, loginWithRedirect } = useAuth0()
  const navigate = useNavigate()

  const handleSignOut = () => {
    logout()
  }

  const handleSignIn = () => {
    loginWithRedirect()
  }

  return (
    <>
      <IfAuthenticated>
        {user && <p>Signed in as: {user?.nickname}</p>}
        <button onClick={() => navigate(`/home/${user?.nickname}`)}>
          Home
        </button>
        <button onClick={() => navigate(`/profile/${user?.nickname}`)}>
          Profile
        </button>
        <button onClick={handleSignOut}>Sign out</button>
      </IfAuthenticated>
      <IfNotAuthenticated>
        <button onClick={handleSignIn}>Sign in</button>
      </IfNotAuthenticated>
    </>
  )
}

export default Navbar
