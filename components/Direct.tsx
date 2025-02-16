import React from "react";

function Direct() {
  return (
    <div className="flex justify-around h-auto items-center">
      <div className="h-[500px] w-full bg-gallery bg-center bg-cover">1</div>
      <div className="relative h-[500px] w-full bg-review bg-center bg-cover flex items-center justify-center">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 text-center text-introWhite px-6">
          <h1 className="text-4xl font-inria font-bold drop-shadow-lg">
            Wish to leave a review on{" "}
            <span className="text-yellow">GUAVA FARM</span>?
          </h1>
          <p className="text-lg mt-3 opacity-80">
            Join our community and share your experience!
          </p>

          {/* Sign Up / Sign In Button */}
          <button className="mt-6 bg-yellow text-black font-bold py-3 px-6 rounded-xl shadow-lg hover:bg-opacity-90 transition-all duration-300">
            <a href="/sign-up">Sign Up </a>/ <a href="/sign-in">Sign In</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Direct;
