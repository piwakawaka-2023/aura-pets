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
      <div className="nav-container">
        <IfAuthenticated>
          <section className="navbar">
            {user && (
              <p className="user-status">Signed in as: {user?.nickname}</p>
            )}
            <button
              className="nav-button"
              onClick={() => navigate(`/home/${user?.nickname}`)}
            >
              Home
            </button>
            <button
              className="nav-button"
              onClick={() => navigate(`/profile/${user?.nickname}`)}
            >
              Profile
            </button>
            <button className="nav-button" onClick={handleSignOut}>
              Sign out
            </button>
          </section>
        </IfAuthenticated>
        <IfNotAuthenticated>
          <section className="navbar">
            <button onClick={handleSignIn}>Sign in</button>
          </section>
        </IfNotAuthenticated>
      </div>
    </>
  )
}

export default Navbar
