import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, MapPin, Bed, Coffee, ArrowLeft, Wifi, Car, Waves, Utensils } from "lucide-react";

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
            Luxury accommodations in the heart of Washington wine country. Our river view rooms offer the perfect 
            retreat after championship golf, complete with exclusive access to the Cascades putting green.
          </p>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>90 Gamble Sands Drive, Brewster, WA 98812</span>
          </div>
        </div>
      </section>

      {/* Inn Hero Image Placeholder */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <div className="h-64 md:h-96 bg-gradient-to-br from-golf-earth via-golf-sand to-golf-green rounded-lg flex items-center justify-center mb-8">
            <div className="text-center text-white">
              <Bed className="h-16 w-16 mx-auto mb-4 opacity-80" />
              <p className="text-lg font-semibold">Inn at Gamble Sands</p>
              <p className="text-sm opacity-80">Luxury River View Accommodations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Inn Features */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-golf-green-dark mb-4">Accommodation Features</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need for a comfortable and memorable stay in wine country.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="text-center border-golf-green/20">
              <CardHeader>
                <Waves className="h-8 w-8 text-golf-green mx-auto mb-2" />
                <CardTitle>River Views</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Panoramic Columbia River vistas from every room</p>
              </CardContent>
            </Card>

            <Card className="text-center border-golf-green/20">
              <CardHeader>
                <Trophy className="h-8 w-8 text-golf-green mx-auto mb-2" />
                <CardTitle>Putting Green</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Cascades putting green directly behind our rooms</p>
              </CardContent>
            </Card>

            <Card className="text-center border-golf-green/20">
              <CardHeader>
                <Utensils className="h-8 w-8 text-golf-green mx-auto mb-2" />
                <CardTitle>Fine Dining</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">On-site restaurant with wine country cuisine</p>
              </CardContent>
            </Card>

            <Card className="text-center border-golf-green/20">
              <CardHeader>
                <Car className="h-8 w-8 text-golf-green mx-auto mb-2" />
                <CardTitle>Convenient Location</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Walking distance to all golf courses</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Room Details */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-golf-green-dark mb-4">Room Details</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card className="border-golf-green/20">
              <CardHeader>
                <Bed className="h-8 w-8 text-golf-green mb-2" />
                <CardTitle>River View Accommodations</CardTitle>
                <CardDescription>Premium rooms with stunning vistas</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li>• <strong>View:</strong> Panoramic Columbia River and valley views</li>
                  <li>• <strong>Bedding:</strong> King or queen beds with luxury linens</li>
                  <li>• <strong>Space:</strong> Spacious rooms with sitting areas</li>
                  <li>• <strong>Bathroom:</strong> Modern amenities and premium fixtures</li>
                  <li>• <strong>Balcony:</strong> Private outdoor space overlooking the river</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-golf-green/20">
              <CardHeader>
                <Trophy className="h-8 w-8 text-golf-green mb-2" />
                <CardTitle>Exclusive Golf Amenities</CardTitle>
                <CardDescription>Special perks for golf guests</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li>• <strong>Cascades Putting Green:</strong> Practice area right behind rooms</li>
                  <li>• <strong>Golf Concierge:</strong> Assistance with tee times and equipment</li>
                  <li>• <strong>Club Storage:</strong> Secure storage for golf bags</li>
                  <li>• <strong>Golf Cart Access:</strong> Easy transportation to courses</li>
                  <li>• <strong>Pro Shop:</strong> On-site for any last-minute needs</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-golf-green/5 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-golf-green-dark mb-6 text-center">Cascades Putting Green</h3>
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div>
                <p className="text-muted-foreground mb-4">
                  The Cascades putting green is located directly behind our room block, offering exclusive access 
                  for practice sessions. This beautifully maintained green provides the perfect opportunity to 
                  work on your putting before and after rounds.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Available 24/7 for Inn guests</li>
                  <li>• Multiple pin positions for variety</li>
                  <li>• Various slopes and breaks to practice</li>
                  <li>• Evening lighting for night sessions</li>
                  <li>• Beautiful landscaping and river views</li>
                </ul>
              </div>
              <Card className="border-golf-green/20 bg-white">
                <CardContent className="p-6 text-center">
                  <Trophy className="h-16 w-16 text-golf-green mx-auto mb-4" />
                  <h4 className="font-semibold text-golf-green-dark mb-2">Perfect for:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>Pre-round warm-up sessions</li>
                    <li>Evening putting contests</li>
                    <li>Relaxing between rounds</li>
                    <li>Celebrating birdies and eagles!</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Inn Amenities */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-golf-green-dark mb-4">Inn Amenities</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              All the comforts and conveniences you need for a perfect golf getaway.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-golf-green/20">
              <CardHeader>
                <Utensils className="h-8 w-8 text-golf-green mb-2" />
                <CardTitle>Dining Options</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• On-site restaurant with local cuisine</li>
                  <li>• Wine bar featuring regional selections</li>
                  <li>• Room service available</li>
                  <li>• Patio dining with river views</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-golf-green/20">
              <CardHeader>
                <Wifi className="h-8 w-8 text-golf-green mb-2" />
                <CardTitle>Modern Conveniences</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Complimentary high-speed WiFi</li>
                  <li>• Flat-screen TVs with cable</li>
                  <li>• In-room coffee makers</li>
                  <li>• Mini refrigerators</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-golf-green/20">
              <CardHeader>
                <Car className="h-8 w-8 text-golf-green mb-2" />
                <CardTitle>Transportation</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Complimentary parking</li>
                  <li>• Golf cart access to courses</li>
                  <li>• Shuttle service available</li>
                  <li>• Easy walking access to facilities</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-golf-green/20">
              <CardHeader>
                <Coffee className="h-8 w-8 text-golf-green mb-2" />
                <CardTitle>Relaxation</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Outdoor fire pits</li>
                  <li>• River view terraces</li>
                  <li>• Quiet lounge areas</li>
                  <li>• Spa services available</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-golf-green/20">
              <CardHeader>
                <Trophy className="h-8 w-8 text-golf-green mb-2" />
                <CardTitle>Golf Services</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Equipment rental and storage</li>
                  <li>• Golf concierge services</li>
                  <li>• Practice facilities access</li>
                  <li>• Tournament coordination</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-golf-green/20">
              <CardHeader>
                <Waves className="h-8 w-8 text-golf-green mb-2" />
                <CardTitle>Outdoor Activities</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• River access for walking</li>
                  <li>• Wine country tours</li>
                  <li>• Hiking trail access</li>
                  <li>• Photography opportunities</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location & Check-in Info */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-golf-green/20">
              <CardHeader>
                <MapPin className="h-8 w-8 text-golf-green mb-2" />
                <CardTitle>Location & Access</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-golf-green-dark mb-2">Address</h4>
                    <p className="text-sm text-muted-foreground">90 Gamble Sands Drive, Brewster, WA 98812</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-golf-green-dark mb-2">Distance to Courses</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Scarecrow: 2-minute walk</li>
                      <li>• Gamble Sands: On property</li>
                      <li>• Quicksands: 3-minute walk</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-golf-green-dark mb-2">Nearby Attractions</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Columbia River access</li>
                      <li>• Local wineries and tasting rooms</li>
                      <li>• Desert hiking trails</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-golf-green/20">
              <CardHeader>
                <Bed className="h-8 w-8 text-golf-green mb-2" />
                <CardTitle>Check-in Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-golf-green-dark mb-2">Our Stay Dates</h4>
                    <p className="text-sm text-muted-foreground">Friday, September 6 - Sunday, September 8, 2024</p>
                    <p className="text-sm text-muted-foreground">2 nights • River view rooms</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-golf-green-dark mb-2">Check-in/Out Times</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Check-in: 3:00 PM</li>
                      <li>• Check-out: 11:00 AM</li>
                      <li>• Early arrival accommodation available</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-golf-green-dark mb-2">Special Arrangements</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Golf tournament group rates</li>
                      <li>• Cascades putting green access</li>
                      <li>• Birthday celebration coordination</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
