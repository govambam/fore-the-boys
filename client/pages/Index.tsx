import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import {
  CalendarDays,
  MapPin,
  Users,
  Trophy,
  Plane,
  Hotel,
  Calendar,
  Clock,
  ChevronDown,
  ExternalLink,
  Target,
  User,
  Bed,
} from "lucide-react";

// Countdown component
function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isCountdownFinished, setIsCountdownFinished] = useState(false);

  useEffect(() => {
    const targetDate = new Date("2025-09-06T00:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60),
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setIsCountdownFinished(true);
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (isCountdownFinished) {
    return (
      <p className="text-lg md:text-xl text-golf-green font-medium mt-4">
        🏆 Tournament Day!
      </p>
    );
  }

  return (
    <p className="text-lg md:text-xl text-golf-green mt-4 countdown-text">
      Tournament starts in {timeLeft.days} days, {timeLeft.hours} hours, and{" "}
      {timeLeft.minutes} minutes
    </p>
  );
}

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-masters-cream via-background to-masters-cream/50">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 md:py-32 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-masters-green text-masters-cream text-sm md:text-base border border-masters-gold/20">
            September 6-8, 2024
          </Badge>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-8xl font-bold text-masters-green-deep mb-8 leading-tight">
            Fore the Boy
            <span className="block text-masters-gold mt-2">Golf Getaway</span>
          </h1>
          <p className="text-lg md:text-xl text-masters-green/80 mb-12 max-w-3xl mx-auto px-4 leading-relaxed">
            Celebrating another year with Patrick Triggs with an epic weekend of
            golf at Gamble Sands, featuring three incredible courses in the
            beautiful Columbia River Valley.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center px-4">
            <Link to="/scoring">
              <Button
                size="lg"
                className="bg-masters-green hover:bg-masters-green-deep text-masters-cream w-full sm:w-auto px-8 py-4 text-base font-medium transition-all duration-300 hover:scale-105"
              >
                View Scoring Format
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-masters-gold text-masters-gold hover:bg-masters-gold/10 w-full sm:w-auto px-8 py-4 text-base font-medium transition-all duration-300 hover:scale-105"
              onClick={() =>
                document
                  .getElementById("courses")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View Courses
            </Button>
          </div>
          <CountdownTimer />
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <Card className="masters-card text-center">
              <CardHeader>
                <MapPin className="h-8 w-8 text-masters-gold mx-auto mb-3" />
                <CardTitle className="text-xl font-serif text-masters-green-deep">
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-masters-green/70 font-medium">
                  Brewster, Washington
                </p>
                <p className="text-sm text-masters-green/70">
                  Gamble Sands Resort
                </p>
              </CardContent>
            </Card>

            <Card className="masters-card text-center">
              <CardHeader>
                <Users className="h-8 w-8 text-masters-gold mx-auto mb-3" />
                <CardTitle className="text-xl font-serif text-masters-green-deep">
                  Players
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-masters-green/70 font-medium">
                  4 Players
                </p>
                <p className="text-sm text-masters-green/70">
                  Modified Stableford
                </p>
              </CardContent>
            </Card>

            <Card className="masters-card text-center">
              <CardHeader>
                <Trophy className="h-8 w-8 text-masters-gold mx-auto mb-3" />
                <CardTitle className="text-xl font-serif text-masters-green-deep">
                  Format
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-masters-green/70 font-medium">
                  Modified Stableford
                </p>
                <p className="text-sm text-masters-green/70">
                  2-Man Scramble Finale
                </p>
              </CardContent>
            </Card>

            <Card className="masters-card text-center">
              <CardHeader>
                <CalendarDays className="h-8 w-8 text-masters-gold mx-auto mb-3" />
                <CardTitle className="text-xl font-serif text-masters-green-deep">
                  Duration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-masters-green/70 font-medium">
                  3 Days, 2 Nights
                </p>
                <p className="text-sm text-masters-green/70">3 Rounds Total</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Golf Courses Section */}
      <section id="courses" className="py-24 px-4 bg-masters-cream/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-5xl font-bold text-masters-green-deep mb-6">
              Gamble Sands Golf Courses
            </h2>
            <p className="text-xl text-masters-green/80 max-w-3xl mx-auto leading-relaxed">
              Three distinctive courses at Washington's premier golf
              destination, each designed to showcase the natural beauty of the
              Columbia River Valley.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Link to="/scarecrow" className="group">
              <Card className="masters-card overflow-hidden cursor-pointer">
                <div
                  className="h-48 relative bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage:
                      "url(https://cdn.builder.io/api/v1/image/assets%2F8c34f0d0a3de41e1a3ea5bdb8f56cf8c%2F3bb98b36487e49c5b950fa5edb1b2688)",
                  }}
                >
                  <div className="absolute top-3 right-3 bg-masters-gold/90 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="h-4 w-4 text-white" />
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="font-serif text-2xl text-masters-green-deep group-hover:text-masters-gold transition-colors">
                      Scarecrow
                    </CardTitle>
                    <ChevronDown className="h-4 w-4 text-masters-gold rotate-[-90deg] group-hover:translate-x-1 transition-transform" />
                  </div>
                  <CardDescription className="text-masters-green/70 font-medium">
                    Par 71 • 6,261 yards • Links-Style Layout
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-masters-green/80 mb-4 leading-relaxed">
                    A stunning links-style course with dramatic elevation
                    changes and panoramic views of the Columbia River. Features
                    wide fairways and strategic bunkering.
                  </p>
                  <div className="flex justify-between items-center">
                    <Badge className="bg-masters-cream text-masters-green border-masters-green/20">
                      Saturday 3:05 PM
                    </Badge>
                    <span className="text-sm font-semibold text-masters-gold">
                      Round 1
                    </span>
                  </div>
                  <div className="mt-3 text-xs text-masters-gold font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Click for detailed course information →
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link to="/gamble-sands" className="group">
              <Card className="masters-card overflow-hidden cursor-pointer">
                <div
                  className="h-48 relative bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage:
                      "url(https://cdn.builder.io/api/v1/image/assets%2F8c34f0d0a3de41e1a3ea5bdb8f56cf8c%2Fc9e6b0760fa54dd08076aba1202a8ecf)",
                  }}
                >
                  <div className="absolute top-3 right-3 bg-white/90 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="h-4 w-4 text-golf-green" />
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-golf-green-dark group-hover:text-golf-green transition-colors">
                      Gamble Sands
                    </CardTitle>
                    <ChevronDown className="h-4 w-4 text-golf-green/60 rotate-[-90deg] group-hover:translate-x-1 transition-transform" />
                  </div>
                  <CardDescription>
                    Par 72 • 6,389 yards • Signature Course
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    The flagship course designed by David McLay Kidd, featuring
                    natural sandy terrain and spectacular views. A true links
                    experience in the heart of Washington.
                  </p>
                  <div className="flex justify-between items-center">
                    <Badge variant="secondary">Sunday 10:20 AM</Badge>
                    <span className="text-sm font-semibold text-masters-gold">
                      Round 2
                    </span>
                  </div>
                  <div className="mt-3 text-xs text-golf-green font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Click for detailed course information →
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link to="/quicksands" className="group">
              <Card className="overflow-hidden border-golf-green/20 hover:shadow-xl hover:border-golf-green/40 transition-all duration-300 cursor-pointer group-hover:scale-[1.02]">
                <div
                  className="h-48 relative bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage:
                      "url(https://cdn.builder.io/api/v1/image/assets%2F8c34f0d0a3de41e1a3ea5bdb8f56cf8c%2F79bc0588e15041c086c5d85cb08d688f)",
                  }}
                >
                  <div className="absolute top-3 right-3 bg-white/90 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="h-4 w-4 text-golf-green" />
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-golf-green-dark group-hover:text-golf-green transition-colors">
                      Quicksands
                    </CardTitle>
                    <ChevronDown className="h-4 w-4 text-golf-green/60 rotate-[-90deg] group-hover:translate-x-1 transition-transform" />
                  </div>
                  <CardDescription>
                    Par 3 Course • 14 Holes • Short Course Challenge
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    An innovative par-3 course perfect for a fun finale. Each
                    hole offers unique challenges with stunning desert and river
                    valley views.
                  </p>
                  <div className="flex justify-between items-center">
                    <Badge variant="secondary">Sunday 5:00 PM</Badge>
                    <span className="text-sm font-semibold text-masters-gold">
                      Round 3
                    </span>
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
            <h2 className="text-4xl font-bold text-golf-green-dark mb-4">
              Tournament Format
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Modified Stableford scoring system with overall competition and a
              team scramble finale at Quicksands.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card className="masters-card">
              <CardHeader>
                <Trophy className="h-8 w-8 text-masters-gold mb-3" />
                <CardTitle className="font-serif text-xl text-masters-green-deep">
                  Modified Stableford Scoring
                </CardTitle>
                <CardDescription className="text-masters-green/70">
                  Scarecrow & Gamble Sands Rounds
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-masters-green/70">Eagle</span>
                    <span className="font-semibold text-masters-gold">
                      8 points
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-masters-green/70">
                      Birdie
                    </span>
                    <span className="font-semibold text-masters-gold">
                      4 points
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-masters-green/70">Par</span>
                    <span className="font-semibold text-masters-gold">
                      2 points
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-masters-green/70">Bogey</span>
                    <span className="font-semibold text-masters-gold">
                      1 point
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-masters-green/70">
                      Double Bogey+
                    </span>
                    <span className="font-semibold text-masters-gold">
                      0 points
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="masters-card">
              <CardHeader>
                <Users className="h-8 w-8 text-masters-gold mb-3" />
                <CardTitle className="font-serif text-xl text-masters-green-deep">
                  2-Man Stableford Scramble
                </CardTitle>
                <CardDescription className="text-masters-green/70">
                  Quicksands Par 3 Course (14 holes)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-masters-green-deep mb-2">
                      Team Matchups
                    </h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-masters-green/70">
                          Team 1
                        </span>
                        <span className="font-semibold">Ivan & Jack</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">
                          Team 2
                        </span>
                        <span className="font-semibold">
                          Patrick & Marshall
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-3">
                    In addition to determining the winner of the separate team
                    competition, your team Stableford score will be count
                    towards overall Stableford scoring.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Players Section */}
          <div className="bg-masters-cream/50 rounded-lg p-8 mb-8">
            <h3 className="font-serif text-2xl font-bold text-masters-green-deep mb-6 text-center">
              Players
            </h3>
            <div className="grid md:grid-cols-4 gap-4">
              <Card className="masters-card text-center">
                <CardHeader className="pb-2">
                  <Trophy className="h-8 w-8 text-masters-gold mx-auto mb-2" />
                  <CardTitle className="font-serif text-masters-green-deep">
                    Patrick Triggs
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-masters-green/70">
                    Birthday Legend
                  </p>
                </CardContent>
              </Card>
              <Card className="masters-card text-center">
                <CardHeader className="pb-2">
                  <User className="h-8 w-8 text-masters-gold mx-auto mb-2" />
                  <CardTitle className="font-serif text-masters-green-deep">
                    Ivan Gomez
                  </CardTitle>
                </CardHeader>
              </Card>
              <Card className="masters-card text-center">
                <CardHeader className="pb-2">
                  <User className="h-8 w-8 text-masters-gold mx-auto mb-2" />
                  <CardTitle className="font-serif text-masters-green-deep">
                    Jack Cavanaugh
                  </CardTitle>
                </CardHeader>
              </Card>
              <Card className="masters-card text-center">
                <CardHeader className="pb-2">
                  <User className="h-8 w-8 text-masters-gold mx-auto mb-2" />
                  <CardTitle className="font-serif text-masters-green-deep">
                    Marshall Raiskin
                  </CardTitle>
                </CardHeader>
              </Card>
            </div>
          </div>

          {/* Prizes Section */}
          <div className="bg-masters-cream/50 rounded-lg p-8">
            <h3 className="font-serif text-2xl font-bold text-masters-green-deep mb-6 text-center">
              High Stakes, Higher Handicaps
            </h3>

            <div className="bg-white rounded-lg p-6 mb-6 masters-card text-center">
              <h4 className="font-serif font-bold text-masters-green-deep mb-2">
                Tournament Buy-In
              </h4>
              <p className="text-4xl font-bold text-masters-gold mb-1">$100</p>
              <p className="text-sm text-masters-green/70">per player</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <Card className="masters-card text-center">
                <CardHeader className="pb-2">
                  <Trophy className="h-8 w-8 text-masters-gold mx-auto mb-2" />
                  <CardTitle className="font-serif text-masters-green-deep">
                    Overall Champion
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-2xl font-bold text-masters-gold mb-1">
                    $50
                  </p>
                  <p className="text-xs text-masters-green/70">
                    Highest Stableford (Scarecrow + Gamble Sands + Team Score)
                  </p>
                </CardContent>
              </Card>

              <Card className="masters-card text-center">
                <CardHeader className="pb-2">
                  <Trophy className="h-8 w-8 text-masters-gold mx-auto mb-2" />
                  <CardTitle className="font-serif text-masters-green-deep">
                    Overall Runner-up
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-2xl font-bold text-masters-gold mb-1">
                    $60
                  </p>
                  <p className="text-xs text-masters-green/70">
                    Second Place Overall Stableford
                  </p>
                </CardContent>
              </Card>

              <Card className="masters-card text-center">
                <CardHeader className="pb-2">
                  <User className="h-8 w-8 text-masters-gold mx-auto mb-2" />
                  <CardTitle className="font-serif text-masters-green-deep">
                    Team Champions
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-2xl font-bold text-masters-gold mb-1">
                    $35
                  </p>
                  <p className="text-xs text-masters-green/70">
                    per player (Quicksands Scramble)
                  </p>
                </CardContent>
              </Card>

              <Card className="masters-card text-center">
                <CardHeader className="pb-2">
                  <Target className="h-8 w-8 text-masters-gold mx-auto mb-2" />
                  <CardTitle className="font-serif text-masters-green-deep">
                    Skills Challenges
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-2xl font-bold text-masters-gold mb-1">
                    $30
                  </p>
                  <p className="text-xs text-masters-green/70">
                    per contest winner
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <Card className="masters-card">
                <CardHeader>
                  <CardTitle className="font-serif text-masters-green-deep text-center">
                    Closest to Pin
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-bold text-masters-gold text-center mb-2">
                    $30 per Par 3 on both courses
                  </p>
                  <ul className="text-sm text-masters-green/70 space-y-1">
                    <li>• Must be on the green to win</li>
                    <li>• Ties carry over to next Par 3 ($60, $90, etc.)</li>
                    <li>• Multiple opportunities to win</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="masters-card">
                <CardHeader>
                  <CardTitle className="font-serif text-masters-green-deep text-center">
                    Long Drive
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-bold text-masters-gold text-center mb-2">
                    $30 per Par 5 on both courses
                  </p>
                  <ul className="text-sm text-masters-green/70 space-y-1">
                    <li>• Must be in fairway to win</li>
                    <li>• Winner has shortest approach to flag</li>
                    <li>• Ties carry over to next Par 5 ($60, $90, etc.)</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="mt-6 text-center">
              <p className="text-lg text-masters-green-deep font-medium">
                $400 Buy-in per Player • Total Prize Pool $400
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Travel Details Section */}
      <section id="travel" className="py-24 px-4 bg-masters-cream/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-5xl font-bold text-masters-green-deep mb-6">
              Travel & Accommodation
            </h2>
            <p className="text-lg text-masters-green/70 max-w-2xl mx-auto">
              Everything you need to know for a smooth and comfortable trip.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="masters-card">
              <CardHeader>
                <Plane className="h-8 w-8 text-masters-gold mb-3" />
                <CardTitle className="font-serif text-2xl text-masters-green-deep">
                  Getting There
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-masters-green-deep mb-2">
                    Flight Information
                  </h4>
                  <p className="text-sm text-masters-green/70">
                    Seattle-Tacoma International (SEA) - 2.5 hours drive
                  </p>
                  <p className="text-sm text-masters-green/70">
                    Spokane International (GEG) - 1.5 hours drive
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-masters-green-deep mb-2">
                    Transportation
                  </h4>
                  <p className="text-sm text-masters-green/70">
                    Ivan is renting an SUV so we can all drive together
                  </p>
                  <p className="text-sm text-masters-green/70">
                    Departing Redmond at 9:30 AM to arrive, check in, eat lunch,
                    and warm up before our 3:05 PM tee time
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="masters-card">
              <CardHeader>
                <Bed className="h-8 w-8 text-masters-gold mb-3" />
                <CardTitle className="font-serif text-2xl text-masters-green-deep">
                  Accommodation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Link to="/inn">
                  <div className="cursor-pointer">
                    <h4 className="font-semibold text-masters-green-deep hover:text-masters-gold transition-colors mb-1">
                      Inn at Gamble Sands
                    </h4>
                    <p className="text-sm text-masters-green/70">
                      90 Gamble Sands Drive, Brewster, WA
                    </p>
                    <p className="text-sm text-masters-green/70">
                      River view rooms with Cascades putting green access
                    </p>
                  </div>
                </Link>
                <div>
                  <h4 className="font-semibold text-masters-green-deep mb-2">
                    Room Details
                  </h4>
                  <p className="text-sm text-masters-green/70">
                    River view accommodations
                  </p>
                  <p className="text-sm text-masters-green/70">
                    Cascades putting green behind rooms
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12">
            <Card className="masters-card">
              <CardHeader>
                <Clock className="h-8 w-8 text-masters-gold mb-3" />
                <CardTitle className="font-serif text-2xl text-masters-green-deep">
                  Daily Schedule
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-serif font-semibold text-masters-green-deep mb-3">
                      Friday, September 6
                    </h4>
                    <ul className="text-sm text-masters-green/70 space-y-2">
                      <li>9:30 AM - Depart</li>
                      <li>12:30 PM - Arrival & Check-in</li>
                      <li>1:00 PM - Lunch and Range</li>
                      <li>3:05 PM - Scarecrow Golf</li>
                      <li>Evening - Dinner, drinks, and putt your butt off</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-serif font-semibold text-masters-green-deep mb-3">
                      Saturday, September 7
                    </h4>
                    <ul className="text-sm text-masters-green/70 space-y-2">
                      <li>10:20 AM - Gamble Sands Golf</li>
                      <li>Lunch Break</li>
                      <li>5:00 PM - Quicksands Par 3</li>
                      <li>Evening - Dinner, payouts, shenanigans</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-serif font-semibold text-masters-green-deep mb-3">
                      Sunday, September 8
                    </h4>
                    <ul className="text-sm text-masters-green/70 space-y-2">
                      <li>Morning - Check-out</li>
                      <li>Optional round at Quicksands</li>
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
          <h3 className="text-2xl font-bold mb-2">Fore the Boy</h3>
          <p className="text-golf-green-light mb-4">
            September 6-8, 2024 • Gamble Sands, WA
          </p>
        </div>
      </footer>
    </div>
  );
}
