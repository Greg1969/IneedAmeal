import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, QrCode, UtensilsCrossed, Settings, Plus } from "lucide-react";

export default function Admin() {
  const adminSections = [
    {
      title: "User Management",
      description: "Manage user accounts, memberships, and access permissions",
      icon: Users,
      color: "bg-blue-500/10 text-blue-600 border-blue-200"
    },
    {
      title: "Delivery Codes",
      description: "Generate and manage daily delivery access codes",
      icon: QrCode,
      color: "bg-green-500/10 text-green-600 border-green-200"
    },
    {
      title: "Meal Management",
      description: "Configure meals, menus, and dietary restrictions",
      icon: UtensilsCrossed,
      color: "bg-orange-500/10 text-orange-600 border-orange-200"
    },
    {
      title: "System Settings",
      description: "Configure application settings and preferences",
      icon: Settings,
      color: "bg-purple-500/10 text-purple-600 border-purple-200"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Administration Dashboard</h1>
          <p className="text-muted-foreground">
            Manage users, delivery codes, meals, and system settings
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {adminSections.map((section) => {
            const IconComponent = section.icon;
            return (
              <Card key={section.title} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${section.color}`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{section.title}</CardTitle>
                      <CardDescription className="mt-1">
                        {section.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    Manage {section.title}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Plus className="h-5 w-5" />
              Quick Actions
            </CardTitle>
            <CardDescription>
              Common administrative tasks and shortcuts
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
                <Users className="h-6 w-6" />
                <span className="text-sm">Add New User</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
                <QrCode className="h-6 w-6" />
                <span className="text-sm">Generate Daily Code</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
                <UtensilsCrossed className="h-6 w-6" />
                <span className="text-sm">Add New Meal</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
                <Settings className="h-6 w-6" />
                <span className="text-sm">System Backup</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}