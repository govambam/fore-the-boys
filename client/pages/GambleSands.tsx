import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, MapPin, Clock, Target, ArrowLeft, Waves, Trees, Flag } from "lucide-react";

export default function GambleSands() {
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
            <Link to="/">
              <Button variant="outline" className="border-golf-green text-golf-green hover:bg-golf-green/5">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-4 bg-golf-green text-white">Round 2 • Sunday 10:20 AM</Badge>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-golf-green-dark mb-6">
            Gamble Sands
            <span className="block text-golf-green text-2xl sm:text-3xl md:text-4xl mt-2">Signature Course</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            The flagship course designed by David McLay Kidd, featuring natural sandy terrain, spectacular Columbia River views, 
            and a true links experience in the heart of Washington's wine country.
          </p>
        </div>
      </section>

      {/* Course Hero Image Placeholder */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <div className="h-64 md:h-96 bg-gradient-to-br from-golf-fairway via-golf-sand to-golf-green rounded-lg flex items-center justify-center mb-8">
            <div className="text-center text-white">
              <Waves className="h-16 w-16 mx-auto mb-4 opacity-80" />
              <p className="text-lg font-semibold">Gamble Sands Course Photo</p>
              <p className="text-sm opacity-80">David McLay Kidd Design</p>
            </div>
          </div>
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
                <p className="text-sm text-muted-foreground">Signature Championship</p>
              </CardContent>
            </Card>

            <Card className="text-center border-golf-green/20">
              <CardHeader>
                <Target className="h-8 w-8 text-golf-green mx-auto mb-2" />
                <CardTitle>7,009 Yards</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Championship Tees</p>
              </CardContent>
            </Card>

            <Card className="text-center border-golf-green/20">
              <CardHeader>
                <Waves className="h-8 w-8 text-golf-green mx-auto mb-2" />
                <CardTitle>Links Design</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">David McLay Kidd</p>
              </CardContent>
            </Card>

            <Card className="text-center border-golf-green/20">
              <CardHeader>
                <Trees className="h-8 w-8 text-golf-green mx-auto mb-2" />
                <CardTitle>Natural Terrain</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Sandy Conditions</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Course Features */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-golf-green-dark mb-4">Course Features</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Gamble Sands showcases the natural beauty of the Columbia River Valley with world-class golf design.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card className="border-golf-green/20">
              <CardHeader>
                <Waves className="h-8 w-8 text-golf-green mb-2" />
                <CardTitle>David McLay Kidd Design</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Designed by renowned Scottish architect David McLay Kidd, the course seamlessly blends with the natural 
                  sandy terrain. Every hole offers unique strategic options and stunning vistas.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Natural links-style conditions</li>
                  <li>• Strategic bunker placement</li>
                  <li>• Multiple route options on each hole</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-golf-green/20">
              <CardHeader>
                <Trees className="h-8 w-8 text-golf-green mb-2" />
                <CardTitle>Columbia River Views</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Spectacular views of the Columbia River and surrounding vineyards provide a breathtaking backdrop. 
                  The course routing maximizes scenic vistas from every angle.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Panoramic river valley views</li>
                  <li>• Wine country landscape</li>
                  <li>• Desert and mountain vistas</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Signature Holes */}
          <div className="bg-golf-green/5 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-golf-green-dark mb-6 text-center">Signature Holes</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-golf-green/20 bg-white">
                <CardHeader>
                  <Badge className="mb-2 bg-golf-green text-white w-fit">Hole 11</Badge>
                  <CardTitle className="text-lg">Closest to Pin</CardTitle>
                  <CardDescription>Par 3 • 165 yards</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    A beautiful par 3 over a natural ravine with the Columbia River as your backdrop.
                    Precision is key on this scenic one-shotter.
                  </p>
                  <div className="mt-4 p-3 bg-yellow-50 rounded border border-yellow-200">
                    <p className="text-sm font-semibold text-yellow-800">💰 $25 Prize for Closest to Pin</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-golf-green/20 bg-white">
                <CardHeader>
                  <Badge className="mb-2 bg-golf-green text-white w-fit">Hole 7</Badge>
                  <CardTitle className="text-lg">The Gamble - Long Drive</CardTitle>
                  <CardDescription>Par 5 • 585 yards</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    The signature hole that gives the course its name. A risk-reward par 5 where you can
                    "gamble" by trying to drive over the sandy waste area. Perfect for our long drive contest!
                  </p>
                  <div className="mt-4 p-3 bg-yellow-50 rounded border border-yellow-200">
                    <p className="text-sm font-semibold text-yellow-800">💰 $25 Prize for Longest Drive</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-golf-green/20 bg-white">
                <CardHeader>
                  <Badge className="mb-2 bg-golf-green text-white w-fit">Hole 17</Badge>
                  <CardTitle className="text-lg">River Bend</CardTitle>
                  <CardDescription>Par 4 • 445 yards</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    A strategic par 4 that follows the natural curve of the land. The approach shot
                    plays to a green perched above the Columbia River.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-golf-green/20 bg-white">
                <CardHeader>
                  <Badge className="mb-2 bg-golf-green text-white w-fit">Designer</Badge>
                  <CardTitle className="text-lg">McLay Kidd Masterpiece</CardTitle>
                  <CardDescription>World-Class Design</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Every hole on this flagship course showcases David McLay Kidd's genius for creating
                    memorable golf experiences that blend with the natural landscape.
                  </p>
                </CardContent>
              </Card>
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
                  <li>• <strong>Fairways:</strong> Natural sandy soil provides firm, fast conditions</li>
                  <li>• <strong>Greens:</strong> Bentgrass putting surfaces in excellent condition</li>
                  <li>• <strong>Rough:</strong> Native grasses that reward accuracy</li>
                  <li>• <strong>Wind:</strong> Afternoon breezes add strategic challenge</li>
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
                  <li>• <strong>Club Selection:</strong> Firm conditions play longer than expected</li>
                  <li>• <strong>Wind Play:</strong> Morning round may have calmer conditions</li>
                  <li>• <strong>Course Management:</strong> Multiple routes on most holes</li>
                  <li>• <strong>Putting:</strong> Greens are true but can be quick</li>
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
                  <p className="text-3xl font-bold text-golf-green-dark">Sunday, September 8th</p>
                  <p className="text-xl text-golf-green">10:20 AM Tee Time</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-golf-green/20">
                  <h4 className="font-semibold text-golf-green-dark mb-2">Morning Round Benefits</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Cooler temperatures and calmer conditions</li>
                    <li>• Beautiful morning light on the Columbia River</li>
                    <li>• Fresh start after Saturday's festivities</li>
                    <li>• Time for lunch before afternoon Quicksands round</li>
                  </ul>
                </div>
                <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                  <h4 className="font-semibold text-yellow-800 mb-2">Closest to Pin - Hole 11</h4>
                  <p className="text-sm text-yellow-700">$50 prize for closest to the pin on this scenic par 3!</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
