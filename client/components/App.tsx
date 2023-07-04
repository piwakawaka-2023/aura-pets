import { Routes, Route } from 'react-router-dom'

import Home from './Home'
import Quiz from './Quiz'
import Result from './Result'
import Profile from './Profile'

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/result/:id" element={<Result />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  )
}

export default App
