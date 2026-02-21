import { Search, User, MoreVertical } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const TopBar = () => {
  return (
    <header className="fixed top-0 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="flex items-center justify-between p-4">
        {/* Logo */}
        <div className="text-xl font-bold mozaik-gradient bg-clip-text text-transparent">
          Wallé
        </div>
        
        {/* Right Icons */}
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="sm" className="mozaik-touch">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="sm" className="mozaik-touch">
            <User className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="sm" className="mozaik-touch">
            <MoreVertical className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};