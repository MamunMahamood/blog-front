import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div>
        <section className="bg-blue-500 text-white py-20">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl font-bold">Welcome to My Blog</h1>
            <p className="mt-4 text-xl">
              Read the latest articles on technology, lifestyle, and more.
            </p>
            <Link
              to="#"
              className="mt-6 inline-block bg-white text-blue-500 px-8 py-3 rounded-lg font-bold"
            >
              Explore Blogs
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Hero;
