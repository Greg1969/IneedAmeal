import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Users, Home, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import communityImage from "@/assets/community-sharing.jpg";

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
          About I Need A Meal
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          We're reimagining food support for the Niagara community. This isn't about charity – 
          it's about neighbors helping neighbors with dignity, privacy, and genuine care.
        </p>
      </section>

      {/* Mission Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              I Need A Meal was born from a simple belief: everyone deserves access to nourishing, 
              comforting food during life's difficult moments, without judgment or stigma.
            </p>
            <p>
              We're a <strong>private, member-based community initiative</strong> – not a traditional 
              charity or non-profit. This approach allows us to maintain the privacy and dignity of 
              our members while building genuine community connections.
            </p>
            <p>
              Our pilot project focuses on delivering hearty, comfort-food-style meals directly to 
              your door, because we believe that a good meal can provide both physical nourishment 
              and emotional comfort when you need it most.
            </p>
          </div>
        </div>
        <div className="order-first lg:order-last">
          <img 
            src={communityImage} 
            alt="Community members sharing a meal" 
            className="w-full rounded-lg shadow-warm"
          />
        </div>
      </section>

      {/* How We're Different */}
      <section className="bg-warm-cream/30 rounded-2xl p-8 lg:p-12">
        <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
          How We're Different
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
              <Heart className="h-5 w-5 text-primary" />
              Traditional Food Support
            </h3>
            <ul className="space-y-3 text-muted-foreground">
              <li>• Often requires public visits to soup kitchens or food banks</li>
              <li>• Limited hours and locations</li>
              <li>• May feel impersonal or institutional</li>
              <li>• Sometimes involves long waits or lines</li>
              <li>• Limited meal variety and timing</li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              I Need A Meal Approach
            </h3>
            <ul className="space-y-3 text-muted-foreground">
              <li>• Private delivery directly to your home</li>
              <li>• Flexible scheduling that works for your life</li>
              <li>• Member-based community feel</li>
              <li>• No waiting in lines or public visits</li>
              <li>• Fresh, comfort food prepared with care</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Private & Member-Based */}
      <section>
        <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
          Why We're Private & Member-Based
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-none shadow-soft">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-3">Dignity & Privacy</h3>
              <p className="text-muted-foreground text-sm">
                No one should feel exposed or judged when seeking food support. Our private model 
                protects your dignity and personal information.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-soft">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-secondary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-3">Community Connection</h3>
              <p className="text-muted-foreground text-sm">
                Membership creates a sense of belonging. You're not a "recipient" – 
                you're part of a community that supports each other.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-soft">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Home className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-3">Sustainable Support</h3>
              <p className="text-muted-foreground text-sm">
                By operating privately, we can focus on quality, consistency, and building 
                lasting community relationships rather than meeting external requirements.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* The Pilot Program */}
      <section className="bg-soft-sage/20 rounded-2xl p-8 lg:p-12">
        <h2 className="text-3xl font-bold text-foreground mb-6">About Our Pilot Program</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-4">What This Means</h3>
            <p className="text-muted-foreground mb-4">
              As a pilot project, we're testing and refining our approach to community food support. 
              This allows us to:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Learn what works best for our community</li>
              <li>• Adapt our services based on member feedback</li>
              <li>• Build sustainable systems for the future</li>
              <li>• Keep membership numbers manageable during development</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Current Focus</h3>
            <p className="text-muted-foreground mb-4">
              We're currently serving the <strong>Niagara Region</strong> and focusing on:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Individuals facing short-term food insecurity</li>
              <li>• People who need immediate meal support</li>
              <li>• Community members who value privacy and dignity</li>
              <li>• Those who prefer home delivery over public venues</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center bg-gradient-subtle rounded-2xl p-8 lg:p-12">
        <h2 className="text-3xl font-bold text-foreground mb-4">
          Ready to Join Our Community?
        </h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          If our approach resonates with you and you're facing food insecurity, 
          we'd love to welcome you to our pilot program.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="warm" size="lg">
            <Link to="/membership">Apply for Membership</Link>
          </Button>
          <Button asChild variant="sage" size="lg">
            <Link to="/contact">Have Questions?</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}