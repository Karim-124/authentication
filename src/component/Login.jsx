import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <>
      <div className="flex justify-center items-center h-screen m-5 md:m-0">
        <form className="w-full max-w-md bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-center text-3xl font-bold mb-4">Log in</h2>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input type="text" id="email" class="rounded bg-white border border-sky-300 block w-full text-sm p-2.5" placeholder="Enter your email" />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input type="password" id="password" class="rounded bg-white border border-sky-300 block w-full text-sm p-2.5" placeholder="Enter your password" />
          </div>

          <button type="submit" className="w-full mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2.5 px-4 rounded">Sign Up</button>
          <p className='text-center my-2'><Link className=' underline underline-offset-4 text-blue-600 '>Forget Password</Link></p>
          <p className=' text-center mt-4  text-1xl'>Need an account? <Link className=' underline underline-offset-4 text-blue-600'>Sign Up</Link> </p>
        </form>

      </div>
    </>
  )
}

export default Login