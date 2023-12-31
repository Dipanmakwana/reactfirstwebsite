import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const Card = (props) =>{
    return(
        <>
            <div className=" col-md-4 col-10 mx-auto " >
                <div class="card flex-wrap" style={{width: '18rem'}}>
                <img src={props.src} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{props.title}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <NavLink to="/contact" class=" w-100 btn btn-danger">Click Here</NavLink>
                </div>
                </div>
            </div>
        </>
    )
}

export default Card;