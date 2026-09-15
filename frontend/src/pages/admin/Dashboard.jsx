import React from 'react';
import { motion } from 'framer-motion';
import { Users, Briefcase, FileCheck, BarChart3 } from 'lucide-react';

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

const AdminDashboard = () => {
  return (
    <div className="space-y-8">
      {/* Platform Analytics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          icon={Users} 
          label="Total Students" 
          value="4,291" 
          subtext="+12% from last month"
        />
        <StatCard 
          icon={Users} 
          label="Total Recruiters" 
          value="142" 
          subtext="+3% from last month"
        />
        <StatCard 
          icon={Briefcase} 
          label="Active Jobs" 
          value="892" 
          subtext="Across 120 companies"
        />
        <StatCard 
          icon={FileCheck} 
          label="Placements" 
          value="342" 
          subtext="Successful hires this year"
        />
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold">System Health</h3>
            <BarChart3 className="text-white/50" />
          </div>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-white/70">API Uptime</span>
                <span className="text-primary font-bold">99.9%</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2">
                <div className="bg-primary h-2 rounded-full w-[99.9%]"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-white/70">AI Analysis Queue</span>
                <span className="text-amber-500 font-bold">Normal</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2">
                <div className="bg-amber-500 h-2 rounded-full w-[45%]"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl">
          <h3 className="text-xl font-bold mb-6">Recent Platform Activity</h3>
          <ul className="space-y-4 text-sm text-white/70">
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              New company 'TechFlow' registered
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              15 new job postings approved
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-amber-500"></div>
              System backup completed
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              50 student resumes analyzed by AI
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
