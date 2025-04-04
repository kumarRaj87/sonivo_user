import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { MdOutlinePassword } from "react-icons/md";
import { IoEye } from "react-icons/io5";
import { IoMdClose, IoMdEyeOff, IoMdKey } from "react-icons/io";
import { toast } from "sonner";
import { MdFace } from "react-icons/md";
import { MdPhone } from "react-icons/md";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [mobileNum, setMobileNum] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [recoveryEmail, setRecoveryEmail] = useState("");
  const [signupform, setSignupform] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onLogin(email, password)) {
      toast.success('loggedin successfully!')
      navigate("/dashboard");
    } else {
      setError("Invalid credentials");
    }
  };

  const handleRecovery = (e) => {
    e.preventDefault();
    setShowForgotPassword(false);
  };

  return (
    <div className="min-h-screen bg-primary-200 flex flex-col items-center justify-center p-4">
      <div className="w-full sm:w-[80%] md:w-[550px] bg-background p-10 rounded-lg">
        <div className="mb-8 text-center">
          <img
            src="https://sonivo.oneoftheprojects.com/media/p3v6PjgmKVqXnG3pg1ivUTHmox7o1a3E.png"
            alt="Logo"
            className="h-12 mx-auto mb-12"
          />
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
            <form onSubmit={handleSubmit} className="space-y-4">
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
                className="w-full text-sm bg-primary-400 text-background mt-4 py-2 px-4 rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/20 flex items-center justify-center gap-2"
              >
                <IoMdKey className='text-background' size={24} />
                Login
              </button>
            </form>
            :
            <form className="space-y-4">
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
                onClick={(e) => e.preventDefault()}
                className="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md text-sm font-medium text-background bg-primary hover:bg-primary/90 focus:outline-none"
              >
                Signup
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
