import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-primary/20 dark:bg-primary/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      
      <div className="max-w-4xl mx-auto px-6 text-center z-10 relative">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground mb-6"
        >
          Your Next Opportunity Starts With You.
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
        >
          Build your profile. Discover your path. Prepare smarter. Move closer to your dream career.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col items-center gap-4"
        >
          <Link 
            to="/register" 
            className="px-10 py-5 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full text-lg font-bold flex items-center gap-2 transition-all hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] active:scale-[0.98]"
          >
            Get Started for Free <ArrowRight size={20} />
          </Link>
          <span className="text-sm font-medium text-muted-foreground">No credit card required.</span>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
