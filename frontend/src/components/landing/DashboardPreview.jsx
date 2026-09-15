import React from 'react';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, FileText, Briefcase, BookOpen, MessageSquare, PieChart,
  Target, AlertCircle
} from 'lucide-react';
import SkillSyncLogo from '../brand/SkillSyncLogo';

const DashboardPreview = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40, rotateX: 10, rotateY: -10 }}
      animate={{ opacity: 1, y: 0, rotateX: 5, rotateY: -5 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative w-full max-w-[800px] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-border bg-card flex transform-gpu perspective-[2000px]"
    >
      {/* Mock Sidebar */}
      <div className="w-48 bg-secondary/50 border-r border-border p-4 hidden sm:flex flex-col gap-2">
        <div className="mb-6 px-2">
          <SkillSyncLogo variant="full" size={24} />
        </div>
        {[
          { icon: LayoutDashboard, label: 'Dashboard', active: true },
          { icon: FileText, label: 'Resume' },
          { icon: Briefcase, label: 'Jobs' },
          { icon: BookOpen, label: 'Learning' },
          { icon: MessageSquare, label: 'Interviews' },
          { icon: PieChart, label: 'Analytics' }
        ].map((item, i) => (
          <div key={i} className={`flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium ${item.active ? 'bg-primary/10 text-primary' : 'text-muted-foreground'}`}>
            <item.icon size={14} />
            {item.label}
          </div>
        ))}
      </div>

      {/* Mock Main Content */}
      <div className="flex-1 p-6 flex flex-col gap-6 bg-background">
        <div>
          <h3 className="text-xl font-bold">Good morning, Alex 👋</h3>
          <p className="text-xs text-muted-foreground mt-1">Here is your daily career progress.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { label: 'Resume Score', value: '82%', color: 'text-primary' },
            { label: 'Job Matches', value: '24', color: 'text-foreground' },
            { label: 'Skills to Learn', value: '6', color: 'text-amber-500' },
            { label: 'Interview Score', value: '78%', color: 'text-foreground' }
          ].map((stat, i) => (
            <div key={i} className="p-3 rounded-xl border border-border bg-card overflow-hidden">
              <div className="text-[10px] font-medium text-muted-foreground mb-1 uppercase tracking-wider line-clamp-2 leading-tight">{stat.label}</div>
              <div className={`text-base sm:text-lg font-bold ${stat.color} truncate`}>{stat.value}</div>
            </div>
          ))}
        </div>

        {/* Recommended Career block */}
        <div className="flex-1 rounded-xl border border-border bg-card p-5">
          <div className="flex justify-between items-start mb-4">
            <div>
              <div className="text-xs font-medium text-muted-foreground mb-1 uppercase tracking-wider">Recommended Career</div>
              <div className="text-lg font-bold text-primary">Full Stack Developer</div>
            </div>
            <div className="px-3 py-1 bg-green-500/10 text-green-600 dark:text-green-400 font-bold text-xs rounded-full border border-green-500/20">
              91% Match
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6 mt-6">
            <div>
              <div className="text-xs font-medium text-muted-foreground mb-3 flex items-center gap-2"><Target size={12}/> Matched Skills</div>
              <div className="flex flex-wrap gap-2">
                {['React', 'Node.js', 'MongoDB'].map(skill => (
                  <span key={skill} className="px-2 py-1 bg-secondary text-secondary-foreground text-[10px] rounded font-medium border border-border">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <div className="text-xs font-medium text-muted-foreground mb-3 flex items-center gap-2"><AlertCircle size={12}/> Missing Skills</div>
              <div className="flex flex-wrap gap-2">
                {['Docker', 'AWS'].map(skill => (
                  <span key={skill} className="px-2 py-1 bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 text-[10px] rounded font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Glow inside */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] rounded-full pointer-events-none"></div>
    </motion.div>
  );
};

export default DashboardPreview;
