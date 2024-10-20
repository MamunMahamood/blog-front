import React from "react";
import { Link } from "react-router-dom";

const BlogListing = ({blog}) => {
  return (
    <>
      <div>
        <div className="blog-card">
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <img src={blog.image_url} alt="" />
            <h3 className="text-2xl font-bold mb-4">{blog.title}</h3>
            <p className="text-gray-700">{blog.content}</p>
            <Link
              to={"/blogs/" + blog.id}
              className="text-blue-500 hover:underline mt-4 inline-block"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogListing;
