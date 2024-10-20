import React from "react";
import Blogs from "../blogs.json";

const Blog = ({ id }) => {
  const blog = Blogs.blogs.find((blog) => blog.id === parseInt(id));

  const dateraw = new Date(blog.published_at);
  let date = dateraw.toUTCString();

  return (
    <>
      <div>
        <section className="py-10">
          <div className="container mx-auto">
            <div className="bg-white p-8 shadow-lg rounded-lg">
                <img src={blog.image_url} alt="" className="w-full h-64 object-cover"/>
              <h1 className="text-4xl font-bold mb-4 mt-10">{blog.title}</h1>
              <p className="text-gray-700 mb-4">
                Published on: <span className="text-gray-500">{date}</span>
              </p>
              <p className="text-gray-700">
                {blog.content}
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Blog;
