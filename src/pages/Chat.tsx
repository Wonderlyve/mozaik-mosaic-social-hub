import { mockConversations } from '@/data/mockData';
import { ConversationList } from '@/components/Chat/ConversationList';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

export const Chat = () => {
  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-border">
        <h1 className="text-xl font-bold mb-4">Messages</h1>
        
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Rechercher une conversation..." 
            className="pl-10 bg-muted border-border/50"
          />
        </div>
      </div>
      
      {/* Conversations */}
      <div className="flex-1 overflow-y-auto">
        <ConversationList conversations={mockConversations} />
      </div>
    </div>
  );
};