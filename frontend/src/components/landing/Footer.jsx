import React from 'react';
import { Link } from 'react-router-dom';
import SkillSyncLogo from '../brand/SkillSyncLogo';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6 group">
              <SkillSyncLogo variant="full" size={36} className="group-hover:opacity-80 transition-opacity" />
            </Link>
            <p className="text-muted-foreground text-sm max-w-sm mb-6">
              AI-powered career guidance for students and modern professionals. Turn your skills into opportunities.
            </p>
          </div>

          {/* Product Col */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">PRODUCT</h4>
            <ul className="space-y-3">
              {['Features', 'Resume Analysis', 'Job Matching', 'AI Interviews', 'Pricing'].map(item => (
                <li key={item}>
                  <Link to="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Students Col */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">FOR STUDENTS</h4>
            <ul className="space-y-3">
              {['Career Guidance', 'Learning Roadmap', 'Interview Prep', 'Jobs'].map(item => (
                <li key={item}>
                  <Link to="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Col */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">COMPANY</h4>
            <ul className="space-y-3">
              {['About', 'Careers', 'Privacy', 'Terms'].map(item => (
                <li key={item}>
                  <Link to="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 SkillSync. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">LinkedIn</Link>
            <Link to="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">GitHub</Link>
            <Link to="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Twitter/X</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
