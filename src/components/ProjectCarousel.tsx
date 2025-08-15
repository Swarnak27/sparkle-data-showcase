import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import projectsBackground from '@/assets/projects-bg.jpg';

const ProjectCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Mental Health Chatbot",
      description: "Python chatbot with API integration & data insights for mental health support.",
      tech: ["Python", "API Integration", "Data Analysis"],
      github: "https://github.com/Swarnak27/Mental-Health-Chatbot",
      gradient: "bg-gradient-neon"
    },
    {
      id: 2,
      title: "Indian Airlines Dashboard",
      description: "Power BI dashboard transforming raw aviation data into actionable insights.",
      tech: ["Power BI", "Data Visualization", "Aviation Data"],
      github: "https://github.com/Swarnak27/Indian_Airlines_POWER-BI_Dashboard.git",
      gradient: "bg-gradient-cyber"
    },
    {
      id: 3,
      title: "Insurance Sales Dashboard",
      description: "Interactive Power BI analytics for comprehensive sales performance tracking.",
      tech: ["Power BI", "Sales Analytics", "KPI Tracking"],
      github: "https://github.com/Swarnak27/Insurance-Wealth-Analytics-Dashboard.git",
      gradient: "bg-gradient-purple"
    },
    {
      id: 4,
      title: "Automated Cloud Weekly Report",
      description: "Cloud-based automated reporting system for streamlined data workflows.",
      tech: ["Cloud Computing", "Automation", "Reporting"],
      github: "https://github.com/Swarnak27/Cloud-Automated-Report.git",
      gradient: "bg-gradient-neon"
    },
    {
      id: 5,
      title: "Medicine Expiry & Waste Prevention",
      description: "MySQL system for tracking medicine batches & preventing waste through expiry monitoring.",
      tech: ["MySQL", "Database Design", "Healthcare"],
      github: "https://github.com/Swarnak27/Medicine_Expiry-Waste_prevention_System.git",
      gradient: "bg-gradient-cyber"
    },
    {
      id: 6,
      title: "Smart Transport & Safety Tracker",
      description: "MySQL system for comprehensive vehicle tracking & safety monitoring solutions.",
      tech: ["MySQL", "Real-time Tracking", "Safety Systems"],
      github: "https://github.com/Swarnak27/-Smart-Transport-and-Safety-Tracking-System.git",
      gradient: "bg-gradient-purple"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section 
      id="projects" 
      className="py-20 relative overflow-hidden"
      style={{
        backgroundImage: `url(${projectsBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-background/85"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-primary">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-neon mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing data-driven solutions and analytical innovations
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main carousel container */}
          <div className="overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div key={project.id} className="w-full flex-shrink-0">
                  <div className="project-card mx-4 p-8 md:p-12 rounded-3xl">
                    <div className="text-center mb-8">
                      <div className={`w-16 h-16 ${project.gradient} rounded-full flex items-center justify-center mx-auto mb-6`}>
                        <span className="text-2xl font-bold text-background">{project.id}</span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 text-primary">
                        {project.title}
                      </h3>
                      <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-2 mb-8">
                      {project.tech.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium border border-primary/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex justify-center gap-4">
                      <Button 
                        className="btn-cyber"
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <Github className="mr-2" size={20} />
                        GitHub
                      </Button>
                      <Button 
                        variant="outline" 
                        className="btn-neon"
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <ExternalLink className="mr-2" size={20} />
                        Live Demo
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-primary/20 hover:bg-primary/30 rounded-full flex items-center justify-center backdrop-blur-md border border-primary/30 glow-hover transition-all duration-300"
          >
            <ChevronLeft size={24} className="text-primary" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-primary/20 hover:bg-primary/30 rounded-full flex items-center justify-center backdrop-blur-md border border-primary/30 glow-hover transition-all duration-300"
          >
            <ChevronRight size={24} className="text-primary" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-primary shadow-lg scale-125' 
                    : 'bg-primary/30 hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCarousel;