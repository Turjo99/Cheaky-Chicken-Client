import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import useTitle from "../../hooks/useTitle";
import { AuthContext } from "../Context/UserContext";
import img1 from "../../img/img1.svg";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const Provider = new GoogleAuthProvider();
const Signup = () => {
  const [signError, setSignError] = useState("");
  const navigate = useNavigate();
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
            toast.success("Signup Successfull");
            setSignError("");
            navigate("/");
            // local storage is the easiest but not the best place to store jwt token
            localStorage.setItem("chicken-token", data.token);
          });

        handleUpdateProfileUser(name, img);
      })

      //Showed error message if user doesnt give valid input
      .catch((error) => setSignError(error.message));

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
      {/* {loading && (
        <div class="flex justify-center items-center">
          <div
            class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
            role="status"
          >
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      )} */}
      <div className="hero  bg-base-200 mb-10 py-5">
        <div className="hero-content flex-col lg:flex-row md:flex-row justify-center">
          <div className="text-center lg:text-left w-full">
            <img src={img1} alt="" className="  mx-auto h-fit" />
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
              <p className="text-3xl text-red-600 mt-5">{signError}</p>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
              </div>
            </form>
            <p className="text-5xl my-5 text-center">or</p>
            <button className="btn btn-secondary" onClick={handleGoogleSignIn}>
              Sign In With Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
