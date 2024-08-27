import { useLoaderData } from "react-router-dom";
import Navbar from "../../SharedComponents/Navbar/Navbar";
import Footer from "../../SharedComponents/Footer/Footer";
import PropTypes from "prop-types";

const ShowDetails = () => {
  const camera = useLoaderData();
  const { brand_name, name, price, type, photo, description } = camera;
  return (
    <div>
      <div className="max-w-7xl mx-auto mb-10">
        <Navbar></Navbar>
        <div className="flex flex-col md:flex-row mt-16 gap-5">
          <div className="border border-green-700 rounded-lg px-16">
            <img className="h-80" src={photo} alt="" />
            <div>
              <div className="text-left p-5 space-y-2">
                <h1 className="space-y-2 font-bold text-lg text-blue-600">
                  {name}
                </h1>
                <h1>Type: {type}</h1>
                <h1>Price: {price}</h1>
                <h1>Brand Name: {brand_name}</h1>
              </div>
            </div>
          </div>
          <div className="flex-1 px-8">
            {description}
            <div className="mt-8">
                <button className="btn btn-secondary">Add to Card</button>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

ShowDetails.propTypes = {
  camera: PropTypes.object,
};

export default ShowDetails;
