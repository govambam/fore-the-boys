import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin, Users, Trophy, Plane, Hotel, Calendar, Clock, Menu, X } from "lucide-react";

export default function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-golf-green/5 via-background to-golf-sand/10">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-golf-green/10 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Trophy className="h-8 w-8 text-golf-green" />
              <h1 className="text-xl md:text-2xl font-bold text-golf-green-dark">Pine Valley Getaway</h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <a href="#courses" className="text-foreground hover:text-golf-green transition-colors">Courses</a>
              <a href="#formats" className="text-foreground hover:text-golf-green transition-colors">Game Formats</a>
              <a href="#travel" className="text-foreground hover:text-golf-green transition-colors">Travel Details</a>
              <a href="#schedule" className="text-foreground hover:text-golf-green transition-colors">Schedule</a>
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
                <a
                  href="#courses"
                  className="text-foreground hover:text-golf-green transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Courses
                </a>
                <a
                  href="#formats"
                  className="text-foreground hover:text-golf-green transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Game Formats
                </a>
                <a
                  href="#travel"
                  className="text-foreground hover:text-golf-green transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Travel Details
                </a>
                <a
                  href="#schedule"
                  className="text-foreground hover:text-golf-green transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Schedule
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-4 bg-golf-green text-white">March 15-18, 2024</Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-golf-green-dark mb-6">
            Pine Valley Golf
            <span className="block text-golf-green">Adventure</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join us for an unforgettable weekend of championship golf, friendly competition, 
            and lasting memories at some of the finest courses in the region.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-golf-green hover:bg-golf-green-dark">
              View Course Details
            </Button>
            <Button size="lg" variant="outline" className="border-golf-green text-golf-green hover:bg-golf-green/5">
              Download Itinerary
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center border-golf-green/20 hover:shadow-lg transition-shadow">
              <CardHeader>
                <MapPin className="h-8 w-8 text-golf-green mx-auto mb-2" />
                <CardTitle className="text-lg">Location</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Pine Valley, New Jersey</p>
                <p className="text-sm text-muted-foreground">3 Premium Courses</p>
              </CardContent>
            </Card>

            <Card className="text-center border-golf-green/20 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-8 w-8 text-golf-green mx-auto mb-2" />
                <CardTitle className="text-lg">Players</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">12 Golfers</p>
                <p className="text-sm text-muted-foreground">4 Teams of 3</p>
              </CardContent>
            </Card>

            <Card className="text-center border-golf-green/20 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Trophy className="h-8 w-8 text-golf-green mx-auto mb-2" />
                <CardTitle className="text-lg">Format</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Best Ball & Scramble</p>
                <p className="text-sm text-muted-foreground">Individual Stroke Play</p>
              </CardContent>
            </Card>

            <Card className="text-center border-golf-green/20 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CalendarDays className="h-8 w-8 text-golf-green mx-auto mb-2" />
                <CardTitle className="text-lg">Duration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">4 Days, 3 Nights</p>
                <p className="text-sm text-muted-foreground">6 Rounds Total</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Golf Courses Section */}
      <section id="courses" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-golf-green-dark mb-4">Championship Courses</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience three world-class golf courses, each offering unique challenges and breathtaking scenery.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden border-golf-green/20 hover:shadow-xl transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-golf-green to-golf-fairway"></div>
              <CardHeader>
                <CardTitle className="text-golf-green-dark">Pine Valley Golf Club</CardTitle>
                <CardDescription>Par 70 • 6,765 yards • Championship Layout</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Consistently ranked among the world's top courses, Pine Valley offers a pure golf experience with strategic bunkering and pristine conditions.
                </p>
                <div className="flex justify-between items-center">
                  <Badge variant="secondary">Day 1 & 3</Badge>
                  <span className="text-sm font-semibold text-golf-green">$350/round</span>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-golf-green/20 hover:shadow-xl transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-golf-fairway to-golf-earth"></div>
              <CardHeader>
                <CardTitle className="text-golf-green-dark">Baltusrol Golf Club</CardTitle>
                <CardDescription>Par 72 • 7,115 yards • U.S. Open Venue</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  A historic championship venue with challenging holes and impeccable maintenance. The Lower Course has hosted multiple U.S. Opens.
                </p>
                <div className="flex justify-between items-center">
                  <Badge variant="secondary">Day 2</Badge>
                  <span className="text-sm font-semibold text-golf-green">$425/round</span>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-golf-green/20 hover:shadow-xl transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-golf-sand to-golf-green"></div>
              <CardHeader>
                <CardTitle className="text-golf-green-dark">Somerset Hills Country Club</CardTitle>
                <CardDescription>Par 71 • 6,890 yards • A.W. Tillinghast Design</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  A classic golden-age design featuring strategic shot-making, elevation changes, and stunning views of the surrounding hills.
                </p>
                <div className="flex justify-between items-center">
                  <Badge variant="secondary">Day 4</Badge>
                  <span className="text-sm font-semibold text-golf-green">$325/round</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Game Formats Section */}
      <section id="formats" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-golf-green-dark mb-4">Tournament Formats</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Multiple game formats keep the competition exciting and give everyone a chance to contribute to team success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-golf-green/20">
              <CardHeader>
                <Trophy className="h-8 w-8 text-golf-green mb-2" />
                <CardTitle>Team Best Ball</CardTitle>
                <CardDescription>Days 1 & 2</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Each team member plays their own ball. The lowest score on each hole counts for the team.
                </p>
              </CardContent>
            </Card>

            <Card className="border-golf-green/20">
              <CardHeader>
                <Users className="h-8 w-8 text-golf-green mb-2" />
                <CardTitle>Team Scramble</CardTitle>
                <CardDescription>Day 3 Morning</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  All team members tee off, then play from the best shot until the ball is holed.
                </p>
              </CardContent>
            </Card>

            <Card className="border-golf-green/20">
              <CardHeader>
                <Calendar className="h-8 w-8 text-golf-green mb-2" />
                <CardTitle>Individual Stroke Play</CardTitle>
                <CardDescription>Day 3 Afternoon & Day 4</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Individual competition with full handicap allowances. Lowest net score wins.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 bg-golf-green/5 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-golf-green-dark mb-4 text-center">Prize Structure</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <Trophy className="h-12 w-12 text-golf-green mx-auto mb-2" />
                <h4 className="font-semibold text-golf-green-dark">Team Champion</h4>
                <p className="text-sm text-muted-foreground">Lowest combined team score</p>
              </div>
              <div>
                <Trophy className="h-12 w-12 text-golf-green mx-auto mb-2" />
                <h4 className="font-semibold text-golf-green-dark">Individual Champion</h4>
                <p className="text-sm text-muted-foreground">Lowest individual net score</p>
              </div>
              <div>
                <Trophy className="h-12 w-12 text-golf-green mx-auto mb-2" />
                <h4 className="font-semibold text-golf-green-dark">Closest to Pin</h4>
                <p className="text-sm text-muted-foreground">Daily closest to pin contests</p>
              </div>
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
                    <p className="text-sm text-muted-foreground">Newark Liberty International (EWR) - 45 minutes to hotel</p>
                    <p className="text-sm text-muted-foreground">Philadelphia International (PHL) - 1 hour to hotel</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-golf-green-dark">Transportation</h4>
                    <p className="text-sm text-muted-foreground">Rental car recommended for course access</p>
                    <p className="text-sm text-muted-foreground">Group shuttle available from Newark</p>
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
                  <div>
                    <h4 className="font-semibold text-golf-green-dark">The Bernards Inn</h4>
                    <p className="text-sm text-muted-foreground">27 Mine Brook Road, Bernardsville, NJ</p>
                    <p className="text-sm text-muted-foreground">Luxury historic inn with spa and fine dining</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-golf-green-dark">Room Details</h4>
                    <p className="text-sm text-muted-foreground">Double occupancy rooms</p>
                    <p className="text-sm text-muted-foreground">Rate: $285/night (includes breakfast)</p>
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
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div>
                    <h4 className="font-semibold text-golf-green-dark mb-2">Thursday, March 15</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>2:00 PM - Check-in</li>
                      <li>4:00 PM - Welcome reception</li>
                      <li>7:30 PM - Group dinner</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-golf-green-dark mb-2">Friday, March 16</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>7:00 AM - Breakfast</li>
                      <li>9:00 AM - Pine Valley (Round 1)</li>
                      <li>7:00 PM - Team dinner</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-golf-green-dark mb-2">Saturday, March 17</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>7:00 AM - Breakfast</li>
                      <li>8:30 AM - Baltusrol (Round 2)</li>
                      <li>3:00 PM - Pine Valley (Round 3)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-golf-green-dark mb-2">Sunday, March 18</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>7:00 AM - Breakfast</li>
                      <li>9:00 AM - Somerset Hills (Round 4)</li>
                      <li>3:00 PM - Awards ceremony</li>
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
          <h3 className="text-2xl font-bold mb-2">Pine Valley Golf Getaway</h3>
          <p className="text-golf-green-light mb-4">March 15-18, 2024</p>
          <p className="text-sm opacity-80">
            Questions? Contact the tournament organizer for more details.
          </p>
        </div>
      </footer>
    </div>
  );
}
