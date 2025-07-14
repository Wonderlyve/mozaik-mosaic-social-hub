import { Post } from '@/types';
import { Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface PostCardProps {
  post: Post;
  index: number;
}

export const PostCard = ({ post, index }: PostCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/profile/${post.user.id}`);
  };

  return (
    <div 
      className="aspect-square relative bg-muted rounded-lg overflow-hidden cursor-pointer group mozaik-transition animate-fade-in"
      style={{ animationDelay: `${index * 50}ms` }}
      onClick={handleClick}
    >
      {/* Image */}
      <img
        src={post.imageUrl}
        alt={post.caption || 'Post'}
        className="w-full h-full object-cover group-hover:scale-110 mozaik-transition"
        loading="lazy"
      />
      
      {/* Video indicator */}
      {post.isVideo && (
        <div className="absolute top-2 right-2">
          <div className="bg-black/50 rounded-full p-1">
            <Play className="w-3 h-3 text-white fill-white" />
          </div>
        </div>
      )}
      
      {/* Hover overlay with stats */}
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 mozaik-transition flex items-center justify-center">
        <div className="text-white text-center">
          <div className="text-sm font-semibold">{post.likes}</div>
          <div className="text-xs">J'aime</div>
        </div>
      </div>
    </div>
  );
};