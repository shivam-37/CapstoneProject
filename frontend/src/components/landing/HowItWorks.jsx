import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Build Your Profile',
    description: 'Add your education, skills, projects, and career interests.',
  },
  {
    number: '02',
    title: 'Get AI Insights',
    description: 'Our AI analyzes your profile and identifies your strengths and gaps.',
  },
  {
    number: '03',
    title: 'Explore Opportunities',
    description: 'Discover careers, jobs, and personalized learning recommendations.',
  },
  {
    number: '04',
    title: 'Prepare & Succeed',
    description: 'Practice interviews, improve your skills, and apply with confidence.',
  }
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground mb-6"
          >
            Your Journey From Skills to Success
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Four simple steps to become placement-ready.
          </motion.p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[45px] left-[10%] right-[10%] h-[2px] bg-border z-0">
            <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="flex flex-col items-center text-center lg:items-start lg:text-left"
              >
                <div className="w-[90px] h-[90px] rounded-full bg-background border-4 border-secondary flex items-center justify-center shadow-xl mb-8 relative">
                  <div className="absolute inset-2 rounded-full border border-primary/20 bg-primary/5 flex items-center justify-center">
                    <span className="text-2xl font-black text-primary">{step.number}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
