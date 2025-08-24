import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/hero-image.jpg";

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-subtle pt-16 flex items-center">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                From Village to
                <span className="bg-gradient-hero bg-clip-text text-transparent"> Global Stage</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Empowering rural India with AI-powered skill development, job matching, and instant earnings. 
                Bridge the digital divide with our comprehensive platform.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl">
                Start as Worker
              </Button>
              <Button variant="elegant" size="xl">
                Post Jobs
              </Button>
              <Button variant="outline" size="xl">
                Partner with Us
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <Card className="p-4 text-center bg-white/60 backdrop-blur border-0 shadow-elegant">
                <div className="text-2xl font-bold text-primary">50K+</div>
                <div className="text-sm text-muted-foreground">Users Onboarded</div>
              </Card>
              <Card className="p-4 text-center bg-white/60 backdrop-blur border-0 shadow-elegant">
                <div className="text-2xl font-bold text-success">₹2Cr+</div>
                <div className="text-sm text-muted-foreground">Earnings Generated</div>
              </Card>
              <Card className="p-4 text-center bg-white/60 backdrop-blur border-0 shadow-elegant">
                <div className="text-2xl font-bold text-secondary">1M+</div>
                <div className="text-sm text-muted-foreground">Jobs Completed</div>
              </Card>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-hero opacity-20 blur-3xl rounded-full"></div>
            <img 
              src={heroImage} 
              alt="Rural Indian professionals working with technology"
              className="relative rounded-2xl shadow-glow w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}