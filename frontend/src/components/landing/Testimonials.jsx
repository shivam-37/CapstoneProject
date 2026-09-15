import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Ananya Sharma',
    role: 'Computer Science Student',
    quote: 'SkillSync helped me understand exactly which skills I needed to improve before applying for software roles.',
  },
  {
    name: 'Rohit Mehta',
    role: 'Software Engineering Student',
    quote: 'The AI mock interviews helped me become much more confident during technical interviews.',
  },
  {
    name: 'Sneha Patel',
    role: 'Information Technology Student',
    quote: 'The personalized roadmap gave me a clear direction instead of randomly learning technologies.',
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground mb-4"
          >
            Loved by Students
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            See how students are using SkillSync to prepare with confidence. (Demo Content)
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((test, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={16} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed font-medium mb-8">
                "{test.quote}"
              </p>
              <div>
                <div className="font-bold text-foreground">{test.name}</div>
                <div className="text-sm text-muted-foreground">{test.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
