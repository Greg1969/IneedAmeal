import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock, MessageSquare, HelpCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours. Thank you for reaching out to our community.",
    });

    setIsSubmitting(false);
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      inquiryType: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
          Contact Us
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Have questions about our pilot program? Need help with membership or scheduling? 
          We're here to support our community members.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <Card className="shadow-warm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-primary" />
              Send Us a Message
            </CardTitle>
            <p className="text-muted-foreground">
              We respond to all inquiries within 24 hours during business days.
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    required
                    placeholder="Your full name"
                  />
                </div>
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
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number (Optional)</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="(905) 123-4567"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="inquiryType">Type of Inquiry</Label>
                <Select value={formData.inquiryType} onValueChange={(value) => handleInputChange("inquiryType", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="What can we help you with?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="membership">Membership Application Questions</SelectItem>
                    <SelectItem value="scheduling">Meal Scheduling Help</SelectItem>
                    <SelectItem value="delivery">Delivery Issues</SelectItem>
                    <SelectItem value="program">General Program Information</SelectItem>
                    <SelectItem value="technical">Technical Support</SelectItem>
                    <SelectItem value="feedback">Feedback or Suggestions</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject *</Label>
                <Input
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => handleInputChange("subject", e.target.value)}
                  required
                  placeholder="Brief description of your inquiry"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  required
                  placeholder="Please provide details about your question or concern..."
                  rows={5}
                />
              </div>

              <Button 
                type="submit" 
                variant="warm" 
                size="lg" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending Message..." : "Send Message"}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Contact Information and FAQ */}
        <div className="space-y-8">
          {/* Contact Info */}
          <Card className="border-none shadow-soft">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-6">Get In Touch</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium text-foreground">Service Area</h4>
                    <p className="text-muted-foreground">Niagara Region, Ontario</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium text-foreground">Support Hours</h4>
                    <p className="text-muted-foreground">
                      Monday - Friday: 9:00 AM - 5:00 PM<br />
                      Emergency support available for delivery issues
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium text-foreground">Response Time</h4>
                    <p className="text-muted-foreground">
                      We aim to respond to all inquiries within 24 hours during business days.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Help */}
          <Card className="border-none shadow-soft">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-primary" />
                Quick Help
              </h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-foreground mb-2">Need Today's Delivery Code?</h4>
                  <p className="text-muted-foreground text-sm mb-2">
                    Daily codes are released at 2:00 PM on our partner site.
                  </p>
                  <a 
                    href="https://itfspartners.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 font-medium transition-colors text-sm"
                  >
                    Visit itfspartners.com →
                  </a>
                </div>

                <div>
                  <h4 className="font-medium text-foreground mb-2">Membership Application Status?</h4>
                  <p className="text-muted-foreground text-sm">
                    Applications are typically reviewed within 2-3 business days. 
                    Contact us if you haven't heard back within this timeframe.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-foreground mb-2">Delivery Issues?</h4>
                  <p className="text-muted-foreground text-sm">
                    For same-day delivery concerns, please contact us immediately. 
                    Include your delivery date and address in your message.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Community Values */}
          <Card className="bg-gradient-subtle border-none shadow-soft">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Our Community Values</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>
                  <strong className="text-foreground">Dignity:</strong> Every interaction respects your privacy and personal circumstances.
                </p>
                <p>
                  <strong className="text-foreground">Community:</strong> We're neighbors helping neighbors through challenging times.
                </p>
                <p>
                  <strong className="text-foreground">Support:</strong> No judgment, just genuine care and practical help when needed.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}