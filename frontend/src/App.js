import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Logo Section */}
        <div className="mb-8">
          <img 
            src="https://customer-assets.emergentagent.com/job_deployment-hub/artifacts/ocnxifxg_Unlearn.png" 
            alt="UNLEARN" 
            className="mx-auto h-16 md:h-20 w-auto object-contain"
          />
        </div>

        {/* Main Content Container */}
        <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 md:p-12 shadow-2xl">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 bg-yellow-500/20 border border-yellow-500/30 rounded-full px-4 py-2 mb-8">
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
            <span className="text-yellow-300 text-sm font-medium">Under Development</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Exciting</span> is Coming
          </h1>

          {/* Description */}
          <p className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed max-w-3xl mx-auto">
            We are in the process of redesigning our site for exciting new features. 
            <br className="hidden md:block" />
            Check back soon for an enhanced experience!
          </p>

          {/* Separator */}
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent mx-auto mb-8"></div>

          {/* Call to Action Section */}
          <div className="bg-gray-900/50 rounded-xl p-6 md:p-8 mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
              We're Always Looking For
            </h2>
            <p className="text-blue-300 text-lg md:text-xl font-medium mb-4">
              Brave Thinkers
            </p>
            <p className="text-gray-300 text-base md:text-lg mb-6 leading-relaxed">
              Willing to explore new ideas about <span className="text-blue-400 font-medium">Personal Development</span>, 
              <span className="text-purple-400 font-medium"> Entrepreneurship</span>, and 
              <span className="text-green-400 font-medium"> Behavioral Finance</span>.
            </p>
            <p className="text-gray-400 text-sm md:text-base mb-6">
              Early-career professionals and change-makers from all walks of life are encouraged to apply.
            </p>

            {/* CTA Button */}
            <a
              href="https://booking.apexlearn.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
            >
              <span>Apply Now</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          {/* Footer Message */}
          <div className="text-gray-500 text-sm">
            <p>Stay tuned for updates • Follow our journey</p>
          </div>
        </div>

        {/* Floating Elements for Visual Appeal */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-5 w-16 h-16 bg-green-500/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
