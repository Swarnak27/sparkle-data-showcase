import { Award, ExternalLink } from 'lucide-react';

const CertificationsSection = () => {
  const certifications = [
    {
      title: "Python for Data Science",
      issuer: "NPTEL",
      year: "2024",
      gradient: "bg-gradient-neon"
    },
    {
      title: "Introduction to Data Science",
      issuer: "Cisco",
      year: "2024",
      gradient: "bg-gradient-cyber"
    },
    {
      title: "SQL",
      issuer: "Solo Learn",
      year: "2023",
      gradient: "bg-gradient-purple"
    },
    {
      title: "Data Science & Analytics",
      issuer: "HP Life",
      year: "2023",
      gradient: "bg-gradient-neon"
    },
    {
      title: "PHP & MySQL",
      issuer: "IIT Bombay",
      year: "2023",
      gradient: "bg-gradient-cyber"
    },
    {
      title: "Zoho Creators Training Program",
      issuer: "Traqmetrix",
      year: "2024",
      gradient: "bg-gradient-purple"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gradient-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 neon-text sparkle">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-neon mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and professional development in data science and analytics
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={cert.title}
              className="skill-card rounded-2xl p-6 group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 ${cert.gradient} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <Award size={24} className="text-background" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2 text-primary group-hover:text-secondary transition-colors duration-300">
                    {cert.title}
                  </h3>
                  <p className="text-muted-foreground mb-1">{cert.issuer}</p>
                  <p className="text-sm text-accent font-medium">{cert.year}</p>
                </div>

                <ExternalLink 
                  size={20} 
                  className="text-muted-foreground group-hover:text-primary transition-colors duration-300 opacity-0 group-hover:opacity-100" 
                />
              </div>
              
              <div className="mt-4 pt-4 border-t border-border/30">
                <div className="w-full bg-muted/20 rounded-full h-2">
                  <div 
                    className={`h-2 ${cert.gradient} rounded-full transition-all duration-1000 ease-out`}
                    style={{ 
                      width: '100%',
                      animationDelay: `${index * 0.2}s`
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Floating certification icons */}
        <div className="absolute top-1/4 right-10 opacity-10">
          <Award size={60} className="text-primary floating" style={{ animationDelay: '0s' }} />
        </div>
        <div className="absolute bottom-1/4 left-10 opacity-10">
          <Award size={50} className="text-secondary floating" style={{ animationDelay: '1s' }} />
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;