'use client'
 
import { useEffect } from 'react'

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h2 className="mb-3">Something went wrong!</h2>
      <button
        className="bg-red-600 px-3 py-2 rounded"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  )
}
