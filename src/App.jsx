import { Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";

import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import AddBlog from "./pages/AddBlog";
import NotFound from "./pages/NotFound";
import BlogDetails from "./pages/BlogDetails";

function App() {
  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:slug" element={<BlogDetails />} />

        <Route path="/blogs/:categorySlug/:slug" element={<BlogDetails />} />

        <Route path="/add-blog" element={<AddBlog />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
