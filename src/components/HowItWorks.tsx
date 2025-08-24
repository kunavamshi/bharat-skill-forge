import { Card } from "@/components/ui/card";
import { ArrowRight, UserPlus, Bot, Briefcase, CreditCard } from "lucide-react";

export default function HowItWorks() {
  const workerSteps = [
    {
      icon: UserPlus,
      step: "01",
      title: "Quick Registration",
      description: "Sign up with your Aadhaar, complete e-KYC, and link your UPI for instant payments"
    },
    {
      icon: Bot,
      step: "02", 
      title: "AI Skill Assessment",
      description: "Our AI mentor analyzes your skills and recommends personalized learning paths"
    },
    {
      icon: Briefcase,
      step: "03",
      title: "Get Matched with Jobs",
      description: "Receive curated job opportunities that match your skills and preferences"
    },
    {
      icon: CreditCard,
      step: "04",
      title: "Complete & Earn",
      description: "Finish tasks with AI guidance and receive instant payments to your UPI"
    }
  ];

  const employerSteps = [
    {
      icon: UserPlus,
      step: "01",
      title: "Company Verification",
      description: "Register your company with business documents and deposit funds to your wallet"
    },
    {
      icon: Briefcase,
      step: "02",
      title: "Post Jobs",
      description: "Create single or bulk tasks with AI-optimized job descriptions and requirements"
    },
    {
      icon: Bot,
      step: "03",
      title: "AI Matching & QC",
      description: "Our AI automatically assigns qualified workers and monitors quality in real-time"
    },
    {
      icon: CreditCard,
      step: "04",
      title: "Auto-Pay Workers",
      description: "Payments are automatically released to workers upon successful task completion"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Simple, transparent processes powered by AI to connect talent with opportunity
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Worker Journey */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">For Workers</h3>
            <div className="space-y-6">
              {workerSteps.map((step, index) => (
                <div key={index} className="relative">
                  <Card className="p-6 bg-white/80 backdrop-blur border-0 shadow-elegant hover:shadow-glow transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="relative">
                        <div className="w-12 h-12 bg-gradient-success rounded-full flex items-center justify-center flex-shrink-0">
                          <step.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary text-primary-foreground rounded-full text-xs font-bold flex items-center justify-center">
                          {step.step}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-foreground mb-2">{step.title}</h4>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  </Card>
                  
                  {index < workerSteps.length - 1 && (
                    <div className="flex justify-center mt-4">
                      <ArrowRight className="w-6 h-6 text-muted-foreground" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Employer Journey */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">For Employers</h3>
            <div className="space-y-6">
              {employerSteps.map((step, index) => (
                <div key={index} className="relative">
                  <Card className="p-6 bg-white/80 backdrop-blur border-0 shadow-elegant hover:shadow-glow transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="relative">
                        <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center flex-shrink-0">
                          <step.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-secondary text-secondary-foreground rounded-full text-xs font-bold flex items-center justify-center">
                          {step.step}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-foreground mb-2">{step.title}</h4>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  </Card>
                  
                  {index < employerSteps.length - 1 && (
                    <div className="flex justify-center mt-4">
                      <ArrowRight className="w-6 h-6 text-muted-foreground" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}