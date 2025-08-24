import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, TrendingUp, Users, MapPin } from "lucide-react";

export default function Impact() {
  const impactStats = [
    {
      icon: Users,
      title: "Women Empowerment",
      stat: "60%",
      description: "of our workforce are women from rural areas earning independently"
    },
    {
      icon: TrendingUp,
      title: "Economic Growth",
      stat: "₹5000",
      description: "average monthly earnings uplift for rural families"
    },
    {
      icon: MapPin,
      title: "Geographic Reach",
      stat: "28 States",
      description: "across India with active skill development centers"
    },
    {
      icon: Heart,
      title: "Lives Transformed",
      stat: "50,000+",
      description: "individuals skilled and employed through our platform"
    }
  ];

  return (
    <section id="impact" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Creating Real Impact
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transforming lives across India by bridging the digital divide and empowering communities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {impactStats.map((impact, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-elegant transition-all duration-300 bg-gradient-subtle border-0">
              <div className="w-16 h-16 bg-gradient-success rounded-full flex items-center justify-center mx-auto mb-4">
                <impact.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">{impact.stat}</div>
              <h4 className="text-lg font-semibold text-foreground mb-2">{impact.title}</h4>
              <p className="text-sm text-muted-foreground">{impact.description}</p>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-hero rounded-2xl p-8 lg:p-12 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-4xl font-bold text-white mb-4">
              Join the Movement
            </h3>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Whether you're looking to develop skills, hire talent, or partner with us for social impact, 
              become part of India's largest skill transformation initiative.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="elegant" size="lg">
                Partner with Us
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                View Success Stories
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h4 className="text-xl font-semibold text-foreground mb-4">Supported by</h4>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-lg font-medium text-muted-foreground">Government of India</div>
            <div className="text-lg font-medium text-muted-foreground">Digital India</div>
            <div className="text-lg font-medium text-muted-foreground">Skill India</div>
            <div className="text-lg font-medium text-muted-foreground">Leading NGOs</div>
          </div>
        </div>
      </div>
    </section>
  );
}