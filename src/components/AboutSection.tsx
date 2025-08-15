import { TrendingUp, BarChart3, Database } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 animated-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 neon-text sparkle">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-neon mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-border glow-hover">
            <blockquote className="text-2xl md:text-3xl font-medium text-center mb-8 italic">
              <span className="neon-text-secondary">"Turning data into decisions with clarity and creativity."</span>
            </blockquote>
            
            <p className="text-lg text-center mb-12 text-muted-foreground leading-relaxed">
              Passionate about data analysis, visualization, and business insights. 
              Skilled in SQL, Python, Excel, and Power BI with a strong foundation in transforming 
              raw data into meaningful stories that drive business decisions.
            </p>

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