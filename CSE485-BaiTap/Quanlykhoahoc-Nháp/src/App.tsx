import { useState } from 'react';
import { Login } from './components/Login';
import { StudentApp } from './components/student/StudentApp';
import { InstructorApp } from './components/instructor/InstructorApp';
import { AdminApp } from './components/admin/AdminApp';

export type UserRole = 'student' | 'instructor' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: UserRole;
}

export default function App() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const handleLogin = (user: User) => {
    setCurrentUser(user);
  };

  const handleLogout = () => {
    setCurrentUser(null);
  };

  if (!currentUser) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <>
      {currentUser.role === 'student' && (
        <StudentApp user={currentUser} onLogout={handleLogout} />
      )}
      {currentUser.role === 'instructor' && (
        <InstructorApp user={currentUser} onLogout={handleLogout} />
      )}
      {currentUser.role === 'admin' && (
        <AdminApp user={currentUser} onLogout={handleLogout} />
      )}
    </>
  );
}
