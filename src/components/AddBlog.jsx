import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

  const AddBlog = ({ addBlogSubmit }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [publishedAt, setPublishedAt] = useState("");
  const [tags, setTags] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();

    const newBlog = {
      title,
      author,
      category,
      content,
      published_at: publishedAt,
      tags: tags.split(",").map((tag) => tag.trim()), // Convert comma-separated tags into an array
      image_url: imageUrl,
    };

    addBlogSubmit(newBlog);
    toast.success('Blog Created Successfully');
    return navigate('/blogs');
  };
  return (
    <>
      <div className="py-10">
        <div className="flex-grow flex items-center justify-center">
          <div className="w-full max-w-3xl bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Add New Blog
            </h2>
            <form onSubmit={submitForm} encType="multipart/form-data">
              {/* <!-- Title Input --> */}
              <div className="mb-4">
                <label
                  htmlFor="title"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Blog Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Enter blog title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              {/* <!-- Author Input --> */}
              <div className="mb-4">
                <label
                  htmlFor="author"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Author
                </label>
                <input
                  type="text"
                  id="author"
                  name="author"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Enter author's name"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                />
              </div>

              {/* <!-- Category Select --> */}
              <div className="mb-4">
                <label
                  htmlFor="category"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                >
                  <option value="" disabled>
                    Select a category
                  </option>
                  <option value="technology">Technology</option>
                  <option value="lifestyle">Lifestyle</option>
                  <option value="education">Education</option>
                  <option value="latest">Latest</option>
                  <option value="popular">Popular</option>
                </select>
              </div>

              {/* <!-- Content Textarea --> */}
              <div className="mb-4">
                <label
                  htmlFor="content"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Content
                </label>
                <textarea
                  id="content"
                  name="content"
                  rows="10"
                  required
                  
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Write your blog content here..."
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                ></textarea>
              </div>

              {/* <!-- Published Date Input --> */}
              <div className="mb-4">
                <label
                  htmlFor="published_at"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Published Date
                </label>
                <input
                  type="date"
                  id="published_at"
                  name="published_at"
                  required
                  value={publishedAt}
                  onChange={(e) => setPublishedAt(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>

              {/* <!-- Tags Input --> */}
              <div className="mb-4">
                <label
                  htmlFor="tags"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Tags (comma separated)
                </label>
                <input
                  type="text"
                  id="tags"
                  name="tags"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="e.g. Mindfulness, Health, Well-being"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                />
              </div>

              {/* <!-- Cover Image URL Input --> */}
              <div className="mb-4">
                <label
                  htmlFor="image_url"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Cover Image URL
                </label>
                <input
                  type="text"
                  id="image_url"
                  name="image_url"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Enter image URL"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                />
              </div>

              {/* <!-- Submit Button --> */}
              <div className="mb-4">
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none"
                >
                  Add Blog
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddBlog;
