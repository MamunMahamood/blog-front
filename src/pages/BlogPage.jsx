import React from "react";
import Blog from "../components/Blog";
import { useParams } from 'react-router-dom'

const BlogPage = () => {
    const { id } = useParams();
  return (
    <>
      <div>
        <Blog id={id}/>
      </div>
    </>
  );
};

export default BlogPage;
