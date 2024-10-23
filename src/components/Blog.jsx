import React, { useState, useEffect } from "react";

const Blog = ({ id }) => {
  const [blog, setBlog] = useState(null);

  console.log("Current ID:", id);  // Logging the ID passed as a prop

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(`http://localhost:8000/blogs/${id}`);
        const data = await res.json();
        // console.log("Fetched Blog Data:", data);  // Log the fetched blog data
        setBlog(data);
      } catch (e) {
        console.log("Error fetching blog:", e);
      }
    };
    fetchBlog();
  }, [id]);  // Ensure that useEffect is triggered when id changes

  // console.log("Blog Data State:", blog);  // Logging the blog data state

  // Conditional render to avoid accessing properties on null
  if (!blog) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="spinner"></div>
      </div>
    ); // Display a loading message while fetching data
  }

  // Format the blog's published date
  const dateraw = new Date(blog.published_at);
  let date = dateraw.toUTCString();

  return (
    <>
      <div>
        <section className="py-10">
          <div className="container mx-auto">
            <div className="bg-white p-8 shadow-lg rounded-lg">
              <img src={blog.image_url} alt="" className="w-full h-64 object-cover" />
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
