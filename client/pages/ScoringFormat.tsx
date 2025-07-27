import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Users, Calculator, ArrowLeft, Target } from "lucide-react";

export default function ScoringFormat() {
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

      {/* Header */}
      <section className="py-12 md:py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-4 bg-golf-green text-white">Tournament Format</Badge>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-golf-green-dark mb-6">
            Modified Stableford
            <span className="block text-golf-green text-2xl sm:text-3xl md:text-4xl mt-2">Scoring System</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Our tournament uses a Modified Stableford scoring system that rewards aggressive play and birdies. 
            The higher your score, the better you're doing!
          </p>
        </div>
      </section>

      {/* Scoring Breakdown */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-golf-green-dark mb-4">Point Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Each hole is worth points based on your score relative to par. Collect as many points as possible!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            <Card className="text-center border-golf-green/20 bg-gradient-to-br from-yellow-50 to-yellow-100">
              <CardHeader>
                <div className="mx-auto mb-2 w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">8</span>
                </div>
                <CardTitle className="text-yellow-700">Eagle</CardTitle>
                <CardDescription>2 under par</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Exceptional performance! Maximum points for being 2 strokes under par.</p>
              </CardContent>
            </Card>

            <Card className="text-center border-golf-green/20 bg-gradient-to-br from-golf-green/10 to-golf-green/20">
              <CardHeader>
                <div className="mx-auto mb-2 w-16 h-16 bg-golf-green rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <CardTitle className="text-golf-green-dark">Birdie</CardTitle>
                <CardDescription>1 under par</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Great shot! Double points for being 1 stroke under par.</p>
              </CardContent>
            </Card>

            <Card className="text-center border-golf-green/20 bg-gradient-to-br from-blue-50 to-blue-100">
              <CardHeader>
                <div className="mx-auto mb-2 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <CardTitle className="text-blue-700">Par</CardTitle>
                <CardDescription>Even with par</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Solid golf! Standard points for meeting par.</p>
              </CardContent>
            </Card>

            <Card className="text-center border-golf-green/20 bg-gradient-to-br from-orange-50 to-orange-100">
              <CardHeader>
                <div className="mx-auto mb-2 w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <CardTitle className="text-orange-700">Bogey</CardTitle>
                <CardDescription>1 over par</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Still in the game! One point for being 1 stroke over par.</p>
              </CardContent>
            </Card>

            <Card className="text-center border-golf-green/20 bg-gradient-to-br from-red-50 to-red-100">
              <CardHeader>
                <div className="mx-auto mb-2 w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">0</span>
                </div>
                <CardTitle className="text-red-700">Double Bogey+</CardTitle>
                <CardDescription>2+ over par</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">No points awarded for scores of double bogey or worse.</p>
              </CardContent>
            </Card>
          </div>

          {/* Strategy Tips */}
          <div className="bg-golf-green/5 rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-golf-green-dark mb-6 text-center">Strategy Tips</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Target className="h-12 w-12 text-golf-green mx-auto mb-4" />
                <h4 className="font-semibold text-golf-green-dark mb-2">Go for Birdies</h4>
                <p className="text-sm text-muted-foreground">The 4-point birdie bonus makes aggressive play worthwhile. Take calculated risks!</p>
              </div>
              <div className="text-center">
                <Calculator className="h-12 w-12 text-golf-green mx-auto mb-4" />
                <h4 className="font-semibold text-golf-green-dark mb-2">Avoid Big Numbers</h4>
                <p className="text-sm text-muted-foreground">Double bogey or worse gives you 0 points. Play smart to avoid blow-up holes.</p>
              </div>
              <div className="text-center">
                <Trophy className="h-12 w-12 text-golf-green mx-auto mb-4" />
                <h4 className="font-semibold text-golf-green-dark mb-2">Consistency Wins</h4>
                <p className="text-sm text-muted-foreground">Par is worth 2 points. Steady play with occasional birdies is a winning formula.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tournament Structure */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-golf-green-dark mb-4">Tournament Structure</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-golf-green/20">
              <CardHeader>
                <Calculator className="h-8 w-8 text-golf-green mb-2" />
                <CardTitle>Individual Competition</CardTitle>
                <CardDescription>Rounds 1 & 2: Scarecrow and Gamble Sands</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Each player tracks their own Stableford points</li>
                  <li>• Points from both rounds are combined for total score</li>
                  <li>• Highest point total wins the individual competition</li>
                  <li>• Play your own ball throughout both rounds</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-golf-green/20">
              <CardHeader>
                <Users className="h-8 w-8 text-golf-green mb-2" />
                <CardTitle>Team Scramble</CardTitle>
                <CardDescription>Round 3: Quicksands Par 3 Course</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Teams: Ivan & Jack vs Patrick & Jeffrey</li>
                  <li>• Both players tee off, play from best shot</li>
                  <li>• Team's Stableford score counts toward individual totals</li>
                  <li>• 14-hole par 3 course provides exciting finale</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Card className="border-golf-green/20 bg-golf-green/5 max-w-2xl mx-auto">
              <CardHeader>
                <Trophy className="h-12 w-12 text-golf-green mx-auto mb-2" />
                <CardTitle className="text-2xl">Maximum Possible Score</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Scarecrow (71 par): <span className="font-semibold">568 points</span> (all eagles)</p>
                  <p className="text-sm text-muted-foreground">Gamble Sands (72 par): <span className="font-semibold">576 points</span> (all eagles)</p>
                  <p className="text-sm text-muted-foreground">Quicksands (14 holes): <span className="font-semibold">112 points</span> (all eagles)</p>
                  <p className="text-xl font-bold text-golf-green-dark mt-4">Theoretical Maximum: 1,256 points</p>
                  <p className="text-xs text-muted-foreground">(Don't worry, we'll be happy with much less!)</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
