import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import { Trophy, Users, Calculator, Target } from "lucide-react";

export default function ScoringFormat() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-golf-green/5 via-background to-golf-sand/10">
      {/* Navigation */}
      <Navigation />

      {/* Header */}
      <section className="py-12 md:py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-4 bg-golf-green text-white">
            Tournament Format
          </Badge>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-golf-green-dark mb-6">
            Modified Stableford
            <span className="block text-golf-green text-2xl sm:text-3xl md:text-4xl mt-2">
              Scoring System
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Our tournament uses a Modified Stableford scoring system that
            rewards aggressive play and birdies. The higher your score, the
            better you're doing!
          </p>
        </div>
      </section>

      {/* Scoring Breakdown */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-golf-green-dark mb-4">
              Point Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Each hole is worth points based on your score relative to par.
              Collect as many points as possible!
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
                <p className="text-sm text-muted-foreground">
                  Exceptional performance! Maximum points for being 2 strokes
                  under par.
                </p>
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
                <p className="text-sm text-muted-foreground">
                  Great shot! Double points for being 1 stroke under par.
                </p>
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
                <p className="text-sm text-muted-foreground">
                  Solid golf! Standard points for meeting par.
                </p>
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
                <p className="text-sm text-muted-foreground">
                  Still in the game! One point for being 1 stroke over par.
                </p>
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
                <p className="text-sm text-muted-foreground">
                  No points awarded for scores of double bogey or worse.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Strategy Tips */}
          <div className="bg-golf-green/5 rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-golf-green-dark mb-6 text-center">
              Strategy Tips
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Target className="h-12 w-12 text-golf-green mx-auto mb-4" />
                <h4 className="font-semibold text-golf-green-dark mb-2">
                  Go for Birdies
                </h4>
                <p className="text-sm text-muted-foreground">
                  The 4-point birdie bonus makes aggressive play worthwhile.
                  Take calculated risks!
                </p>
              </div>
              <div className="text-center">
                <Calculator className="h-12 w-12 text-golf-green mx-auto mb-4" />
                <h4 className="font-semibold text-golf-green-dark mb-2">
                  Avoid Big Numbers
                </h4>
                <p className="text-sm text-muted-foreground">
                  Double bogey or worse gives you 0 points. Play smart to avoid
                  blow-up holes.
                </p>
              </div>
              <div className="text-center">
                <Trophy className="h-12 w-12 text-golf-green mx-auto mb-4" />
                <h4 className="font-semibold text-golf-green-dark mb-2">
                  Consistency Wins
                </h4>
                <p className="text-sm text-muted-foreground">
                  Par is worth 2 points. Steady play with occasional birdies is
                  a winning formula.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Casual Rules Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-golf-green-dark mb-4">
              Tournament Rules
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We're here for birdies, beers, and good times. These casual rules
              will help us play fast, stay safe, and enjoy every round.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="border-golf-green/20">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">���</span>
                  <div>
                    <CardTitle className="text-xl">
                      Lost Ball & OB – "Desert Rule"
                    </CardTitle>
                    <CardDescription>
                      1-stroke penalty, drop at point of entry
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    • Applies to lost balls, OB, or anything that disappears
                    into the desert
                  </li>
                  <li>• No re-teeing, no snake hunting</li>
                  <li>• Drop within two club lengths of point of entry</li>
                  <li>• Keep play moving and stay safe</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-golf-green/20">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🪨</span>
                  <div>
                    <CardTitle className="text-xl">
                      Rattlesnakes & Rangefinders
                    </CardTitle>
                    <CardDescription>
                      Free relief from dangerous terrain
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Free drop from unplayable or dangerous terrain</li>
                  <li>• One club length relief (no closer to the hole)</li>
                  <li>• Safety first – no heroic shots from bad lies</li>
                  <li>• Use common sense and keep everyone safe</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-golf-green/20">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">⏱️</span>
                  <div>
                    <CardTitle className="text-xl">
                      Max Score = Double Bogey
                    </CardTitle>
                    <CardDescription>Pick up and move on</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Modified Stableford means double bogey = 0 points</li>
                  <li>• You can pick up at that point and move on</li>
                  <li>• Keeps pace of play moving</li>
                  <li>• No need to grind out that triple bogey</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-golf-green/20">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🧢</span>
                  <div>
                    <CardTitle className="text-xl">
                      Gimmies – At Opponent's Discretion
                    </CardTitle>
                    <CardDescription>
                      The Fellowship of the Swing
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• No automatic gimmies</li>
                  <li>• Any one opponent can offer a gimme</li>
                  <li>• No need for unanimous agreement</li>
                  <li>
                    • Longer gimmes will be considered for the birthday legend
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-golf-green/5 rounded-lg p-6">
            <div className="text-center">
              <p className="text-muted-foreground mb-4">
                These rules are designed to keep us playing fast, staying safe,
                and having maximum fun. When in doubt, choose the option that
                keeps the group together and the beers cold.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <Badge
                  variant="secondary"
                  className="bg-golf-green/10 text-golf-green-dark"
                >
                  Play Fast
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-golf-green/10 text-golf-green-dark"
                >
                  Stay Safe
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-golf-green/10 text-golf-green-dark"
                >
                  Have Fun
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-golf-green/10 text-golf-green-dark"
                >
                  Celebrate Patrick
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prize Pool & Buy-In */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-golf-green-dark mb-4">Prize Pool & Tournament Structure</h2>
          </div>

          <div className="bg-golf-green/5 rounded-lg p-8 mb-12">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-golf-green-dark mb-2">$100 Buy-In</h3>
              <p className="text-lg text-muted-foreground">per player • Total Prize Pool: $400</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-golf-green/20 bg-white text-center">
                <CardHeader className="pb-2">
                  <Trophy className="h-10 w-10 text-golf-green mx-auto mb-2" />
                  <CardTitle className="text-lg">Individual Champion</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-2xl font-bold text-golf-green mb-1">$120</p>
                  <p className="text-sm text-muted-foreground">Highest Stableford</p>
                </CardContent>
              </Card>

              <Card className="border-golf-green/20 bg-white text-center">
                <CardHeader className="pb-2">
                  <Trophy className="h-10 w-10 text-golf-green mx-auto mb-2" />
                  <CardTitle className="text-lg">Runner-Up</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-2xl font-bold text-golf-green mb-1">$60</p>
                  <p className="text-sm text-muted-foreground">Second Place</p>
                </CardContent>
              </Card>

              <Card className="border-golf-green/20 bg-white text-center">
                <CardHeader className="pb-2">
                  <Users className="h-10 w-10 text-golf-green mx-auto mb-2" />
                  <CardTitle className="text-lg">Team Champions</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-2xl font-bold text-golf-green mb-1">$25</p>
                  <p className="text-sm text-muted-foreground">per player</p>
                </CardContent>
              </Card>

              <Card className="border-golf-green/20 bg-white text-center">
                <CardHeader className="pb-2">
                  <Target className="h-10 w-10 text-golf-green mx-auto mb-2" />
                  <CardTitle className="text-lg">Skills Contests</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-2xl font-bold text-golf-green mb-1">$10</p>
                  <p className="text-sm text-muted-foreground">per contest</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card className="border-golf-green/20">
              <CardHeader>
                <Calculator className="h-8 w-8 text-golf-green mb-2" />
                <CardTitle>Individual Stableford Competition</CardTitle>
                <CardDescription>
                  Rounds 1 & 2: Scarecrow and Gamble Sands
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Each player tracks their own Stableford points</li>
                  <li>
                    • Points from both rounds are combined for total score
                  </li>
                  <li>• Highest point total wins the individual competition</li>
                  <li>• Play your own ball throughout both rounds</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-golf-green/20">
              <CardHeader>
                <Users className="h-8 w-8 text-golf-green mb-2" />
                <CardTitle>Team Stableford Competition</CardTitle>
                <CardDescription>
                  Round 3: Quicksands Par 3 Course (Separate Competition)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Teams: Ivan & Jack vs Patrick & TBA</li>
                  <li>• Both players tee off, play from best shot</li>
                  <li>• Team with highest Stableford score wins</li>
                  <li>• Winning team: $25 per player</li>
                  <li>• 14-hole par 3 course provides exciting finale</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Skills Challenge Rules */}
          <div className="bg-golf-green/5 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-golf-green-dark mb-6 text-center">Skills Challenge Rules</h3>

            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="border-golf-green/20 bg-white">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Target className="h-10 w-10 text-golf-green" />
                    <div>
                      <CardTitle className="text-xl">Closest to the Pin</CardTitle>
                      <CardDescription>Every Par 3 on both courses • $10 per hole</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-golf-green-dark mb-2">Rules</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Must be ON THE GREEN to win</li>
                        <li>• Measured to the inch for ties</li>
                        <li>• If no one on green, $10 carries to next Par 3</li>
                        <li>• Carry-over continues until someone wins</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-golf-green-dark mb-2">Potential Payouts</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• First Par 3: $10</li>
                        <li>• If carry-over: $20, $30, $40...</li>
                        <li>• Multiple chances to win big!</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-golf-green/20 bg-white">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-10 w-10 text-golf-green" />
                    <div>
                      <CardTitle className="text-xl">Long Drive</CardTitle>
                      <CardDescription>Every Par 5 on both courses • $10 per hole</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-golf-green-dark mb-2">Rules</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Must be IN THE FAIRWAY to win</li>
                        <li>• Winner = shortest distance to flag from approach</li>
                        <li>• Placement beats pure distance</li>
                        <li>• Measured to the yard for ties</li>
                        <li>• If no one in fairway, $10 carries to next Par 5</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-golf-green-dark mb-2">Strategy</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Smart positioning beats pure distance</li>
                        <li>• Know the pin location</li>
                        <li>• Risk vs. reward on tricky Par 5s</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 bg-white rounded-lg p-6 border border-golf-green/20">
              <h4 className="font-bold text-golf-green-dark mb-3 text-center">Skills Challenge Summary</h4>
              <div className="grid md:grid-cols-2 gap-6 text-sm text-muted-foreground">
                <div>
                  <h5 className="font-semibold text-golf-green-dark mb-2">Scarecrow Course</h5>
                  <ul className="space-y-1">
                    <li>• Multiple Par 3s for closest to pin</li>
                    <li>• Multiple Par 5s for long drive</li>
                    <li>• Carry-over potential for bigger payouts</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-golf-green-dark mb-2">Gamble Sands Course</h5>
                  <ul className="space-y-1">
                    <li>• Multiple Par 3s for closest to pin</li>
                    <li>• Multiple Par 5s for long drive</li>
                    <li>• Fresh chances if you missed Scarecrow</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
