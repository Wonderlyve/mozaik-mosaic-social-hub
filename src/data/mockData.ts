import { User, Post, Story, Conversation, ChatMessage } from '@/types';

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

// Mock posts with varied content
export const mockPosts: Post[] = [
  {
    id: '1',
    user: mockUsers[0],
    imageUrl: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=400&h=400&fit=crop',
    caption: 'New art piece inspired by urban landscapes 🎨',
    likes: 324,
    comments: 28,
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000)
  },
  {
    id: '2',
    user: mockUsers[1],
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop',
    caption: 'Golden hour magic ✨',
    likes: 156,
    comments: 12,
    timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000)
  },
  {
    id: '3',
    user: mockUsers[2],
    imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=400&fit=crop',
    caption: 'Late night coding session 💻',
    likes: 89,
    comments: 7,
    timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000)
  },
  {
    id: '4',
    user: mockUsers[3],
    imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop',
    caption: 'New track coming soon! 🎵',
    likes: 445,
    comments: 34,
    timestamp: new Date(Date.now() - 12 * 60 * 60 * 1000),
    isVideo: true
  },
  {
    id: '5',
    user: mockUsers[0],
    imageUrl: 'https://images.unsplash.com/photo-1536431311719-398b6704d4cc?w=400&h=400&fit=crop',
    caption: 'Street art vibes',
    likes: 278,
    comments: 19,
    timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000)
  },
  {
    id: '6',
    user: mockUsers[1],
    imageUrl: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=400&fit=crop',
    caption: 'Mountain adventures',
    likes: 567,
    comments: 45,
    timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000)
  }
];

// Generate more mock posts for infinite scroll
export const generateMorePosts = (count: number = 20): Post[] => {
  const imageIds = [
    'photo-1542831371-29b0f74f9713', 'photo-1549388604-817d15aa0110',
    'photo-1563089145-599997674d42', 'photo-1572276596237-5db2c3e16c5d',
    'photo-1484506326999-235577339887', 'photo-1506905925346-21bda4d32df4'
  ];
  
  return Array.from({ length: count }, (_, index) => ({
    id: `generated-${Date.now()}-${index}`,
    user: mockUsers[Math.floor(Math.random() * mockUsers.length)],
    imageUrl: `https://images.unsplash.com/${imageIds[Math.floor(Math.random() * imageIds.length)]}?w=400&h=400&fit=crop&t=${Date.now()}`,
    caption: ['Amazing shot! 📸', 'Love this vibe ✨', 'Perfect moment', 'Beautiful capture', ''][Math.floor(Math.random() * 5)],
    likes: Math.floor(Math.random() * 1000) + 10,
    comments: Math.floor(Math.random() * 50) + 1,
    timestamp: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000),
    isVideo: Math.random() > 0.8
  }));
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