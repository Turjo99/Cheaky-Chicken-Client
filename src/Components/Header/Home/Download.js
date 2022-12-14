import React from "react";
import img from "../../../img/img2.svg";
const Download = () => {
  return (
    <div className="w-full container mx-auto my-8">
      <div class="my w-full max-w-md mx-auto bg-slate-900 rounded-xl shadow-md overflow-hidden md:max-w-full">
        <div class="md:flex">
          <div class=" w-full">
            <img class="  object-cover " src={img} alt="A cat" className="" />
          </div>
          <div class="p-8 w-full my-auto">
            <h1 class="uppercase text-5xl font-extrabold">
              Download our mobile app
            </h1>
            <img
              src="https://freepngimg.com/thumb/android/67015-play-google-app-store-android-free-transparent-image-hd.png"
              alt=""
              className="w-2/5 mx-auto my-5"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/640px-Download_on_the_App_Store_Badge.svg.png"
              alt=""
              className="w-2/5 mx-auto my-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
