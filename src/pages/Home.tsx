import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Truck, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-meal-community.jpg";

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Community meal sharing" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-rich-brown/60"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Community Meals,
              <br />
              <span className="text-primary-glow">Delivered with Dignity</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              A Niagara-based pilot project offering free and discounted comfort food delivery 
              to those facing short-term food insecurity. Private, member-based, community-driven.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild variant="warm" size="lg">
                <Link to="/membership">Apply for Membership</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            More Than Just Food Delivery
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We believe in dignity, community support, and the power of a good meal to bring comfort during difficult times.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center border-none shadow-soft hover:shadow-warm transition-all duration-300">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Dignity First</h3>
              <p className="text-muted-foreground text-sm">
                Private membership model that respects your privacy and maintains dignity.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-none shadow-soft hover:shadow-warm transition-all duration-300">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-secondary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Community Driven</h3>
              <p className="text-muted-foreground text-sm">
                By the community, for the community. Not a charity, but neighbors helping neighbors.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-none shadow-soft hover:shadow-warm transition-all duration-300">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Truck className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Comfort Food</h3>
              <p className="text-muted-foreground text-sm">
                Hearty, home-style meals delivered fresh to your door with care and warmth.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-none shadow-soft hover:shadow-warm transition-all duration-300">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-secondary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Secure Access</h3>
              <p className="text-muted-foreground text-sm">
                Daily delivery codes ensure secure, controlled access for pilot members only.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-warm-cream/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              How I Need A Meal Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Simple steps to access community support when you need it most.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-warm rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Apply for Membership</h3>
              <p className="text-muted-foreground">
                Fill out our simple membership form to join the pilot program. Free to apply.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-warm rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Get Daily Code</h3>
              <p className="text-muted-foreground">
                Access codes are released daily after 2 PM on our partner site for secure scheduling.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-warm rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Schedule & Receive</h3>
              <p className="text-muted-foreground">
                Schedule your meal delivery and receive fresh, comforting food at your door.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Take the first step toward dignified food support. Our pilot program is here to help during life's challenging moments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="warm" size="lg">
              <Link to="/membership">Apply for Free Membership</Link>
            </Button>
            <Button asChild variant="sage" size="lg">
              <Link to="/contact">Ask Questions</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}