import React from 'react';

const companies = [
  {
    name: 'Google',
    logo: (
      <svg className="h-7 text-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
      </svg>
    )
  },
  {
    name: 'Microsoft',
    logo: (
      <div className="flex items-center gap-2">
        <svg className="h-6 text-current" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zm12.6 0H12.6V0H24v11.4z" />
        </svg>
        <span className="text-xl font-semibold tracking-tight text-foreground/80">Microsoft</span>
      </div>
    )
  },
  {
    name: 'Amazon',
    logo: (
      <div className="flex items-center">
        <span className="text-2xl font-bold tracking-tighter text-foreground/80 mt-1">amazon</span>
      </div>
    )
  },
  {
    name: 'TCS',
    logo: (
      <div className="text-2xl font-black text-foreground/80 tracking-tighter">
        <span className="text-blue-500">t</span>c<span className="text-red-500">s</span>
      </div>
    )
  },
  {
    name: 'Infosys',
    logo: (
      <span className="text-2xl font-bold tracking-tight text-blue-500">Infosys</span>
    )
  },
  {
    name: 'Accenture',
    logo: (
      <div className="flex items-center gap-1">
        <span className="text-xl font-bold text-foreground/80">accenture</span>
        <span className="text-primary font-black text-2xl leading-none">{'>'}</span>
      </div>
    )
  },
  {
    name: 'Adobe',
    logo: (
      <div className="flex items-center gap-2">
        <svg className="h-7 text-red-600" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.1 2H24v20L15.1 2zM8.9 2H0v20L8.9 2zM12 9.4L17.6 22h-3.8l-1.6-4H8.1L12 9.4z" />
        </svg>
        <span className="text-xl font-bold tracking-tight text-foreground/80">Adobe</span>
      </div>
    )
  }
];

const LogoCloud = () => {
  return (
    <section className="py-10 border-b border-border bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-sm font-medium text-muted-foreground mb-8">
          Trusted by ambitious students and modern teams
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-60 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-500">
          {companies.map((company) => (
            <div key={company.name} className="transition-all hover:scale-105 cursor-default">
              {company.logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoCloud;
