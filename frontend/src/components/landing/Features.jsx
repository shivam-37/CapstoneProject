import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Compass, Briefcase, GitCompare, BookOpen, MessageSquare, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: FileText,
    title: 'AI Resume Analysis',
    description: 'Get actionable feedback on your resume and discover exactly what needs improvement.',
  },
  {
    icon: Compass,
    title: 'Career Recommendations',
    description: 'Discover career paths that align with your skills, interests, education, and goals.',
  },
  {
    icon: Briefcase,
    title: 'Smart Job Matching',
    description: 'Find opportunities ranked by how closely they match your skills and experience.',
  },
  {
    icon: GitCompare,
    title: 'Skill Gap Analysis',
    description: 'Understand which skills you\'re missing for your target role and what to learn next.',
  },
  {
    icon: BookOpen,
    title: 'Personalized Learning',
    description: 'Get a step-by-step roadmap designed around your individual skill gaps.',
  },
  {
    icon: MessageSquare,
    title: 'AI Mock Interviews',
    description: 'Practice realistic interviews and receive detailed feedback on your answers.',
  }
];

const FeatureCard = ({ feature, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group p-6 rounded-2xl border border-border bg-card hover:border-primary/50 hover:shadow-[0_8px_30px_rgba(37,99,235,0.05)] transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
    >
      {/* Subtle hover glow inside card */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
      
      <div className="w-12 h-12 rounded-xl bg-secondary border border-border flex items-center justify-center mb-6 group-hover:bg-primary/10 group-hover:border-primary/20 transition-colors duration-300">
        <feature.icon className="text-muted-foreground group-hover:text-primary transition-colors duration-300" size={24} />
      </div>
      
      <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
      <p className="text-muted-foreground leading-relaxed text-sm mb-6 flex-1">
        {feature.description}
      </p>
      
      <div className="flex items-center text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
        Learn more <ArrowRight size={16} className="ml-1" />
      </div>
    </motion.div>
  );
};

const Features = () => {
  return (
    <section id="features" className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground mb-6"
          >
            Everything You Need to Build a Better Career
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            From your first resume to your final interview, SkillSync helps you discover, prepare, and get hired.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
