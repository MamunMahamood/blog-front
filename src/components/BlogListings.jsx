import React from "react";
import Blogs from "../blogs.json";
import BlogListing from "./BlogListing";
import { Link } from "react-router-dom";

const BlogListings = ({ category = "all", isHome = false }) => {
  // Default category is "latest"
  const blogs = Blogs.blogs;

  // Filter blogs based on the selected category
  const filteredBlogs = category==='all' ? blogs :  blogs.filter((blog) => blog.category === category);

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
                <BlogListing key={blog.id} blog = {blog}/>
              ))}

              {/* <!-- More Blog Post Cards --> */}
              {/* <!-- Repeat similar blocks --> */}
            </div>
            <div className="text-center">
              <Link
                href={'/blogs/category/'+category}
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
