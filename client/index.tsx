import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import store from './store'
import { Auth0Provider } from '@auth0/auth0-react'
import { Provider } from 'react-redux'

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(
    <Auth0Provider
      domain="piwakawaka-2023-jackson.au.auth0.com"
      clientId="wE1L4rhAEQ4FcxQ25Be0erjEcvdOKLcr"
      authorizationParams={window.location.origin}
      audience="https://aura-pets/api"
    >
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </Auth0Provider>
  )
})
