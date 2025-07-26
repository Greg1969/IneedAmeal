import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Heart, Shield, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Membership() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    postalCode: "",
    phone: "",
    deliveryPreference: "",
    householdSize: "",
    notes: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Application Submitted Successfully!",
      description: "We'll review your application and contact you within 2-3 business days. Thank you for your interest in joining our community.",
    });

    setIsSubmitting(false);
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      postalCode: "",
      phone: "",
      deliveryPreference: "",
      householdSize: "",
      notes: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
          Apply for Membership
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Join our pilot program for dignified, community-based meal delivery. 
          Membership is free and designed to support you during challenging times.
        </p>
      </div>

      {/* Benefits Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card className="border-none shadow-soft text-center">
          <CardContent className="p-6">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Heart className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Free to Join</h3>
            <p className="text-muted-foreground text-sm">
              No membership fees. Our pilot program is completely free for qualified community members.
            </p>
          </CardContent>
        </Card>

        <Card className="border-none shadow-soft text-center">
          <CardContent className="p-6">
            <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Shield className="h-6 w-6 text-secondary-foreground" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Private & Secure</h3>
            <p className="text-muted-foreground text-sm">
              Your information stays confidential. We respect your privacy and dignity above all.
            </p>
          </CardContent>
        </Card>

        <Card className="border-none shadow-soft text-center">
          <CardContent className="p-6">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Community Support</h3>
            <p className="text-muted-foreground text-sm">
              Join a caring community focused on mutual support and understanding.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Application Form */}
      <Card className="shadow-warm">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Membership Application</CardTitle>
          <p className="text-muted-foreground text-center">
            Please fill out this form completely. All information is kept strictly confidential.
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange("firstName", e.target.value)}
                  required
                  placeholder="Enter your first name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name *</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange("lastName", e.target.value)}
                  required
                  placeholder="Enter your last name"
                />
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2 space-y-2">
                  <Label htmlFor="address">Address *</Label>
                  <Input
                    id="address"
                    value={formData.address}
                    onChange={(e) => handleInputChange("address", e.target.value)}
                    required
                    placeholder="Street address, apartment/unit number"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="postalCode">Postal Code *</Label>
                  <Input
                    id="postalCode"
                    value={formData.postalCode}
                    onChange={(e) => handleInputChange("postalCode", e.target.value)}
                    required
                    placeholder="L0S 1J0"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  required
                  placeholder="(905) 123-4567"
                />
              </div>
            </div>

            {/* Meal Preferences */}
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="deliveryPreference">Meal Delivery Preference *</Label>
                <Select value={formData.deliveryPreference} onValueChange={(value) => handleInputChange("deliveryPreference", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your preferred delivery option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="one-time">One-time delivery (as needed)</SelectItem>
                    <SelectItem value="scheduled-free">Scheduled free deliveries</SelectItem>
                    <SelectItem value="scheduled-discounted">Scheduled discounted deliveries</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="householdSize">Number of Meals Needed Per Household *</Label>
                <Select value={formData.householdSize} onValueChange={(value) => handleInputChange("householdSize", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="How many people will these meals serve?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 person</SelectItem>
                    <SelectItem value="2">2 people</SelectItem>
                    <SelectItem value="3">3 people</SelectItem>
                    <SelectItem value="4">4 people</SelectItem>
                    <SelectItem value="5">5 people</SelectItem>
                    <SelectItem value="6+">6 or more people</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Additional Notes */}
            <div className="space-y-2">
              <Label htmlFor="notes">Additional Notes (Optional)</Label>
              <Textarea
                id="notes"
                value={formData.notes}
                onChange={(e) => handleInputChange("notes", e.target.value)}
                placeholder="Any dietary restrictions, special circumstances, or additional information you'd like us to know..."
                rows={4}
              />
            </div>

            {/* Privacy Notice */}
            <div className="bg-warm-cream/30 rounded-lg p-4">
              <p className="text-sm text-muted-foreground">
                <strong>Privacy Commitment:</strong> Your information will be kept strictly confidential and used only 
                to coordinate meal deliveries and communicate with you about the program. We never share personal 
                information with third parties.
              </p>
            </div>

            {/* Submit Button */}
            <Button 
              type="submit" 
              variant="warm" 
              size="lg" 
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting Application..." : "Submit Application"}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* What Happens Next */}
      <Card className="mt-8 border-none shadow-soft">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold text-foreground mb-4">What Happens Next?</h3>
          <div className="space-y-3 text-muted-foreground">
            <p>
              <strong>1. Application Review:</strong> We'll review your application within 2-3 business days.
            </p>
            <p>
              <strong>2. Welcome Contact:</strong> If approved, we'll contact you with your member information and instructions for accessing daily delivery codes.
            </p>
            <p>
              <strong>3. Start Scheduling:</strong> Once you're a member, you can begin scheduling meal deliveries using the daily codes available at itfspartners.com after 2 PM each day.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}