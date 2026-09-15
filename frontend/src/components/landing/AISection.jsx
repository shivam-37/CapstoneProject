import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Network, Sparkles, ArrowDown } from 'lucide-react';

const AISection = () => {
  return (
    <section className="py-24 bg-background border-y border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground mb-6"
          >
            Career Guidance That Understands You
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            SkillSync combines machine learning, semantic matching, and LLM-powered insights to turn your profile into an actionable career plan.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: AI Pipeline Visual */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center justify-center p-8 rounded-3xl bg-secondary/50 border border-border"
          >
            {[
              'YOUR PROFILE',
              'AI ANALYSIS',
              'SKILL INSIGHTS',
              'CAREER MATCH',
              'PERSONALIZED ROADMAP'
            ].map((step, index, arr) => (
              <React.Fragment key={step}>
                <div className={`px-6 py-4 rounded-xl font-bold tracking-widest text-sm w-full text-center ${
                  index === arr.length - 1 
                    ? 'bg-primary text-primary-foreground shadow-lg' 
                    : 'bg-card border border-border text-foreground'
                }`}>
                  {step}
                </div>
                {index < arr.length - 1 && (
                  <div className="my-2 text-primary/40">
                    <ArrowDown size={24} />
                  </div>
                )}
              </React.Fragment>
            ))}
          </motion.div>

          {/* Right: AI Pillars */}
          <div className="space-y-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex gap-6"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Brain className="text-primary" size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Machine Learning</h3>
                <p className="text-muted-foreground">Advanced algorithms analyze market trends and user data to provide accurate career prediction and recommendations.</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex gap-6"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Network className="text-primary" size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Semantic Matching</h3>
                <p className="text-muted-foreground">We use high-dimensional embeddings to match your nuanced skills and experience with exact job requirements.</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex gap-6"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Sparkles className="text-primary" size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Generative AI</h3>
                <p className="text-muted-foreground">LLMs power personalized career guidance, dynamic learning roadmaps, and detailed feedback during mock interviews.</p>
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default AISection;
