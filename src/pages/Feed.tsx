import { useState, useEffect, useCallback } from 'react';
import { Post } from '@/types';
import { mockPosts, generateMorePosts } from '@/data/mockData';
import { PostGrid } from '@/components/Feed/PostGrid';
import { StoriesBar } from '@/components/Feed/StoriesBar';

export const Feed = () => {
  const [posts, setPosts] = useState<Post[]>(mockPosts);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loadMorePosts = useCallback(async () => {
    if (loading || !hasMore) return;
    
    setLoading(true);
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const newPosts = generateMorePosts(15);
    setPosts(prev => [...prev, ...newPosts]);
    
    // Simulate end of feed after 100 posts
    if (posts.length > 100) {
      setHasMore(false);
    }
    
    setLoading(false);
  }, [loading, hasMore, posts.length]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop
        >= document.documentElement.offsetHeight - 1000
      ) {
        loadMorePosts();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loadMorePosts]);

  return (
    <div className="pb-4">
      {/* Stories Bar */}
      <StoriesBar />
      
      {/* Posts Grid */}
      <PostGrid posts={posts} loading={loading} />
    </div>
  );
};