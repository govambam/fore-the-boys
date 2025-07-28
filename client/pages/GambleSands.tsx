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
    <div className="min-h-screen bg-gradient-to-br from-golf-green/5 via-background to-golf-sand/10">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-4 bg-golf-green text-white">
            Round 2 • Sunday 10:20 AM
          </Badge>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-golf-green-dark mb-6">
            Gamble Sands
            <span className="block text-golf-green text-2xl sm:text-3xl md:text-4xl mt-2">
              Signature Course
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
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
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <Card className="text-center border-golf-green/20">
              <CardHeader>
                <Flag className="h-8 w-8 text-golf-green mx-auto mb-2" />
                <CardTitle>Par 72</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Signature Championship
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-golf-green/20">
              <CardHeader>
                <Target className="h-8 w-8 text-golf-green mx-auto mb-2" />
                <CardTitle>6,389 Yards</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Sands Tees</p>
              </CardContent>
            </Card>

            <Card className="text-center border-golf-green/20">
              <CardHeader>
                <Waves className="h-8 w-8 text-golf-green mx-auto mb-2" />
                <CardTitle>Links Design</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  David McLay Kidd
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-golf-green/20">
              <CardHeader>
                <Trees className="h-8 w-8 text-golf-green mx-auto mb-2" />
                <CardTitle>Natural Terrain</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Sandy Conditions
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Course Features */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-golf-green-dark mb-4">
              Course Features
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Gamble Sands showcases the natural beauty of the Columbia River
              Valley with world-class golf design.
            </p>
          </div>

          <div className="bg-golf-green/5 rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-golf-green-dark mb-4 text-center">
              Award-Winning Course
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center mb-6">
              <div>
                <Trophy className="h-12 w-12 text-golf-green mx-auto mb-2" />
                <h4 className="font-semibold text-golf-green-dark">
                  Golf Digest 2014
                </h4>
                <p className="text-sm text-muted-foreground">
                  Best New Course Winner
                </p>
              </div>
              <div>
                <Trophy className="h-12 w-12 text-golf-green mx-auto mb-2" />
                <h4 className="font-semibold text-golf-green-dark">
                  #31 Best Public
                </h4>
                <p className="text-sm text-muted-foreground">
                  Golf Digest's 100 Greatest
                </p>
              </div>
              <div>
                <Trophy className="h-12 w-12 text-golf-green mx-auto mb-2" />
                <h4 className="font-semibold text-golf-green-dark">
                  #4 Most Fun
                </h4>
                <p className="text-sm text-muted-foreground">
                  Golf Digest Panelists
                </p>
              </div>
            </div>
            <p className="text-center text-muted-foreground">
              Also ranked #18 on GOLF Magazine's "Top 100 Courses You Can Play"
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card className="border-golf-green/20">
              <CardHeader>
                <Waves className="h-8 w-8 text-golf-green mb-2" />
                <CardTitle>David McLay Kidd Philosophy</CardTitle>
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

            <Card className="border-golf-green/20">
              <CardHeader>
                <Trees className="h-8 w-8 text-golf-green mb-2" />
                <CardTitle>Unique Course Features</CardTitle>
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
              <Card className="border-golf-green/20 bg-white">
                <CardHeader>
                  <Target className="h-8 w-8 text-golf-green mb-2" />
                  <CardTitle className="text-lg">Closest to the Pin</CardTitle>
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

              <Card className="border-golf-green/20 bg-white">
                <CardHeader>
                  <MapPin className="h-8 w-8 text-golf-green mb-2" />
                  <CardTitle className="text-lg">Long Drive</CardTitle>
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
            <Card className="border-golf-green/20">
              <CardHeader>
                <MapPin className="h-8 w-8 text-golf-green mb-2" />
                <CardTitle>Course Conditions</CardTitle>
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

            <Card className="border-golf-green/20">
              <CardHeader>
                <Target className="h-8 w-8 text-golf-green mb-2" />
                <CardTitle>Playing Tips</CardTitle>
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
          <Card className="border-golf-green/20 bg-golf-green/5 max-w-2xl mx-auto">
            <CardHeader className="text-center">
              <Clock className="h-12 w-12 text-golf-green mx-auto mb-2" />
              <CardTitle className="text-2xl">Tee Time Details</CardTitle>
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
                    <li>• Hole 13: Long Drive - $25 prize</li>
                    <li>• Hole 16: Closest to Pin - $25 prize</li>
                  </ul>
                  <p className="text-xs text-yellow-600 mt-2">
                    Strategic holes that test distance and precision!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
