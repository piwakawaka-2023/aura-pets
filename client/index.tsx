// //import { Provider } from 'react-redux'
// import { createRoot } from 'react-dom/client'
// import { RouterProvider } from 'react-router-dom'
// import { router } from './router'
// import store from './store'
// import { Auth0Provider } from '@auth0/auth0-react' // added
// import App from './components/App'
// import { Provider } from 'react-redux'

// document.addEventListener('DOMContentLoaded', () => {
//   createRoot(document.getElementById('app') as HTMLElement).render(
//     <Auth0Provider
//       domain="piwakwaka-2023-james.au.auth0.com"
//       clientId="UeEZBYf1faTRYtFSwqEjjAvIK3zTgt6A"
//       redirectUri={window.location.origin}
//       audience="https://pets/api"
      
//     >
//       <Provider store={store}>

//       <RouterProvider router={router} />
//       <App />
//       </Provider>
//     </Auth0Provider>
//   )
// })

//import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import store from './store'
import { Auth0Provider } from '@auth0/auth0-react' // added
import App from './components/App'
import { Provider } from 'react-redux'

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(
      <Provider store={store}>

      <RouterProvider router={router} />
      <App />
      </Provider>
  )
})
