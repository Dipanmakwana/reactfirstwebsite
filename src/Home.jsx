import React from "react";
import web from '../src/Images/img2.jpg';
import Page from "./Comman";

const obj = {
  title : "Grow Youur Business With ",
  src : web,
  btn : "Get Started",
  visit:"/service"
}

const Home = () => {
  return (
    <>
     <Page title={obj.title} img={obj.src} btn={obj.btn} link={obj.visit} />
    </>
  );
};

export default Home;
