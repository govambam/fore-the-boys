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
  MapPin,
  Clock,
  Target,
  Waves,
  Trees,
  Flag,
  Trophy,
} from "lucide-react";

export default function GambleSands() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-masters-cream via-background to-masters-cream/50">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 md:py-32 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-masters-green text-masters-cream border border-masters-gold/20">
            Round 2 • Sunday 10:20 AM
          </Badge>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold text-masters-green-deep mb-8">
            Gamble Sands
            <span className="block text-masters-gold text-2xl sm:text-3xl md:text-4xl mt-3">
              Signature Course
            </span>
          </h1>
          <p className="text-lg md:text-xl text-masters-green/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Winner of Golf Digest's Best New Course of 2014 award, Gamble Sands
            sits atop a sprawling, treeless plateau of sandy desert overlooking
            Washington's Columbia River Valley. The extremely playable layout is
            oversized in every respect, with enormously wide and slick fescue
            fairways, gigantic greens, no rough and some of the most panoramic
            vistas in the Northwest.
          </p>
        </div>
      </section>

      {/* Course Hero Video */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <video
            className="w-full h-64 md:h-96 rounded-lg object-cover mb-8"
            autoPlay
            loop
            muted
            playsInline
          >
            <source
              src="https://cdn.builder.io/o/assets%2F8c34f0d0a3de41e1a3ea5bdb8f56cf8c%2Fa26d7c6a6de4459886a173f7076934d3%2Fcompressed?apiKey=8c34f0d0a3de41e1a3ea5bdb8f56cf8c&token=a26d7c6a6de4459886a173f7076934d3&alt=media&optimized=true"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* Course Stats */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <Card className="masters-card text-center">
              <CardHeader>
                <Flag className="h-8 w-8 text-masters-gold mx-auto mb-3" />
                <CardTitle className="font-serif text-xl text-masters-green-deep">Par 72</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-masters-green/70 font-medium">
                  Signature Championship
                </p>
              </CardContent>
            </Card>

            <Card className="masters-card text-center">
              <CardHeader>
                <Target className="h-8 w-8 text-masters-gold mx-auto mb-3" />
                <CardTitle className="font-serif text-xl text-masters-green-deep">6,389 Yards</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-masters-green/70 font-medium">Sands Tees</p>
              </CardContent>
            </Card>

            <Card className="masters-card text-center">
              <CardHeader>
                <Waves className="h-8 w-8 text-masters-gold mx-auto mb-3" />
                <CardTitle className="font-serif text-xl text-masters-green-deep">Links Design</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-masters-green/70 font-medium">
                  David McLay Kidd
                </p>
              </CardContent>
            </Card>

            <Card className="masters-card text-center">
              <CardHeader>
                <Trees className="h-8 w-8 text-masters-gold mx-auto mb-3" />
                <CardTitle className="font-serif text-xl text-masters-green-deep">Natural Terrain</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-masters-green/70 font-medium">
                  Sandy Conditions
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Course Features */}
      <section className="py-20 px-4 bg-masters-cream/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-5xl font-bold text-masters-green-deep mb-6">
              Course Features
            </h2>
            <p className="text-xl text-masters-green/80 max-w-3xl mx-auto leading-relaxed">
              Gamble Sands showcases the natural beauty of the Columbia River
              Valley with world-class golf design.
            </p>
          </div>

          <div className="bg-masters-green/5 rounded-lg p-10 mb-16 border border-masters-green/20">
            <h3 className="font-serif text-3xl font-bold text-masters-green-deep mb-6 text-center">
              Award-Winning Course
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center mb-6">
              <div>
                <Trophy className="h-12 w-12 text-masters-gold mx-auto mb-2" />
                <h4 className="font-semibold text-masters-green-deep">
                  Golf Digest 2014
                </h4>
                <p className="text-sm text-muted-foreground">
                  Best New Course Winner
                </p>
              </div>
              <div>
                <Trophy className="h-12 w-12 text-masters-gold mx-auto mb-2" />
                <h4 className="font-semibold text-masters-green-deep">
                  #31 Best Public
                </h4>
                <p className="text-sm text-muted-foreground">
                  Golf Digest's 100 Greatest
                </p>
              </div>
              <div>
                <Trophy className="h-12 w-12 text-masters-gold mx-auto mb-2" />
                <h4 className="font-semibold text-masters-green-deep">
                  #18 Top 100 Courses You Can Play
                </h4>
                <p className="text-sm text-muted-foreground">Golf Magazine</p>
              </div>
            </div>
            <p className="text-center text-muted-foreground">
              Also ranked #4 on Golf Digest "Most Fun" courses
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card className="masters-card">
              <CardHeader>
                <Waves className="h-8 w-8 text-masters-gold mb-2" />
                <CardTitle className="font-serif text-masters-green-deep">David McLay Kidd Philosophy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  In using "friendly contours" that divert shots away from
                  bunkers and toward targets, designer David Kidd wants
                  everybody to have fun. He hopes good players will relish
                  opportunities to score low and high handicappers will post
                  their best rounds ever.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Friendly contours help your shots</li>
                  <li>• Three reachable par 4s on the course</li>
                  <li>• Designed for all skill levels to enjoy</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="masters-card">
              <CardHeader>
                <Trees className="h-8 w-8 text-masters-gold mb-2" />
                <CardTitle className="font-serif text-masters-green-deep">Unique Course Features</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Enormously wide and slick fescue fairways, gigantic greens, no
                  rough and some of the most panoramic vistas in the Northwest.
                  The layout is oversized in every respect for maximum
                  playability.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• No rough anywhere on the course</li>
                  <li>• Gigantic, receptive greens</li>
                  <li>• Panoramic Northwest vistas</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Skills Challenges */}
          <div className="bg-golf-green/5 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-golf-green-dark mb-6 text-center">
              Skills Challenges on Gamble Sands
            </h3>

            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <Card className="masters-card">
                <CardHeader>
                  <Target className="h-8 w-8 text-masters-gold mb-2" />
                  <CardTitle className="font-serif text-lg text-masters-green-deep">Closest to the Pin</CardTitle>
                  <CardDescription>Every Par 3 • $10 per hole</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Multiple Par 3s on Gamble Sands offer fresh chances to win
                    closest to the pin contests. You must be on the green to
                    win, and if no one makes it or there's a tie, the money
                    carries over to create bigger prizes!
                  </p>
                  <div className="mt-4 p-3 bg-yellow-50 rounded border border-yellow-200">
                    <p className="text-sm font-semibold text-yellow-800">
                      💰 $10 per Par 3 (with carry-over potential)
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="masters-card">
                <CardHeader>
                  <MapPin className="h-8 w-8 text-masters-gold mb-2" />
                  <CardTitle className="font-serif text-lg text-masters-green-deep">Long Drive</CardTitle>
                  <CardDescription>Every Par 5 • $10 per hole</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Multiple Par 5s on Gamble Sands feature long drive
                    competitions. You must be in the fairway, and the winner is
                    determined by who has the shortest approach shot to the flag
                    - smart placement wins!
                  </p>
                  <div className="mt-4 p-3 bg-yellow-50 rounded border border-yellow-200">
                    <p className="text-sm font-semibold text-yellow-800">
                      💰 $10 per Par 5 (with carry-over potential)
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-white rounded-lg p-6 border border-golf-green/20 mt-6">
              <h4 className="font-bold text-golf-green-dark mb-3 text-center">
                Featured Hole: #16 Par 3
              </h4>
              <p className="text-sm text-muted-foreground text-center">
                The massive green is full of ridges and tiers, and being on the
                correct shelf is everything. It's a visually striking hole that
                offers options, but the safest play is smart distance control
                and knowing where not to miss.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Conditions & Tips */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="masters-card">
              <CardHeader>
                <MapPin className="h-8 w-8 text-masters-gold mb-2" />
                <CardTitle className="font-serif text-masters-green-deep">Course Conditions</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li>
                    • <strong>Fairways:</strong> Natural sandy soil provides
                    firm, fast conditions
                  </li>
                  <li>
                    • <strong>Greens:</strong> Bentgrass putting surfaces in
                    excellent condition
                  </li>
                  <li>
                    • <strong>Rough:</strong> Native grasses that reward
                    accuracy
                  </li>
                  <li>
                    • <strong>Wind:</strong> Afternoon breezes add strategic
                    challenge
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="masters-card">
              <CardHeader>
                <Target className="h-8 w-8 text-masters-gold mb-2" />
                <CardTitle className="font-serif text-masters-green-deep">Playing Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li>
                    • <strong>Club Selection:</strong> Firm conditions play
                    longer than expected
                  </li>
                  <li>
                    • <strong>Wind Play:</strong> Morning round may have calmer
                    conditions
                  </li>
                  <li>
                    • <strong>Course Management:</strong> Multiple routes on
                    most holes
                  </li>
                  <li>
                    • <strong>Putting:</strong> Greens are true but can be quick
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tee Time Info */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <Card className="masters-card max-w-2xl mx-auto">
            <CardHeader className="text-center">
              <Clock className="h-12 w-12 text-masters-gold mx-auto mb-2" />
              <CardTitle className="font-serif text-2xl text-masters-green-deep">Tee Time Details</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="space-y-4">
                <div>
                  <p className="text-3xl font-bold text-golf-green-dark">
                    Sunday, September 8th
                  </p>
                  <p className="text-xl text-golf-green">10:20 AM Tee Time</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-golf-green/20">
                  <h4 className="font-semibold text-golf-green-dark mb-2">
                    Morning Round Benefits
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Cooler temperatures and calmer conditions</li>
                    <li>• Beautiful morning light on the Columbia River</li>
                    <li>• Fresh start after Saturday's festivities</li>
                    <li>• Time for lunch before afternoon Quicksands round</li>
                  </ul>
                </div>
                <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                  <h4 className="font-semibold text-yellow-800 mb-2">
                    Contest Holes
                  </h4>
                  <ul className="text-sm text-yellow-700 space-y-1">
                    <li>• $10 Closest to the Pin (Every Par 3)</li>
                    <li>• $10 Long Drive (Every Par 5)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
