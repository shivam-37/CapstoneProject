import React from 'react';
import { motion } from 'framer-motion';
import { Target, FileCheck, Briefcase, TrendingUp } from 'lucide-react';

const StatCard = ({ icon: Icon, label, value, subtext }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-3xl"
  >
    <div className="flex items-center gap-4 mb-4">
      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
        <Icon className="text-primary" size={24} />
      </div>
      <div>
        <div className="text-sm font-medium text-white/50">{label}</div>
        <div className="text-2xl font-bold text-white">{value}</div>
      </div>
    </div>
    <div className="text-sm text-white/40">{subtext}</div>
  </motion.div>
);

const StudentDashboard = () => {
  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          icon={Target} 
          label="Career Readiness" 
          value="76/100" 
          subtext="Good! Keep practicing interviews."
        />
        <StatCard 
          icon={FileCheck} 
          label="Resume Score" 
          value="84/100" 
          subtext="Strong match for Full Stack roles."
        />
        <StatCard 
          icon={Briefcase} 
          label="Job Matches" 
          value="18" 
          subtext="New matches found today."
        />
        <StatCard 
          icon={TrendingUp} 
          label="Skill Gaps" 
          value="5" 
          subtext="Focus on AWS and Docker."
        />
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recommended Career */}
        <div className="lg:col-span-2 bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl">
          <h3 className="text-xl font-bold mb-6">Recommended Career</h3>
          
          <div className="bg-primary/10 border border-primary/20 p-6 rounded-2xl mb-6 flex justify-between items-center">
            <div>
              <div className="text-2xl font-bold text-primary mb-1">Full Stack Developer</div>
              <div className="text-white/60">91% Match with your current profile</div>
            </div>
            <button className="px-6 py-2 bg-primary text-white rounded-full font-bold hover:bg-primary/90 transition-colors">
              View Path
            </button>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-white/80 mb-3 text-sm uppercase tracking-wider">Why this matches</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li className="flex items-center gap-2">✓ React skills</li>
                <li className="flex items-center gap-2">✓ Node.js skills</li>
                <li className="flex items-center gap-2">✓ MongoDB experience</li>
                <li className="flex items-center gap-2">✓ Full-stack project detected</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white/80 mb-3 text-sm uppercase tracking-wider">Skill Gaps</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li className="flex items-center gap-2 text-amber-500">⚠ Docker</li>
                <li className="flex items-center gap-2 text-amber-500">⚠ AWS</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl flex flex-col">
          <h3 className="text-xl font-bold mb-6">Recent Activity</h3>
          <div className="flex-1 flex items-center justify-center text-white/40">
            No recent activity
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
