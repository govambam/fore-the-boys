import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import { MapPin, Clock, Users, Zap, Target, Flag } from "lucide-react";

export default function Quicksands() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-golf-green/5 via-background to-golf-sand/10">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-4 bg-golf-green text-white">
            Round 3 • Sunday 5:00 PM
          </Badge>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-golf-green-dark mb-6">
            Quicksands
            <span className="block text-golf-green text-2xl sm:text-3xl md:text-4xl mt-2">
              Par 3 Course
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Grab a handful of wedges, irons and a putter. Bring your friends.
            Hang on for a wild ride down into the valley of David McLay Kidd's
            creative mind. QuickSands offers a rollicking golf experience over
            14 par-3 holes that range from 60 to 180 yards - the perfect
            creative finale for our team scramble competition.
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
              src="https://cdn.builder.io/o/assets%2F8c34f0d0a3de41e1a3ea5bdb8f56cf8c%2Fc63bc31a99474d0787a684e1d2336d2a%2Fcompressed?apiKey=8c34f0d0a3de41e1a3ea5bdb8f56cf8c&token=c63bc31a99474d0787a684e1d2336d2a&alt=media&optimized=true"
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
                <CardTitle>14 Holes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">All Par 3s</p>
              </CardContent>
            </Card>

            <Card className="text-center border-golf-green/20">
              <CardHeader>
                <Target className="h-8 w-8 text-golf-green mx-auto mb-2" />
                <CardTitle>60-180 Yards</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Creative Shot Variety
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-golf-green/20">
              <CardHeader>
                <Users className="h-8 w-8 text-golf-green mx-auto mb-2" />
                <CardTitle>Team Scramble</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">2-Man Format</p>
              </CardContent>
            </Card>

            <Card className="text-center border-golf-green/20">
              <CardHeader>
                <Zap className="h-8 w-8 text-golf-green mx-auto mb-2" />
                <CardTitle>Walking Only</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Brisk & Enjoyable
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Scramble Format */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-golf-green-dark mb-4">
              Team Stableford Scramble Format
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our tournament finale features a 2-man Stableford scramble with team scores
              counting toward individual Stableford totals as well as a separate
              team Stableford prize.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card className="border-golf-green/20 bg-golf-green/5">
              <CardHeader>
                <Users className="h-8 w-8 text-golf-green mb-2" />
                <CardTitle className="text-golf-green-dark">
                  Team 1: Ivan & Jack
                </CardTitle>
                <CardDescription>Dynamic Duo</CardDescription>
              </CardHeader>
              <CardContent></CardContent>
            </Card>

            <Card className="border-golf-green/20 bg-golf-green/5">
              <CardHeader>
                <Users className="h-8 w-8 text-golf-green mb-2" />
                <CardTitle className="text-golf-green-dark">
                  Team 2: Patrick & Marshall
                </CardTitle>
                <CardDescription>Birthday Team</CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="bg-golf-green/5 rounded-lg p-6">
            <h3 className="text-xl font-bold text-golf-green-dark mb-4 text-center">
              Separate Team Competition
            </h3>
            <div className="text-center">
              <p className="text-muted-foreground mb-4">
                In addition to counting towards your overall Stableford score,
                we will have a separate team Stableford competition! The team
                with the highest Stableford score wins, and each player on the
                winning team receives $25. This is separate from the overall
                competition which is a cumulative Stableford score from
                Scarecrow, Gamble Sands, and Quicksand.
              </p>
              <Badge className="bg-golf-green text-white">
                Winning Team: $25 per player
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Hole Highlights */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-golf-green-dark mb-4">
              Golf Amusement Park
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Yes, this is golf — but on a smaller scale than Gamble Sands' two
              18-hole courses. Instead of a driver, you'll need to lean into
              your creativity and imagination. Quicksands is a brisk and
              enjoyable walk with anywhere from a single playing partner to an
              eightsome, where ever-present music ramps up the vibe.
            </p>
          </div>

          <div className="bg-golf-green/5 rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-golf-green-dark mb-6 text-center">
              What Awaits You
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-golf-green/20 bg-white text-center">
                <CardContent className="p-6">
                  <Target className="h-12 w-12 text-golf-green mx-auto mb-3" />
                  <h4 className="font-semibold text-golf-green-dark mb-2">
                    Creative Shots
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Putt from tees, play bank shots, search for that elusive
                    hole-in-one
                  </p>
                </CardContent>
              </Card>

              <Card className="border-golf-green/20 bg-white text-center">
                <CardContent className="p-6">
                  <Zap className="h-12 w-12 text-golf-green mx-auto mb-3" />
                  <h4 className="font-semibold text-golf-green-dark mb-2">
                    Music & Vibe
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Ever-present music ramps up the atmosphere for maximum fun
                  </p>
                </CardContent>
              </Card>

              <Card className="border-golf-green/20 bg-white text-center">
                <CardContent className="p-6">
                  <Users className="h-12 w-12 text-golf-green mx-auto mb-3" />
                  <h4 className="font-semibold text-golf-green-dark mb-2">
                    Group Fun
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Perfect for singles up to an eightsome - everyone's welcome
                  </p>
                </CardContent>
              </Card>
            </div>
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
                  <p className="text-xl text-golf-green">5:00 PM Tee Time</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-golf-green/20">
                  <h4 className="font-semibold text-golf-green-dark mb-2">
                    Perfect Finale Timing
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Golden hour lighting for spectacular photos</li>
                    <li>• Cooler evening temperatures</li>
                    <li>• Team scramble creates exciting finish</li>
                    <li>• Quick 2.5-hour round</li>
                    <li>• Post-round celebration on the patio</li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  Tournament Finale
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
