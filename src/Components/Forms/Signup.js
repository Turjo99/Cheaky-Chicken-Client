import React from "react";

const Signup = () => {
  const register = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const img = form.img.value;
    const password = form.password.value;
    const name = form.name.value;
    console.log(email, name, password, img);
  };
  return (
    <div>
      <div className="hero  bg-base-200 my-10 py-5">
        <div className="hero-content flex-col lg:flex-row md:flex-row justify-center">
          <div className="text-center lg:text-left ">
            <img
              src="https://img.freepik.com/free-photo/hands-holding-pizza-slices-high-angle_23-2149872428.jpg?w=1380&t=st=1667976720~exp=1667977320~hmac=aef5d2cb1aec83f42db1f6534d344717801cd7f0af10bb457d4937c6002c6ae3"
              alt=""
              className=" w-11/12 mx-auto h-fit"
            />
          </div>
          <div className="card-body  w-full  shadow-2xl bg-base-100 ">
            <h1 className="text-5xl font-bold text-center">Register now!</h1>
            <form onSubmit={register}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-5xl">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered text-5xl"
                  name="name"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-5xl">Img Url</span>
                </label>
                <input
                  type="text"
                  placeholder="ImgUrl"
                  className="input input-bordered text-5xl"
                  name="img"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-5xl">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered text-5xl"
                  name="email"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-5xl">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered text-5xl"
                  name="password"
                  required
                />
                <label className="label">
                  <a
                    href="#"
                    className="label-text-alt link link-hover text-5xl"
                  >
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
