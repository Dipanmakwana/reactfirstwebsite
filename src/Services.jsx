import React from "react";
import Card from "./Card";

const Service = () => {

  const info = [
    { title : "Web Development", src:"https://source.unsplash.com/300x300/?webdeveloper"},
    {title : 'App Development', src:" https://source.unsplash.com/300x300/?computer"},
    {title : 'Game Development', src:"https://source.unsplash.com/300x300/?game"},
    {title : 'UI/UX Disigner', src:"https://source.unsplash.com/300x300/?designer"},
    {title : 'Flutter Developer', src:"https://source.unsplash.com/300x300/?flutter"},
    {title : 'Mern Stack Developer', src:"https://source.unsplash.com/300x300/?backend"},
    { title : "Ethical Hacking", src:"https://source.unsplash.com/300x300/?hacker"},
    {title : 'Python developer', src:" https://source.unsplash.com/300x300/?python"},
    {title : 'Java Developer', src:"https://source.unsplash.com/300x300/?java"},
  ];
  return (
    <>
      
      <div className="my-5 position-relative">
        <h1 className=" heading text-center fw-bolder">Out Services</h1>
        <div className=" container-fluid">
          <div className=" row my-5">
            <div className=" col-10 mx-auto">
              <div className="row gy-5">

                {info.map((item, index)=>{
                  return(<Card key={index} title={item.title} src={item.src} />)
                })}

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
