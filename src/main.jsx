import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthProvider from './context/AuthProvider.jsx'
import { ToastProvider } from './components/Toast/ToastContainer.jsx'
import ErrorBoundary from './components/Error/ErrorBoundary.jsx'

createRoot(document.getElementById('root')).render(
            <ErrorBoundary>
              <ToastProvider>
                <AuthProvider >
                  <App />
                </AuthProvider>
              </ToastProvider>
            </ErrorBoundary>
)
