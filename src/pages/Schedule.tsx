import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Clock, Calendar as CalendarIcon, Lock, ExternalLink, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

// Mock daily codes - in a real app, these would come from an API
const validCodes = ["MEAL2024", "COMFORT123", "NIAGARA456"];

const menuItems = [
  { id: 1, name: "Hearty Beef Stew", description: "Tender beef with vegetables in rich broth, served with fresh bread", category: "Comfort Classics" },
  { id: 2, name: "Chicken & Dumplings", description: "Home-style chicken with fluffy dumplings in savory sauce", category: "Comfort Classics" },
  { id: 3, name: "Vegetable Lasagna", description: "Layers of pasta, vegetables, and cheese with marinara sauce", category: "Vegetarian" },
  { id: 4, name: "Shepherd's Pie", description: "Ground beef with vegetables topped with creamy mashed potatoes", category: "Comfort Classics" },
  { id: 5, name: "Maple Glazed Salmon", description: "Fresh salmon with roasted vegetables and wild rice", category: "Fresh & Healthy" },
  { id: 6, name: "Butternut Squash Soup", description: "Creamy soup with fresh herbs, served with artisan bread", category: "Soups & Salads" }
];

export default function Schedule() {
  const { toast } = useToast();
  const [deliveryCode, setDeliveryCode] = useState("");
  const [isCodeValid, setIsCodeValid] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedMeals, setSelectedMeals] = useState<number[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCodeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validCodes.includes(deliveryCode.toUpperCase())) {
      setIsCodeValid(true);
      toast({
        title: "Valid Code Entered!",
        description: "You can now access today's menu and schedule your delivery.",
      });
    } else {
      toast({
        title: "Invalid Code",
        description: "Please check the daily code at itfspartners.com (available after 2 PM).",
        variant: "destructive",
      });
    }
  };

  const handleMealToggle = (mealId: number) => {
    setSelectedMeals(prev => 
      prev.includes(mealId) 
        ? prev.filter(id => id !== mealId)
        : [...prev, mealId]
    );
  };

  const handleScheduleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime || selectedMeals.length === 0) {
      toast({
        title: "Please Complete All Fields",
        description: "Select a date, time, and at least one meal for delivery.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate scheduling
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Delivery Scheduled!",
      description: `Your ${selectedMeals.length} meal(s) will be delivered on ${format(selectedDate, "MMMM do")} at ${selectedTime}.`,
    });

    setIsSubmitting(false);
    // Reset form
    setSelectedDate(undefined);
    setSelectedTime("");
    setSelectedMeals([]);
  };

  if (!isCodeValid) {
    return (
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-8">
          <Lock className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Meal Delivery & Schedule
          </h1>
          <p className="text-xl text-muted-foreground">
            Enter today's delivery code to access the menu and schedule your meal delivery.
          </p>
        </div>

        <Card className="shadow-warm">
          <CardHeader>
            <CardTitle className="text-center">Daily Delivery Code Required</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-warm-cream/30 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">How to Get Today's Code</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Daily delivery codes are released at 2:00 PM each day on our partner site.
                  </p>
                  <a 
                    href="https://itfspartners.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
                  >
                    Visit itfspartners.com
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            <form onSubmit={handleCodeSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="deliveryCode">Enter Today's Delivery Code</Label>
                <Input
                  id="deliveryCode"
                  value={deliveryCode}
                  onChange={(e) => setDeliveryCode(e.target.value)}
                  placeholder="Enter the daily code"
                  required
                />
              </div>
              
              <Button type="submit" variant="warm" className="w-full">
                Verify Code & Access Menu
              </Button>
            </form>

            <div className="bg-soft-sage/20 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-secondary-foreground mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Security Notice</h3>
                  <p className="text-muted-foreground text-sm">
                    Daily codes ensure secure access for pilot members only. New codes are released each day to maintain program integrity.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          Schedule Your Meal Delivery
        </h1>
        <p className="text-xl text-muted-foreground">
          Choose from today's menu and select your preferred delivery time.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Menu Selection */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle>Today's Menu</CardTitle>
            <p className="text-muted-foreground">Select the meals you'd like delivered</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {Object.entries(
                menuItems.reduce((acc, item) => {
                  if (!acc[item.category]) acc[item.category] = [];
                  acc[item.category].push(item);
                  return acc;
                }, {} as Record<string, typeof menuItems>)
              ).map(([category, items]) => (
                <div key={category}>
                  <h3 className="font-semibold text-foreground mb-2">{category}</h3>
                  <div className="space-y-2">
                    {items.map(item => (
                      <div
                        key={item.id}
                        className={cn(
                          "p-3 rounded-lg border cursor-pointer transition-all",
                          selectedMeals.includes(item.id)
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        )}
                        onClick={() => handleMealToggle(item.id)}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h4 className="font-medium text-foreground">{item.name}</h4>
                            <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                          </div>
                          <div className={cn(
                            "w-5 h-5 rounded border-2 flex items-center justify-center ml-3 mt-0.5",
                            selectedMeals.includes(item.id)
                              ? "border-primary bg-primary"
                              : "border-muted"
                          )}>
                            {selectedMeals.includes(item.id) && (
                              <div className="w-2 h-2 bg-primary-foreground rounded-sm" />
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Delivery Scheduling */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle>Delivery Details</CardTitle>
            <p className="text-muted-foreground">When would you like your meals delivered?</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleScheduleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label>Delivery Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !selectedDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {selectedDate ? format(selectedDate, "PPP") : "Pick a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      disabled={(date) => date < new Date() || date < new Date("1900-01-01")}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="space-y-2">
                <Label htmlFor="deliveryTime">Preferred Delivery Time</Label>
                <Select value={selectedTime} onValueChange={setSelectedTime}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select delivery time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="11:00-13:00">11:00 AM - 1:00 PM</SelectItem>
                    <SelectItem value="13:00-15:00">1:00 PM - 3:00 PM</SelectItem>
                    <SelectItem value="15:00-17:00">3:00 PM - 5:00 PM</SelectItem>
                    <SelectItem value="17:00-19:00">5:00 PM - 7:00 PM</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="bg-warm-cream/30 rounded-lg p-4">
                <h3 className="font-semibold text-foreground mb-2">Order Summary</h3>
                <p className="text-muted-foreground text-sm">
                  {selectedMeals.length > 0 
                    ? `${selectedMeals.length} meal(s) selected`
                    : "No meals selected"
                  }
                </p>
                {selectedDate && selectedTime && (
                  <p className="text-muted-foreground text-sm">
                    Delivery: {format(selectedDate, "MMMM do")} between {selectedTime}
                  </p>
                )}
              </div>

              <Button 
                type="submit" 
                variant="warm" 
                size="lg" 
                className="w-full"
                disabled={isSubmitting || selectedMeals.length === 0}
              >
                {isSubmitting ? "Scheduling Delivery..." : "Schedule Delivery"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

      {/* Important Notes */}
      <Card className="mt-8 border-none shadow-soft">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">Important Delivery Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
            <div>
              <h4 className="font-medium text-foreground mb-2">Delivery Process</h4>
              <ul className="space-y-1">
                <li>• Meals are delivered fresh and ready to eat</li>
                <li>• No signature required - meals left at door if needed</li>
                <li>• You'll receive a text when delivery is complete</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-2">Cancellation Policy</h4>
              <ul className="space-y-1">
                <li>• Cancel up to 2 hours before delivery window</li>
                <li>• Contact us if you need to make changes</li>
                <li>• Same-day scheduling available until 10 AM</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}