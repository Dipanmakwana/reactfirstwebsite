import React from "react";

const Contact = () => {
  return (
    <>
      <div className=" container-fluid">
      <h1 className=" text-center my-4 fw-bolder">Contact Us</h1>
        <div className="row">
          <div className="col-10 mx-auto">
          <form>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Full Name</label>
              <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Name" required/>
            </div>
            
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="email@gmail.com" required/>
              <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>

            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Mobile Number</label>
              <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Number" required/>
            </div>
            
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">Massage</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enter Your Massage Here" required></textarea>
            </div>
            <button type="submit" class="btn btn-danger">Submit</button>
          </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
