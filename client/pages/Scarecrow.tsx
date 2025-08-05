import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import { MapPin, Clock, Target, Wind, Mountain, Flag } from "lucide-react";

export default function Scarecrow() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-masters-cream via-background to-masters-cream/50">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 md:py-32 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-masters-green text-masters-cream border border-masters-gold/20">
            Round 1 • Saturday 3:05 PM
          </Badge>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold text-masters-green-deep mb-8">
            Scarecrow
            <span className="block text-masters-gold text-2xl sm:text-3xl md:text-4xl mt-3">
              Newest Golf Course
            </span>
          </h1>
          <p className="text-lg md:text-xl text-masters-green/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Scarecrow will be many things to many golfers, but there's no
            denying it is one of the most visually compelling courses anywhere
            in North America with sweeping views of the Columbia River. Opening
            in August this year, we'll be some of the first golfers to
            experience this masterpiece.
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
              src="https://cdn.builder.io/o/assets%2F8c34f0d0a3de41e1a3ea5bdb8f56cf8c%2F94433c743a8141ca9b5ec93ac1b64fc8%2Fcompressed?apiKey=8c34f0d0a3de41e1a3ea5bdb8f56cf8c&token=94433c743a8141ca9b5ec93ac1b64fc8&alt=media&optimized=true"
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
                <CardTitle className="font-serif text-xl text-masters-green-deep">Par 71</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-masters-green/70 font-medium">
                  Championship Layout
                </p>
              </CardContent>
            </Card>

            <Card className="masters-card text-center">
              <CardHeader>
                <Target className="h-8 w-8 text-masters-gold mx-auto mb-3" />
                <CardTitle className="font-serif text-xl text-masters-green-deep">6,261 Yards</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-masters-green/70 font-medium">Sands Tees</p>
              </CardContent>
            </Card>

            <Card className="masters-card text-center">
              <CardHeader>
                <Mountain className="h-8 w-8 text-masters-gold mx-auto mb-3" />
                <CardTitle className="font-serif text-xl text-masters-green-deep">Links Style</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-masters-green/70 font-medium">Natural Terrain</p>
              </CardContent>
            </Card>

            <Card className="masters-card text-center">
              <CardHeader>
                <Wind className="h-8 w-8 text-masters-gold mx-auto mb-3" />
                <CardTitle className="font-serif text-xl text-masters-green-deep">Windy Conditions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-masters-green/70 font-medium">
                  Strategic Challenge
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
              Scarecrow offers a unique links experience with natural beauty and
              strategic challenges.
            </p>
          </div>

          <div className="bg-masters-green/5 rounded-lg p-10 mb-16 border border-masters-green/20">
            <h3 className="font-serif text-3xl font-bold text-masters-green-deep mb-6 text-center">
              Design Legacy
            </h3>
            <p className="text-muted-foreground text-center mb-6">
              The second 18-hole course to open at Gamble Sands Resort, slightly
              more than a decade after the first, David McLay Kidd collaborated
              on Scarecrow with his design partner Nick Schaan in a creative
              competition of sorts between the two.
            </p>
            <p className="text-muted-foreground text-center">
              The goal was to utilize Scarecrow's steeper landscape while
              creating an adventure that has its own identity despite echoes of
              the original Gamble Sands.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card className="masters-card">
              <CardHeader>
                <Mountain className="h-8 w-8 text-masters-gold mb-2" />
                <CardTitle className="font-serif text-masters-green-deep">Dramatic Elevation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Utilizing Scarecrow's steeper landscape, the course features
                  significant elevation changes that provide breathtaking views
                  of the Columbia River Valley and surrounding desert landscape.
                  Many holes play uphill or downhill, requiring careful club
                  selection.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Panoramic views from elevated tees</li>
                  <li>• Strategic use of natural terrain</li>
                  <li>• Elevation changes affect distance</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="masters-card">
              <CardHeader>
                <Wind className="h-8 w-8 text-masters-gold mb-2" />
                <CardTitle className="font-serif text-masters-green-deep">McLay Kidd & Schaan Design</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  A creative collaboration between David McLay Kidd and Nick
                  Schaan, Scarecrow has its own identity while maintaining
                  echoes of the original Gamble Sands course design philosophy.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Collaborative design competition</li>
                  <li>• Unique identity with familiar echoes</li>
                  <li>• Creative use of steeper terrain</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Skills Challenges */}
          <div className="bg-golf-green/5 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-golf-green-dark mb-6 text-center">
              Skills Challenges on Scarecrow
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
                    Multiple Par 3s on Scarecrow offer chances to win closest to
                    the pin contests. You must be on the green to win, and if no
                    one makes it or there's a tie, the money carries over to the
                    next Par 3!
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
                    Multiple Par 5s on Scarecrow feature long drive
                    competitions. You must be in the fairway, and the winner is
                    determined by who has the shortest approach shot to the flag
                    - placement matters!
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
                Featured Hole: #9 Par 3
              </h4>
              <p className="text-sm text-muted-foreground text-center">
                Perhaps the most scenic spot on the entire property. With the
                Columbia River looming in the background, it takes a concerted
                effort to focus on the task at hand. It's a short and fun shot
                over the bunker to find the green. Slopes on the right edge will
                funnel balls towards the green. Your potential ace awaits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tee Time Info */}
      <section className="py-16 px-4">
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
                    Saturday, September 7th
                  </p>
                  <p className="text-xl text-golf-green">3:05 PM Tee Time</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-golf-green/20">
                  <h4 className="font-semibold text-golf-green-dark mb-2">
                    What to Expect
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>
                      • Afternoon start allows for morning arrival and check-in
                    </li>
                    <li>• Perfect lighting for photos and scenic views</li>
                    <li>• Cooler afternoon temperatures in September</li>
                    <li>• Post-round celebration at the clubhouse</li>
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
