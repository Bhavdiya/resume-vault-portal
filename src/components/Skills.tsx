import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      skills: [
        { name: "React", level: 95, color: "bg-primary" },
        { name: "TypeScript", level: 90, color: "bg-primary" },
        { name: "JavaScript", level: 95, color: "bg-primary" },
        { name: "HTML/CSS", level: 90, color: "bg-primary" },
        { name: "Tailwind CSS", level: 85, color: "bg-accent" },
        { name: "Vue.js", level: 75, color: "bg-accent" }
      ]
    },
    {
      title: "Backend Technologies",
      skills: [
        { name: "Node.js", level: 90, color: "bg-primary" },
        { name: "Express.js", level: 85, color: "bg-primary" },
        { name: "Python", level: 80, color: "bg-accent" },
        { name: "PostgreSQL", level: 85, color: "bg-primary" },
        { name: "MongoDB", level: 80, color: "bg-accent" },
        { name: "Redis", level: 70, color: "bg-accent" }
      ]
    },
    {
      title: "Tools & DevOps",
      skills: [
        { name: "Git", level: 90, color: "bg-primary" },
        { name: "Docker", level: 80, color: "bg-accent" },
        { name: "AWS", level: 75, color: "bg-accent" },
        { name: "CI/CD", level: 80, color: "bg-accent" },
        { name: "Webpack", level: 75, color: "bg-accent" },
        { name: "Testing", level: 85, color: "bg-primary" }
      ]
    }
  ];

  const achievements = [
    "AWS Certified Developer",
    "React Advanced Certification",
    "Google Analytics Certified",
    "Scrum Master Certified"
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Skills & Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A comprehensive overview of my technical skills and professional certifications, 
              built through years of hands-on experience and continuous learning.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <Card 
                key={index} 
                className="p-6 border-0 shadow-card hover:shadow-elegant transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Certifications & Achievements */}
          <Card className="p-8 border-0 shadow-card">
            <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">
              Certifications & Achievements
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <Badge 
                    variant="secondary" 
                    className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-default"
                  >
                    {achievement}
                  </Badge>
                </div>
              ))}
            </div>
          </Card>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6">
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">Technologies Mastered</div>
            </div>
            <div className="text-center p-6">
              <div className="text-3xl font-bold text-accent mb-2">4</div>
              <div className="text-muted-foreground">Professional Certifications</div>
            </div>
            <div className="text-center p-6">
              <div className="text-3xl font-bold text-primary mb-2">99%</div>
              <div className="text-muted-foreground">Code Quality Score</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;