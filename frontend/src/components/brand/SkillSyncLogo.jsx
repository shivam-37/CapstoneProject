import React from 'react';

const SkillSyncLogo = ({ variant = "full", size = 40, className = "", showText = true }) => {
  const isFull = variant === "full";
  const iconSize = isFull ? Math.max(36, size - 4) : size; 
  
  const svgIcon = (
    <svg 
      viewBox="0 0 100 100" 
      width={iconSize} 
      height={iconSize} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={`text-primary flex-shrink-0 ${isFull ? '' : className}`}
    >
      <path 
        d="M 70 25 A 25 25 0 1 0 50 50 A 25 25 0 1 1 30 75" 
        stroke="currentColor" 
        strokeWidth="20" 
        strokeLinecap="round"
        strokeLinejoin="round" 
      />
    </svg>
  );

  if (isFull) {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        {svgIcon}
        {showText && (
          <span 
            className="font-sans font-bold tracking-tighter text-foreground"
            style={{ fontSize: `${Math.max(20, size * 0.55)}px` }}
          >
            SkillSync
          </span>
        )}
      </div>
    );
  }

  return svgIcon;
};

export default SkillSyncLogo;
