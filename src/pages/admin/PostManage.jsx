import React from "react";
import { Link } from "react-router-dom";

const PostManage = () => {
  return (
    <>
      <div class="flex-grow p-8">
        <h1 class="text-3xl font-bold mb-6">Manage Posts</h1>
        <div class="mb-4">
          <Link
            to="create-post.html"
            class="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Create New Post
          </Link>
        </div>
        <table class="min-w-full bg-white border border-gray-300">
          <thead>
            <tr class="bg-gray-200">
              <th class="py-2 px-4 border-b">Title</th>
              <th class="py-2 px-4 border-b">Author</th>
              <th class="py-2 px-4 border-b">Published At</th>
              <th class="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="py-2 px-4 border-b">First Post</td>
              <td class="py-2 px-4 border-b">Admin</td>
              <td class="py-2 px-4 border-b">2024-08-20</td>
              <td class="py-2 px-4 border-b">
                <Link to="#" class="text-blue-500 hover:underline">
                  Edit
                </Link>
                <Link to="#" class="text-red-500 hover:underline ml-4">
                  Delete
                </Link>
              </td>
            </tr>
            {/* <!-- Repeat rows as needed --> */}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default PostManage;
