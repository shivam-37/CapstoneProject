import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Link } from 'react-router-dom';

const PasswordInput = ({ label, id, forgotPasswordLink, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <label htmlFor={id} className="text-sm font-medium text-foreground">
          {label}
        </label>
        {forgotPasswordLink && (
          <Link to={forgotPasswordLink} className="text-sm text-primary hover:underline font-medium transition-all">
            Forgot password?
          </Link>
        )}
      </div>
      <div className="relative">
        <input
          id={id}
          type={showPassword ? 'text' : 'password'}
          className="w-full h-14 px-4 pr-12 bg-background dark:bg-white/5 border border-border dark:border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-foreground placeholder:text-muted-foreground"
          {...props}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors p-1"
          aria-label={showPassword ? 'Hide password' : 'Show password'}
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </div>
    </div>
  );
};

export default PasswordInput;
