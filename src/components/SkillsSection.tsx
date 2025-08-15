import { 
  Database, 
  BarChart3, 
  FileSpreadsheet, 
  GitBranch, 
  Users, 
  MessageSquare,
  Code,
  TrendingUp
} from 'lucide-react';
import skillsBackground from '@/assets/skills-bg.jpg';

const SkillsSection = () => {
  const skills = [
    {
      category: "Data Analytics",
      icon: <TrendingUp size={32} />,
      items: ["Data interpretation", "KPI tracking", "Dashboard creation"],
      gradient: "bg-gradient-neon"
    },
    {
      category: "Languages", 
      icon: <Code size={32} />,
      items: ["Python", "SQL"],
      gradient: "bg-gradient-cyber"
    },
    {
      category: "Visualization Tools",
      icon: <BarChart3 size={32} />,
      items: ["Power BI", "Excel"],
      gradient: "bg-gradient-purple"
    },
    {
      category: "Database",
      icon: <Database size={32} />,
      items: ["MySQL"],
      gradient: "bg-gradient-neon"
    },
    {
      category: "Other",
      icon: <GitBranch size={32} />,
      items: ["Git", "Data Cleaning", "Reporting"],
      gradient: "bg-gradient-cyber"
    },
    {
      category: "Soft Skills",
      icon: <Users size={32} />,
      items: ["Problem-solving", "Team collaboration", "Communication"],
      gradient: "bg-gradient-purple"
    }
  ];

  return (
    <section 
      id="skills" 
      className="py-20 relative overflow-hidden"
      style={{
        backgroundImage: `url(${skillsBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-background/80"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 neon-text sparkle">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-neon mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transforming data into actionable insights with cutting-edge tools and technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.category}
              className="skill-card rounded-3xl p-8 text-center group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-20 h-20 ${skill.gradient} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 group-hover:shadow-lg`}>
                <span className="text-background">{skill.icon}</span>
              </div>
              
              <h3 className="text-xl font-display font-semibold mb-4 text-primary group-hover:text-secondary transition-colors duration-300">
                {skill.category}
              </h3>
              
              <ul className="space-y-2">
                {skill.items.map((item, itemIndex) => (
                  <li 
                    key={item} 
                    className="text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    style={{ animationDelay: `${(index * 0.1) + (itemIndex * 0.05)}s` }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Floating skill icons */}
        <div className="absolute top-20 left-10 opacity-20">
          <Database size={40} className="text-primary floating" style={{ animationDelay: '0s' }} />
        </div>
        <div className="absolute top-40 right-20 opacity-20">
          <BarChart3 size={35} className="text-secondary floating" style={{ animationDelay: '1s' }} />
        </div>
        <div className="absolute bottom-20 left-20 opacity-20">
          <Code size={45} className="text-accent floating" style={{ animationDelay: '2s' }} />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;