import { Post, User, Story, Conversation } from '../types';

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Emma Laurent',
    username: 'emma_l',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=400&h=400&fit=crop&crop=face',
    isOnline: true,
  },
  {
    id: '2', 
    name: 'Lucas Martin',
    username: 'lucas_m',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    isOnline: false,
    lastSeen: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
  },
  {
    id: '3',
    name: 'Sophie Durand',
    username: 'sophie_d',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
    isOnline: true,
  },
];

export const mockPosts: Post[] = [
  {
    id: '1',
    user: mockUsers[0],
    content: 'Belle journée dans les montagnes ! 🏔️',
    media: [{
      id: '1',
      type: 'image',
      url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
    }],
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2),
    likes: 42,
    comments: [],
    isLiked: false,
    format: 'normal',
    filter: 'vintage',
  },
  {
    id: '2',
    user: mockUsers[1],
    content: 'Instant selfie ! 📸',
    media: [{
      id: '2',
      type: 'image',
      url: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=600&fit=crop&crop=face',
    }],
    createdAt: new Date(Date.now() - 1000 * 60 * 30),
    likes: 28,
    comments: [],
    isLiked: true,
    format: 'height',
    isInstant: true,
  },
  {
    id: '3',
    user: mockUsers[2],
    content: 'Coucher de soleil magique 🌅',
    media: [{
      id: '3',
      type: 'video',
      url: 'https://sample-videos.com/zip/10/mp4/SampleVideo_360x240_1mb.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?w=800&h=400&fit=crop',
    }],
    createdAt: new Date(Date.now() - 1000 * 60 * 60),
    likes: 67,
    comments: [],
    isLiked: false,
    format: 'land',
    filter: 'sunset',
  },
];

export const mockStories: Story[] = [
  {
    id: '1',
    user: mockUsers[0],
    media: {
      id: '1',
      type: 'image',
      url: 'https://images.unsplash.com/photo-1524863479829-916d8e77f114?w=400&h=600&fit=crop',
    },
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 3),
    viewed: false,
  },
  {
    id: '2',
    user: mockUsers[1],
    media: {
      id: '2',
      type: 'video',
      url: 'https://sample-videos.com/zip/10/mp4/SampleVideo_360x240_1mb.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8?w=400&h=600&fit=crop',
    },
    createdAt: new Date(Date.now() - 1000 * 60 * 60),
    viewed: true,
  },
];