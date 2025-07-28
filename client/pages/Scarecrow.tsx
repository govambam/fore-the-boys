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
    <div className="min-h-screen bg-gradient-to-br from-golf-green/5 via-background to-golf-sand/10">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-4 bg-golf-green text-white">
            Round 1 • Saturday 3:05 PM
          </Badge>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-golf-green-dark mb-6">
            Scarecrow
            <span className="block text-golf-green text-2xl sm:text-3xl md:text-4xl mt-2">
              Newest Golf Course
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
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
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <Card className="text-center border-golf-green/20">
              <CardHeader>
                <Flag className="h-8 w-8 text-golf-green mx-auto mb-2" />
                <CardTitle>Par 71</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Championship Layout
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-golf-green/20">
              <CardHeader>
                <Target className="h-8 w-8 text-golf-green mx-auto mb-2" />
                <CardTitle>6,261 Yards</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Sands Tees</p>
              </CardContent>
            </Card>

            <Card className="text-center border-golf-green/20">
              <CardHeader>
                <Mountain className="h-8 w-8 text-golf-green mx-auto mb-2" />
                <CardTitle>Links Style</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Natural Terrain</p>
              </CardContent>
            </Card>

            <Card className="text-center border-golf-green/20">
              <CardHeader>
                <Wind className="h-8 w-8 text-golf-green mx-auto mb-2" />
                <CardTitle>Windy Conditions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Strategic Challenge
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
              Scarecrow offers a unique links experience with natural beauty and
              strategic challenges.
            </p>
          </div>

          <div className="bg-golf-green/5 rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-golf-green-dark mb-4 text-center">
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
            <Card className="border-golf-green/20">
              <CardHeader>
                <Mountain className="h-8 w-8 text-golf-green mb-2" />
                <CardTitle>Dramatic Elevation</CardTitle>
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

            <Card className="border-golf-green/20">
              <CardHeader>
                <Wind className="h-8 w-8 text-golf-green mb-2" />
                <CardTitle>McLay Kidd & Schaan Design</CardTitle>
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
              <Card className="border-golf-green/20 bg-white">
                <CardHeader>
                  <Target className="h-8 w-8 text-golf-green mb-2" />
                  <CardTitle className="text-lg">Closest to the Pin</CardTitle>
                  <CardDescription>Every Par 3 • $10 per hole</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Multiple Par 3s on Scarecrow offer chances to win closest to the pin contests.
                    You must be on the green to win, and if no one makes it or there's a tie,
                    the money carries over to the next Par 3!
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
                    Multiple Par 5s on Scarecrow feature long drive competitions.
                    You must be in the fairway, and the winner is determined by
                    who has the shortest approach shot to the flag - placement matters!
                  </p>
                  <div className="mt-4 p-3 bg-yellow-50 rounded border border-yellow-200">
                    <p className="text-sm font-semibold text-yellow-800">
                      💰 $10 per Par 5 (with carry-over potential)
                    </p>
                  </div>
                </CardContent>
              </Card>
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
                    <li>• Hole 9: Closest to Pin - $25 prize</li>
                    <li>• Hole 14: Long Drive - $25 prize</li>
                  </ul>
                  <p className="text-xs text-yellow-600 mt-2">
                    Most scenic and challenging holes on the course!
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
