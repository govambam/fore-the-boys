import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Trophy, Menu, X, ChevronDown } from "lucide-react";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('[data-dropdown="courses"]')) {
        setCoursesDropdownOpen(false);
      }
    };

    if (coursesDropdownOpen) {
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }
  }, [coursesDropdownOpen]);

  return (
    <nav className="bg-white/90 backdrop-blur-md border-b border-masters-green/20 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Trophy className="h-8 w-8 text-masters-gold" />
            <Link to="/">
              <h1 className="font-serif text-xl md:text-2xl font-bold text-masters-green-deep hover:text-masters-gold transition-colors duration-300">
                Fore the Boy
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className="text-foreground hover:text-golf-green transition-colors"
            >
              Home
            </Link>

            {/* Courses Dropdown */}
            <div className="relative" data-dropdown="courses">
              <button
                className="flex items-center space-x-1 text-foreground hover:text-golf-green transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  setCoursesDropdownOpen(!coursesDropdownOpen);
                }}
                type="button"
              >
                <span>Courses</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${coursesDropdownOpen ? "rotate-180" : ""}`}
                />
              </button>

              {coursesDropdownOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-golf-green/10 py-2 z-50"
                  onMouseDown={(e) => e.preventDefault()}
                >
                  <Link
                    to="/scarecrow"
                    className="flex items-center justify-between px-4 py-2 text-sm text-foreground hover:bg-golf-green/5 hover:text-golf-green transition-colors"
                    onClick={() => setCoursesDropdownOpen(false)}
                  >
                    <span>Scarecrow</span>
                    <span className="text-xs text-muted-foreground">
                      Round 1
                    </span>
                  </Link>
                  <Link
                    to="/gamble-sands"
                    className="flex items-center justify-between px-4 py-2 text-sm text-foreground hover:bg-golf-green/5 hover:text-golf-green transition-colors"
                    onClick={() => setCoursesDropdownOpen(false)}
                  >
                    <span>Gamble Sands</span>
                    <span className="text-xs text-muted-foreground">
                      Round 2
                    </span>
                  </Link>
                  <Link
                    to="/quicksands"
                    className="flex items-center justify-between px-4 py-2 text-sm text-foreground hover:bg-golf-green/5 hover:text-golf-green transition-colors"
                    onClick={() => setCoursesDropdownOpen(false)}
                  >
                    <span>Quicksands</span>
                    <span className="text-xs text-muted-foreground">
                      Round 3
                    </span>
                  </Link>
                  <hr className="my-2 border-golf-green/10" />
                  <Link
                    to="/"
                    className="flex items-center justify-between px-4 py-2 text-sm text-foreground hover:bg-golf-green/5 hover:text-golf-green transition-colors"
                    onClick={() => {
                      setCoursesDropdownOpen(false);
                      setTimeout(() => {
                        document
                          .getElementById("courses")
                          ?.scrollIntoView({ behavior: "smooth" });
                      }, 100);
                    }}
                  >
                    <span>View All Courses</span>
                    <span className="text-xs text-muted-foreground">
                      Overview
                    </span>
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/scoring"
              className="text-foreground hover:text-golf-green transition-colors"
            >
              Scoring & Rules
            </Link>
            <Link
              to="/leaderboard"
              className="text-foreground hover:text-golf-green transition-colors"
            >
              Leaderboard
            </Link>
            <Link
              to="/inn"
              className="text-foreground hover:text-golf-green transition-colors"
            >
              Inn
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-golf-green-dark"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-golf-green/10">
            <div className="flex flex-col space-y-3 pt-4">
              <Link
                to="/"
                className="text-foreground hover:text-golf-green transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <div className="space-y-2">
                <div className="text-golf-green-dark font-semibold py-2">
                  Courses
                </div>
                <Link
                  to="/scarecrow"
                  className="flex items-center justify-between text-foreground hover:text-golf-green transition-colors py-2 pl-4"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>Scarecrow</span>
                  <span className="text-xs text-muted-foreground">Round 1</span>
                </Link>
                <Link
                  to="/gamble-sands"
                  className="flex items-center justify-between text-foreground hover:text-golf-green transition-colors py-2 pl-4"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>Gamble Sands</span>
                  <span className="text-xs text-muted-foreground">Round 2</span>
                </Link>
                <Link
                  to="/quicksands"
                  className="flex items-center justify-between text-foreground hover:text-golf-green transition-colors py-2 pl-4"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>Quicksands</span>
                  <span className="text-xs text-muted-foreground">Round 3</span>
                </Link>
                <Link
                  to="/"
                  className="flex items-center justify-between text-foreground hover:text-golf-green transition-colors py-2 pl-4"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setTimeout(() => {
                      document
                        .getElementById("courses")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }, 100);
                  }}
                >
                  <span>View All Courses</span>
                  <span className="text-xs text-muted-foreground">
                    Overview
                  </span>
                </Link>
              </div>
              <Link
                to="/scoring"
                className="text-foreground hover:text-golf-green transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Scoring & Rules
              </Link>
              <Link
                to="/leaderboard"
                className="text-foreground hover:text-golf-green transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Leaderboard
              </Link>
              <Link
                to="/inn"
                className="text-foreground hover:text-golf-green transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Inn
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
