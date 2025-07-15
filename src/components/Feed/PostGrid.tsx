import { Post } from '@/types';
import { PostCard } from './PostCard';
import { Loader2 } from 'lucide-react';

interface PostGridProps {
  posts: Post[];
  loading: boolean;
  onPostClick: (post: Post) => void;
}

export const PostGrid = ({ posts, loading, onPostClick }: PostGridProps) => {
  return (
    <div className="px-4">
      <div className="mozaik-grid">
        {posts.map((post, index) => (
          <PostCard 
            key={post.id} 
            post={post} 
            index={index}
            onPostClick={onPostClick}
          />
        ))}
      </div>
      
      {loading && (
        <div className="flex justify-center items-center py-8">
          <Loader2 className="w-6 h-6 animate-spin text-primary" />
        </div>
      )}
    </div>
  );
};