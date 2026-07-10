import React from 'react';

const ErrorMessage = ({ message }) => {
  // 1. Return null if message is empty or undefined
  if (!message) {
    return null;
  }

  return (
    // 2. Responsive red error card with dark glassmorphism integration
    <div className="w-full max-w-md mx-auto bg-red-950/20 backdrop-blur-md border border-red-900/30 rounded-xl p-4 mt-6 flex items-start gap-3 shadow-lg shadow-red-950/10">
      {/* Self-contained inline warning icon */}
      <svg
        className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        />
      </svg>
      <div className="text-sm text-red-200/90 font-medium leading-normal">
        {message}
      </div>
    </div>
  );
};

export default ErrorMessage;