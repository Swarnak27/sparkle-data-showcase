import { GraduationCap, School, BookOpen } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      degree: "B.Tech - Information Technology",
      institution: "Paavai Engineering College",
      grade: "CGPA: 9.09",
      year: "2021-2025",
      icon: <GraduationCap size={32} />,
      gradient: "bg-gradient-neon",
      description: "Specialized in Information Technology with focus on data structures, algorithms, and software development."
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Bharathi Balamandir M.H.S.S",
      grade: "91%",
      year: "2020-2021",
      icon: <School size={32} />,
      gradient: "bg-gradient-cyber",
      description: "Mathematics and Computer Science stream with excellent academic performance."
    },
    {
      degree: "Secondary School Leaving Certificate (SSLC)",
      institution: "Bharathi Balamandir M.H.S.S",
      grade: "90%",
      year: "2019-2020",
      icon: <BookOpen size={32} />,
      gradient: "bg-gradient-purple",
      description: "Strong foundation in mathematics and science subjects."
    }
  ];

  return (
    <section id="education" className="py-20 animated-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 neon-text sparkle">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-neon mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Academic journey building strong foundations in technology and analytical thinking
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-neon opacity-30 hidden md:block"></div>

            {education.map((edu, index) => (
              <div key={edu.degree} className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2'}`}>
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block"></div>
                
                <div className={`skill-card rounded-2xl p-6 md:p-8 group ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  <div className="flex items-start space-x-6">
                    <div className={`w-16 h-16 ${edu.gradient} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                      <span className="text-background">{edu.icon}</span>
                    </div>
                    
                    <div className="flex-1">
                      <div className="mb-4">
                        <h3 className="text-xl md:text-2xl font-display font-bold mb-2 text-primary group-hover:text-secondary transition-colors duration-300">
                          {edu.degree}
                        </h3>
                        <p className="text-lg text-muted-foreground mb-1">{edu.institution}</p>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
                          <span className="text-accent font-semibold">{edu.grade}</span>
                          <span className="text-sm text-muted-foreground">{edu.year}</span>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed">
                        {edu.description}
                      </p>
                    </div>
                  </div>

                  {/* Progress indicator */}
                  <div className="mt-6 pt-4 border-t border-border/30">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-primary">Academic Excellence</span>
                      <span className="text-sm text-accent">{edu.grade}</span>
                    </div>
                    <div className="w-full bg-muted/20 rounded-full h-2">
                      <div 
                        className={`h-2 ${edu.gradient} rounded-full transition-all duration-1000 ease-out`}
                        style={{ 
                          width: edu.degree.includes('B.Tech') ? '91%' : edu.grade.includes('91') ? '91%' : '90%',
                          animationDelay: `${index * 0.3}s`
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;