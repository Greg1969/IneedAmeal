import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Utensils, Clock, Users } from "lucide-react";

const menuCategories = [
  {
    name: "Comfort Classics",
    description: "Hearty, traditional meals that warm the soul",
    meals: [
      {
        id: 1,
        name: "Spaghetti with Meat Sauce & Garlic Bread",
        description: "Classic pasta with rich meat sauce, served with buttery garlic bread",
        ingredients: ["Ground beef", "Spaghetti pasta", "Tomato sauce", "Onions", "Garlic", "Italian herbs", "Parmesan cheese", "Garlic bread"],
        servings: "3-4",
        prepTime: "45 min"
      },
      {
        id: 2,
        name: "Chili with Rice and Bread",
        description: "Hearty beef chili served over fluffy rice with fresh bread",
        ingredients: ["Ground beef", "Kidney beans", "Diced tomatoes", "Onions", "Bell peppers", "Chili powder", "White rice", "Fresh bread"],
        servings: "4-5",
        prepTime: "60 min"
      },
      {
        id: 3,
        name: "Mac & Cheese with Hot Dogs",
        description: "Creamy macaroni and cheese paired with savory hot dogs",
        ingredients: ["Macaroni pasta", "Cheddar cheese", "Milk", "Butter", "Hot dogs", "Breadcrumbs", "Mustard"],
        servings: "3-4",
        prepTime: "30 min"
      },
      {
        id: 4,
        name: "Shepherd's Pie",
        description: "Layers of seasoned ground beef, vegetables, and creamy mashed potatoes",
        ingredients: ["Ground beef", "Potatoes", "Carrots", "Peas", "Onions", "Beef gravy", "Butter", "Milk"],
        servings: "4-6",
        prepTime: "75 min"
      },
      {
        id: 5,
        name: "Macaroni Casserole",
        description: "Baked macaroni with cheese and vegetables in a comforting casserole",
        ingredients: ["Macaroni pasta", "Ground beef", "Cheese sauce", "Mixed vegetables", "Breadcrumbs", "Butter"],
        servings: "4-5",
        prepTime: "50 min"
      }
    ]
  },
  {
    name: "Fresh & Healthy",
    description: "Nutritious meals packed with fresh ingredients",
    meals: [
      {
        id: 6,
        name: "Pulled Pork or Chicken on Buns",
        description: "Slow-cooked pulled meat served on soft buns with coleslaw",
        ingredients: ["Pork shoulder or chicken breast", "BBQ sauce", "Hamburger buns", "Coleslaw mix", "Pickles", "Onions"],
        servings: "4-6",
        prepTime: "4-6 hours"
      },
      {
        id: 7,
        name: "Chicken Stir Fry with Rice",
        description: "Fresh vegetables and tender chicken stir-fried with aromatic seasonings",
        ingredients: ["Chicken breast", "Mixed vegetables", "Soy sauce", "Garlic", "Ginger", "White rice", "Sesame oil"],
        servings: "3-4",
        prepTime: "25 min"
      },
      {
        id: 8,
        name: "Chicken with Rice and Vegetables",
        description: "Roasted chicken served with seasoned rice and steamed vegetables",
        ingredients: ["Chicken pieces", "White rice", "Broccoli", "Carrots", "Green beans", "Chicken broth", "Herbs"],
        servings: "4-5",
        prepTime: "60 min"
      }
    ]
  },
  {
    name: "American Favorites",
    description: "Classic American dishes everyone loves",
    meals: [
      {
        id: 9,
        name: "Burgers and Fries",
        description: "Juicy beef burgers with crispy golden fries",
        ingredients: ["Ground beef patties", "Hamburger buns", "Lettuce", "Tomatoes", "Onions", "Cheese", "Potatoes", "Condiments"],
        servings: "2-4",
        prepTime: "35 min"
      },
      {
        id: 10,
        name: "Tacos with Beef and Chicken",
        description: "Soft tacos filled with seasoned meat and fresh toppings",
        ingredients: ["Ground beef or chicken", "Taco shells", "Cheddar cheese", "Sour cream", "Diced tomatoes", "Lettuce", "Onions", "Salsa"],
        servings: "3-4",
        prepTime: "30 min"
      }
    ]
  },
  {
    name: "Breakfast Anytime",
    description: "Hearty breakfast meals served any time of day",
    meals: [
      {
        id: 11,
        name: "Full Breakfast Plate",
        description: "Complete breakfast with eggs, bacon, home fries, toast, and pancakes",
        ingredients: ["Eggs", "Bacon strips", "Potatoes", "Bread", "Pancake mix", "Butter", "Maple syrup", "Salt & pepper"],
        servings: "2-3",
        prepTime: "40 min"
      }
    ]
  }
];

export default function Menu() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          Our Community Menu
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Carefully crafted comfort meals made with love and fresh ingredients. 
          Each meal is prepared to serve families and bring warmth to your table.
        </p>
      </div>

      <div className="space-y-12">
        {menuCategories.map((category, categoryIndex) => (
          <section key={categoryIndex} className="space-y-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground mb-2">
                {category.name}
              </h2>
              <p className="text-muted-foreground">{category.description}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {category.meals.map((meal) => (
                <Card key={meal.id} className="shadow-soft hover:shadow-warm transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-xl text-foreground mb-2 leading-tight">
                          {meal.name}
                        </CardTitle>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {meal.description}
                        </p>
                      </div>
                      <div className="flex flex-col items-end gap-2 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Users className="h-3 w-3" />
                          <span>{meal.servings}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{meal.prepTime}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 mb-3">
                        <Utensils className="h-4 w-4 text-primary" />
                        <h4 className="font-medium text-foreground text-sm">Ingredients</h4>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {meal.ingredients.map((ingredient, index) => (
                          <Badge 
                            key={index} 
                            variant="secondary" 
                            className="text-xs bg-warm-cream/50 text-foreground border-none"
                          >
                            {ingredient}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <Card className="bg-gradient-warm/10 border-none shadow-warm">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Schedule Your Meal?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              All meals are prepared fresh and delivered with care to your door. 
              Join our pilot program to access these comforting, nutritious meals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Badge className="bg-primary/10 text-primary text-sm px-4 py-2">
                Daily codes available after 2:00 PM
              </Badge>
              <Badge className="bg-secondary/20 text-secondary-foreground text-sm px-4 py-2">
                Free delivery for pilot members
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}