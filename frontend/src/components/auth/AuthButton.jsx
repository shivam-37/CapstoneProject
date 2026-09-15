import React from 'react';
import { ArrowRight, Loader2 } from 'lucide-react';

const AuthButton = ({ children, loading, loadingText, ...props }) => {
  return (
    <button
      className="group relative w-full h-14 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-xl shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:active:scale-100 flex items-center justify-center overflow-hidden"
      disabled={loading}
      {...props}
    >
      {/* Subtle glow effect on hover */}
      <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none mix-blend-overlay"></div>
      
      {loading ? (
        <span className="flex items-center gap-2 relative z-10">
          <Loader2 className="animate-spin" size={20} />
          {loadingText || 'Loading...'}
        </span>
      ) : (
        <span className="flex items-center gap-2 relative z-10">
          {children}
          <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      )}
    </button>
  );
};

export default AuthButton;
