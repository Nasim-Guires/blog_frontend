import { FaSpinner } from "react-icons/fa";

function Button({
  children,
  className = "",
  type = "button",
  onClick,
  disabled = false,
  loading = false,
  variant = "primary", // "primary" | "secondary" | "outline" | "ghost"
  size = "md", // "sm" | "md" | "lg"
  ...props
}) {
  // Variant styles
  const variants = {
    primary:
      "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30",
    secondary:
      "bg-slate-900 hover:bg-slate-800 text-white shadow-lg shadow-slate-900/20",
    outline:
      "bg-transparent border border-slate-300 text-slate-700 hover:bg-slate-100/80 hover:border-slate-400",
    ghost:
      "bg-transparent text-slate-600 hover:bg-slate-100 hover:text-slate-900",
  };

  // Size styles
  const sizes = {
    sm: "px-4 py-2 text-sm rounded-lg",
    md: "px-6 py-3 text-base rounded-xl",
    lg: "px-8 py-4 text-lg rounded-xl",
  };

  const isButtonDisabled = disabled || loading;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isButtonDisabled}
      className={`
        inline-flex items-center justify-center gap-2 font-semibold 
        transition-all duration-200 cursor-pointer
        active:scale-[0.98] 
        focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2
        disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none
        ${variants[variant] || variants.primary}
        ${sizes[size] || sizes.md}
        ${className}
      `}
      {...props}
    >
      {loading ? (
        <>
          <FaSpinner className="animate-spin text-current text-lg" />
          <span>Loading...</span>
        </>
      ) : (
        children
      )}
    </button>
  );
}

export default Button;
