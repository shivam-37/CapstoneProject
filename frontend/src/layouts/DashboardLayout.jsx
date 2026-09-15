import React from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { 
  LayoutDashboard, User, FileText, Compass, 
  Briefcase, Map, MessageSquare, PieChart, LogOut, Settings, Users, Database
} from 'lucide-react';
import { motion } from 'framer-motion';
import SkillSyncLogo from '../components/brand/SkillSyncLogo';

const getNavigationLinks = (role) => {
  switch (role) {
    case 'STUDENT':
      return [
        { name: 'Dashboard', path: '/student/dashboard', icon: LayoutDashboard },
        { name: 'My Profile', path: '/student/profile', icon: User },
        { name: 'Resume', path: '/student/resume', icon: FileText },
        { name: 'Career Path', path: '/student/careers', icon: Compass },
        { name: 'Jobs', path: '/student/jobs', icon: Briefcase },
        { name: 'Learning Map', path: '/student/roadmap', icon: Map },
        { name: 'Interview Prep', path: '/student/interview', icon: MessageSquare },
      ];
    case 'RECRUITER':
      return [
        { name: 'Dashboard', path: '/recruiter/dashboard', icon: LayoutDashboard },
        { name: 'Company Profile', path: '/recruiter/company', icon: Briefcase },
        { name: 'Job Postings', path: '/recruiter/jobs', icon: FileText },
        { name: 'Applicants', path: '/recruiter/applicants', icon: Users },
      ];
    case 'ADMIN':
      return [
        { name: 'Dashboard', path: '/admin/dashboard', icon: LayoutDashboard },
        { name: 'Users', path: '/admin/users', icon: Users },
        { name: 'Jobs Database', path: '/admin/jobs', icon: Database },
        { name: 'Analytics', path: '/admin/analytics', icon: PieChart },
      ];
    default:
      return [];
  }
};

const DashboardLayout = ({ children, role }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const links = getNavigationLinks(role);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="flex min-h-screen bg-[#111111] text-white overflow-hidden">
      
      {/* Sidebar */}
      <aside className="w-64 flex-shrink-0 border-r border-white/10 bg-white/5 backdrop-blur-xl hidden md:flex flex-col z-20">
        <div className="p-6">
          <div className="mb-8">
            <SkillSyncLogo variant="full" size={32} className="text-white" />
          </div>

          <nav className="space-y-2 flex-1">
            {links.map((link) => {
              const Icon = link.icon;
              const isActive = location.pathname.startsWith(link.path);
              return (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                    isActive 
                      ? 'bg-primary/20 text-primary font-semibold border border-primary/20' 
                      : 'text-white/60 hover:bg-white/5 hover:text-white border border-transparent'
                  }`}
                >
                  <Icon size={18} className={isActive ? 'text-primary' : 'text-white/50'} />
                  {link.name}
                  {isActive && (
                    <motion.layoutId className="absolute right-0 w-1 h-8 bg-primary rounded-l-full" layoutId="active-indicator" />
                  )}
                </NavLink>
              );
            })}
          </nav>
        </div>

        <div className="mt-auto p-6 border-t border-white/5">
          <button 
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-white/60 hover:bg-red-500/10 hover:text-red-400 transition-all border border-transparent hover:border-red-500/20"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden relative">
        {/* Background Ambient Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
        
        {/* Topbar */}
        <header className="h-20 border-b border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-between px-8 z-10 sticky top-0">
          <h1 className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
            {links.find(l => location.pathname.startsWith(l.path))?.name || 'Dashboard'}
          </h1>
          
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-primary font-bold cursor-pointer hover:bg-primary/30 transition-colors">
              {user?.name?.charAt(0) || user?.role?.charAt(0)}
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-8 z-10 custom-scrollbar">
          <div className="max-w-7xl mx-auto space-y-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
