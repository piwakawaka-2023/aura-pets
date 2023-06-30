import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import App from './components/App'
import Home from './components/Home'
import Quiz from './components/Quiz'
import Result from './components/Result'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/Quiz" element={<Quiz />}></Route>
      <Route path="/Result/:result" element={<Result />} />
    </Route>
  )
)
