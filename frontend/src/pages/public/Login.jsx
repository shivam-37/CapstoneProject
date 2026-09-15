import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Navigate, Link } from 'react-router-dom';
import AuthLayout from '../../components/auth/AuthLayout';
import AuthInput from '../../components/auth/AuthInput';
import PasswordInput from '../../components/auth/PasswordInput';
import AuthButton from '../../components/auth/AuthButton';

const Login = () => {
  const { login, user } = useAuth();
  const [email, setEmail] = useState('student@example.com');
  const [password, setPassword] = useState('password');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  if (user) {
    return <Navigate to={`/${user.role.toLowerCase()}/dashboard`} replace />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    // Simple validation
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address.');
      setLoading(false);
      return;
    }

    try {
      // Mock API call for now
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Simulate successful login based on email
      let role = 'STUDENT';
      if (email.includes('recruiter')) role = 'RECRUITER';
      if (email.includes('admin')) role = 'ADMIN';

      if (password !== 'password') {
        throw new Error('Invalid email or password.');
      }

      const mockData = {
        token: 'mock-jwt-token',
        role: role,
        user: { id: '1', name: 'Demo User', email, role }
      };
      
      login(mockData);
      window.location.href = `/${role.toLowerCase()}/dashboard`;
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout>
      <div className="w-full space-y-8">
        
        <div className="flex flex-col space-y-2">
          <span className="text-primary text-xs font-bold tracking-widest uppercase">
            Welcome Back
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            Welcome back.
          </h2>
          <p className="text-muted-foreground text-sm">
            Continue building your career with SkillSync.
          </p>
        </div>

        {error && (
          <div className="p-3 text-sm text-red-500 dark:text-red-400 bg-red-50 dark:bg-red-500/10 rounded-xl border border-red-200 dark:border-red-500/20">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-5">
          <AuthInput
            label="Email Address"
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
          />
          
          <PasswordInput
            label="Password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            forgotPasswordLink="#"
            required
          />
          
          <div className="pt-2">
            <AuthButton type="submit" loading={loading} loadingText="Signing in...">
              Sign In
            </AuthButton>
          </div>
        </form>

        <div className="text-center text-sm text-muted-foreground mt-8 border-t border-border pt-8">
          Don't have an account?{' '}
          <Link to="/register" className="text-primary hover:underline font-medium">
            Create your SkillSync account &rarr;
          </Link>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Login;
