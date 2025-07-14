import { ReactNode } from 'react';
import { TopBar } from './TopBar';
import { BottomNavigation } from './BottomNavigation';

interface MobileLayoutProps {
  children: ReactNode;
}

export const MobileLayout = ({ children }: MobileLayoutProps) => {
  return (
    <div className="min-h-screen bg-background flex flex-col max-w-md mx-auto relative">
      {/* Top Navigation */}
      <TopBar />
      
      {/* Main Content */}
      <main className="flex-1 overflow-hidden pt-16 pb-20">
        {children}
      </main>
      
      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  );
};