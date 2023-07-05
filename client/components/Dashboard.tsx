import { IfAuthenticated, IfNotAuthenticated } from '../utilities/Authenticated'
import { useParams, useNavigate } from 'react-router-dom'
import Pet from './Pet'

function Dashboard() {
  const { username } = useParams()
  const navigate = useNavigate()

  return (
    <>
      <IfAuthenticated>
        {/* <Navbar /> */}
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
    </>
  )
}

export default Dashboard
