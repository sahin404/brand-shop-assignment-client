import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../SharedComponents/Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const [error, setError] = useState("");
  const { signUp } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(name, email, password);
    setError("");
    if (password.length < 6) {
      setError("Password must be at least 6 characters!");
      return;
    }

    if (
      !/^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]+$/.test(
        password
      )
    ) {
      setError(
        "Password Must Contain minimum one Special character and Capital Letter!"
      );
      return;
    }

    signUp(email, password)
      .then((res) => {
        const user = res.user;
        return updateProfile(user, {
          displayName:name,
          photoURL:photo,

        })
        // console.log(res.user);
      })
      .then(()=>{
        navigate('/');
      })
      .catch(() => {
        setError("Email Already Used!");
      });
  };

  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      <div className="rounded-lg bg-orange-400 mx-auto w-1/2 mt-10 p-10 text-lg ">
        <form onSubmit={handleRegister} className="relative">
          <div className="space-y-3">
            <label>Name</label>
            <input
              type="text"
              className="p-3 w-full"
              placeholder="write your Name"
              name="name"
              required
            />
          </div>
          <div className="space-y-3 mt-8">
            <label>Photo URL</label>
            <input
              type="text"
              className="p-3 w-full"
              placeholder="your photo URL"
              name="photo"
              required
            />
          </div>
          <div className="space-y-3 mt-8">
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
            <div>
              {error && (
                <h1 className="text-red-600 text-center mt-8">*{error}</h1>
              )}
            </div>
          </div>
          <input
            className="btn btn-block mt-8 bg-black text-white"
            type="submit"
            value="Register"
          />
          <div className="mt-5 text-center">
            Already have an Account ? Please{" "}
            <Link className="underline" to="/login">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
