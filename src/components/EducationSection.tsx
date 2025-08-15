import { GraduationCap, School, BookOpen } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      degree: "B.Tech - Information Technology",
      institution: "Paavai Engineering College",
      grade: "CGPA: 9.09",
      icon: <GraduationCap size={32} />,
      gradient: "bg-gradient-neon"
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Bharathi Balamandir M.H.S.S",
      grade: "91%",
      icon: <School size={32} />,
      gradient: "bg-gradient-cyber"
    },
    {
      degree: "Secondary School Leaving Certificate (SSLC)",
      institution: "Bharathi Balamandir M.H.S.S",
      grade: "90%",
      icon: <BookOpen size={32} />,
      gradient: "bg-gradient-purple"
    }
  ];

  return (
    <section id="education" className="py-20 animated-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-primary">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-neon mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Academic journey building strong foundations in technology and analytical thinking
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {education.map((edu, index) => (
              <div key={edu.degree} className="skill-card rounded-2xl p-6 group">
                <div className="text-center">
                  <div className={`w-16 h-16 ${edu.gradient} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-background">{edu.icon}</span>
                  </div>
                  
                  <h3 className="text-xl font-display font-bold mb-2 text-primary group-hover:text-secondary transition-colors duration-300">
                    {edu.degree}
                  </h3>
                  <p className="text-lg text-muted-foreground mb-2">{edu.institution}</p>
                  <span className="text-accent font-semibold text-lg">{edu.grade}</span>
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