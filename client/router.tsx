import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import App from './components/App'
import Home from './components/Home'
import Quiz from './components/Quiz'
import Result from './components/Result'
import Profile from './components/Profile'
import Dashboard from './components/Dashboard'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/quiz" element={<Quiz />}></Route>
      <Route path="/result/:id" element={<Result />} />
      <Route path="/profile/:username" element={<Profile />} />
      <Route path="/home/:username" element={<Dashboard />} />
    </Route>
  )
)
