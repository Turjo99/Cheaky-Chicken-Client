import React from "react";

const Features = () => {
  return (
    <div className="container my-10 mx-auto bg-slate-700 p-5">
      <h1 className="text-center text-6xl my-8">Our Features</h1>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
        <div className="card">
          <div className="rounded-full">
            <img
              src="https://img.freepik.com/free-vector/way-concept-illustration_114360-1191.jpg?w=1380&t=st=1667969976~exp=1667970576~hmac=0e5fd0941118e2b2bebb208621cb6396a0c759a4dd2bf2133c2f76a26c7aeacc"
              alt=""
              className="rounded-full h-80 w-80"
            />
          </div>
          <h1 className="text-4xl text-center my-5">Fast Delivery</h1>
        </div>
        <div className="card">
          <div className="rounded-full">
            <img
              src="https://img.freepik.com/free-vector/smiling-dentist-doctor-recommending-kid-eat-apple-man-nutritionist-offering-fruit-diet-woman-patient-flat-cartoon-illustration-nutrition-healthcare-concept_74855-20721.jpg?w=900&t=st=1667970414~exp=1667971014~hmac=cb55d8dd6c399e99298c735cf343e903eb51463b7366d1239117b09d567f7e2c"
              alt=""
              className="rounded-full h-80 w-80"
            />
          </div>
          <h1 className="text-4xl text-center my-5">Hygenic on Top</h1>
        </div>
        <div className="card">
          <div className="rounded-full">
            <img
              src="https://img.freepik.com/free-photo/baked-chicken-wings-asian-style-tomatoes-sauce-plate_2829-10657.jpg?w=1380&t=st=1667970529~exp=1667971129~hmac=0b226914a64d7e61c8806f8176460304642a6be8aaa8086c815f5d67c63c105f"
              alt=""
              className="rounded-full h-80 w-80"
            />
          </div>
          <h1 className="text-4xl text-center my-5">
            Great Taste Great Quality
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Features;
