import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gray-800'>
        <h1 className='text-2xl font-bold text-yellow-500'>Not Found!</h1>
        <p className='text-gray-300 my-4'>The page you are looking for does not exist.</p>
        <Link href="/" className='bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 my-2 rounded transition duration-200'>
          Return Home
        </Link>
    </div>
  )
}
