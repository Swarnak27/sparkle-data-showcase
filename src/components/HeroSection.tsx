import { Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBackground from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-background/70"></div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="floating">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
            Hi, I'm <span className="neon-text sparkle">Swarna K</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
            <span className="neon-text-secondary">Aspiring Data Analyst</span> | 
            <span className="text-primary"> SQL Developer</span> | 
            <span className="text-accent"> Data Visualization Enthusiast</span>
          </p>
          <p className="text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            Turning data into decisions with clarity and creativity. 
            Passionate about transforming complex datasets into actionable insights.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="btn-cyber px-8 py-3 text-lg font-semibold"
              onClick={() => window.open('#', '_blank')}
            >
              <Download className="mr-2" size={20} />
              View Resume
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="btn-neon px-8 py-3 text-lg font-semibold"
              onClick={scrollToContact}
            >
              <Mail className="mr-2" size={20} />
              Contact Me
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;