import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh]">
      <h1 className="text-6xl font-bold text-blue-600">404</h1>

      <p className="mt-4 text-gray-600">Page not found.</p>

      <Link
        to="/"
        className="mt-8 bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700"
      >
        Go Home
      </Link>
    </div>
  );
}

export default NotFound;
