//ToDo Add Link to Home Page in the button
import { Link } from 'react-router-dom'

function Home() {
    return (
      <>
     <div className="centered-container">
      <div className="home-div">
       <h1 className="welcome-message">Welcome to Aura Pets</h1>
       <h2 className="home-message">Click the button below to find out your Aura Pet</h2>
       <button className="quiz-btn-centered">
         <Link to="/Quiz">
           <li>Quiz</li>
         </Link>
       </button>
      </div>
     </div>
      </>
    )
  }
  
  export default Home