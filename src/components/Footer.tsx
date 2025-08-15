import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-dark border-t border-border/30 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-display font-bold neon-text mb-4">Swarna K</h3>
            <p className="text-muted-foreground leading-relaxed">
              Transforming data into actionable insights. 
              Passionate about analytics, visualization, and data-driven decision making.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-primary mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['About', 'Skills', 'Projects', 'Certifications', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    const element = document.getElementById(item.toLowerCase());
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-lg font-semibold text-primary mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="mailto:swarnasangari@gmail.com"
                className="w-10 h-10 bg-primary/20 hover:bg-primary/30 rounded-full flex items-center justify-center glow-hover transition-all duration-300"
              >
                <Mail size={20} className="text-primary" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-secondary/20 hover:bg-secondary/30 rounded-full flex items-center justify-center glow-secondary transition-all duration-300"
              >
                <Github size={20} className="text-secondary" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-accent/20 hover:bg-accent/30 rounded-full flex items-center justify-center glow-accent transition-all duration-300"
              >
                <Linkedin size={20} className="text-accent" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              📍 Kallakurichi, Tamil Nadu
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-border/30">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Swarna K. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm flex items-center mt-4 md:mt-0">
              Made with <Heart size={16} className="text-red-500 mx-1" /> and data
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;