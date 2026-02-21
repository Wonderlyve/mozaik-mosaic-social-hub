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
      
      {/* Spacer */}
      <div className="h-3 bg-background shrink-0" style={{ marginTop: '64px' }} />

      {/* Main Content */}
      <main className="flex-1 overflow-hidden pb-20">
        {children}
      </main>
      
      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  );
};