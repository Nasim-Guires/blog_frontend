import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FaArrowLeft, FaCalendarAlt, FaUser } from "react-icons/fa";

import { getBlogBySlug } from "../services/blogService";
import { formatDate } from "../utils/formatDate";
import Loading from "../components/blog/Loading";

function BlogDetails() {
  const { categorySlug,slug } = useParams();
  console.log("BlogDetails rendered");
  console.log({ categorySlug, slug });

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log('checking',blog)

  const defaultImage =
    "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1200&auto=format&fit=crop";

useEffect(() => {
  if (categorySlug && slug) {
    // eslint-disable-next-line react-hooks/immutability
    fetchBlog();
  }
}, [categorySlug, slug]);

  const fetchBlog = async () => {
    try {
      setLoading(true);
      const response = await getBlogBySlug(categorySlug,slug);

      // Adjust this if your API response structure differs
      setBlog(response.data || response);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loading />;
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-slate-50/60 flex items-center justify-center p-6">
        <div className="bg-white p-10 rounded-3xl border border-slate-200 text-center max-w-md shadow-lg">
          <h2 className="text-2xl font-bold text-slate-800 mb-2">Article Not Found</h2>
          <p className="text-slate-500 mb-6">
            The blog post you're looking for doesn't exist or has been removed.
          </p>
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition"
          >
            <FaArrowLeft className="text-sm" />
            Back to Articles
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50/60 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link
          to="/blogs"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors mb-8 group"
        >
          <FaArrowLeft className="text-xs transition-transform group-hover:-translate-x-1" />
          <span>Back to Articles</span>
        </Link>

        {/* Main Article Container */}
        <article className="bg-white rounded-3xl border border-slate-200/80 shadow-xl overflow-hidden">
          {/* Cover Image Banner */}
          <div className="w-full h-72 sm:h-96 bg-slate-100 relative">
            <img
              src={blog.image_path || blog.image || defaultImage}
              alt={blog.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = defaultImage;
              }}
            />
          </div>

          {/* Article Header & Content */}
          <div className="p-8 sm:p-12">
            {/* Title */}
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight mb-6">
              {blog.title}
            </h1>

            {/* Author & Meta Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-slate-100 mb-8 text-sm text-slate-600">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-sm">
                  {blog.author_name?.charAt(0).toUpperCase() || "A"}
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider font-semibold text-slate-400">
                    Written by
                  </p>
                  <p className="font-semibold text-slate-900">
                    {blog.authorName || "Anonymous"}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-full border border-slate-200/60 text-slate-500 font-medium">
                <FaCalendarAlt className="text-blue-600 text-xs" />
                <span>{formatDate(blog.updated_date || blog.updatedDate)}</span>
              </div>
            </div>

            {/* Article Content / Description */}
            <div className="prose max-w-none text-slate-700 leading-relaxed text-lg sm:text-xl font-normal whitespace-pre-line">
              {blog.description}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

export default BlogDetails;