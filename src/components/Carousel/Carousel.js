import React from "react";
import "../Carousel/Carousel.css";

const Carousel = () => {
  return (
    <>
      <div id="heroSlider" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item text-center bg-cover vh-100 active slide-1">
            <div className="container h-100 d-flex align-items-center justify-content-center">
              <div className="row justify-content-center">
                <p className="text">“The only real stumbling block is fear of failure. In cooking, you’ve got to have a what-the-hell attitude.”
– Julia Child</p>
              </div>
            </div>
          </div>

          <div className="carousel-item text-center bg-cover vh-100 slide-2">
            <div className="container h-100 d-flex align-items-center justify-content-center">
              <div className="row justify-content-center">
                <p className="text">Cooking is like love. It should be entered into with abandon or not at all. – Harriet Van Horne</p>
              </div>
            </div>
          </div>

          <div className="carousel-item text-center bg-cover vh-100 active slide-3">
            <div className="container h-100 d-flex align-items-center justify-content-center">
              <div className="row justify-content-center">
                <p className="text">“Cooking is at once child’s play and adult joy. And cooking done with care is an act of love.”
– Craig Claiborne</p>
              </div>
            </div>
          </div>

          <div className="carousel-item text-center bg-cover vh-100 slide-4">
            <div className="container h-100 d-flex align-items-center justify-content-center">
              <div className="row justify-content-center">
               <p className="text">“So when people ask me, ‘What do you think of Michelin?’ I don’t cook for guides. I cook for customers.”
– Gordon Ramsaym</p> 
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#heroSlider"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#heroSlider"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Carousel;
