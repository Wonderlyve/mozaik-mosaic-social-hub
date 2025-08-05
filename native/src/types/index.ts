export interface User {
  id: string;
  name: string;
  username: string;
  avatar: string;
  isOnline?: boolean;
  lastSeen?: Date;
}

export interface Post {
  id: string;
  user: User;
  content: string;
  media?: PostMedia[];
  createdAt: Date;
  likes: number;
  comments: Comment[];
  isLiked: boolean;
  format: 'normal' | 'height' | 'land' | 'full';
  filter?: string;
  isInstant?: boolean;
}

export interface PostMedia {
  id: string;
  type: 'image' | 'video';
  url: string;
  thumbnail?: string;
}

export interface Comment {
  id: string;
  user: User;
  content: string;
  createdAt: Date;
  likes: number;
  isLiked: boolean;
}

export interface Story {
  id: string;
  user: User;
  media: PostMedia;
  createdAt: Date;
  viewed: boolean;
}

export interface Conversation {
  id: string;
  participant: User;
  lastMessage: Message;
  unreadCount: number;
}