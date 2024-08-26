import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from 'sweetalert2'

const Navbar = () => {
  const {user,logOut} = useContext(AuthContext);
  const navigate = useNavigate();

  const list = (
    <>
      <li>
        <NavLink className="text-lg" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="text-lg" to="/add_product">
          Add Product
        </NavLink>
      </li>
      <li>
        <NavLink className="text-lg" to="/my_cart">
          My Cart
        </NavLink>
      </li>
    </>
  );


  const handleLogout=()=>{
    logOut()
    .then(()=>{
      Swal.fire("Logged Out Successfully!");
      navigate('/');
    })
    .catch(()=>{

    })
  }

  return (
    <div className="navbar mt-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {list}
          </ul>
        </div>
        <a className="btn btn-ghost text-3xl">CameraHut</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{list}</ul>
      </div>

      <div className="navbar-end">
        {/* Profile Name and profile Picture */}
        <div className="flex items-center gap-5 mr-5">
          <div>
            {
              user && <h1>{user.displayName}</h1>
            }
          </div>
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="user"
                
                src= {`${user? user.photoURL: 'https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI='}`}
              />
            </div>
          </div>
        </div>
        {/* Button */}
        <div>
          {
            user? <button onClick={handleLogout} className="btn btn-neutral">Logout</button>: <Link to="/login" className="btn btn-neutral">
            Login
          </Link>
          }
        </div>
       
      </div>
    </div>
  );
};

export default Navbar;
