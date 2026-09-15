import React from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import SkillSyncLogo from '../brand/SkillSyncLogo';
import AuthVisual from './AuthVisual';

const AuthLayout = ({ children }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-background flex flex-col md:flex-row overflow-hidden relative">
      
      {/* LEFT SIDE: Brand & Visual (Hidden on small mobile, simplified on tablets) */}
      <div className="hidden md:flex flex-col w-full md:w-1/2 lg:w-5/12 xl:w-1/2 bg-background dark:bg-[#070B12] border-r border-border relative z-10 overflow-hidden">
        
        {/* Subtle radial lighting for the left side in dark mode */}
        <div className="absolute top-0 left-0 w-full h-full bg-primary/5 rounded-full blur-[150px] pointer-events-none opacity-50 dark:opacity-100"></div>

        {/* Header/Brand Section */}
        <div className="p-8 lg:p-12 relative z-20">
          <SkillSyncLogo variant="full" size={40} className="mb-12" />
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4 max-w-md"
          >
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
              Your career.<br />
              <span className="text-primary">Smarter.</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Build your profile, discover your path, and prepare for the opportunities that match your potential.
            </p>
          </motion.div>
        </div>

        {/* Visual Section - takes remaining height */}
        <div className="flex-1 relative min-h-[400px]">
          <AuthVisual />
        </div>
      </div>

      {/* RIGHT SIDE: Authentication Form */}
      <div className="flex-1 flex flex-col bg-background dark:bg-background relative z-10 overflow-y-auto custom-scrollbar">
        
        {/* Mobile Header (Only visible on mobile) */}
        <div className="md:hidden flex items-center justify-between p-6 border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-20">
          <SkillSyncLogo variant="full" size={32} />
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full bg-secondary/50 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Desktop Theme Toggle */}
        <div className="hidden md:flex justify-end p-8 absolute top-0 right-0 z-20 w-full pointer-events-none">
          <button 
            onClick={toggleTheme}
            className="p-3 rounded-full bg-white/5 dark:bg-white/5 border border-border dark:border-white/10 text-muted-foreground hover:text-foreground hover:bg-secondary transition-all pointer-events-auto backdrop-blur-sm"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Form Container */}
        <div className="flex-1 flex items-center justify-center p-6 sm:p-12 lg:p-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-full max-w-md"
          >
            {children}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
