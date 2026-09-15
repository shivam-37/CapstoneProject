import React from 'react';

const AuthInput = ({ label, id, ...props }) => {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="text-sm font-medium text-foreground">
        {label}
      </label>
      <input
        id={id}
        className="w-full h-14 px-4 bg-background dark:bg-white/5 border border-border dark:border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-foreground placeholder:text-muted-foreground"
        {...props}
      />
    </div>
  );
};

export default AuthInput;
