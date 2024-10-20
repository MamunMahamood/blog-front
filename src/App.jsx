import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import React from "react";

import MainLayouts from './layouts/MainLayouts';
import AdminLayouts from './layouts/AdminLayouts';
import HomePage from './pages/HomePage';
import BlogsPage from './pages/BlogsPage';
import BlogPage from './pages/BlogPage';
import NotFound from './components/NotFound';
import DashboardPage from './pages/admin/DashboardPage';
import UserManage from './components/admin/UserManage';
import PostManage from './pages/admin/PostManage';
import LoginPage from './pages/user/LoginPage';
import RegisterPage from './pages/user/RegisterPage';
import AddBlogPage from './pages/AddBlogPage';






const App = () => {

  const addBlog = async (newBlog) => {
    const res = fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBlog),
    });
    return;
  
  }

  

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<MainLayouts />}>
          <Route index element={<HomePage />} />
          <Route path="blogs/category/:category" element={<BlogsPage />} />
          <Route path="blogs" element={<BlogsPage />} />
          <Route path="blogs/:id" element={<BlogPage />} />
          <Route path="*" element={<NotFound />} />
          {/* Uncomment to use AddJobPage */}
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="addBlog" element={<AddBlogPage addBlogSubmit={addBlog}/>} />
        </Route>
  
        <Route path="/admin" element={<AdminLayouts />}>
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="dashboard/users" element={<UserManage />} />
          <Route path="dashboard/posts" element={<PostManage />} />
        </Route>
      </>
    )
  );

  
  return (
    <RouterProvider router={router} />
  );
};

export default App;
