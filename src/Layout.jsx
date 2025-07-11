import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react-router'
import { Outlet } from 'react-router'
function Layout() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <nav>
        <Link to="/manual-deploy">Home</Link>
        <Link to="/manual-deploy/contact">Contact</Link>
      </nav>
      <Outlet />
    </>
  )
}

export default Layout
