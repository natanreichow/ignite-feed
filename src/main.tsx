import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'


// Error: add "!" at the end on main.tsx
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
