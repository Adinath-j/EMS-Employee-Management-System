import React from 'react'
import { MdError } from 'react-icons/md'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null, errorInfo: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo,
    })
    console.error('Error caught by boundary:', error, errorInfo)
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null })
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center p-4">
          <div className="bg-gray-900/70 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-red-500/30 max-w-md w-full text-center">
            <div className="flex justify-center mb-4">
              <MdError size={64} className="text-red-500" />
            </div>
            <h1 className="text-3xl font-bold text-red-400 mb-4">Oops!</h1>
            <p className="text-gray-300 mb-6">
              Something went wrong. Please try refreshing the page or contact support if the problem persists.
            </p>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mb-6 text-left">
                <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 mb-2">
                  Error Details (Dev Only)
                </summary>
                <pre className="bg-gray-800 p-3 rounded text-xs text-red-300 overflow-auto max-h-48">
                  {this.state.error.toString()}
                  {this.state.errorInfo?.componentStack}
                </pre>
              </details>
            )}
            <button
              onClick={this.handleReset}
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-4 rounded-lg transition-all active:scale-95"
            >
              Try Again
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
