import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Navigate, Link } from 'react-router-dom';
import AuthLayout from '../../components/auth/AuthLayout';
import AuthInput from '../../components/auth/AuthInput';
import PasswordInput from '../../components/auth/PasswordInput';
import AuthButton from '../../components/auth/AuthButton';
import { User, Briefcase, Check } from 'lucide-react';

const Register = () => {
  const { login, user } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'STUDENT',
    agreed: false
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  if (user) {
    return <Navigate to={`/${user.role.toLowerCase()}/dashboard`} replace />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    // Validation
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.');
      setLoading(false);
      return;
    }
    
    if (!formData.agreed) {
      setError('You must agree to the Terms of Service and Privacy Policy.');
      setLoading(false);
      return;
    }

    try {
      // Mock API call for now
      await new Promise(resolve => setTimeout(resolve, 800));
      
      const mockData = {
        token: 'mock-jwt-token',
        role: formData.role,
        user: { id: '2', name: formData.name, email: formData.email, role: formData.role }
      };
      
      login(mockData);
      window.location.href = `/${formData.role.toLowerCase()}/dashboard`;
    } catch (err) {
      setError(err.message || 'Failed to register');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout>
      <div className="w-full space-y-8">
        
        <div className="flex flex-col space-y-2">
          <span className="text-primary text-xs font-bold tracking-widest uppercase">
            Get Started
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            Build your future.
          </h2>
          <p className="text-muted-foreground text-sm">
            Create your SkillSync account and start your personalized career journey.
          </p>
        </div>

        {error && (
          <div className="p-3 text-sm text-red-500 dark:text-red-400 bg-red-50 dark:bg-red-500/10 rounded-xl border border-red-200 dark:border-red-500/20">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-5">
          
          {/* Segmented Role Selector */}
          <div className="flex bg-secondary/50 p-1 rounded-xl border border-border">
            <button
              type="button"
              onClick={() => setFormData({...formData, role: 'STUDENT'})}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium transition-all ${
                formData.role === 'STUDENT' 
                  ? 'bg-background shadow-sm text-foreground' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <User size={16} /> Student
            </button>
            <button
              type="button"
              onClick={() => setFormData({...formData, role: 'RECRUITER'})}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium transition-all ${
                formData.role === 'RECRUITER' 
                  ? 'bg-background shadow-sm text-foreground' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Briefcase size={16} /> Recruiter
            </button>
          </div>

          <AuthInput
            label="Full Name"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            placeholder="John Doe"
            required
          />

          <AuthInput
            label="Email Address"
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            placeholder="you@example.com"
            required
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <PasswordInput
              label="Password"
              id="password"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              placeholder="••••••••"
              required
            />
            
            <PasswordInput
              label="Confirm Password"
              id="confirmPassword"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
              placeholder="••••••••"
              required
            />
          </div>
          
          <label className="flex items-start gap-3 cursor-pointer group mt-2">
            <div className={`mt-0.5 w-5 h-5 rounded border flex flex-shrink-0 items-center justify-center transition-colors ${
              formData.agreed 
                ? 'bg-primary border-primary text-primary-foreground' 
                : 'border-muted-foreground/30 group-hover:border-primary/50'
            }`}>
              {formData.agreed && <Check size={14} strokeWidth={3} />}
            </div>
            <input 
              type="checkbox" 
              className="sr-only" 
              checked={formData.agreed}
              onChange={(e) => setFormData({...formData, agreed: e.target.checked})}
            />
            <span className="text-sm text-muted-foreground leading-snug">
              I agree to the <a href="#" className="text-primary hover:underline">Terms of Service</a> and <a href="#" className="text-primary hover:underline">Privacy Policy</a>.
            </span>
          </label>
          
          <div className="pt-2">
            <AuthButton type="submit" loading={loading} loadingText="Creating account...">
              Create Account
            </AuthButton>
          </div>
        </form>

        <div className="text-center text-sm text-muted-foreground mt-8 border-t border-border pt-8">
          Already have an account?{' '}
          <Link to="/login" className="text-primary hover:underline font-medium">
            Sign in &rarr;
          </Link>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Register;
