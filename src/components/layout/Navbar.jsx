import { Link, NavLink, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  // Hide the Navbar when the user is on the Home page ("/")
  if (location.pathname === "/") {
    return null;
  }

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          Blog App
        </Link>

        <div className="flex gap-8 font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "text-gray-600 hover:text-blue-600"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/blogs"
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "text-gray-600 hover:text-blue-600"
            }
          >
            Blogs
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
