import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Users, UserCheck, Calendar } from 'lucide-react';

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

const RecruiterDashboard = () => {
  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          icon={Briefcase} 
          label="Active Jobs" 
          value="12" 
          subtext="3 closing this week"
        />
        <StatCard 
          icon={Users} 
          label="Total Applications" 
          value="342" 
          subtext="+48 in the last 7 days"
        />
        <StatCard 
          icon={UserCheck} 
          label="Shortlisted" 
          value="45" 
          subtext="Pending review"
        />
        <StatCard 
          icon={Calendar} 
          label="Interviews Scheduled" 
          value="8" 
          subtext="Next interview today at 2 PM"
        />
      </div>

      {/* Main Content Area */}
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold">Recent Applications</h3>
          <button className="text-sm font-semibold text-primary hover:underline">View All</button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                <th className="p-4 font-semibold text-white/50 text-sm">Candidate</th>
                <th className="p-4 font-semibold text-white/50 text-sm">Applied Role</th>
                <th className="p-4 font-semibold text-white/50 text-sm">AI Match Score</th>
                <th className="p-4 font-semibold text-white/50 text-sm">Status</th>
                <th className="p-4 font-semibold text-white/50 text-sm">Action</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "Alice Smith", role: "Frontend Developer", score: "92%", status: "Reviewing" },
                { name: "Bob Johnson", role: "Backend Developer", score: "88%", status: "Shortlisted" },
                { name: "Charlie Davis", role: "Full Stack Engineer", score: "95%", status: "Interviewed" }
              ].map((app, i) => (
                <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="p-4 font-medium">{app.name}</td>
                  <td className="p-4 text-white/70">{app.role}</td>
                  <td className="p-4">
                    <span className="text-primary font-bold bg-primary/10 px-2 py-1 rounded-md">{app.score}</span>
                  </td>
                  <td className="p-4">
                    <span className="text-white/80 text-sm">{app.status}</span>
                  </td>
                  <td className="p-4">
                    <button className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm transition-colors">Review</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RecruiterDashboard;
