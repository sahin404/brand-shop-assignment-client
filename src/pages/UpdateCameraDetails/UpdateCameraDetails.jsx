import { useLoaderData } from "react-router-dom";
import Navbar from "../../SharedComponents/Navbar/Navbar";
import Swal from "sweetalert2";

const UpdateCameraDetails = () => {
  const camera = useLoaderData();
  const { _id, brand_name, name, price, type, photo, description } = camera;
  // console.log(camera);

  const handleAddProduct = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const price = e.target.price.value;
    const brand_name = e.target.brand_name.value;
    const type = e.target.type.value;
    const description = e.target.description.value;
    const updatedInformation = {
      name,
      photo,
      price,
      brand_name,
      type,
      description,
    };

    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/update/${_id}`, {
          method: "put",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(updatedInformation),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount > 0) {
              Swal.fire("Saved!", "", "success");
            }
          });
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      <div className="w-2/4 bg-lime-500 p-5 mx-auto mt-10">
        <form onSubmit={handleAddProduct}>
          <h1 className="text-center text-2xl font-bold mb-5">
            Update Your Product Information
          </h1>
          <div className="flex gap-5">
            <div className="flex-1">
              <label>Name </label>
              <div>
                <input
                  defaultValue={name}
                  required
                  className="w-full p-1"
                  placeholder="write camera name"
                  type="text"
                  name="name"
                />
              </div>
            </div>
            <div className="flex-1">
              <label>Photo URL</label>
              <div>
                <input
                  defaultValue={photo}
                  required
                  className="w-full p-1"
                  placeholder="camera photo url"
                  type="text"
                  name="photo"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-5 gap-5">
            <div>
              <label>Price </label>
              <input
                defaultValue={price}
                required
                placeholder="write camera price"
                className="p-1"
                type="text"
                name="price"
              />
            </div>
            <div></div>
            <div className="flex gap-5">
              <div className="flex-1">
                <label>Brand Name </label>
                <select
                  defaultValue={brand_name}
                  required
                  className="p-1 w-full"
                  name="brand_name"
                >
                  <option value="sony">Sony</option>
                  <option value="canon">Canon</option>
                  <option value="nikon">Nikon</option>
                  <option value="fujifilm">Fujifilm</option>
                  <option value="camasonic">Camasonic</option>
                  <option value="leica">Leica</option>
                </select>
              </div>
              <div className="flex-1">
                <label>Types </label>
                <select
                  defaultValue={type}
                  required
                  className="p-1 w-full"
                  name="type"
                >
                  <option value="dslr">DSLR</option>
                  <option value="mirrorless">Mirrorless</option>
                  <option value="digital">Digital</option>
                </select>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <label>Description</label>
            <div>
              <textarea
                defaultValue={description}
                required
                placeholder="write camera description"
                name="description"
                className="w-full p-1"
              ></textarea>
            </div>
          </div>
          <div>
            <input
              className="btn btn-block mt-5 bg-black text-white"
              type="submit"
              value="Update Camera"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCameraDetails;
