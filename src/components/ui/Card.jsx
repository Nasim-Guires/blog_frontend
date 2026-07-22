function Card({ children, className = "" }) {
  return (
    <div
      className={`
        bg-white rounded-2xl 
        border border-slate-200/80 
        shadow-sm hover:shadow-xl hover:shadow-blue-500/5 
        hover:border-blue-200/80 
        p-6 sm:p-8 
        transition-all duration-300 transform hover:-translate-y-1 
        relative overflow-hidden 
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default Card;
