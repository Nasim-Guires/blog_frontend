import Card from "../ui/Card";
import { formatDate } from "../../utils/formatDate";
import { FaRegCalendarAlt, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function BlogCard({ blog }) {
  // Fallback image if image_path is missing or empty
  const defaultImage =
    "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=800&auto=format&fit=crop";

  return (
    <Card className="p-0 overflow-hidden group flex flex-col h-full border border-slate-200/80 hover:border-blue-200 transition-all duration-300">
      <Link
        to={
          blog.category
            ? `/blogs/${blog.categorySlug}/${blog.slug}`
            : `/blogs/${blog.slug}`
        }
        className="flex flex-col h-full"
      >
        {/* Top Image Banner */}
        <div className="relative w-full h-48 sm:h-52 bg-slate-100 overflow-hidden shrink-0">
          <img
            src={blog.image_path || blog.image || defaultImage}
            alt={blog.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = defaultImage;
            }}
          />

          {/* Date Tag Badge on Image */}
          <div className="absolute top-3 right-3 bg-slate-900/70 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5 font-medium shadow-sm">
            <FaRegCalendarAlt className="text-blue-400 text-xs" />
            <span>{formatDate(blog.updated_date || blog.updatedDate)}</span>
          </div>
        </div>

        {/* Card Body Content */}
        <div className="p-6 flex flex-col flex-grow">
          {/* Title */}
          <h2 className="text-xl font-bold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors line-clamp-2 mb-3">
            {blog.title}
          </h2>

          {/* Author Details */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-semibold text-xs shadow-sm shrink-0">
              {blog.author_name?.charAt(0).toUpperCase() || "A"}
            </div>

            <div className="min-w-0">
              <p className="text-[10px] uppercase tracking-wider font-semibold text-slate-400">
                Written by
              </p>
              <p className="text-xs font-semibold text-slate-700 truncate">
                {blog.authorName || "Anonymous"}
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="text-slate-600 text-sm leading-relaxed line-clamp-3 mb-6 flex-grow">
            {blog.description}
          </p>

          {/* Footer CTA */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-blue-600 text-sm font-semibold group-hover:text-blue-700">
            <span>Read Full Article</span>
            <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </Link>
    </Card>
  );
}

export default BlogCard;
