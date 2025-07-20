import { Card } from "@/components/ui/card";
import { Code, Database, Globe, Smartphone } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "Expert in React, TypeScript, and modern CSS frameworks"
    },
    {
      icon: Database,
      title: "Backend Development", 
      description: "Proficient in Node.js, Express, and database design"
    },
    {
      icon: Globe,
      title: "Full-Stack Solutions",
      description: "End-to-end application development and deployment"
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Mobile-first approach with seamless user experiences"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              With over 5 years of experience in web development, I've helped startups and 
              enterprises build scalable applications that deliver exceptional user experiences.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Bio */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Passionate Developer & Problem Solver
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I started my journey in web development 5 years ago and have since worked 
                  with various technologies and frameworks. My passion lies in creating 
                  efficient, scalable solutions that make a real impact.
                </p>
                <p>
                  Currently specializing in React ecosystem and Node.js backend development, 
                  I enjoy tackling complex challenges and turning ideas into reality through 
                  clean, maintainable code.
                </p>
                <p>
                  When I'm not coding, you can find me contributing to open-source projects, 
                  writing technical blogs, or exploring the latest in web technologies.
                </p>
              </div>
            </div>

            {/* Experience Stats */}
            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6 text-center border-0 shadow-card hover:shadow-elegant transition-all duration-300">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </Card>
              <Card className="p-6 text-center border-0 shadow-card hover:shadow-elegant transition-all duration-300">
                <div className="text-3xl font-bold text-accent mb-2">5+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </Card>
              <Card className="p-6 text-center border-0 shadow-card hover:shadow-elegant transition-all duration-300">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-muted-foreground">Technologies</div>
              </Card>
              <Card className="p-6 text-center border-0 shadow-card hover:shadow-elegant transition-all duration-300">
                <div className="text-3xl font-bold text-accent mb-2">100%</div>
                <div className="text-muted-foreground">Client Satisfaction</div>
              </Card>
            </div>
          </div>

          {/* Highlights */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <Card 
                key={index} 
                className="p-6 border-0 shadow-card hover:shadow-elegant transition-all duration-300 group"
              >
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <highlight.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    {highlight.title}
                  </h4>
                  <p className="text-muted-foreground">
                    {highlight.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;