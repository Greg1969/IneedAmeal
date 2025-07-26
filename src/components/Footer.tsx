import { Heart, MapPin, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-rich-brown/5 border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Heart className="h-6 w-6 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">I Need A Meal</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              A community-driven pilot project bringing dignified meal delivery to those facing food insecurity in the Niagara region.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              Service Area
            </h4>
            <p className="text-muted-foreground">
              Niagara Region, Ontario<br />
              Private membership-based community initiative
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />
              Daily Delivery Codes
            </h4>
            <p className="text-muted-foreground mb-2">
              Released daily after 2:00 PM
            </p>
            <a 
              href="https://itfspartners.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 font-medium transition-colors"
            >
              itfspartners.com →
            </a>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 I Need A Meal. A private community pilot project. 
            <span className="inline-block ml-2">Made with care in Niagara.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}