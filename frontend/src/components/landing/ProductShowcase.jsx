import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ProductShowcase = () => {
  return (
    <section className="py-32 bg-secondary/20 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        
        <div className="flex flex-col xl:flex-row items-center gap-16">
          {/* Left text */}
          <div className="xl:w-1/3 text-center xl:text-left z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground mb-6"
            >
              One Dashboard. <br className="hidden xl:block"/>Your Entire Career Journey.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground mb-8"
            >
              See exactly where you stand, what to improve, and where your next opportunity could come from.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link to="/login" className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background hover:bg-foreground/90 font-bold rounded-full transition-all hover:gap-3">
                Explore Dashboard <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>

          {/* Right Dashboard Mockup */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="xl:w-2/3 w-full"
          >
            <div className="bg-card border border-border rounded-2xl shadow-2xl overflow-hidden flex flex-col w-full max-w-4xl mx-auto">
              
              {/* Fake Window Header */}
              <div className="h-12 border-b border-border bg-secondary flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>

              {/* Dashboard Content */}
              <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6 bg-background">
                {/* Top Row Stats */}
                <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { l: 'Career Readiness', v: '78%' },
                    { l: 'Resume Score', v: '82' },
                    { l: 'Job Matches', v: '24' },
                    { l: 'Interview Score', v: '81' }
                  ].map(stat => (
                    <div key={stat.l} className="bg-secondary p-4 rounded-xl border border-border">
                      <div className="text-xs text-muted-foreground mb-2 uppercase font-medium">{stat.l}</div>
                      <div className="text-3xl font-bold text-foreground">{stat.v}</div>
                    </div>
                  ))}
                </div>

                {/* Left Column */}
                <div className="bg-secondary p-6 rounded-xl border border-border">
                  <h3 className="font-bold text-lg mb-4 text-foreground">Career Recommendation</h3>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-semibold">Full Stack Developer</span>
                    <span className="text-primary font-bold bg-primary/10 px-3 py-1 rounded-full text-sm">91% Match</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Based on your recent projects and React proficiency, you are highly aligned with Full Stack roles. 
                  </div>
                </div>

                {/* Right Column */}
                <div className="bg-secondary p-6 rounded-xl border border-border">
                  <h3 className="font-bold text-lg mb-4 text-foreground">Learning Progress</h3>
                  <div className="space-y-4">
                    {[
                      { s: 'React', p: '90%', w: 'w-[90%]', c: 'bg-green-500' },
                      { s: 'Node.js', p: '80%', w: 'w-[80%]', c: 'bg-green-500' },
                      { s: 'Docker', p: '40%', w: 'w-[40%]', c: 'bg-amber-500' },
                      { s: 'AWS', p: '30%', w: 'w-[30%]', c: 'bg-red-500' }
                    ].map(skill => (
                      <div key={skill.s}>
                        <div className="flex justify-between text-xs font-semibold mb-1">
                          <span className="text-foreground">{skill.s}</span>
                          <span className="text-muted-foreground">{skill.p}</span>
                        </div>
                        <div className="h-2 w-full bg-background rounded-full overflow-hidden">
                          <div className={`h-full ${skill.c} ${skill.w}`}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default ProductShowcase;
