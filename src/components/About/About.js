import React from "react";
import "../About/About.css";
import about from "../../assets/about.webp";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <section
        className="container-fluid p-home p-responsive"
      >
        <div className="row align-items-center g-lg-5 g-md-4 g-4">
          <div className="col-lg-4 col-md-5 col-12 text-center">
            <img
              className="rounded-5 img-fluid img-about w-200"
              src={about}
              alt="about"
            />
          </div>
          <div className="col-lg-6 col-md-7 col-12">
            <h1
              className="title text-start"
              style={{ marginLeft: "-10px" }}
            >
              About Us
            </h1>
            <div className="mt-3">
              <p className="about-lh fs-6">
                Lha.Luwe adalah situs kumpulan resep masakan rumahan mudah dan praktis. khusus dibuat untuk membantu ibu-ibu yang terkadang suka bingung akan menu masakan dan bapak-bapak pusing mikir cara masak saat istri lagi pulang ke rumah mertua :)
              </p>
              <p>
                Info lengkap dapat Anda baca disini. Jangan Lupa Daftar Dulu ya..
              </p>
            </div>
            <Link style={{ textDecoration: "none" }} to="/our-recipes">
              <button
                type="button"
                className="btn btn-success d-flex align-items-center"
              >
                Explore Our Recipes
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
