import { Post } from '@/types';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Heart, MessageCircle, Share, User, Play } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface PostModalProps {
  post: Post | null;
  isOpen: boolean;
  onClose: () => void;
}

export const PostModal = ({ post, isOpen, onClose }: PostModalProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const navigate = useNavigate();

  if (!post) return null;

  const handleProfileClick = () => {
    navigate(`/profile/${post.user.id}`);
    onClose();
  };

  const getFilterClass = () => {
    return post.filter ? `filter-${post.filter}` : '';
  };

  const formatTime = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    
    if (hours < 1) return 'À l\'instant';
    if (hours < 24) return `Il y a ${hours}h`;
    return `Il y a ${Math.floor(hours / 24)}j`;
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="p-0 max-w-md mx-auto h-[90vh] flex flex-col bg-card">
        <DialogTitle className="sr-only">
          Post de {post.user.displayName}
        </DialogTitle>
        {/* Header */}
        <div className="flex items-center gap-3 p-4 border-b border-border">
          <Avatar className="w-10 h-10">
            <AvatarImage src={post.user.avatar} />
            <AvatarFallback>{post.user.username[0].toUpperCase()}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="font-semibold text-sm">{post.user.displayName}</div>
            <div className="text-xs text-muted-foreground">@{post.user.username}</div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleProfileClick}
            className="text-primary hover:text-primary-foreground hover:bg-primary"
          >
            <User className="w-4 h-4" />
          </Button>
        </div>

        {/* Media */}
        <div className="flex-1 relative bg-black flex items-center justify-center">
          {post.isVideo ? (
            <video
              src={post.imageUrl}
              className={`max-w-full max-h-full object-contain ${getFilterClass()}`}
              controls
              autoPlay
              muted
              loop
            />
          ) : (
            <img
              src={post.imageUrl}
              alt={post.caption || 'Post'}
              className={`max-w-full max-h-full object-contain ${getFilterClass()}`}
            />
          )}
        </div>

        {/* Content & Actions */}
        <div className="p-4 space-y-4">
          {/* Actions */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsLiked(!isLiked)}
                className={`flex items-center gap-2 ${isLiked ? 'text-red-500' : ''}`}
              >
                <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
                <span className="text-sm font-medium">{post.likes + (isLiked ? 1 : 0)}</span>
              </Button>
              
              <Button variant="ghost" size="sm" className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                <span className="text-sm font-medium">{post.comments}</span>
              </Button>
            </div>
            
            <Button variant="ghost" size="sm">
              <Share className="w-5 h-5" />
            </Button>
          </div>

          {/* Caption */}
          {post.caption && (
            <div className="text-sm">
              <span className="font-semibold">{post.user.username}</span>{' '}
              <span>{post.caption}</span>
            </div>
          )}

          {/* Timestamp */}
          <div className="text-xs text-muted-foreground">
            {formatTime(post.timestamp)}
          </div>

          {/* Comment input */}
          <div className="border-t border-border pt-3">
            <div className="flex items-center gap-3">
              <Avatar className="w-8 h-8">
                <AvatarImage src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
              <div className="flex-1 bg-muted rounded-full px-4 py-2 text-sm text-muted-foreground">
                Ajouter un commentaire...
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};