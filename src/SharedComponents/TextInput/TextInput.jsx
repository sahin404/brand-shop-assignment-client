import { FaCamera } from "react-icons/fa";

const TextInput = () => {
  return (
    <div className="my-16 bg-orange-400">
      <div className=" py-10 flex max-w-7xl mx-auto gap-16 items-center">
        <div className="flex-1 text-center space-y-3">
          <FaCamera className="mx-auto text-blue-700 text-5xl"></FaCamera>
          <h1 className="text-blue-600 text-3xl">Camera Hut</h1>
          <p>
            Explore our premier camera brand website, where you can find and
            purchase top-tier cameras and accessories from leading brands like
            Canon, Nikon, and Sony. Whether youre a professional or an
            enthusiast, we offer the tools you need to capture stunning photos.
            Shop now for quality and reliability you can trust.
          </p>
        </div>

        <div className="flex-1 space-y-2">
          <h1>Your Name</h1>
          <input className="w-full p-2 rounded-lg" type="text" name="" placeholder="write your name" />
          <h1>Your Email</h1>
          <input className="w-full p-2 rounded-lg" type="text" name="" placeholder="write your name" />
          <h1>Your Comment</h1>
          <textarea
            placeholder="write your comment"
            className="textarea textarea-bordered textarea-lg w-full"
          ></textarea>
          <button className="btn btn-neutral w-full" >Submit</button>
        </div>
      </div>
    </div>
  );
};

export default TextInput;
