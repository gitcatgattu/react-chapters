import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <App />
)
//wrapping in strict mode leads to rendering of app component two times strict mode is checked during dev only in production time it is not used