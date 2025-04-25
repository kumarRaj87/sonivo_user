import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { MdOutlinePassword } from "react-icons/md";
import { IoEye } from "react-icons/io5";
import { IoMdClose, IoMdEyeOff, IoMdKey } from "react-icons/io";
import { toast } from "sonner";
import { MdFace } from "react-icons/md";
import { MdPhone } from "react-icons/md";
import axios from "axios";

function Login({ setIsAuthenticated }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [mobileNum, setMobileNum] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [recoveryEmail, setRecoveryEmail] = useState("");
  const [signupform, setSignupform] = useState(false);
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  // const BASE_URL = import.meta.env.VITE_BASE_URL;
  const BASE_URL = "https://vokal-api.oyelabs.com";

  const handleLogin = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      const response = await axios.post(
        `${BASE_URL}/user/login`,
        {
          email,
          password
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'accept': 'application/json'
          }
        }
      )

      if (response.data.success) {
        localStorage.setItem('authToken', response.data.data.token)
        localStorage.setItem('isAuthenticated', 'true');
        setIsAuthenticated(true);
        navigate('/dashboard');
        toast.success("Logged in successfully!")
      } else {
        setError(response.data.message || 'Login failed')
      }
    } catch (error) {
      setError(error.response?.data?.message || 'An error occurred during login')
      console.error('Login error:', error)
      toast.error(error.response?.data?.message || 'Login failed')
    } finally {
      setIsLoading(false)
    }
  }

  const handleSignup = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      const response = await axios.post(
        `${BASE_URL}/user/signup`,
        {
          name: name,
          email: signupEmail,
          password: signupPassword,
          mobile: mobileNum,
          acceptPolicy: true
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'accept': 'application/json'
          }
        }
      )

      if (response.data.success) {
        toast.success("Registration successful! Please login.")
        setSignupform(false)
        setSignupEmail('')
        setSignupPassword('')
        setMobileNum('');
        setName('')
      } else {
        setError(response.data.message || 'Registration failed')
        toast.error(response.data.message || 'Registration failed')
      }
    } catch (error) {
      setError(error.response?.data?.message || 'An error occurred during registration')
      console.error('Registration error:', error)
      toast.error(error.response?.data?.message || 'Registration failed')
    } finally {
      setIsLoading(false)
    }
  }

  const handleRecovery = (e) => {
    e.preventDefault()
    setShowForgotPassword(false)
    toast.info("Recovery email sent if account exists")
  }


  return (
    <div className="min-h-screen bg-primary-200 flex flex-col items-center justify-center p-4">
      <div className="w-full sm:w-[80%] md:w-[550px] bg-background p-10 rounded-lg">
        <div className="items-center mb-4 text-center flex justify-center w-full">
          <p className="text-2xl xl:text-3xl font-semibold text-primary items-center text-center">Vokal</p>
        </div>

        <div className="mb-8 text-start">
          <h1 className="text-lg font-semibold text-primary mb-1">
            Start your free trial
          </h1>
          <p className="text-primary-300 text-sm">
            Get started with a demo account on Sonivo
          </p>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm">
            {error}
          </div>
        )}

        <div className="text-center mt-6 mb-4 text-sm text-accent relative after:content-[''] after:absolute after:left-0 after:right-0 after:top-1/2 after:h-[1px] after:bg-gray-200">
          <span className="relative z-10 bg-background px-4 text-xs font-medium text-accent">Login or Signup</span>
        </div>

        {
          !signupform ?
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="relative group">
                <div className="absolute -top-2.5 left-3 bg-background px-1
               transition-all duration-300
               text-primary text-[11px]">
                  Email
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 text-sm rounded-[9px] bg-background pr-3 py-2 border border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-primary focus:border-primary"
                  placeholder=""
                />
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <MdEmail className='text-accent' size={20} />
                </div>
              </div>


              <div className="relative group">
                <div className="absolute -top-2.5 left-3 bg-background px-1 transition-all duration-300 text-primary text-[11px]">
                  Password
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 text-sm rounded-[9px] bg-background pr-3 py-2 border border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-primary focus:border-primary"
                  placeholder=""
                />
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <MdOutlinePassword className='text-accent' size={20} />
                </div>
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center"
                >
                  {showPassword ? (
                    <IoEye className='text-accent' size={24} />
                  ) : (
                    <IoMdEyeOff className='text-accent' size={24} />
                  )}
                </button>
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full text-sm bg-primary-400 text-white mt-4 py-2 px-4 rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/20 flex items-center justify-center gap-2 ${isLoading ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
              >
                {isLoading ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  <>
                    <IoMdKey className="text-white" size={24} />
                    Login
                  </>
                )}
              </button>
            </form>
            :
            <form className="space-y-4" onSubmit={handleSignup}>
              <div className="relative group">
                <div className="absolute -top-2.5 left-3 bg-background px-1
               transition-all duration-300
               text-primary text-[11px]">
                  Email
                </div>
                <input
                  type="email"
                  value={signupEmail}
                  onChange={(e) => setSignupEmail(e.target.value)}
                  className="w-full pl-12 text-sm rounded-[9px] bg-background pr-3 py-2 border border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-primary focus:border-primary"
                  placeholder=""
                />
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <MdEmail className='text-accent' size={20} />
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -top-2.5 left-3 bg-background px-1 transition-all duration-300 text-primary text-[11px]">
                  Password
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  value={signupPassword}
                  onChange={(e) => setSignupPassword(e.target.value)}
                  className="w-full pl-12 text-sm rounded-[9px] bg-background pr-3 py-2 border border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-primary focus:border-primary"
                  placeholder=""
                />
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <MdOutlinePassword className='text-accent' size={20} />
                </div>
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center"
                >
                  {showPassword ? (
                    <IoEye className='text-accent' size={24} />
                  ) : (
                    <IoMdEyeOff className='text-accent' size={24} />
                  )}
                </button>
              </div>

              <div className="relative group">
                <div className="absolute -top-2.5 left-3 bg-background px-1
               transition-all duration-300
               text-primary text-[11px]">
                  Your Name
                </div>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-12 text-sm rounded-[9px] bg-background pr-3 py-2 border border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-primary focus:border-primary"
                  placeholder=""
                />
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <MdFace className='text-accent' size={20} />
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -top-2.5 left-3 bg-background px-1
               transition-all duration-300
               text-primary text-[11px]">
                  Mobile Number
                </div>
                <input
                  type="number"
                  value={mobileNum}
                  onChange={(e) => setMobileNum(e.target.value)}
                  className="w-full pl-12 text-sm rounded-[9px] bg-background pr-3 py-2 border border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-primary focus:border-primary"
                  placeholder=""
                />
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <MdPhone className='text-accent' size={20} />
                </div>
              </div>

              <div className="flex items-start pt-1">
                <div className="flex items-center h-4 mt-0.5">
                  <input
                    type="checkbox"
                    className="h-3.5 w-3.5 text-primary border-gray-300 rounded focus:ring-primary"
                  />
                </div>
                <div className="ml-2 text-xs leading-tight">
                  <label className="text-gray-600">
                    By clicking here, you are accepting our{' '}
                    <a href="#" className="text-primary">Privacy policy</a>,{' '}
                    <a href="#" className="text-primary">Terms & Conditions</a>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full text-sm bg-primary-400 text-white mt-4 py-2 px-4 rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/20 flex items-center justify-center gap-2 ${isLoading ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
              >
                {isLoading ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  <>
                    <IoMdKey className='text-white' size={24} />
                    Signup
                  </>
                )}
              </button>

            </form>
        }

        {
          !signupform &&
          <div className="mt-4 text-end">
            <button
              onClick={() => setShowForgotPassword(true)}
              className="text-sm text-[#2e4961] hover:underline"
            >
              Forgot password?
            </button>
          </div>
        }

        <div className="text-sm mt-6 flex text-[#44546F] gap-2 w-full justify-center items-center">
          {!signupform ? "Don't have an account?" : "Already have an account?"}
          <p
            className="text-[#1e2e3c] font-medium hover:underline cursor-pointer"
            onClick={() => {
              setSignupform(!signupform)
            }}
          >
            {
              signupform ? "Login" : "Signup"
            }
          </p>
        </div>
      </div>

      {showForgotPassword && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999999]">
            <div className="bg-background rounded-2xl shadow-lg w-full md:w-[600px]">
              <div className='flex justify-between mb-4 rounded-t-2xl px-6 py-4 items-center w-full gap-6'>
                <h2 className="text-lg font-semibold text-center">Send Recovery Link</h2>
                <IoMdClose className='text-gray-600 cursor-pointer' size={20} onClick={() => setShowForgotPassword(false)} />
              </div>

              <form onSubmit={handleRecovery} className="space-y-4 px-4 pb-4">
                <div className="relative group">
                  <div className="absolute -top-2.5 left-3 bg-background px-1
               transition-all duration-300
               text-primary text-[11px]">
                    Email
                  </div>
                  <input
                    type="email"
                    value={recoveryEmail}
                    onChange={(e) => setRecoveryEmail(e.target.value)}
                    className="w-full pl-12 text-sm rounded-[9px] bg-background pr-3 py-2 border border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-primary focus:border-primary"
                    placeholder=""
                  />
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <MdEmail className='text-accent' size={20} />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full text-sm bg-primary-400 text-background mt-4 py-2 px-4 rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/20 flex items-center justify-center gap-2"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>

        </>

      )}
    </div>
  );
}

export default Login;
