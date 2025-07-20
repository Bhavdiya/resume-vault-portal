import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
const Footer = () => {
  return <footer className="bg-gradient-hero text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand & Description */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">RIDDHIMA AGRAWAL</h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                Full-stack developer passionate about creating exceptional digital experiences. 
                Let's build something amazing together.
              </p>
              <div className="flex gap-4">
                <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-primary hover:bg-primary-foreground/10">
                  <Github className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-primary hover:bg-primary-foreground/10">
                  <Linkedin className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-primary hover:bg-primary-foreground/10">
                  <Mail className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <div className="space-y-2">
                <a href="#about" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  About Me
                </a>
                <a href="#projects" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Projects
                </a>
                <a href="#skills" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Skills
                </a>
                <a href="#resume-purchase" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Buy Resume
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Get In Touch</h4>
              <div className="space-y-2 text-primary-foreground/80">
                <p>riddhimaagrawal708@gmail.com</p>
                <p>7878765862</p>
                <p>Jaipur | Rajasthan</p>
                <p>🕐 Available for freelance work</p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-primary-foreground/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Copyright */}
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <span className="text-gray-100">© 2025 RIDDHIMA AGRAWAL</span>
                <Heart className="w-4 h-4 text-red-400 fill-current" />
                
              </div>

              {/* Tech Stack */}
              
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;