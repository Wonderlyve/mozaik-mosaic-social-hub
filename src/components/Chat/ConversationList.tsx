import { Conversation } from '@/types';
import { formatDistanceToNow } from 'date-fns';
import { fr } from 'date-fns/locale';

interface ConversationListProps {
  conversations: Conversation[];
}

export const ConversationList = ({ conversations }: ConversationListProps) => {
  if (conversations.length === 0) {
    return (
      <div className="text-center py-12 text-muted-foreground">
        <p>Aucune conversation</p>
      </div>
    );
  }

  return (
    <div className="divide-y divide-border">
      {conversations.map((conversation) => (
        <div 
          key={conversation.id}
          className="p-4 hover:bg-card-hover mozaik-transition-fast cursor-pointer"
        >
          <div className="flex items-center gap-3">
            {/* Avatar */}
            <div className="relative">
              <img
                src={conversation.participant.avatar}
                alt={conversation.participant.displayName}
                className="w-12 h-12 rounded-full object-cover"
              />
              {conversation.unreadCount > 0 && (
                <div className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                  {conversation.unreadCount}
                </div>
              )}
            </div>
            
            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-semibold text-foreground truncate">
                  {conversation.participant.displayName}
                </h3>
                <span className="text-xs text-muted-foreground">
                  {formatDistanceToNow(conversation.lastMessage.timestamp, {
                    addSuffix: true,
                    locale: fr
                  })}
                </span>
              </div>
              
              <p className={`text-sm truncate ${
                conversation.unreadCount > 0 
                  ? 'text-foreground font-medium' 
                  : 'text-muted-foreground'
              }`}>
                {conversation.lastMessage.content}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};