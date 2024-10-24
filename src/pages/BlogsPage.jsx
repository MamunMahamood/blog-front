import React from 'react'
import { useParams } from 'react-router-dom'
import BlogListings from '../components/BlogListings';

const BlogsPage = () => {
  // console.log(token);
    const { category } = useParams();
  return (
    <>
    <div>
        { category ? <BlogListings category={category}/>: <BlogListings/> }
    </div>
    </>
  )
}

export default BlogsPage