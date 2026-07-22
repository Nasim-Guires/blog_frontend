import { Link } from "react-router-dom";
import { FaPlus, FaSearch, FaFilter } from "react-icons/fa";

import BlogGrid from "../components/blog/BlogGrid";
import Loading from "../components/blog/Loading";
import EmptyState from "../components/blog/EmptyState";

import useBlogs from "../hooks/useBlogs";

function Blogs() {
  const { blogs, loading } = useBlogs();

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen bg-slate-50/60 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Hero Section */}
        <div className="relative bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white rounded-3xl p-8 md:p-12 mb-12 shadow-xl overflow-hidden">
          {/* Subtle Glow Accents */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 left-10 w-60 h-60 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <span className="inline-block px-3.5 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-semibold uppercase tracking-wider mb-3 backdrop-blur-md border border-blue-400/20">
                Explore Articles
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                All Published Blogs
              </h1>
              <p className="text-slate-300 mt-3 text-lg max-w-xl font-light">
                Discover compelling stories, expert tutorials, and fresh
                perspectives from our community.
              </p>
            </div>

            {/* Action Button */}
            <Link
              to="/add-blog"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3.5 rounded-xl shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 shrink-0 self-start md:self-auto"
            >
              <FaPlus className="text-sm" />
              <span>Create Blog</span>
            </Link>
          </div>
        </div>

        {/* Toolbar: Search, Filter, and Stats Indicator */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8">
          {/* Search Bar */}
          <div className="relative flex-1 max-w-md">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
            <input
              type="text"
              placeholder="Search articles by title or keyword..."
              className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 shadow-sm transition"
            />
          </div>

          {/* Right Meta Info */}
          <div className="flex items-center justify-between sm:justify-end gap-3 text-sm text-slate-500 font-medium">
            <span className="bg-white px-4 py-2.5 rounded-xl border border-slate-200 shadow-sm">
              Total Articles:{" "}
              <strong className="text-slate-900">{blogs.length}</strong>
            </span>
          </div>
        </div>

        {/* Blog Cards Grid / Empty State */}
        <div className="transition-all duration-300">
          {blogs.length === 0 ? (
            <div className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm">
              <EmptyState />
            </div>
          ) : (
            <BlogGrid blogs={blogs} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Blogs;
