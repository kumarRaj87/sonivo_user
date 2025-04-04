// import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { MdEmail } from "react-icons/md";
// import { MdOutlinePassword } from "react-icons/md";
// import { IoMdKey } from "react-icons/io";
// import { IoEye } from "react-icons/io5";
// import { IoMdEyeOff } from "react-icons/io";

// function Login({ onLogin }) {
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [showPassword, setShowPassword] = useState(false)
//   const [error, setError] = useState('')
//   const [showForgotPassword, setShowForgotPassword] = useState(false)
//   const [recoveryEmail, setRecoveryEmail] = useState('')
//   const navigate = useNavigate()

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     if (onLogin(email, password)) {
//       navigate('/dashboard')
//     } else {
//       setError('Invalid credentials')
//     }
//   }

//   const handleRecovery = (e) => {
//     e.preventDefault()
//     setShowForgotPassword(false)
//   }

//   return (
//     <div className="h-screen bg-white flex flex-col items-center justify-center p-4">
//       <div className="w-full sm:w-[80%] md:w-[550px] bg-[#F7FAFC] p-10 rounded-2xl shadow-sm justify-between flex flex-col">

//         <div className="mb-3 text-center">
//           <svg className="h-14 2xl:h-16 w-auto mx-auto" viewBox="0 0 50 50">
//             <path
//               d="M25 0C11.2 0 0 11.2 0 25s11.2 25 25 25 25-11.2 25-25S38.8 0 25 0zm0 45C13.4 45 5 36.6 5 25S13.4 5 25 5s20 8.4 20 20-8.4 20-20 20z"
//               className="fill-primary"
//             />
//             <path
//               d="M25 10c-8.3 0-15 6.7-15 15s6.7 15 15 15 15-6.7 15-15-6.7-15-15-15zm0 25c-5.5 0-10-4.5-10-10s4.5-10 10-10 10 4.5 10 10-4.5 10-10 10z"
//               className="fill-primary opacity-75"
//             />
//           </svg>
//         </div>
//         <h2 className="text-xl font-bold text-center mb-4 text-primary">Hello admin 👋🏻</h2>
//         <div className="flex items-center justify-between mb-6 w-full px-3">
//           <div className="h-px bg-gray-300 w-1/4 sm:w-[32%] mr-4"></div>
//           <p className="text-[#808080] text-center flex justify-center items-center font-medium text-xs">Signin to your account</p>
//           <div className="h-px bg-gray-300 w-1/4 sm:w-[32%] ml-4"></div>
//         </div>

//         {error && (
//           <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm">
//             {error}
//           </div>
//         )}

//         <form onSubmit={handleSubmit} className='px-3'>
//           <div className="space-y-5 w-full">
//             <div className="relative group">
//               <div className="absolute -top-2.5 left-3 bg-[#F7FAFC] px-1
//               transition-all duration-300
//               text-primary text-[11px]">
//                 Email
//               </div>
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full pl-12 text-sm rounded-[9px] bg-[#F7FAFC] pr-3 py-1.5 border border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-primary focus:border-primary"
//                 placeholder=""
//               />
//               <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//                 <MdEmail className='text-[#808080]' size={20} />
//               </div>
//             </div>

//             <div className="relative group">
//               <div className="absolute -top-2.5 left-3 bg-[#F7FAFC] px-1
//               transition-all duration-300
//               text-primary text-[11px]">
//                 Password
//               </div>
//               <input
//                 type={showPassword ? "text" : "password"}
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="w-full pl-12 text-sm rounded-[9px] bg-[#F7FAFC] pr-3 py-1.5 border border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-primary focus:border-primary"
//                 placeholder=""
//               />
//               <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//                 <MdOutlinePassword className='text-[#808080]' size={20} />
//               </div>
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute inset-y-0 right-0 pr-4 flex items-center"
//               >
//                 {showPassword ? (
//                   <IoEye className='text-[#808080]' size={24} />
//                 ) : (
//                   <IoMdEyeOff className='text-[#808080]' size={24} />
//                 )}
//               </button>
//             </div>
//           </div>

//           <button
//             type="submit"
//             className="w-full text-sm bg-primary-400 text-white mt-4 py-2 px-4 rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/20 flex items-center justify-center gap-2"
//           >
//             <IoMdKey className='text-white' size={24} />
//             Login
//           </button>
//         </form>

//         <div className='w-full justify-end items-center flex px-3'>
//           <button
//             onClick={() => setShowForgotPassword(true)}
//             className="text-center text-sm text-primary-400 hover:text-primary/80 mt-3"
//           >
//             Forgot password?
//           </button>
//         </div>

//       </div>

//       {/* Forgot Password Popup */}
//       {showForgotPassword && (
//         <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
//           <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
//             <button
//               onClick={() => setShowForgotPassword(false)}
//               className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
//             >
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             </button>

//             <h3 className="text-xl font-semibold mb-4">Send recovery link</h3>

//             <form onSubmit={handleRecovery}>
//               <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Enter your email
//                 </label>
//                 <input
//                   type="email"
//                   value={recoveryEmail}
//                   onChange={(e) => setRecoveryEmail(e.target.value)}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
//                   placeholder="Enter your email"
//                 />
//               </div>

//               <button
//                 type="submit"
//                 className="w-full bg-gray-100 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200"
//               >
//                 Submit
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

// export default Login

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { MdOutlinePassword } from "react-icons/md";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [recoveryEmail, setRecoveryEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onLogin(email, password)) {
      navigate("/dashboard");
    } else {
      setError("Invalid credentials");
    }
  };

  const handleRecovery = (e) => {
    e.preventDefault();
    setShowForgotPassword(false);
  };

  const handleSignupClick = (e) => {
    e.preventDefault();
    navigate("/signup");
  };

  return (
    <div className="min-h-screen bg-[#f7fafc] flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-[540px] bg-white p-8 rounded-lg shadow-md">
        <div className="mb-8 text-center">
          <img
            src="https://sonivo.oneoftheprojects.com/media/p3v6PjgmKVqXnG3pg1ivUTHmox7o1a3E.png"
            alt="Logo"
            className="h-12 mx-auto mb-12"
          />
        </div>
        <div className="mb-8 text-start">
          <h1 className="text-2xl font-semibold text-[#172B4D] mb-2">
            Start your free trial
          </h1>
          <p className="text-[#44546F] text-sm">
            Get started with a demo account on Sonivo
          </p>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm">
            {error}
          </div>
        )}

        <div className="text-center mt-6 mb-4 text-sm text-gray-600 relative after:content-[''] after:absolute after:left-0 after:right-0 after:top-1/2 after:h-[1px] after:bg-gray-200">
          <span className="relative z-10 bg-white px-4">Login or Signup</span>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <label className="block text-sm text-[#44546F] font-medium">
              Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <MdEmail className="text-[#44546F]" size={20} />
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-3 py-2 border border-[#DFE1E6] rounded-md focus:outline-none focus:border-[#44546F] text-sm"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="block text-sm text-[#44546F] font-medium">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <MdOutlinePassword className="text-[#44546F]" size={20} />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-10 py-2 border border-[#DFE1E6] rounded-md focus:outline-none focus:border-[#44546F] text-sm"
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center"
              >
                {showPassword ? (
                  <IoEye className="text-[#44546F]" size={20} />
                ) : (
                  <IoMdEyeOff className="text-[#44546F]" size={20} />
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#2e4961] text-white py-2 px-4 rounded-md hover:bg-[#16222c] transition-colors text-sm font-medium"
          >
            Login
          </button>
        </form>

        <div className="mt-4 text-end">
          <button
            onClick={() => setShowForgotPassword(true)}
            className="text-sm text-[#2e4961] hover:underline"
          >
            Forgot password?
          </button>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-[#44546F]">
            Don't have an account?{" "}
            <a
              href="#"
              className="text-[#1e2e3c] font-medium hover:underline"
              onClick={handleSignupClick}
            >
              Signup
            </a>
          </p>
        </div>
      </div>

      {showForgotPassword && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
            <button
              onClick={() => setShowForgotPassword(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <h3 className="text-xl font-semibold mb-4">Send recovery link</h3>

            <form onSubmit={handleRecovery}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Enter your email
                </label>
                <input
                  type="email"
                  value={recoveryEmail}
                  onChange={(e) => setRecoveryEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  placeholder="Enter your email"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#2e4961] text-white py-2 px-4 rounded-md hover:bg-[#273948] transition-colors text-sm font-medium"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
