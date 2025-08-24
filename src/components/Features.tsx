import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Briefcase, Bot, Zap, Shield, Globe } from "lucide-react";

export default function Features() {
  const workerFeatures = [
    {
      icon: Bot,
      title: "AI Career Mentor",
      description: "Get personalized guidance and skill recommendations powered by GPT"
    },
    {
      icon: Briefcase,
      title: "Smart Job Matching",
      description: "AI curates jobs based on your skills, location, and preferences"
    },
    {
      icon: Zap,
      title: "Instant Payments",
      description: "Earn and withdraw instantly via UPI with zero processing delays"
    }
  ];

  const employerFeatures = [
    {
      icon: Users,
      title: "Distributed Workforce",
      description: "Access skilled talent from across India at affordable rates"
    },
    {
      icon: Shield,
      title: "AI Quality Control",
      description: "Automated quality checks ensure consistent, high-quality work"
    },
    {
      icon: Globe,
      title: "Scale Instantly",
      description: "From 10 to 10,000 workers - scale your projects effortlessly"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Powerful Features for Everyone
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our platform bridges the gap between opportunity and talent with cutting-edge AI technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Worker Features */}
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">For Workers</h3>
              <p className="text-muted-foreground">Empower your career journey with AI-driven tools</p>
            </div>
            
            <div className="space-y-6">
              {workerFeatures.map((feature, index) => (
                <Card key={index} className="p-6 hover:shadow-elegant transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h4>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-8">
              <Button variant="success" size="lg">
                Start Earning Today
              </Button>
            </div>
          </div>

          {/* Employer Features */}
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">For Employers</h3>
              <p className="text-muted-foreground">Scale your business with India's distributed workforce</p>
            </div>
            
            <div className="space-y-6">
              {employerFeatures.map((feature, index) => (
                <Card key={index} className="p-6 hover:shadow-elegant transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h4>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-8">
              <Button variant="hero" size="lg">
                Post Your First Job
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}