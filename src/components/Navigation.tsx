import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigation = [{
    name: "Login",
    href: "/login"
  }, {
    name: "Admin",
    href: "/admin"
  }, {
    name: "Home",
    href: "/"
  }, {
    name: "About",
    href: "/about"
  }, {
    name: "Menu",
    href: "/menu"
  }, {
    name: "Membership",
    href: "/membership"
  }, {
    name: "Schedule Meal",
    href: "/schedule"
  }, {
    name: "Contact",
    href: "/contact"
  }];
  const isActive = (href: string) => {
    if (href === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(href);
  };
  return <nav className="bg-card/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 text-xl font-bold text-foreground hover:text-primary transition-colors">
              <Heart className="h-6 w-6 text-primary" />
              I Need A Meal
            </Link>
            <div className="ml-12 text-sm text-muted-foreground">
              <span className="font-medium">Start Date:</span> August 10th
            </div>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map(item => <Link key={item.name} to={item.href} className={cn("px-3 py-2 rounded-md text-sm font-medium transition-colors", isActive(item.href) ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:text-foreground hover:bg-accent/50")}>
                {item.name}
              </Link>)}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card/90 backdrop-blur-sm rounded-lg mt-2 border border-border">
              {navigation.map(item => <Link key={item.name} to={item.href} onClick={() => setIsMenuOpen(false)} className={cn("block px-3 py-2 rounded-md text-base font-medium transition-colors", isActive(item.href) ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:text-foreground hover:bg-accent/50")}>
                  {item.name}
                </Link>)}
            </div>
          </div>}
      </div>
    </nav>;
}