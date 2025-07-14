import { Home, Camera, MessageCircle, User } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const navItems = [
  { icon: Home, label: 'Mur', path: '/' },
  { icon: Camera, label: 'Statuts', path: '/stories' },
  { icon: MessageCircle, label: 'Chat', path: '/chat' },
  { icon: User, label: 'Profil', path: '/profile' },
];

export const BottomNavigation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-background/95 backdrop-blur-sm border-t border-border">
      <div className="flex items-center justify-around p-2">
        {navItems.map(({ icon: Icon, label, path }) => {
          const isActive = location.pathname === path;
          
          return (
            <Button
              key={path}
              variant="ghost"
              size="sm"
              onClick={() => navigate(path)}
              className={`flex flex-col items-center gap-1 h-auto py-2 px-3 mozaik-transition-fast ${
                isActive 
                  ? 'text-primary mozaik-glow' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Icon className={`h-5 w-5 ${isActive ? 'scale-110' : ''}`} />
              <span className="text-xs font-medium">{label}</span>
            </Button>
          );
        })}
      </div>
    </nav>
  );
};