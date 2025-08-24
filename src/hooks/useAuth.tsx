import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if admin is logged in
    const adminAuth = localStorage.getItem('isAdminAuthenticated');
    setIsAuthenticated(adminAuth === 'true');
    setLoading(false);
  }, []);

  const logout = () => {
    localStorage.removeItem('isAdminAuthenticated');
    setIsAuthenticated(false);
    navigate('/admin');
  };

  const requireAuth = () => {
    if (!loading && !isAuthenticated) {
      navigate('/admin');
      return false;
    }
    return true;
  };

  return {
    isAuthenticated,
    loading,
    logout,
    requireAuth
  };
};