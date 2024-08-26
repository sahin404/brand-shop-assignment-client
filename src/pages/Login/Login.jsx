import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../SharedComponents/Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { FaGoogle } from "react-icons/fa";

const Login = () => {

  const {signIn, googleSignIn} = useContext(AuthContext);
  const [error,setError] = useState('');
  const navigate = useNavigate();

    const handleGoogleLogin=()=>{
      googleSignIn()
      .then(()=>{
        navigate('/');
      })
      .catch(()=>{

      })
    }

    const handleLogin=e=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(email,password);
        setError('');

        signIn(email,password)
        .then(()=>{
          // console.log('success');
          navigate('/');
        })
        .catch(()=>{
          // console.log('wrong');
          setError('Email or password has been wrong!');
        })

        
    }
    

  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      <div className="rounded-lg bg-emerald-500 mx-auto w-1/2 mt-10 p-10 text-lg ">
        <form onSubmit={handleLogin} className="relative">
          <div className="space-y-3">
            <label>Email</label>
            <input
              type="email"
              className="p-3 w-full"
              placeholder="write your gmail"
              name="email"
              required
            />
          </div>
          <div className="space-y-3 mt-8">
            <label>Password</label>
            <input
              type="password"
              className="p-3 w-full"
              placeholder="write your password"
              name="password"
              required
            />
          </div>
          <h1 className="mt-3 text-md hover:underline hover:cursor-pointer">
            Forgotten password?
          </h1>
          <span>
            {
              error && <h1 className="mt-5 text-yellow-300 text-center">{error}</h1>
            }
          </span>
          <input className="btn btn-block mt-8 bg-black text-white" type="submit" value="Login" />
          </form>

          <div className="mt-8 text-center">
            <button className="btn btn-outline" onClick={handleGoogleLogin}> <FaGoogle></FaGoogle> Sign in with Google</button>
          </div>
          
          <div className="mt-5 text-center">
            Dont have any Account ? Please{" "}
            <Link className="underline" to="/register">
              Register
            </Link>
          </div>
    
      </div>
    </div>
  );
};

export default Login;
