import { TrendingUp, BarChart3, Database } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 animated-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-primary">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-neon mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-border glow-hover">
            <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
              {/* Profile Image */}
              <div className="flex-shrink-0">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary/30 shadow-lg">
                  <img 
                    src="/lovable-uploads/963d5d3f-7670-470a-b569-7d68c36f1c00.png" 
                    alt="Swarna K Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <blockquote className="text-2xl md:text-3xl font-medium mb-4 italic">
                  <span className="text-secondary">"Turning data into decisions with clarity and creativity."</span>
                </blockquote>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Passionate about data analysis, visualization, and business insights. 
                  Skilled in SQL, Python, Excel, and Power BI.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-neon rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp size={32} className="text-background" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-primary">Analytics</h3>
                <p className="text-muted-foreground">Data interpretation & insights</p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-cyber rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <BarChart3 size={32} className="text-background" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-secondary">Visualization</h3>
                <p className="text-muted-foreground">Power BI & dashboard creation</p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-purple rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Database size={32} className="text-background" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-accent">Development</h3>
                <p className="text-muted-foreground">SQL & Python programming</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;