import React from 'react';
import { motion } from 'framer-motion';
import { Check, Plus } from 'lucide-react';

const AuthVisual = () => {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-12 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none"></div>

      {/* Connection Lines (SVG) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.15 }}>
        {/* Main vertical stem */}
        <path d="M 50% 20% L 50% 80%" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
        
        {/* Horizontal branch */}
        <path d="M 30% 50% L 70% 50%" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
        
        {/* Vertical drops from horizontal branch */}
        <path d="M 30% 50% L 30% 60%" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
        <path d="M 70% 50% L 70% 60%" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
      </svg>

      {/* Abstract Visualization Structure */}
      <div className="relative z-10 w-full max-w-md flex flex-col items-center gap-12 font-mono text-sm">
        
        {/* Top Node */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="px-6 py-3 rounded-full border border-primary/30 bg-background/50 backdrop-blur-sm text-primary font-bold tracking-widest shadow-[0_0_20px_rgba(37,99,235,0.2)]"
        >
          AI CORE
        </motion.div>

        {/* Central Node */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="px-8 py-4 rounded-2xl border border-white/10 dark:border-white/20 bg-white/5 backdrop-blur-md shadow-2xl relative"
        >
          {/* Node pulse rings */}
          <div className="absolute -inset-2 rounded-2xl border border-primary/20 animate-ping" style={{ animationDuration: '3s' }}></div>
          <div className="text-foreground font-semibold tracking-wide text-center">YOUR PROFILE</div>
        </motion.div>

        {/* Sub Nodes */}
        <div className="flex w-full justify-between px-8 relative mt-4">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col items-center gap-2"
          >
            <div className="w-2 h-2 rounded-full bg-primary/60"></div>
            <span className="text-muted-foreground text-xs uppercase tracking-wider">Skills</span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col items-center gap-2"
          >
            <div className="w-2 h-2 rounded-full bg-primary"></div>
            <span className="text-muted-foreground text-xs uppercase tracking-wider">Career</span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col items-center gap-2"
          >
            <div className="w-2 h-2 rounded-full bg-primary/60"></div>
            <span className="text-muted-foreground text-xs uppercase tracking-wider">Jobs</span>
          </motion.div>
        </div>

        {/* Bottom Node */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="px-8 py-3 rounded-full border border-primary/50 bg-primary/10 text-primary font-bold shadow-[0_0_30px_rgba(37,99,235,0.3)] mt-4"
        >
          OPPORTUNITY
        </motion.div>

      </div>

      {/* Floating AI Insight Card */}
      <motion.div 
        initial={{ opacity: 0, y: 30, rotate: -2 }}
        animate={{ opacity: 1, y: 0, rotate: -2 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-16 right-8 w-64 p-5 rounded-2xl bg-background/80 dark:bg-card/80 backdrop-blur-xl border border-border dark:border-white/10 shadow-2xl z-20"
      >
        <div className="flex items-center gap-2 mb-3">
          <span className="text-primary text-lg">✦</span>
          <span className="text-xs font-bold tracking-wider text-muted-foreground uppercase">AI Career Insight</span>
        </div>
        
        <div className="mb-4">
          <h4 className="font-semibold text-foreground text-sm">Full Stack Developer</h4>
          <p className="text-primary text-xs font-medium mt-1">91% career match</p>
        </div>

        <div className="grid grid-cols-2 gap-y-2 text-xs font-medium font-mono text-muted-foreground">
          <div className="flex items-center gap-1.5"><Check size={14} className="text-green-500" /> React</div>
          <div className="flex items-center gap-1.5"><Check size={14} className="text-green-500" /> Node.js</div>
          <div className="flex items-center gap-1.5"><Check size={14} className="text-green-500" /> MongoDB</div>
          <div className="flex items-center gap-1.5"><Plus size={14} className="text-primary" /> Docker</div>
        </div>
      </motion.div>
    </div>
  );
};

export default AuthVisual;
