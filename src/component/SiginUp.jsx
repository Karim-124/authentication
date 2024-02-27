import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext';

function SiginUp() {
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const emailRef = useRef();
  const PasswordRef = useRef();
  const PasswordconfirmationRef = useRef();
  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      setLoading(false)
      await signup()

    }
    catch {
      setError("Failed to create an account")
    }
    setLoading(false)
  }
  return (
    <>
      <div className="flex justify-center items-center h-screen m-5 md:m-0">
        <form className="w-full max-w-md bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4" onSubmit={handelSubmit}>
          <h2 className="text-center text-3xl font-bold mb-4">Sign Up</h2>
          {error && <div class="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
            <span class="font-medium"></span>{error}
          </div>
          }
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input ref={emailRef} type="text" id="email" class="rounded bg-white border border-sky-300 block w-full text-sm p-2.5" placeholder="Enter your email" />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input ref={PasswordRef} type="password" id="password" class="rounded bg-white border border-sky-300 block w-full text-sm p-2.5" placeholder="Enter your password" />
          </div>
          <div className="mb-6">
            <label htmlFor="confirm-password" className="block text-gray-700 text-sm font-bold mb-2">Confirm Password</label>
            <input ref={PasswordconfirmationRef} type="password" id="confirm-password" class="rounded bg-white border border-sky-300 	 block w-full text-sm p-2.5" placeholder="Confirm your password" />
          </div>
          <button disabled={loading} type="submit" className="w-full mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2.5 px-4 rounded">Sign Up</button>
          <p className=' text-center mt-4  text-1xl'>Already have an account? <Link className='underline underline-offset-4 text-blue-600' to='/login'>Log In</Link> </p>
        </form>

      </div>
    </>
  )
}

export default SiginUp