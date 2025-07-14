import { mockStories } from '@/data/mockData';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

export const StoriesBar = () => {
  return (
    <div className="p-4 pb-2">
      <div className="flex gap-3 overflow-x-auto scrollbar-hide">
        {/* Add Story Button */}
        <div className="flex flex-col items-center gap-2 min-w-[64px]">
          <div className="relative">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-muted to-muted-foreground/20 flex items-center justify-center border-2 border-dashed border-border">
              <Plus className="w-6 h-6 text-muted-foreground" />
            </div>
          </div>
          <span className="text-xs text-muted-foreground">Votre story</span>
        </div>

        {/* Stories */}
        {mockStories.map((story) => (
          <div key={story.id} className="flex flex-col items-center gap-2 min-w-[64px]">
            <div className="relative">
              <div 
                className={`w-16 h-16 rounded-full p-0.5 ${
                  story.viewed 
                    ? 'bg-border' 
                    : 'mozaik-story-ring'
                }`}
              >
                <img
                  src={story.user.avatar}
                  alt={story.user.displayName}
                  className="w-full h-full rounded-full object-cover border-2 border-background"
                />
              </div>
            </div>
            <span className="text-xs text-foreground font-medium truncate max-w-[64px]">
              {story.user.username}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};