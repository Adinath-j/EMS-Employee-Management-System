import React, { useEffect } from 'react'
import { MdClose } from 'react-icons/md'

const Toast = ({ message, type = 'success', duration = 3000, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose?.()
    }, duration)

    return () => clearTimeout(timer)
  }, [duration, onClose])

  const bgColor = {
    success: 'bg-emerald-500',
    error: 'bg-red-500',
    info: 'bg-blue-500',
    warning: 'bg-yellow-500',
  }[type]

  return (
    <div className={`${bgColor} text-white px-6 py-4 rounded-lg shadow-lg flex items-center justify-between gap-4 animate-slide-in`}>
      <p className="font-medium">{message}</p>
      <button
        onClick={onClose}
        className="hover:opacity-80 transition-opacity"
        aria-label="Close"
      >
        <MdClose size={20} />
      </button>
    </div>
  )
}

export default Toast
