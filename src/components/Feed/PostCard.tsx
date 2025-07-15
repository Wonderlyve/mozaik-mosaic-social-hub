import { Post } from '@/types';
import { Play } from 'lucide-react';
import { useState } from 'react';

interface PostCardProps {
  post: Post;
  index: number;
  onPostClick: (post: Post) => void;
}

export const PostCard = ({ post, index, onPostClick }: PostCardProps) => {
  const getFormatClass = () => {
    switch (post.format) {
      case 'height': return 'post-height';
      case 'land': return 'post-land';
      case 'full': return 'post-full';
      default: return 'post-normal';
    }
  };

  const getFilterClass = () => {
    return post.filter ? `filter-${post.filter}` : '';
  };

  const handleClick = () => {
    onPostClick(post);
  };

  return (
    <div 
      className={`relative bg-muted rounded-lg overflow-hidden cursor-pointer group mozaik-transition animate-fade-in ${getFormatClass()}`}
      style={{ 
        animationDelay: `${index * 50}ms`,
        aspectRatio: post.format === 'height' ? '1/2' : 
                    post.format === 'land' ? '2/1' : 
                    post.format === 'full' ? '1/1' : '1/1'
      }}
      onClick={handleClick}
    >
      {/* Image */}
      <img
        src={post.imageUrl}
        alt={post.caption || 'Post'}
        className={`w-full h-full object-cover group-hover:scale-110 mozaik-transition ${getFilterClass()}`}
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