import React from 'react'
import AddBlog from '../components/AddBlog'

const AddBlogPage = ({ addBlogSubmit }) => {
  return (
    <>
    <AddBlog addBlogSubmit={addBlogSubmit}/>
    </>
  )
}

export default AddBlogPage