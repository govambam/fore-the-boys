import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin, Users, Trophy, Plane, Hotel, Calendar, Clock, Menu, X, ChevronDown, ExternalLink } from "lucide-react";

export default function Index() {
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
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [coursesDropdownOpen]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-golf-green/5 via-background to-golf-sand/10">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-golf-green/10 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Trophy className="h-8 w-8 text-golf-green" />
              <h1 className="text-xl md:text-2xl font-bold text-golf-green-dark">Patrick's Birthday Golf Trip</h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <Link to="/" className="text-foreground hover:text-golf-green transition-colors">Home</Link>
              <Link to="/scoring" className="text-foreground hover:text-golf-green transition-colors">Scoring & Rules</Link>

              {/* Courses Dropdown */}
              <div
                className="relative"
                data-dropdown="courses"
              >
                <button
                  className="flex items-center space-x-1 text-foreground hover:text-golf-green transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    setCoursesDropdownOpen(!coursesDropdownOpen);
                  }}
                  type="button"
                >
                  <span>Courses</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${coursesDropdownOpen ? 'rotate-180' : ''}`} />
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
                      <span className="text-xs text-muted-foreground">Round 1</span>
                    </Link>
                    <Link
                      to="/gamble-sands"
                      className="flex items-center justify-between px-4 py-2 text-sm text-foreground hover:bg-golf-green/5 hover:text-golf-green transition-colors"
                      onClick={() => setCoursesDropdownOpen(false)}
                    >
                      <span>Gamble Sands</span>
                      <span className="text-xs text-muted-foreground">Round 2</span>
                    </Link>
                    <Link
                      to="/quicksands"
                      className="flex items-center justify-between px-4 py-2 text-sm text-foreground hover:bg-golf-green/5 hover:text-golf-green transition-colors"
                      onClick={() => setCoursesDropdownOpen(false)}
                    >
                      <span>Quicksands</span>
                      <span className="text-xs text-muted-foreground">Round 3</span>
                    </Link>
                    <hr className="my-2 border-golf-green/10" />
                    <a
                      href="#courses"
                      className="flex items-center justify-between px-4 py-2 text-sm text-foreground hover:bg-golf-green/5 hover:text-golf-green transition-colors"
                      onClick={() => setCoursesDropdownOpen(false)}
                    >
                      <span>View All Courses</span>
                      <span className="text-xs text-muted-foreground">Overview</span>
                    </a>
                  </div>
                )}
              </div>

              <Link to="/inn" className="text-foreground hover:text-golf-green transition-colors">Inn</Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-golf-green-dark"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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
                <Link
                  to="/scoring"
                  className="text-foreground hover:text-golf-green transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Scoring & Rules
                </Link>
                <div className="space-y-2">
                  <div className="text-golf-green-dark font-semibold py-2">Courses</div>
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
                  <a
                    href="#courses"
                    className="flex items-center justify-between text-foreground hover:text-golf-green transition-colors py-2 pl-4"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>View All Courses</span>
                    <span className="text-xs text-muted-foreground">Overview</span>
                  </a>
                </div>
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

      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-4 bg-golf-green text-white text-sm md:text-base">September 6-8, 2024</Badge>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-golf-green-dark mb-6 leading-tight">
            Patrick's Birthday
            <span className="block text-golf-green">Golf Getaway</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto px-4">
            Celebrating Patrick Triggs with an epic weekend of golf at Gamble Sands,
            featuring three incredible courses in the beautiful Columbia River Valley.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <Link to="/scoring">
              <Button
                size="lg"
                className="bg-golf-green hover:bg-golf-green-dark w-full sm:w-auto"
              >
                View Scoring Format
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-golf-green text-golf-green hover:bg-golf-green/5 w-full sm:w-auto"
              onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Courses
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="py-12 md:py-16 px-4">
        <div className="container mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <Card className="text-center border-golf-green/20 hover:shadow-lg transition-shadow">
              <CardHeader>
                <MapPin className="h-8 w-8 text-golf-green mx-auto mb-2" />
                <CardTitle className="text-lg">Location</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Brewster, Washington</p>
                <p className="text-sm text-muted-foreground">Gamble Sands Resort</p>
              </CardContent>
            </Card>

            <Card className="text-center border-golf-green/20 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-8 w-8 text-golf-green mx-auto mb-2" />
                <CardTitle className="text-lg">Players</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">4 Players</p>
                <p className="text-sm text-muted-foreground">Modified Stableford</p>
              </CardContent>
            </Card>

            <Card className="text-center border-golf-green/20 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Trophy className="h-8 w-8 text-golf-green mx-auto mb-2" />
                <CardTitle className="text-lg">Format</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Modified Stableford</p>
                <p className="text-sm text-muted-foreground">2-Man Scramble Finale</p>
              </CardContent>
            </Card>

            <Card className="text-center border-golf-green/20 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CalendarDays className="h-8 w-8 text-golf-green mx-auto mb-2" />
                <CardTitle className="text-lg">Duration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">3 Days, 2 Nights</p>
                <p className="text-sm text-muted-foreground">3 Rounds Total</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Golf Courses Section */}
      <section id="courses" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-golf-green-dark mb-4">Gamble Sands Golf Courses</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Three distinctive courses at Washington's premier golf destination, each designed to showcase the natural beauty of the Columbia River Valley.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <Link to="/scarecrow" className="group">
              <Card className="overflow-hidden border-golf-green/20 hover:shadow-xl hover:border-golf-green/40 transition-all duration-300 cursor-pointer group-hover:scale-[1.02]">
                <div className="h-48 bg-gradient-to-br from-golf-green to-golf-fairway relative">
                  <div className="absolute top-3 right-3 bg-white/90 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="h-4 w-4 text-golf-green" />
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-golf-green-dark group-hover:text-golf-green transition-colors">Scarecrow</CardTitle>
                    <ChevronDown className="h-4 w-4 text-golf-green/60 rotate-[-90deg] group-hover:translate-x-1 transition-transform" />
                  </div>
                  <CardDescription>Par 71 • 6,927 yards • Links-Style Layout</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    A stunning links-style course with dramatic elevation changes and panoramic views of the Columbia River. Features wide fairways and strategic bunkering.
                  </p>
                  <div className="flex justify-between items-center">
                    <Badge variant="secondary">Saturday 3:05 PM</Badge>
                    <span className="text-sm font-semibold text-golf-green">Round 1</span>
                  </div>
                  <div className="mt-3 text-xs text-golf-green font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Click for detailed course information →
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link to="/gamble-sands" className="group">
              <Card className="overflow-hidden border-golf-green/20 hover:shadow-xl hover:border-golf-green/40 transition-all duration-300 cursor-pointer group-hover:scale-[1.02]">
                <div className="h-48 bg-gradient-to-br from-golf-fairway to-golf-earth relative">
                  <div className="absolute top-3 right-3 bg-white/90 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="h-4 w-4 text-golf-green" />
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-golf-green-dark group-hover:text-golf-green transition-colors">Gamble Sands</CardTitle>
                    <ChevronDown className="h-4 w-4 text-golf-green/60 rotate-[-90deg] group-hover:translate-x-1 transition-transform" />
                  </div>
                  <CardDescription>Par 72 • 6,389 yards • Signature Course</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    The flagship course designed by David McLay Kidd, featuring natural sandy terrain and spectacular views. A true links experience in the heart of Washington.
                  </p>
                  <div className="flex justify-between items-center">
                    <Badge variant="secondary">Sunday 10:20 AM</Badge>
                    <span className="text-sm font-semibold text-golf-green">Round 2</span>
                  </div>
                  <div className="mt-3 text-xs text-golf-green font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Click for detailed course information →
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link to="/quicksands" className="group">
              <Card className="overflow-hidden border-golf-green/20 hover:shadow-xl hover:border-golf-green/40 transition-all duration-300 cursor-pointer group-hover:scale-[1.02]">
                <div className="h-48 bg-gradient-to-br from-golf-sand to-golf-green relative">
                  <div className="absolute top-3 right-3 bg-white/90 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="h-4 w-4 text-golf-green" />
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-golf-green-dark group-hover:text-golf-green transition-colors">Quicksands</CardTitle>
                    <ChevronDown className="h-4 w-4 text-golf-green/60 rotate-[-90deg] group-hover:translate-x-1 transition-transform" />
                  </div>
                  <CardDescription>Par 3 Course • 14 Holes • Short Course Challenge</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    An innovative par-3 course perfect for a fun finale. Each hole offers unique challenges with stunning desert and river valley views.
                  </p>
                  <div className="flex justify-between items-center">
                    <Badge variant="secondary">Sunday 5:00 PM</Badge>
                    <span className="text-sm font-semibold text-golf-green">Round 3</span>
                  </div>
                  <div className="mt-3 text-xs text-golf-green font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Click for detailed course information →
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Game Formats Section */}
      <section id="formats" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-golf-green-dark mb-4">Tournament Format</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Modified Stableford scoring system with individual competition and a team scramble finale at Quicksands.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card className="border-golf-green/20">
              <CardHeader>
                <Trophy className="h-8 w-8 text-golf-green mb-2" />
                <CardTitle>Modified Stableford Scoring</CardTitle>
                <CardDescription>Scarecrow & Gamble Sands Rounds</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Eagle</span>
                    <span className="font-semibold text-golf-green">8 points</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Birdie</span>
                    <span className="font-semibold text-golf-green">4 points</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Par</span>
                    <span className="font-semibold text-golf-green">2 points</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Bogey</span>
                    <span className="font-semibold text-golf-green">1 point</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Double Bogey+</span>
                    <span className="font-semibold text-golf-green">0 points</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-golf-green/20">
              <CardHeader>
                <Users className="h-8 w-8 text-golf-green mb-2" />
                <CardTitle>2-Man Scramble</CardTitle>
                <CardDescription>Quicksands Par 3 Course (14 holes)</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-golf-green-dark mb-2">Team Matchups</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Team 1</span>
                        <span className="font-semibold">Ivan & Jack</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Team 2</span>
                        <span className="font-semibold">Patrick & TBA</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-3">
                    Both players tee off, then play from the best shot. Team's Stableford score will be added to each player's individual tournament total.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-golf-green/5 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-golf-green-dark mb-4 text-center">Players</h3>
            <div className="grid md:grid-cols-4 gap-4 text-center">
              <div className="bg-white rounded-lg p-4 border border-golf-green/20">
                <Trophy className="h-8 w-8 text-golf-green mx-auto mb-2" />
                <h4 className="font-semibold text-golf-green-dark">Patrick Triggs</h4>
                <p className="text-xs text-muted-foreground">Birthday Boy!</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-golf-green/20">
                <Users className="h-8 w-8 text-golf-green mx-auto mb-2" />
                <h4 className="font-semibold text-golf-green-dark">Ivan Gomez</h4>
              </div>
              <div className="bg-white rounded-lg p-4 border border-golf-green/20">
                <Users className="h-8 w-8 text-golf-green mx-auto mb-2" />
                <h4 className="font-semibold text-golf-green-dark">Jack Cavanaugh</h4>
              </div>
              <div className="bg-white rounded-lg p-4 border border-golf-green/20">
                <Users className="h-8 w-8 text-golf-green mx-auto mb-2" />
                <h4 className="font-semibold text-golf-green-dark">TBA</h4>
                <p className="text-xs text-muted-foreground">4th Player</p>
              </div>
            </div>
          </div>

          <div className="bg-golf-green/5 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-golf-green-dark mb-6 text-center">Prize Structure</h3>
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
              <Card className="text-center border-golf-green/20 bg-white">
                <CardHeader className="pb-2">
                  <Trophy className="h-8 w-8 text-golf-green mx-auto mb-2" />
                  <CardTitle className="text-sm">Champion</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-xl font-bold text-golf-green mb-1">$150</p>
                  <p className="text-xs text-muted-foreground">Highest Stableford</p>
                </CardContent>
              </Card>

              <Card className="text-center border-golf-green/20 bg-white">
                <CardHeader className="pb-2">
                  <Trophy className="h-8 w-8 text-golf-green mx-auto mb-2" />
                  <CardTitle className="text-sm">Runner-up</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-xl font-bold text-golf-green mb-1">$50</p>
                  <p className="text-xs text-muted-foreground">Second Place</p>
                </CardContent>
              </Card>

              <Card className="text-center border-golf-green/20 bg-white">
                <CardHeader className="pb-2">
                  <MapPin className="h-8 w-8 text-golf-green mx-auto mb-2" />
                  <CardTitle className="text-sm">Long Drive</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-xl font-bold text-golf-green mb-1">$25</p>
                  <p className="text-xs text-muted-foreground">Scarecrow #14</p>
                </CardContent>
              </Card>

              <Card className="text-center border-golf-green/20 bg-white">
                <CardHeader className="pb-2">
                  <MapPin className="h-8 w-8 text-golf-green mx-auto mb-2" />
                  <CardTitle className="text-sm">Closest to Pin</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-xl font-bold text-golf-green mb-1">$25</p>
                  <p className="text-xs text-muted-foreground">Scarecrow #9</p>
                </CardContent>
              </Card>

              <Card className="text-center border-golf-green/20 bg-white">
                <CardHeader className="pb-2">
                  <MapPin className="h-8 w-8 text-golf-green mx-auto mb-2" />
                  <CardTitle className="text-sm">Long Drive</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-xl font-bold text-golf-green mb-1">$25</p>
                  <p className="text-xs text-muted-foreground">Gamble Sands #13</p>
                </CardContent>
              </Card>

              <Card className="text-center border-golf-green/20 bg-white">
                <CardHeader className="pb-2">
                  <MapPin className="h-8 w-8 text-golf-green mx-auto mb-2" />
                  <CardTitle className="text-sm">Closest to Pin</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-xl font-bold text-golf-green mb-1">$25</p>
                  <p className="text-xs text-muted-foreground">Gamble Sands #16</p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-6 text-center">
              <Badge className="bg-golf-green/10 text-golf-green-dark border-golf-green/20">
                $75 Buy-in per Player • Total Prize Pool: $300
              </Badge>
              <p className="text-sm text-muted-foreground mt-2">
                4 skill contests + 2 championship prizes = 6 chances to win!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Travel Details Section */}
      <section id="travel" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-golf-green-dark mb-4">Travel & Accommodation</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know for a smooth and comfortable trip.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Card className="border-golf-green/20">
                <CardHeader>
                  <Plane className="h-8 w-8 text-golf-green mb-2" />
                  <CardTitle>Getting There</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-golf-green-dark">Flight Information</h4>
                    <p className="text-sm text-muted-foreground">Seattle-Tacoma International (SEA) - 2.5 hours drive</p>
                    <p className="text-sm text-muted-foreground">Spokane International (GEG) - 1.5 hours drive</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-golf-green-dark">Transportation</h4>
                    <p className="text-sm text-muted-foreground">Ivan will rent an SUV so we can all drive together</p>
                    <p className="text-sm text-muted-foreground">Departing Redmond at 9:30 AM to arrive, check in, eat lunch, and warm up before our 3:05 PM tee time</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="border-golf-green/20">
                <CardHeader>
                  <Hotel className="h-8 w-8 text-golf-green mb-2" />
                  <CardTitle>Accommodation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Link to="/inn">
                    <div className="cursor-pointer">
                      <h4 className="font-semibold text-golf-green-dark hover:text-golf-green transition-colors">Inn at Gamble Sands</h4>
                      <p className="text-sm text-muted-foreground">90 Gamble Sands Drive, Brewster, WA</p>
                      <p className="text-sm text-muted-foreground">River view rooms with Cascades putting green access</p>
                    </div>
                  </Link>
                  <div>
                    <h4 className="font-semibold text-golf-green-dark">Room Details</h4>
                    <p className="text-sm text-muted-foreground">River view accommodations</p>
                    <p className="text-sm text-muted-foreground">Cascades putting green behind rooms</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-12">
            <Card className="border-golf-green/20">
              <CardHeader>
                <Clock className="h-8 w-8 text-golf-green mb-2" />
                <CardTitle>Daily Schedule</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-golf-green-dark mb-2">Friday, September 6</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>Arrival & Check-in</li>
                      <li>3:05 PM - Scarecrow Golf</li>
                      <li>Evening - Patrick's Birthday Dinner</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-golf-green-dark mb-2">Saturday, September 7</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>10:20 AM - Gamble Sands Golf</li>
                      <li>Lunch Break</li>
                      <li>5:00 PM - Quicksands Par 3</li>
                      <li>Evening - Group Celebration</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-golf-green-dark mb-2">Sunday, September 8</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>Morning - Check-out</li>
                      <li>Cascades Putting Green</li>
                      <li>Departure</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-golf-green-dark text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <Trophy className="h-12 w-12 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Patrick's Birthday Golf Trip</h3>
          <p className="text-golf-green-light mb-4">September 6-8, 2024 • Gamble Sands, WA</p>
          <p className="text-sm opacity-80">
            Questions? Contact the tournament organizer for more details.
          </p>
        </div>
      </footer>
    </div>
  );
}
