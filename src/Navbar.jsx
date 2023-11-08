import React, { useEffect } from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import gsap from 'gsap';

const Nav = () => {
  useEffect(()=>{
    let textAnimation = gsap.timeline();

    textAnimation.from('.nav-custom',{
      y:-100,
      stagger:{
        ease:2,
      },
      delay:0.5
    })
  })
  return (
    <>
      <div className="nav-custom container-fluid position-relative">
        <div className=" row position-sticky">
          <div className=" col-10  mx-auto border-bottom border-3 ">
            <nav className="navbar navbar-expand-lg ">
              <div className="container-fluid">
                <NavLink className=" navbar-brand title fw-bold text-uppercase" to="#">
                  Dipan Makwana
                </NavLink>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink activeClassName = 'menu-active' exact className="nav-link " aria-current="page" to="/">
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink activeClassName = 'menu-active' className="nav-link" to="/about">
                        About
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink activeClassName = 'menu-active' className="nav-link" to="/service">
                        Service
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink activeClassName = 'menu-active' className="nav-link" to="/contact">
                        Contact
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
