import React from "react";

const Hero = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://img.freepik.com/free-photo/crispy-fried-chicken-plate-with-salad-carrot_1150-20212.jpg?w=1380&t=st=1667845946~exp=1667846546~hmac=db661ae13b8e6667d1acfa5b457283d802bf899267caa513786261eaa3148fc1")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-6xl font-bold">Cheaky Chicken</h1>
            <p className="mb-5 text-2xl">
              The Best Cloud Kitchen Focusing Only On Your Favourite Chicken
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
