export default function Loading() {
  return (
    <div className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-white dark:bg-slate-950">
      {/* Animated ring */}
      <div className="relative w-20 h-20 mb-6">
        {/* Outer ring */}
        <svg
          className="absolute inset-0 w-full h-full animate-spin"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ animationDuration: '1.2s' }}
        >
          <circle
            cx="40"
            cy="40"
            r="34"
            stroke="url(#grad1)"
            strokeWidth="5"
            strokeLinecap="round"
            strokeDasharray="100 115"
          />
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7db82f" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
        </svg>

        {/* Inner static ring */}
        <svg
          className="absolute inset-2 w-16 h-16 opacity-20"
          viewBox="0 0 64 64"
          fill="none"
        >
          <circle cx="32" cy="32" r="26" stroke="#7db82f" strokeWidth="1.5" strokeDasharray="4 4" />
        </svg>

        {/* Center dot */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-gradient-to-br from-secondary to-blue-500 animate-pulse" />
        </div>
      </div>

      <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 tracking-widest uppercase animate-pulse">
        Loading...
      </p>
    </div>
  );
}
