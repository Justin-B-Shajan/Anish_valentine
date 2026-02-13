import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const pages = [
  { path: '/', name: 'Welcome', number: 1 },
  { path: '/reasons', name: 'Reasons', number: 2 },
  { path: '/gallery', name: 'Memories', number: 3 },
  { path: '/letter', name: 'Letter', number: 4 },
  { path: '/question', name: 'Question', number: 5 },
];

const Layout = ({ children }) => {
  const location = useLocation();
  const currentPageIndex = pages.findIndex((p) => p.path === location.pathname);

  return (
    <div className="min-h-screen relative">
      {/* Progress Indicator */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-soft-pink">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between mb-2">
            {pages.map((page, index) => (
              <div
                key={page.path}
                className={`flex-1 h-1 mx-1 rounded-full transition-all duration-300 ${index <= currentPageIndex ? 'bg-crimson' : 'bg-gray-200'
                  }`}
              />
            ))}
          </div>
          <div className="flex justify-between text-xs text-gray-600">
            {pages.map((page) => (
              <span
                key={page.path}
                className={location.pathname === page.path ? 'text-crimson font-semibold' : ''}
              >
                {page.number}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-md">
        <div className="flex gap-4 bg-white/90 backdrop-blur-md rounded-full px-4 py-2 shadow-xl border border-soft-pink justify-center">
          {currentPageIndex > 0 && (
            <Link
              to={pages[currentPageIndex - 1].path}
              className="px-6 py-3 text-crimson hover:bg-soft-pink rounded-full transition-all duration-300 font-medium text-sm md:text-base"
            >
              ← Back
            </Link>
          )}
          {currentPageIndex < pages.length - 1 && currentPageIndex !== 0 && (
            <Link
              to={pages[currentPageIndex + 1].path}
              className="px-8 py-3 bg-crimson text-white hover:bg-bright-red rounded-full transition-all duration-300 flex items-center gap-2 font-medium shadow-lg text-sm md:text-base"
            >
              Next →
            </Link>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20 pb-24">{children}</main>
    </div>
  );
};

export default Layout;
