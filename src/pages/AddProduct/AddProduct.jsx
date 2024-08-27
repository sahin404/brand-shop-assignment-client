import Swal from "sweetalert2";
import Navbar from "../../SharedComponents/Navbar/Navbar";

const AddProduct = () => {
  const handleAddProduct = e=>{
    e.preventDefault();
    const name = e.target.name.value;
    const photo= e.target.photo.value;
    const price= e.target.price.value;
    const brand_name = e.target.brand_name.value;
    const type = e.target.type.value;
    const description = e.target.description.value; 

    const newCamera = {name, photo,price, brand_name,type, description};
    // console.log(newCamera);
    fetch('http://localhost:5000/cameras', {
      method:'post',
      headers:{
        'content-type':'application/json'
      },
      body: JSON.stringify(newCamera)
    })
    .then(res=>res.json())
    .then(data=>{
      // console.log(data);
      if(data.acknowledged){
        Swal.fire({
          title: "New Camera Successfully Added!",
          showClass: {
            popup: `
              animate__animated
              animate__fadeInUp
              animate__faster
            `
          },
          hideClass: {
            popup: `
              animate__animated
              animate__fadeOutDown
              animate__faster
            `
          }
        });
        e.target.reset();
      }
    })
  }
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      <div className="w-2/4 bg-lime-500 p-5 mx-auto mt-10">
        <form onSubmit={handleAddProduct}>
          <h1 className="text-center text-2xl font-bold mb-5">
            Add Your Products
          </h1>
          <div className="flex gap-5">
            <div className="flex-1">
              <label>Name </label>
              <div>
                <input
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
                <select required className="p-1 w-full" name="brand_name">
                  <option value="sony">Sony</option>
                  <option value="canon">Canon</option>
                  <option value="nikon">Nikon</option>
                  <option value="fujifilm">Fujifilm</option>
                  <option value="camasonic">Camasonic</option>
                  <option value="leica">Leica</option>
                </select>
              </div>
              <div  className="flex-1">
                <label>Types </label>
                <select required className="p-1 w-full" name="type">
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
              <textarea required placeholder="write camera description" name="description" className="w-full p-1"></textarea>
            </div>
          </div>
          <div>
            <input className="btn btn-block mt-5 bg-black text-white" type="submit" value="Add Camera" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
