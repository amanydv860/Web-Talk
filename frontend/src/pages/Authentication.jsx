import * as React from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { Snackbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";

export default function Authentication() {
  const [username, setUsername] = React.useState();
  const [password, setPassword] = React.useState();
  const [name, setName] = React.useState();
  const [error, setError] = React.useState();
  const [message, setMessage] = React.useState();

  const [formState, setFormState] = React.useState(0);

  const [open, setOpen] = React.useState(false);

  const { handleRegister, handleLogin } = React.useContext(AuthContext);
  const navigate = useNavigate(); // hook for navigation

  let handleAuth = async () => {
    try {
      if (formState === 0) {
        let result = await handleLogin(username, password);
      }
      if (formState === 1) {
        let result = await handleRegister(name, username, password);
        console.log(result);
        setUsername('');
        setMessage(result);
        setOpen(true);
        setError('');
        setFormState(0);
        setPassword('');
      }
    } catch (err) {
      console.log(err);
      let message = err.response.data.message;
      setError(message);
    }
  };

  return (
    <div className="h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}>
      <div className="h-full bg-black bg-opacity-50 flex items-center justify-center">
        <div className="flex w-full max-w-md p-8 bg-white bg-opacity-80 rounded-lg shadow-lg">
          <div className="w-full">
            {/* Flex container for logo and back button */}
            <div className="flex items-center justify-center mb-4 w-full">
              {/* Back button with left padding */}
              <button
                onClick={() => navigate('/')} // Navigate to the landing page
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg pl-2"
              >
                <FaArrowLeft />
              </button>
              {/* Logo centered */}
              <div className="text-3xl font-serif text-gray-800 mx-auto">
                WEB TALK
              </div>
            </div>

            {/* Form State Toggle */}
            <div className="text-center mb-4">
              <button
                className={`px-6 py-2 mr-4 rounded-lg ${formState === 0 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                onClick={() => setFormState(0)}
              >
                Sign In
              </button>
              <button
                className={`px-6 py-2 rounded-lg ${formState === 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                onClick={() => setFormState(1)}
              >
                Sign Up
              </button>
            </div>

            {/* Form */}
            <form noValidate>
              {formState === 1 && (
                <div className="mb-4">
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full Name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
              )}

              <div className="mb-4">
                <input
                  type="text"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Username"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>

              <div className="mb-4">
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>

              {error && <p className="text-red-500 mb-4">{error}</p>}

              <button
                type="button"
                onClick={handleAuth}
                className="w-full py-2 bg-blue-500 text-white rounded-lg mt-4"
              >
                {formState === 0 ? 'Login' : 'Register'}
              </button>
            </form>
          </div>
        </div>
      </div>

      <Snackbar open={open} autoHideDuration={4000} message={message} />
    </div>
  );
}
