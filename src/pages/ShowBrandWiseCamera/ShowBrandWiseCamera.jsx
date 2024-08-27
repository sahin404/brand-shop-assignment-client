import { useLoaderData } from "react-router-dom";
import Navbar from "../../SharedComponents/Navbar/Navbar";
import Footer from "../../SharedComponents/Footer/Footer";
import ShowBrandWiseSingleCamera from "./ShowBrandWiseSingleCamera";
import Slider from "../../SharedComponents/Slider/Slider";

const ShowBrandWiseCamera = () => {
  const cameras = useLoaderData();

  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <Navbar></Navbar>
      </div>
      <Slider></Slider>
      <h1 className="my-10 text-2xl font-bold text-center">
        <div>{cameras.length > 0 ? "Camera List" : "No Camera Found"}</div>
      </h1>
      <div className="max-w-7xl mx-auto grid px-5 md:px-0 md:grid-cols-3 gap-10">
        {cameras.map((camera, idx) => (
          <ShowBrandWiseSingleCamera
            key={idx}
            camera={camera}
          ></ShowBrandWiseSingleCamera>
        ))}
      </div>
      <div className="mt-16">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default ShowBrandWiseCamera;
