import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGooglePlusG,
  faFacebookF,
  faGithub,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import axios from 'axios';
import { USER_BACKEND_URL } from '../services/helper';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginReducer } from '../redux/authSlice';
import Swal from 'sweetalert2';

interface LoginProps {
  onClose: () => void; // Define onClose as a function that returns void
}

export default function Login({ onClose }: LoginProps) {
  const [isSignUpVisible, setIsSignUpVisible] = useState(false);
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');
  const [signUpName, setSignUpName] = useState('');
  const [signUpPhone, setSignUpPhone] = useState('');
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const loginRef = useRef<HTMLDivElement>(null); // Create a ref for the login div
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    setIsSignUpVisible(true);
  };

  const handleSignInClick = () => {
    setIsSignUpVisible(false);
  };

  // Close the login div when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        loginRef.current &&
        !loginRef.current.contains(event.target as Node)
      ) {
        onClose(); // Call onClose when clicking outside
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  const handleSignIn = async () => {
    try {
      console.log(signInEmail, signInPassword);
      const response = await axios.post(
        `http://localhost:3000/api/user/login`,
        {
          email: signInEmail,
          password: signInPassword,
        }
      );
      if (response.data) {
        dispatch(
          loginReducer({
            access_token: response.data.accessToken,
            user_id: response.data.userId,
            full_name: response.data.username,
            user_email: response.data.email,
          })
        );
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'You are Logged In SuccessFully',
          showConfirmButton: false,
          timer: 1500,
        });

        navigate('/test');
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: error.message || 'Login Failed!',
      });
    }
  };

  const handleSignUp = async () => {
    try {
      const response = await axios.post(
        `http://localhost:3000/api/user/register`,
        {
          name: signUpName,
          phone: signUpPhone,
          email: signUpEmail,
          password: signUpPassword,
        }
      );
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="relative flex items-center justify-center h-screen w-screen">
      <div
        ref={loginRef} // Attach the ref to the main login div
        className="relative w-full max-w-4xl h-[500px] rounded-2xl bg-white shadow-lg flex"
      >
        {/* Sign In Form */}
        <div
          className={`w-1/2 h-full bg-white flex flex-col rounded-2xl justify-center items-center px-10 transition-all duration-700 ${
            isSignUpVisible ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        >
          <h1 className="text-3xl font-bold mb-6">Sign In</h1>
          <div className="flex space-x-3 mb-6">
            <a href="#" className="p-2 border rounded-full">
              <FontAwesomeIcon icon={faGooglePlusG} />
            </a>
            <a href="#" className="p-2 border rounded-full">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#" className="p-2 border rounded-full">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="#" className="p-2 border rounded-full">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
          <span className="text-sm mb-4">or use your email to sign in</span>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 mb-4 border rounded-lg bg-gray-200"
            value={signInEmail}
            onChange={(e) => setSignInEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-4 border rounded-lg bg-gray-200"
            value={signInPassword}
            onChange={(e) => setSignInPassword(e.target.value)}
          />
          <a href="#" className="text-sm text-[--primary-color] mb-4">
            Forgot Your Password?
          </a>
          <button
            className="bg-[--primary-color] text-white py-2 px-6 rounded-full"
            onClick={handleSignIn}
          >
            Sign In
          </button>
        </div>

        {/* Sign Up Form */}
        <div
          className={`w-1/2 h-full bg-white flex flex-col rounded-2xl justify-center items-center px-10 transition-all duration-700 ${
            isSignUpVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <h1 className="text-3xl font-bold mb-6">Create Account</h1>
          <div className="flex space-x-3 mb-6">
            <a href="#" className="p-2 border rounded-full">
              <FontAwesomeIcon icon={faGooglePlusG} />
            </a>
            <a href="#" className="p-2 border rounded-full">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#" className="p-2 border rounded-full">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="#" className="p-2 border rounded-full">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
          <span className="text-sm mb-4">
            or use your email for registration
          </span>
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 mb-4 border rounded-lg bg-gray-200"
            value={signUpName}
            onChange={(e) => setSignUpName(e.target.value)}
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full p-3 mb-4 border rounded-lg bg-gray-200"
            value={signUpPhone}
            onChange={(e) => setSignUpPhone(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 mb-4 border rounded-lg bg-gray-200"
            value={signUpEmail}
            onChange={(e) => setSignUpEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-4 border rounded-lg bg-gray-200"
            value={signUpPassword}
            onChange={(e) => setSignUpPassword(e.target.value)}
          />
          <button
            className="bg-[--primary-color] text-white py-2 px-6 rounded-full"
            onClick={handleSignUp}
          >
            Sign Up
          </button>
        </div>

        {/* Overlapping Div */}
        <div
          className={`absolute right-0 top-0 rounded-2xl w-1/2 h-full bg-[--primary-color] flex flex-col items-center justify-center transition-transform duration-700 ${
            isSignUpVisible ? '-translate-x-full' : 'translate-x-0'
          }`}
          style={{ zIndex: 10 }}
        >
          <h1 className="text-3xl font-bold mb-6 text-white">
            {isSignUpVisible ? 'Welcome Back!' : 'Hello, Friend!'}
          </h1>
          <p className="mb-4 text-white">
            {isSignUpVisible
              ? 'Sign in to continue your journey!'
              : "Don't have an account? Sign up and join us."}
          </p>
          <button
            className="bg-transparent border-white border py-2 px-6 rounded-full"
            onClick={isSignUpVisible ? handleSignInClick : handleSignUpClick}
          >
            {isSignUpVisible ? 'Sign In' : 'Sign Up'}
          </button>
        </div>
        <button
          className="absolute -top-8 -right-10 text-black bg-white h-8 w-8 rounded-full p-1 shadow"
          onClick={onClose}
        >
          X
        </button>
      </div>
    </div>
  );
}
