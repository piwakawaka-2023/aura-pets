import { Link } from 'react-router-dom'
import { User, useAuth0 } from '@auth0/auth0-react'

function Home() {

  const { user, logout, loginWithRedirect } = useAuth0()

  const handleSignIn = () => {
    return loginWithRedirect()
  }

    return (
      <>
     <div className="centered-container">
      <div className="home-div">
       <h1 className="welcome-message">Welcome to Aura Pets</h1>
       <h2 className="home-message">Click the button below to find out your Aura Pet</h2>
       <button className="quiz-btn-centered">
         <Link to="/Quiz">
           <button onClick={handleSignIn}>Sign In</button>
         </Link>
       </button>
      </div>
     </div>
      </>
    )
  }
  
  export default Home