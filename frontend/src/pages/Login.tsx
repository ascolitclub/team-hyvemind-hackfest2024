import { useForm } from 'react-hook-form';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGooglePlusG,
  faFacebookF,
  faGithub,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';
import { BACKEND_URL_NODOC, USER_BACKEND_URL } from '../services/helper';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginReducer } from '../redux/authSlice';

export default function Login() {
  const [isSignUpVisible, setIsSignUpVisible] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignUpClick = () => {
    setIsSignUpVisible(true);
  };

  const handleSignInClick = () => {
    setIsSignUpVisible(false);
  };

  const onSubmitRegister = async (data: any) => {
    try {
      console.log(data);
      const response = await axios.post(`${BACKEND_URL_NODOC}/register`, data);
      console.log('API Response:', response.data);
    } catch (error) {
      console.log(error);
      console.error('API Error:', error);
    }
  };

  const onSubmitLogin = async (data: any) => {
    const response = await axios.post(`${BACKEND_URL_NODOC}/login`, data);
    try {
      console.log(data);

      if (response.data) {
        localStorage.setItem('authToken', response.data.accessToken);
        dispatch(
          loginReducer({
            access_token: response.data.accessToken,
            user_id: response.data.userId,
            full_name: response.data.username,
            user_email: response.data.email,
          })
        );

        navigate('/test');
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'You are Logged In SuccessFully',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: response.data.message || 'Login Failed!',
      });
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-gray-300 to-blue-200">
      <div className="relative w-full max-w-4xl h-[500px] bg-white rounded-xl shadow-lg overflow-hidden flex">
        {/* Sign In Form */}
        <div
          className={`w-1/2 h-full bg-white flex flex-col justify-center items-center px-10 transition-all duration-700 ${
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

          {/* Sign-In Form Fields */}
          <form onSubmit={handleSubmit(onSubmitLogin)} className="w-full">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 mb-4 border rounded-lg bg-gray-200"
              {...register('email', { required: 'Email is required' })}
            />
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}

            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 mb-4 border rounded-lg bg-gray-200"
              {...register('password', { required: 'Password is required' })}
            />
            {errors.password && (
              <span className="text-red-500">{errors.password.message}</span>
            )}

            <a href="#" className="text-sm text-purple-600 mb-4">
              Forgot Your Password?
            </a>

            <button
              type="submit"
              className="bg-purple-600 text-white py-2 px-6 rounded-full"
            >
              Sign In
            </button>
          </form>
        </div>

        {/* Sign Up Form */}
        <div
          className={`w-1/2 h-full bg-white flex flex-col justify-center items-center px-10 transition-all duration-700 ${
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

          {/* Sign-Up Form Fields */}
          <form onSubmit={handleSubmit(onSubmitRegister)} className="w-full">
            <input
              type="text"
              placeholder="User Name"
              className="w-full p-3 mb-4 border rounded-lg bg-gray-200"
              {...register('username', { required: 'User Name is required' })}
            />
            {errors.name && (
              <span className="text-red-500">{errors.username.message}</span>
            )}

            <input
              type="number"
              placeholder="Phone Number"
              className="w-full p-3 mb-4 border rounded-lg bg-gray-200"
              {...register('phoneNumber', {
                required: 'Phone number is required',
              })}
            />
            {errors.phone && (
              <span className="text-red-500">{errors.phoneNumber.message}</span>
            )}

            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 mb-4 border rounded-lg bg-gray-200"
              {...register('email', { required: 'Email is required' })}
            />
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}

            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 mb-4 border rounded-lg bg-gray-200"
              {...register('password', { required: 'Password is required' })}
            />
            {errors.password && (
              <span className="text-red-500">{errors.password.message}</span>
            )}

            <button
              type="submit"
              className="bg-purple-600 text-white py-2 px-6 rounded-full"
            >
              Sign Up
            </button>
          </form>
        </div>

        {/* Overlapping Div */}
        <div
          className={`absolute right-0 top-0 w-1/2 h-full bg-purple-700 flex flex-col items-center justify-center transition-transform duration-700 ${
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
      </div>
    </div>
  );
}
