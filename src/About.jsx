import React from "react";
import Page from "./Comman";
import web from '../src/Images/about.jpg';

const obj = {
  title : "Welcome to About Page ",
  src : web,
  btn : "Contact Us",
  visit : "/contact"
}


const About = () => {
  return (
    <>
      <Page title={obj.title} img={obj.src} btn={obj.btn} link={obj.visit} />
    </>
  );
}

export default About;
