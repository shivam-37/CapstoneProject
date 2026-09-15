import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle } from 'lucide-react';
import DashboardPreview from './DashboardPreview';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Subtle Background Decorations */}
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] -z-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-full h-[500px] bg-gradient-to-b from-secondary/50 to-transparent -z-10 pointer-events-none"></div>
      
      {/* Decorative dot pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:24px_24px] opacity-40 -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Text Content */}
          <div className="flex-1 text-center lg:text-left z-10">

            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-[72px] leading-[1.1] font-extrabold tracking-tight text-foreground mb-6"
            >
              TURN YOUR SKILLS <br className="hidden lg:block"/>
              INTO <span className="text-primary relative inline-block">
                OPPORTUNITIES.
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" />
                </svg>
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Analyze your skills, discover the right career path, prepare for interviews, and find opportunities that match your potential — all in one place.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <Link 
                to="/register" 
                className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full text-base font-semibold flex items-center justify-center gap-2 transition-all hover:shadow-[0_0_20px_rgba(37,99,235,0.3)] active:scale-[0.98]"
              >
                Get Started <ArrowRight size={18} />
              </Link>
              <button 
                className="w-full sm:w-auto px-8 py-4 bg-background border border-border hover:bg-secondary text-foreground rounded-full text-base font-semibold flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
              >
                <PlayCircle size={18} className="text-primary" />
                Watch Demo
              </button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-10 pt-8 border-t border-border flex flex-col sm:flex-row items-center gap-4 text-sm text-muted-foreground justify-center lg:justify-start"
            >
              <div className="flex -space-x-2">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-secondary flex items-center justify-center text-[10px] font-bold text-foreground">
                    S{i}
                  </div>
                ))}
              </div>
              <p>
                <span className="font-semibold text-foreground">Built for students</span> who want to build careers, not just resumes.
              </p>
            </motion.div>
          </div>

          {/* Right Visual (Dashboard Mockup) */}
          <div className="flex-1 w-full flex justify-center lg:justify-end lg:pl-10 z-10">
            <DashboardPreview />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
