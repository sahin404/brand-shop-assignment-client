import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const Categories = () => {
  return (
    <div className="max-w-7xl mx-auto p-5">
      <h1 className="my-16 text-3xl font-bold text-center">Camera Brands</h1>
      {/* Cards Container */}
      <div className="grid md:grid-cols-3 gap-10 p-5">
        {/* card 1 */}
        <Link to="/nikon" className="hover:scale-105 duration-200">
        <div className=" h-96 card card-compact bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://i5.walmartimages.com/seo/Nikon-Red-COOLPIX-B500-Digital-Camera-with-16-Megapixels-and-40x-Optical-Zoom_b11ed6e1-7506-4d0b-998b-d69ff1ad38dd_1.edce3211b7fef14843b3b3eec86579fc.jpeg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <div className="flex justify-between items-center text-lg gap-8">
              <div className="flex items-center gap-2">
                <h1>Nikon: The World Largest Camera Brand</h1>
              </div>
              <div>
                <FaArrowCircleRight className="text-2xl"></FaArrowCircleRight>
              </div>
            </div>
          </div>
        </div>
        </Link>

        {/* card 2 */}
        <Link to="/canon" className="hover:scale-105 duration-200">
        <div className="h-96 flex card card-compact bg-base-100 shadow-xl">
         <div>
         <figure>
            <img
              src="https://i1.adis.ws/i/canon/eos-700d-frt-w-ef-s-18-135mm-is-stm_b0d7e3f18e6d4cbf87259e1783757bd1?$block-hero-header-3by2-dt-jpg$"
              alt="Canon Camera"
            />
          </figure>
         </div>
          <div className="card-body">
            <div className="flex justify-between items-center text-lg gap-8">
              <div className="flex items-center gap-2">
                <h1>Canon: The World Largest Camera Brand</h1>
              </div>
              <div>
                <FaArrowCircleRight className="text-2xl"></FaArrowCircleRight>
              </div>
            </div>
          </div>
        </div>
        </Link>

        {/* card 3 */}
        <Link to="/sony" className="hover:scale-105 duration-200">
        <div className="h-96 card card-compact bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://www.bhphotovideo.com/images/fb/sony_ilce_1_b_alpha_a1_mirrorless_digital_1619483.jpg"
              alt="Sony Camera"
            />
          </figure>
          <div className="card-body">
            <div className="flex justify-between items-center text-lg gap-8">
              <div className="flex items-center gap-2">
                <h1>Sony: The World Largest Camera Brand</h1>
              </div>
              <div>
                <FaArrowCircleRight className="text-2xl"></FaArrowCircleRight>
              </div>
            </div>
          </div>
        </div>
        </Link>

        {/* card 4 */}
        <Link to="/fujifilm" className="hover:scale-105 duration-200">
        <div className="h-96 card card-compact bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://asset.fujifilm.com/www/my/files/styles/600x400/public/2022-10/48341ace1564bd75c11f233039b10b3a/pic_xsystem_66.jpg?itok=nBNzFJet"
              alt="Fujifilm Camera"
            />
          </figure>
          <div className="card-body">
            <div className="flex justify-between items-center text-lg gap-8">
              <div className="flex items-center gap-2">
                <h1>Fujifilm: The World Largest Camera Brand</h1>
              </div>
              <div>
                <FaArrowCircleRight className="text-2xl"></FaArrowCircleRight>
              </div>
            </div>
          </div>
        </div>
        </Link>

        {/* card 5 */}
        <Link to="/camasonic" className="hover:scale-105 duration-200">
        <div className="h-96 card card-compact bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://5.imimg.com/data5/SELLER/Default/2023/2/RZ/GM/TI/100339914/panasonic-hc-x20-4k-camcorder-500x500.jpg"
              alt="Camasonic Camera"
            />
          </figure>
          <div className="card-body">
            <div className="flex justify-between items-center text-lg gap-8">
              <div className="flex items-center gap-2">
                <h1>Camasonic: The World Largest Camera Brand</h1>
              </div>
              <div>
                <FaArrowCircleRight className="text-2xl"></FaArrowCircleRight>
              </div>
            </div>
          </div>
        </div>
        </Link>

        {/* card 6 */}
        <Link to="/leica" className="hover:scale-105 duration-200">
        <div className="h-96 card card-compact bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://4.img-dpreview.com/files/p/E~TS940x788~articles/5995781784/Leica_M11_beauty.jpeg"
              alt="leica camera"
            />
          </figure>
          <div className="card-body">
            <div className="flex justify-between items-center text-lg gap-8">
              <div className="flex items-center gap-2">
                <h1>Leica: The World Largest Camera Brand</h1>
              </div>
              <div>
                <FaArrowCircleRight className="text-2xl"></FaArrowCircleRight>
              </div>
            </div>
          </div>
        </div>
        </Link>

        
      </div>
    </div>
  );
};

export default Categories;
