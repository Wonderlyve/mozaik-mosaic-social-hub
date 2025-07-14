export interface User {
  id: string;
  username: string;
  avatar: string;
  displayName: string;
  bio?: string;
  followers: number;
  following: number;
  verified?: boolean;
}

export interface Post {
  id: string;
  user: User;
  imageUrl: string;
  caption?: string;
  likes: number;
  comments: number;
  timestamp: Date;
  isVideo?: boolean;
}

export interface Story {
  id: string;
  user: User;
  imageUrl: string;
  timestamp: Date;
  viewed: boolean;
}

export interface ChatMessage {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: Date;
  type: 'text' | 'image' | 'video';
  imageUrl?: string;
}

export interface Conversation {
  id: string;
  participant: User;
  lastMessage: ChatMessage;
  unreadCount: number;
}