import { useState } from 'react';
import { MdEmail } from 'react-icons/md';
import { IoEyeOutline, IoPhonePortraitOutline } from 'react-icons/io5';
import { RiLockPasswordLine } from 'react-icons/ri';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f7fafc] px-4">
      <div className="w-full max-w-[540px] bg-white p-8 rounded-lg shadow-md">
      <div className="mb-8 text-center">
          <img src="https://sonivo.oneoftheprojects.com/media/p3v6PjgmKVqXnG3pg1ivUTHmox7o1a3E.png" alt="Logo" className="h-12 mx-auto mb-12" />
        </div>
        <div className="text-start ">
          <h2 className="text-2xl font-bold text-gray-900">Start your free trial</h2>
          <p className="mt-1 text-sm text-gray-600">
            Get started with a demo account on Sonivo
          </p>
          {/* <div className="mt-6 mb-4 text-sm text-gray-600 relative after:content-[''] after:absolute after:left-0 after:right-0 after:top-1/2 after:h-[1px] after:bg-gray-200">
            <span className="relative z-10 bg-white px-4">Login or Signup</span>
          </div> */}
        </div>

        <div className="mt-6 mb-4 text-sm text-gray-600 relative after:content-[''] after:absolute after:left-0 after:right-0 after:top-1/2 after:h-[1px] after:bg-gray-200 text-center">
            <span className="relative z-10 bg-white px-4">Login or Signup</span>
          </div>

        <form className="space-y-4">
          <div>
            <div className="flex items-center text-sm text-gray-600 mb-1">
              <span>Email</span>
              
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <MdEmail className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="email"
                className="block w-full pl-9 pr-3 py-2 border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-sm"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center text-sm text-gray-600 mb-1">
              <span>Password</span>
              
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <RiLockPasswordLine className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                className="block w-full pl-9 pr-9 py-2 border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-sm"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center"
              >
                <IoEyeOutline className="h-4 w-4 text-gray-400" />
              </button>
            </div>
            <div className="text-xs text-gray-600 mt-1 pl-1">
              <span>Last</span>
            </div>
          </div>

          <div>
            <div className="flex items-center text-sm text-gray-600 mb-1">
              <span>Your mobile</span>
             
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <IoPhonePortraitOutline className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="tel"
                className="block w-full pl-9 pr-3 py-2 border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-sm"
                placeholder="Enter your mobile number"
              />
            </div>
            <div className="text-xs text-gray-600 mt-1 pl-1">
              <span>Your mobile</span>
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
            className="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md text-sm font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none"
          >
            Signup
          </button>

          

          <div className="text-end  pt-1 text-sm">
            <a href="#" className="text-primary">
              Forgot password ?
            </a>
          </div>

          <div className=' border border-spacing-x-2 text-black border-gray-300 mt-4 mb-4'>
          </div>

          <div className="text-center text-xs text-gray-600 pt-2">
            Don't have an account?{' '}
            <a href="#" className="text-primary">Login</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;