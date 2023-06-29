import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <header className="header">
        <h1>My Collection</h1>
      </header>
      <Outlet />
    </>
  )
}

export default App
