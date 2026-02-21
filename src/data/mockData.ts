import { User, Post, Story, Conversation, ChatMessage, PostFormat } from '@/types';

// Mock users
export const mockUsers: User[] = [
  {
    id: '1',
    username: 'sarah_design',
    displayName: 'Sarah Chen',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    bio: '🎨 Designer & Artist | Paris',
    followers: 2840,
    following: 892,
    verified: true
  },
  {
    id: '2',
    username: 'alex_photo',
    displayName: 'Alex Martinez',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    bio: '📸 Photographer | Traveling the world',
    followers: 1250,
    following: 450
  },
  {
    id: '3',
    username: 'maya_code',
    displayName: 'Maya Singh',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    bio: '💻 Full Stack Developer | Tech lover',
    followers: 980,
    following: 234
  },
  {
    id: '4',
    username: 'tom_music',
    displayName: 'Tom Wilson',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    bio: '🎵 Musician | Creating beats',
    followers: 3200,
    following: 567
  }
];

// Mock posts with varied content and formats including selfies
export const mockPosts: Post[] = [
  {
    id: '1',
    user: mockUsers[0],
    imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=800&fit=crop&crop=face',
    caption: 'Instant selfie! Feeling good today ☀️',
    likes: 324,
    comments: 28,
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
    format: 'wide',
    filter: 'vivid',
    isInstant: true
  },
  {
    id: '2',
    user: mockUsers[1],
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=800&fit=crop&crop=face',
    caption: 'Golden hour selfie ✨',
    likes: 156,
    comments: 12,
    timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000),
    format: 'height',
    filter: 'warm',
    isInstant: true
  },
  {
    id: '3',
    user: mockUsers[2],
    imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop',
    caption: 'Late night coding session 💻',
    likes: 89,
    comments: 7,
    timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000),
    format: 'land',
    filter: 'cool'
  },
  {
    id: '4',
    user: mockUsers[3],
    imageUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    caption: 'New track coming soon! 🎵',
    likes: 445,
    comments: 34,
    timestamp: new Date(Date.now() - 12 * 60 * 60 * 1000),
    isVideo: true,
    format: 'normal',
    filter: 'dramatic'
  },
  {
    id: '4b',
    user: mockUsers[1],
    imageUrl: 'https://www.w3schools.com/html/movie.mp4',
    caption: 'Petit moment capturé 🎬',
    likes: 213,
    comments: 18,
    timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000),
    isVideo: true,
    format: 'height'
  },
  {
    id: '4c',
    user: mockUsers[2],
    imageUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    caption: 'Nature vibes 🌸',
    likes: 387,
    comments: 25,
    timestamp: new Date(Date.now() - 7 * 60 * 60 * 1000),
    isVideo: true,
    format: 'land'
  },
  {
    id: '5',
    user: mockUsers[0],
    imageUrl: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop&crop=face',
    caption: 'Instant mood 📸',
    likes: 278,
    comments: 19,
    timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
    format: 'normal',
    filter: 'vintage',
    isInstant: true
  },
  {
    id: '6',
    user: mockUsers[1],
    imageUrl: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=400&fit=crop',
    caption: 'Mountain adventures',
    likes: 567,
    comments: 45,
    timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    format: 'land',
    filter: 'nature'
  },
  {
    id: '7',
    user: mockUsers[3],
    imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=800&fit=crop&crop=face',
    caption: 'Perfect instant! ✨',
    likes: 892,
    comments: 67,
    timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
    format: 'height',
    filter: 'soft',
    isInstant: true
  },
  {
    id: '8',
    user: mockUsers[2],
    imageUrl: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=800&fit=crop',
    caption: 'Wildlife wonder ✨',
    likes: 1234,
    comments: 89,
    timestamp: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000),
    format: 'full',
    filter: 'nature'
  },
  {
    id: '8b',
    user: mockUsers[3],
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=800&fit=crop',
    caption: 'Vue panoramique incroyable 🏔️',
    likes: 756,
    comments: 42,
    timestamp: new Date(Date.now() - 4.5 * 24 * 60 * 60 * 1000),
    format: 'wide' as PostFormat,
    filter: 'dramatic'
  },
  {
    id: '9',
    user: mockUsers[1],
    imageUrl: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=800&h=800&fit=crop&crop=face',
    caption: 'Instant moment full size 💫',
    likes: 456,
    comments: 32,
    timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000),
    format: 'full',
    filter: 'vivid',
    isInstant: true
  },
  {
    id: '10',
    user: mockUsers[2],
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&h=400&fit=crop&crop=face',
    caption: 'Landscape instant selfie 🌅',
    likes: 189,
    comments: 15,
    timestamp: new Date(Date.now() - 1 * 60 * 60 * 1000),
    format: 'land',
    filter: 'warm',
    isInstant: true
  }
];

