import { useEffect, useState } from "react";

import Input from "../ui/Input";
import Textarea from "../ui/Textarea";
import Button from "../ui/Button";
import { getCategories } from "../../services/categoryService";

function BlogForm({ onSubmit, loading }) {
  const [form, setForm] = useState({
    title: "",
    slug: "",
    authorName: "",
    updatedDate: "",
    imagePath: "",
    description: "",
    categoryId: "",
  });
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategories();
        setCategories(data);
      } catch (err) {
        console.error("Failed to load categories:", err);
      }
    };

    fetchCategories();
  }, []);

  const generateSlug = (text) => {
    return text
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "")
      .replace(/--+/g, "-");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "title") {
      setForm((prev) => ({
        ...prev,
        title: value,
        slug: generateSlug(value),
      }));
      return;
    }

    setForm((prev) => ({
      ...prev,
      [name]: name === "categoryId" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.title ||
      !form.slug ||
      !form.authorName ||
      !form.updatedDate ||
      !form.imagePath ||
      !form.description ||
      !form.categoryId
    ) {
      alert("Please fill all fields.");
      return;
    }
    console.log("Form Data:", form); // 👈 Add this

    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* 2-Column Grid for Metadata */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-semibold mb-1 block text-slate-700">
            Title
          </label>
          <Input
            name="title"
            placeholder="Enter blog title"
            value={form.title}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="text-sm font-semibold mb-1 block text-slate-700">
            Author Name
          </label>
          <Input
            name="authorName"
            placeholder="Enter author name"
            value={form.authorName}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="text-sm font-semibold mb-1 block text-slate-700">
            URL Slug
          </label>
          <Input
            name="slug"
            placeholder="blog-url-slug"
            value={form.slug}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <label className="font-medium">Category</label>

          <select
            name="categoryId"
            value={form.categoryId}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          >
            <option value="">Select Category</option>

            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="text-sm font-semibold mb-1 block text-slate-700">
            Updated Date
          </label>
          <Input
            type="date"
            name="updatedDate"
            value={form.updatedDate}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="font-semibold mb-2 block">Image Path</label>

          <Input
            type="text"
            name="imagePath"
            placeholder="/images/blogs/deep-space.jpg"
            value={form.imagePath}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Full Width Compact Description */}
      <div>
        <label className="text-sm font-semibold mb-1 block text-slate-700">
          Description
        </label>
        <Textarea
          name="description"
          placeholder="Write your blog content here..."
          value={form.description}
          onChange={handleChange}
          rows={3}
          className="resize-none"
        />
      </div>

      {/* Action Button */}
      <Button
        type="submit"
        loading={loading}
        className="w-full bg-blue-600 text-white hover:bg-blue-700 py-2.5 rounded-xl shadow-md"
      >
        {loading ? "Saving..." : "Save Blog"}
      </Button>
    </form>
  );
}

export default BlogForm;
