import { Post } from '@/types';
import { Play, Heart, Eye } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';

interface PostCardProps {
  post: Post;
  index: number;
  onPostClick: (post: Post) => void;
}

export const PostCard = ({ post, index, onPostClick }: PostCardProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(post.likes);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !post.isVideo) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.currentTime = 0;
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(video);

    // Loop only first 3 seconds
    const handleTimeUpdate = () => {
      if (video.currentTime >= 3) {
        video.currentTime = 0;
      }
    };
    video.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      observer.disconnect();
      video.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, [post.isVideo]);
  const getFormatClass = () => {
    switch (post.format) {
      case 'height': return 'post-height';
      case 'land': return 'post-land';
      case 'full': return 'post-full';
      case 'wide': return 'post-wide';
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
      className={`relative bg-muted rounded-md overflow-hidden cursor-pointer group mozaik-transition animate-fade-in ${getFormatClass()}`}
      style={{ 
        animationDelay: `${index * 75}ms`
      }}
      onClick={handleClick}
    >
      {/* Image or Video */}
      {post.isVideo ? (
        <div className="relative w-full h-full">
          <video
            ref={videoRef}
            src={post.imageUrl}
            poster={post.imageUrl}
            className={`w-full h-full object-cover group-hover:scale-105 mozaik-transition ${getFilterClass()}`}
            muted
            playsInline
            loop
            preload="metadata"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 mozaik-transition pointer-events-none" />
        </div>
      ) : (
        <img
          src={post.imageUrl}
          alt={post.caption || 'Post'}
          className={`w-full h-full object-cover group-hover:scale-105 mozaik-transition ${getFilterClass()}`}
          loading="lazy"
        />
      )}
      
      {/* Video indicator */}
      {post.isVideo && (
        <div className="absolute top-2 right-2">
          <div className="bg-black/50 rounded-full p-1">
            <Play className="w-3 h-3 text-white fill-white" />
          </div>
        </div>
      )}

      {/* Live indicator */}
      {post.isInstant && (
        <div className="absolute top-1.5 left-1.5 w-3 h-3 rounded-full bg-destructive flex items-center justify-center">
          <div className="w-1 h-1 rounded-full bg-white animate-pulse-glow" />
        </div>
      )}
      
      {/* Bottom action bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent pt-6 pb-1.5 px-2 pointer-events-auto">
        <div className="flex items-center justify-between">
          <button
            onClick={(e) => { e.stopPropagation(); setLiked(!liked); setLikeCount(l => liked ? l - 1 : l + 1); }}
            className="flex items-center gap-0.5 text-white hover:scale-110 transition-transform"
          >
            <Heart className={`w-3.5 h-3.5 ${liked ? 'fill-red-500 text-red-500' : ''}`} />
            <span className="text-[10px] font-medium">{likeCount}</span>
          </button>
          <div className="flex items-center gap-0.5 text-white/80">
            <Eye className="w-3 h-3" />
            <span className="text-[10px] font-medium">{post.comments + post.likes}</span>
          </div>
        </div>
      </div>
    </div>
  );
};