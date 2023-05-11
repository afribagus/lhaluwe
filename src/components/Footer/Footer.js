import React from "react";
import "../Footer/footer.css";
import logo from "../../assets/CPLogo.webp";
import { Link } from "react-router-dom";
import {BsInstagram, BsTwitter, BsYoutube, BsEnvelope, BsTelephone} from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="footer">
      <br />
      <div className="container">
        <div className="row">
          <div className='footer container-fluid'>
            <div>
              <Link className="navbar-brand d-flex align-items-center justify-content-center" to="/">
                <img src={logo} alt="logo" height="40" className="me-2" />
                <span className="fw-bold fs-2 logo-color" text-align-center>
                  Lha.Luwe
                </span>
              </Link>
            </div>
            <div className='row'>
              <span></span>
                <div className='col-12 col-md-6 col-lg-6'>
                    <h3 className='mb-3 d-flex align-item-center justify-content-center'>Discover More</h3>
                    <ul className='follow d-flex align-item-center justify-content-center'>
                        <li><BsInstagram style={{color: 'white'}} size={20}/><a
                    href="https://www.instagram.com/afri_kim/"
                    className="text-decoration-none text-white ms-1"
                  >
                    afri_kim
                  </a></li>
                        <li><BsTwitter style={{color: 'white'}} size={20}/> @Lha.Luwe</li>
                        <li><BsYoutube style={{color: 'white'}} size={20}/> Lha.Luwe</li>
                    </ul>
                </div>
                <div className='col-12 col-md-6 col-lg-6'>
                    <h3 className='mb-3 d-flex align-item-center justify-content-center'>More Info</h3>
                    <ul className='contact d-flex align-item-center justify-content-center'>
                        <li><BsEnvelope style={{color: 'white'}} size={20}/> Lha.Luwe@gmail.com</li>
                        <li><BsTelephone style={{color: 'white'}} size={20}/> +62-8515-9887-585</li>
                    </ul>
                </div>
            </div>
            <div className='row mt-5 d-flex align-item-center justify-content-center text-center'>Copyright &copy; 2023 by Bagus Afrianto FE-12. All Rights Reserved.</div>
        </div>
        </div>
        <br />
      </div>
    </footer>
  );
};

export default Footer;
