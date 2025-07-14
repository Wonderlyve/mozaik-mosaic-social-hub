import { Search, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export const TopBar = () => {
  return (
    <header className="fixed top-0 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="flex items-center gap-3 p-4">
        {/* Logo */}
        <div className="text-xl font-bold mozaik-gradient bg-clip-text text-transparent">
          Mozaik
        </div>
        
        {/* Search Bar */}
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Rechercher..." 
            className="pl-10 bg-muted border-border/50 h-9 text-sm"
          />
        </div>
        
        {/* Messages Icon */}
        <Button variant="ghost" size="sm" className="mozaik-touch">
          <MessageSquare className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
};