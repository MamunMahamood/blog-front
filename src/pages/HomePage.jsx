import React from "react";


import Hero from "../components/Hero";
import BlogListings from "../components/BlogListings";
import Footer from "../components/Footer";
import Blogs from "../blogs.json";

const HomePage = () => {
    // Get all categories from blogs
  const allCategories = Blogs.blogs.map(blog => blog.category);

  // Create a Set to get unique categories
  const uniqueCategories = [...new Set(allCategories)];
  return (
    <>
      <div>
        <Hero />
        {uniqueCategories.map((category, index) => (
          <BlogListings key={index} category={category}  isHome={true}/>
          
        ))}
        
       
      </div>
    </>
  );
};

export default HomePage;
