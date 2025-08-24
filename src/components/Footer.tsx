import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">B</span>
              </div>
              <span className="text-xl font-bold">Bharat AI Skill Grid</span>
            </div>
            <p className="text-white/80 leading-relaxed">
              Empowering rural India with AI-powered skill development and job opportunities. 
              From village to global stage.
            </p>
            <div className="flex space-x-3">
              <Button size="icon" variant="ghost" className="text-white hover:bg-white/10">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button size="icon" variant="ghost" className="text-white hover:bg-white/10">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button size="icon" variant="ghost" className="text-white hover:bg-white/10">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button size="icon" variant="ghost" className="text-white hover:bg-white/10">
                <Instagram className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              <a href="#about" className="block text-white/80 hover:text-white transition-colors">About Us</a>
              <a href="#features" className="block text-white/80 hover:text-white transition-colors">Features</a>
              <a href="#how-it-works" className="block text-white/80 hover:text-white transition-colors">How It Works</a>
              <a href="#impact" className="block text-white/80 hover:text-white transition-colors">Community Impact</a>
              <a href="#careers" className="block text-white/80 hover:text-white transition-colors">Careers</a>
            </div>
          </div>

          {/* For Users */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Get Started</h4>
            <div className="space-y-2">
              <a href="#" className="block text-white/80 hover:text-white transition-colors">Worker Dashboard</a>
              <a href="#" className="block text-white/80 hover:text-white transition-colors">Employer Portal</a>
              <a href="#" className="block text-white/80 hover:text-white transition-colors">Partner Program</a>
              <a href="#" className="block text-white/80 hover:text-white transition-colors">Training Resources</a>
              <a href="#" className="block text-white/80 hover:text-white transition-colors">Help Center</a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-white/80">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">support@bharatskillgrid.com</span>
              </div>
              <div className="flex items-center space-x-3 text-white/80">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">+91 80-4567-8901</span>
              </div>
              <div className="flex items-start space-x-3 text-white/80">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span className="text-sm leading-relaxed">
                  Bangalore, Karnataka<br />
                  India - 560001
                </span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-white/20" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-white/80">
            © 2024 Bharat AI Skill Grid. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-white/80 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}