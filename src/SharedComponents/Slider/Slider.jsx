const Slider = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://img.freepik.com/free-photo/close-up-camera-with-beautiful-background_23-2148258823.jpg?t=st=1724767229~exp=1724770829~hmac=5811a7f19d30b132238df148eaa6bef4b0b27c2fa47e35408456f5e73e89c6c2&w=996"
          className="w-full h-96"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://img.freepik.com/free-photo/front-view-camera-device-standing-board_23-2148300663.jpg?t=st=1724767350~exp=1724770950~hmac=598ff4fc757fc4ce0d4d9fc6526a341ab2e08ba99cc0decdd51d1459bcd32937&w=996"
          className="w-full h-96"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://img.freepik.com/free-photo/front-view-binocular-newspaper_23-2148300684.jpg?t=st=1724767406~exp=1724771006~hmac=4899a977c07d62d33793c72a46c0a5c71cb43ffa61aadd735079eb24d9ef1afc&w=996"
          className="w-full h-96"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
          className="w-full"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Slider;
