import { Link } from "react-router-dom";
import Button from "../components/ui/Button";

function Home() {
  return (
    <div className="relative min-h-screen bg-slate-50 flex flex-col">
      {/* Decorative Wave/Blob Pattern on Top */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-blue-100 rounded-bl-[100px] -z-10" />
      <div className="absolute top-10 right-10 w-20 h-20 bg-blue-200 rounded-full opacity-50 -z-10" />

      {/* Main Content Area */}
      <div className="flex-grow flex items-center justify-center py-20 px-6">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left Column: Text Content */}
          <div className="text-left space-y-8">
            {/* Minimalist Badge */}
            <div className="inline-block px-3 py-1 bg-sky-100 text-sky-700 rounded-full text-sm font-semibold tracking-wide">
              GLOBAL PERSPECTIVES
            </div>

            {/* Bold, Clean Typography */}
            <h1 className="text-6xl md:text-7xl font-extrabold text-slate-950 leading-tight tracking-tighter">
              Where Ideas <br />
              Find Their <span className="text-blue-600">Voice.</span>
            </h1>

            {/* Concise Subtitle */}
            <p className="text-xl md:text-2xl text-slate-700 max-w-xl font-normal leading-relaxed">
              Explore a curated collection of diverse perspectives, in-depth
              analyses, and inspiring stories.
            </p>

            {/* Call to Action Button */}
            <div className="pt-4">
              <Link to="/blogs">
                <Button className="px-10 py-5 text-xl font-bold bg-blue-600 hover:bg-blue-700 text-white rounded-2xl shadow-xl shadow-blue-200 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                  Start Reading
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column: Dynamic Visual Element */}
          <div className="relative">
            {/* Background Blob */}
            <div className="absolute inset-0 bg-blue-600 rounded-[60px] transform rotate-6 scale-105 opacity-10"></div>

            {/* Subtle Gradient Card */}
            <div className="relative z-10 p-8 bg-white border border-slate-100 rounded-[50px] shadow-2xl shadow-blue-100/50">
              <img
                src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=1200&auto=format&fit=crop"
                alt="Digital Creativity"
                className="w-full h-auto rounded-[40px] object-cover"
              />
              <div className="absolute bottom-12 right-12 p-4 bg-white rounded-full shadow-lg">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Decoration (Optional) */}
      <div className="absolute bottom-0 left-0 w-full h-1/6 bg-blue-50/50 -z-20" />
    </div>
  );
}

export default Home;
