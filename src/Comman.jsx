import React,{useEffect} from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import gsap from "gsap";

const Page = (props) => {
  useEffect(()=>{
    let textAnimation = gsap.timeline();

    textAnimation.from('.name',{
      x:-900,
      delay:1,
    })

    textAnimation.from('.img',{
      x:900,
    })
  })
  return (
    <>
      <>
        <section id="header" className=" d-flex align-items-center" >
          <div className=" container-fluid">
            <div className="row mt-5">
              <div className=" col-10  mx-auto">
                <div className="row">
                
                  <div className=" name col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 my-4 d-flex justify-content-center flex-column" >
                    <h1>{props.title} <strong>Dipan.</strong> </h1>
                    <h4 className="my-3" >We are the team of Developer Making Websites.</h4>
                    <div className=" mt-3">
                      <NavLink to={props.link} className="btn btn-danger">{props.btn}</NavLink>
                    </div>
                  </div>

                  <div className="animated col-lg-6 order-1 order-lg-2 header-img">
                    <img src={props.img} className="img-fluid img" alt="Home Img " />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </>
  );
};

export default Page;
