import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ShowBrandWiseSingleCamera = ({ camera }) => {
  const { _id, brand_name, name, price, type, photo } = camera;
  return (
    <div className=" border border-black rounded-lg text-center">
      <div>
        <img src={photo} className="h-72 p-5 mx-auto" alt="" />
      </div>
      <h1 className="text-left p-5 space-y-2 font-bold text-lg text-blue-600">
        {name}
      </h1>
      <div className="flex items-center justify-between pr-5">
        <div className="text-left p-5 space-y-2">
          <h1>Type: {type}</h1>
          <h1>Price: {price}</h1>
          <h1>Brand Name: {brand_name}</h1>
        </div>
        <div className="space-y-4">
          <div>
            <Link to={`/camera/${_id}`}>
              <button className="w-full btn block btn-primary">
                See Details
              </button>
            </Link>
          </div>
          <div>
            <Link to={`/update/${_id}`}>
              <button className="w-full btn btn-neutral">Update</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

ShowBrandWiseSingleCamera.propTypes = {
  camera: PropTypes.object,
};

export default ShowBrandWiseSingleCamera;
