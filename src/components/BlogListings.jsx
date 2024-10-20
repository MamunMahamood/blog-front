import React from "react";
import { useState, useEffect } from "react";
import BlogListing from "./BlogListing";
import { Link } from "react-router-dom";

const BlogListings = ({ category = "all", isHome = false }) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("http://localhost:8000/blogs");
        const data = await res.json();
        setBlogs(data);
        setLoading(false);
      } catch (e) {
        console.log(e);
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="spinner"></div>
      </div>
    ); // Display a loading message while fetching data
  }
  // Default category is "latest"
  

  // Filter blogs based on the selected category
  const filteredBlogs =
    category === "all"
      ? blogs
      : blogs.filter((blog) => blog.category === category);

  let MainBlogs = isHome ? filteredBlogs.slice(0, 3) : filteredBlogs;

  return (
    <>
      <div>
        <section className="py-6 bg-[#ceecf5]">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              {category.toUpperCase()} BLOGS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* <!-- Blog Post Card --> */}
              {MainBlogs.map((blog) => (
                <BlogListing key={blog.id} blog={blog} />
              ))}

              {/* <!-- More Blog Post Cards --> */}
              {/* <!-- Repeat similar blocks --> */}
            </div>
            <div className="text-center">
              <Link
                to={"/blogs/category/" + category}
                className="mt-6 inline-block bg-[#3b82f6] text-white px-8 py-3 rounded-lg font-bold"
              >
                Explore Blogs
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogListings;
