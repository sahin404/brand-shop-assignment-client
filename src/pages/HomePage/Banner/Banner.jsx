import Navbar from "../../../SharedComponents/Navbar/Navbar";
const bgImage =
  "https://images.stockcake.com/public/8/b/3/8b30dc70-5fdf-457a-ba58-97ed1fe7a47d_large/sunset-photography-setup-stockcake.jpg";
const Banner = () => {
  return (
    <div
      className="relative"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "80vh",
        width: "100vw",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute top-0 left-0 w-full ">
        <div className="max-w-7xl mx-auto text-white">
          <Navbar></Navbar>
          <div className="text-center mt-24 p-5">
            Discover top-quality cameras and accessories on our website, your
            ultimate destination for photography essentials. Explore a curated
            selection of products from trusted brands, designed to meet everyQ
            photographers needs. With seamless online shopping and secure
            checkout, capturing the perfect shot has never been easier. Shop now
            and elevate your photography game!
          </div>
          <div className="text-center mt-10">
            <button className="btn btn-neutral">See More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
