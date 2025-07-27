import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import { MapPin, Bed, Coffee, Utensils, Moon, Flame } from "lucide-react";

export default function Inn() {
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
          <Badge className="mb-4 bg-golf-green text-white">Our Home Base</Badge>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-golf-green-dark mb-6">
            Inn at
            <span className="block text-golf-green">Gamble Sands</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Luxury river view accommodations with exclusive access to the Cascades Putting Course, 
            exceptional dining, and world-class amenities in the heart of Washington wine country.
          </p>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>90 Gamble Sands Drive, Brewster, WA 98812</span>
          </div>
        </div>
      </section>

      {/* Cascades Putting Course - Hero Section */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-golf-green-dark mb-4">The Cascades Putting Course</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              100,000 square feet of pure putting genius crafted by David McLay-Kidd
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <div className="bg-gradient-to-br from-golf-green via-golf-fairway to-golf-sand rounded-lg h-64 md:h-80 flex items-center justify-center mb-6">
                <div className="text-center text-white">
                  <Trophy className="h-16 w-16 mx-auto mb-4 opacity-80" />
                  <p className="text-lg font-semibold">Cascades Putting Course</p>
                  <p className="text-sm opacity-80">175 yards of putting perfection</p>
                </div>
              </div>
            </div>
            
            <div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-golf-green-dark mb-3">Putting Genius Awaits</h3>
                  <p className="text-muted-foreground">
                    On a bluff below the lodge at Gamble Sands sits 100,000 square feet of pure putting genius. 
                    The Cascades Putting Course, crafted under the watchful eye of David McLay-Kidd, the mastermind 
                    behind Gamble Sands, is an homage to the Himalayas Putting Course that has captured the imagination 
                    of generations of golfers in St. Andrews, Scotland.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="border-golf-green/20">
                    <CardContent className="p-4 text-center">
                      <h4 className="font-semibold text-golf-green-dark mb-2">Course Size</h4>
                      <p className="text-2xl font-bold text-golf-green">100,000</p>
                      <p className="text-sm text-muted-foreground">Square feet</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-golf-green/20">
                    <CardContent className="p-4 text-center">
                      <h4 className="font-semibold text-golf-green-dark mb-2">Length</h4>
                      <p className="text-2xl font-bold text-golf-green">175</p>
                      <p className="text-sm text-muted-foreground">Yards</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-golf-green/5 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-golf-green-dark mb-6 text-center">Perfect for Everyone</h3>
            <p className="text-lg text-muted-foreground text-center mb-6">
              The great thing about Cascades, which measures 175 yards, is that it is the ideal spot for both veteran golfers 
              as well as those who may never have picked up a club. Young and old, all are welcome to this hub of activity 
              at Gamble Sands Resort, especially in the evening when the fire pits are lit and glow balls are rolling after dark.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-golf-green/20 bg-white text-center">
                <CardContent className="p-6">
                  <Moon className="h-12 w-12 text-golf-green mx-auto mb-3" />
                  <h4 className="font-semibold text-golf-green-dark mb-2">Evening Sessions</h4>
                  <p className="text-sm text-muted-foreground">Glow balls rolling after dark</p>
                </CardContent>
              </Card>
              
              <Card className="border-golf-green/20 bg-white text-center">
                <CardContent className="p-6">
                  <Flame className="h-12 w-12 text-golf-green mx-auto mb-3" />
                  <h4 className="font-semibold text-golf-green-dark mb-2">Fire Pits</h4>
                  <p className="text-sm text-muted-foreground">Cozy evening atmosphere</p>
                </CardContent>
              </Card>
              
              <Card className="border-golf-green/20 bg-white text-center">
                <CardContent className="p-6">
                  <Coffee className="h-12 w-12 text-golf-green mx-auto mb-3" />
                  <h4 className="font-semibold text-golf-green-dark mb-2">Bring Drinks</h4>
                  <p className="text-sm text-muted-foreground">Our evening hangout spot</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-8 text-center">
              <Badge className="bg-golf-green text-white text-lg px-6 py-2">
                💡 Bring lights and bring drinks because this is where we'll probably be spending our evenings!
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Dining Options */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-golf-green-dark mb-4">Dining Options</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              After a full day on the course, there's no question you'll want a delicious meal and refreshing drinks. 
              Gamble Sands offers two distinct approaches to dining, from a traditional seated option in the unique setting 
              provided by Danny Boy, to the more casual approach of The Barn.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <Card className="border-golf-green/20 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-golf-earth to-golf-green"></div>
              <CardHeader>
                <CardTitle className="text-2xl text-golf-green-dark">Danny Boy</CardTitle>
                <CardDescription className="text-lg">Dinner-Only Fine Dining Experience</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Danny Boy offers a dinner-only menu centered on classic, high-quality grill fare in a unique, 
                  sophisticated setting perfect for celebrating Patrick's birthday.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-golf-green-dark mb-2">Signature Items</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Tower of Tots</li>
                      <li>• Danny Boy Burger</li>
                      <li>• Ribeye</li>
                      <li>• Prime Rib</li>
                      <li>• Fish and Chips</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-golf-green-dark mb-2">Beverage Program</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Ice-cold beer selection</li>
                      <li>• Creative signature cocktails</li>
                      <li>• Curated wine list by on-site sommelier</li>
                      <li>• Bold flavors and reliable staples</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-golf-green/20 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-golf-sand to-golf-fairway"></div>
              <CardHeader>
                <CardTitle className="text-2xl text-golf-green-dark">The Barn</CardTitle>
                <CardDescription className="text-lg">Casual All-Day Dining</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  The Barn serves breakfast and lunch with a focus on approachable, satisfying options throughout the day. 
                  Expanding to include dinner starting August 1st.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-golf-green-dark mb-2">Breakfast</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Traditional golf staples</li>
                      <li>• Breakfast sandwiches and burritos</li>
                      <li>• Rotating chef specials</li>
                      <li>• Grab-and-go setup for quick tee-off</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-golf-green-dark mb-2">Lunch</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Variety of pizzas</li>
                      <li>• Hearty sandwiches</li>
                      <li>• Daily special entrées</li>
                      <li>• Quick-serve and sit-down options</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-golf-green-dark mb-2">Beverages</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Wide selection of ice-cold beer</li>
                      <li>• Signature cocktails</li>
                      <li>• Curated wine list</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-golf-green/5 rounded-lg p-6 text-center">
            <Badge className="mb-3 bg-golf-green text-white">New Feature</Badge>
            <h3 className="text-xl font-bold text-golf-green-dark mb-2">Extended Hours</h3>
            <p className="text-muted-foreground">
              Expanded hours to include dinner in The Barn beginning August 1st, giving you even more dining flexibility!
            </p>
          </div>
        </div>
      </section>

      {/* Room Details */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-golf-green-dark mb-4">River-View Rooms</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Surrounded by spectacular scenery and remarkable golf, the River-View Rooms overlook 
              the Cascade Putting Course and Columbia River beyond.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gradient-to-br from-golf-green/20 via-golf-sand/30 to-golf-earth/20 rounded-lg h-64 md:h-80 flex items-center justify-center mb-6">
                <div className="text-center text-golf-green-dark">
                  <Bed className="h-16 w-16 mx-auto mb-4 opacity-80" />
                  <p className="text-lg font-semibold">River-View Accommodations</p>
                  <p className="text-sm opacity-80">Overlook Cascades & Columbia River</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-golf-green-dark mb-4">Luxury Accommodations</h3>
              <p className="text-muted-foreground mb-6">
                Upscale, double-occupancy rooms with detailed finishings offer the comfort you'll seek after a day of golf with friends. 
                Every room features a private patio, with first-floor accommodations opening directly onto an exclusive putting green.
              </p>
              
              <div className="space-y-4">
                <Card className="border-golf-green/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-golf-green-dark mb-2">Premium Features</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Overlook Cascade Putting Course and Columbia River</li>
                      <li>• Upscale double-occupancy accommodations</li>
                      <li>• Detailed finishings throughout</li>
                      <li>• Private patio with every room</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="border-golf-green/20 bg-golf-green/5">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-golf-green-dark mb-2">🏌️‍♂️ Ground Floor Special</h4>
                    <p className="text-sm text-muted-foreground">
                      First-floor accommodations open directly onto an exclusive putting green - 
                      step out of your room and practice your putting!
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-golf-green/5 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-golf-green-dark mb-6 text-center">Perfect After Golf</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <Trophy className="h-12 w-12 text-golf-green mx-auto mb-3" />
                <h4 className="font-semibold text-golf-green-dark mb-2">River Views</h4>
                <p className="text-sm text-muted-foreground">Wake up to Columbia River vistas every morning</p>
              </div>
              <div>
                <Coffee className="h-12 w-12 text-golf-green mx-auto mb-3" />
                <h4 className="font-semibold text-golf-green-dark mb-2">Private Patios</h4>
                <p className="text-sm text-muted-foreground">Personal outdoor space to relax and unwind</p>
              </div>
              <div>
                <Bed className="h-12 w-12 text-golf-green mx-auto mb-3" />
                <h4 className="font-semibold text-golf-green-dark mb-2">Upscale Comfort</h4>
                <p className="text-sm text-muted-foreground">Detailed finishings and luxury amenities</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
