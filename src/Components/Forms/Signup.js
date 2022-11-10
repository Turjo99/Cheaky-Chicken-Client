import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import useTitle from "../../hooks/useTitle";
import { AuthContext } from "../Context/UserContext";
const Provider = new GoogleAuthProvider();
const Signup = () => {
  // const [loading, setLoading] = useState(true);
  useTitle("SignUp");
  const { createUser, updateUserProfile, googleSignIn, loading } =
    useContext(AuthContext);
  const register = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const img = form.img.value;
    const password = form.password.value;
    const name = form.name.value;
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        const currentUser = {
          email: user.email,
        };
        fetch("https://server-sooty-two.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);

            // local storage is the easiest but not the best place to store jwt token
            localStorage.setItem("chicken-token", data.token);
          });

        handleUpdateProfileUser(name, img);
      })

      //Showed error message if user doesnt give valid input
      .catch((error) => console.log(error.message));

    const handleUpdateProfileUser = (name, img) => {
      const profile = {
        displayName: name,
        photoURL: img,
      };
      updateUserProfile(profile)
        .then(() => {})
        .catch((err) => console.error(err));
    };
  };
  const handleGoogleSignIn = () => {
    googleSignIn(Provider)
      .then((result) => {
        const user = result.user;

        const currentUser = {
          email: user.email,
        };

        console.log(currentUser);

        // get jwt token
        fetch("https://server-sooty-two.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);

            // local storage is the easiest but not the best place to store jwt token
            localStorage.setItem("chicken-token", data.token);
          });
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      {loading && (
        <div class="flex justify-center items-center">
          <div
            class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
            role="status"
          >
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      <div className="hero  bg-base-200 mb-10 py-5">
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
                  type="password"
                  placeholder="password"
                  className="input input-bordered text-5xl"
                  name="password"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
              </div>
            </form>
            <p className="text-5xl my-5 text-center">or</p>
            <button
              className="btn btn-secondary text-2xl w-full p-5 h-14"
              onClick={handleGoogleSignIn}
            >
              Sign In With Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
