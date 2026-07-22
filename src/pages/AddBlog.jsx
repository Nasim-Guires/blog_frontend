import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaArrowLeft, FaPenNib } from "react-icons/fa";

import BlogForm from "../components/blog/BlogForm";
import { createBlog } from "../services/blogService";

function AddBlog() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const handleCreateBlog = async (blog) => {
    console.log("Sending to backend:", blog); // 👈 Add this

    try {
      setLoading(true);
      setErrorMsg(null);

      await createBlog(blog);

      navigate("/blogs");
    } catch (error) {
      console.error(error);
      setErrorMsg(
        "Failed to create blog. Please check your inputs and try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-slate-50/60 py-12 px-6">
      <div className="max-w-3xl mx-auto pb-16">
        {/* Back Button */}
        <Link
          to="/blogs"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors mb-6 group"
        >
          <FaArrowLeft className="text-xs transition-transform group-hover:-translate-x-1" />
          <span>Back to Articles</span>
        </Link>

        {/* Main Card Container */}
        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xl p-8 sm:p-12 relative">
          {/* Top Decorative Glow Accent */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Header Content */}
          <div className="relative z-10 mb-8 border-b border-slate-100 pb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
              <FaPenNib className="text-xs" />
              <span>Editor Studio</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Create New Blog Post
            </h1>

            <p className="text-slate-500 mt-2 text-base font-light">
              Fill in the form below to craft and publish your story to the
              community.
            </p>
          </div>

          {/* Inline Error Alert */}
          {errorMsg && (
            <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm font-medium flex items-center justify-between">
              <span>{errorMsg}</span>
              <button
                onClick={() => setErrorMsg(null)}
                className="text-red-500 hover:text-red-700 font-bold ml-4"
              >
                ✕
              </button>
            </div>
          )}

          {/* Form Component */}
          <div className="relative z-10">
            <BlogForm onSubmit={handleCreateBlog} loading={loading} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddBlog;