// Generate more mock posts for infinite scroll
export const generateMorePosts = (count: number = 20): Post[] => {
  const imageIds = [
    'photo-1542831371-29b0f74f9713', 'photo-1549388604-817d15aa0110',
    'photo-1563089145-599997674d42', 'photo-1572276596237-5db2c3e16c5d',
    'photo-1484506326999-235577339887', 'photo-1506905925346-21bda4d32df4'
  ];
  
  // Selfie image IDs for instant posts
  const selfieIds = [
    'photo-1544005313-94ddf0286df2', 'photo-1507003211169-0a1dd7228f2d',
    'photo-1438761681033-6461ffad8d80', 'photo-1494790108755-2616b612b786',
    'photo-1472099645785-5658abf4ff4e', 'photo-1531123897727-8f129e1688ce'
  ];
  
  const formats: PostFormat[] = ['normal', 'height', 'land', 'full', 'wide'];
  const filters = ['vivid', 'warm', 'cool', 'dramatic', 'vintage', 'nature', 'soft'];
  
  return Array.from({ length: count }, (_, index) => {
    const format = formats[Math.floor(Math.random() * formats.length)];
    const isInstant = Math.random() > 0.6; // 40% chance d'être un instant
    const isVideo = Math.random() > 0.85; // 15% chance d'être une vidéo
    
    const dimensions = format === 'height' ? '400&h=800' : 
                     format === 'land' ? '800&h=400' : 
                     format === 'full' ? '800&h=800' : '400&h=400';
    
    const cropParam = isInstant ? '&crop=face' : '';
    const imageSource = isInstant ? selfieIds : imageIds;
    const imageId = imageSource[Math.floor(Math.random() * imageSource.length)];
    
    const captions = isInstant 
      ? ['Instant selfie! 🤳', 'Quick pic ✨', 'Feeling good! 😊', 'Perfect moment 📸', 'Just now! 💫']
      : ['Amazing shot! 📸', 'Love this vibe ✨', 'Perfect moment', 'Beautiful capture', 'Great times! 🎉'];
    
    return {
      id: `generated-${Date.now()}-${index}`,
      user: mockUsers[Math.floor(Math.random() * mockUsers.length)],
      imageUrl: `https://images.unsplash.com/${imageId}?w=${dimensions}&fit=crop${cropParam}&t=${Date.now()}`,
      caption: captions[Math.floor(Math.random() * captions.length)],
      likes: Math.floor(Math.random() * 1000) + 10,
      comments: Math.floor(Math.random() * 50) + 1,
      timestamp: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000),
      isVideo,
      format,
      filter: filters[Math.floor(Math.random() * filters.length)],
      isInstant
    };
  });
};

// Mock stories
export const mockStories: Story[] = [
  {
    id: '1',
    user: mockUsers[0],
    imageUrl: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=400&h=600&fit=crop',
    timestamp: new Date(Date.now() - 30 * 60 * 1000),
    viewed: false
  },
  {
    id: '2',
    user: mockUsers[1],
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop',
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
    viewed: true
  },
  {
    id: '3',
    user: mockUsers[2],
    imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=600&fit=crop',
    timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000),
    viewed: false
  }
];

// Mock messages
const mockMessages: ChatMessage[] = [
  {
    id: '1',
    senderId: '2',
    receiverId: '1',
    content: 'Hey! Love your latest post 😍',
    timestamp: new Date(Date.now() - 10 * 60 * 1000),
    type: 'text'
  },
  {
    id: '2',
    senderId: '3',
    receiverId: '1',
    content: 'Want to collaborate on a project?',
    timestamp: new Date(Date.now() - 30 * 60 * 1000),
    type: 'text'
  }
];

// Mock conversations
export const mockConversations: Conversation[] = [
  {
    id: '1',
    participant: mockUsers[1],
    lastMessage: mockMessages[0],
    unreadCount: 2
  },
  {
    id: '2',
    participant: mockUsers[2],
    lastMessage: mockMessages[1],
    unreadCount: 0
  }
];