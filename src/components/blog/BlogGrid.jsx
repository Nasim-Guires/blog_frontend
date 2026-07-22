import BlogCard from "./BlogCard";

function BlogGrid({ blogs }) {
    console.log("blog",blogs)
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {blogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
}

export default BlogGrid;
