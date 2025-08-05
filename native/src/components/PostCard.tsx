import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import { Image } from 'expo-image';
import { Video } from 'expo-av';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

import { Post } from '../types';

interface PostCardProps {
  post: Post;
  style?: ViewStyle;
  onPress: () => void;
}

export default function PostCard({ post, style, onPress }: PostCardProps) {
  const media = post.media?.[0];

  if (!media) return null;

  const renderMedia = () => {
    if (media.type === 'video') {
      return (
        <Video
          source={{ uri: media.url }}
          style={styles.media}
          shouldPlay={false}
          isLooping
          isMuted
          resizeMode="cover"
        />
      );
    }

    return (
      <Image
        source={{ uri: media.url }}
        style={styles.media}
        contentFit="cover"
        transition={200}
      />
    );
  };

  const getFilterStyle = () => {
    if (!post.filter) return {};
    
    switch (post.filter) {
      case 'vintage':
        return { opacity: 0.9, backgroundColor: 'rgba(139, 69, 19, 0.1)' };
      case 'sunset':
        return { backgroundColor: 'rgba(255, 165, 0, 0.1)' };
      default:
        return {};
    }
  };

  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <View style={styles.mediaContainer}>
        {renderMedia()}
        
        {/* Filter overlay */}
        {post.filter && (
          <View style={[styles.filterOverlay, getFilterStyle()]} />
        )}
        
        {/* Instant badge */}
        {post.isInstant && (
          <View style={styles.instantBadge}>
            <LinearGradient
              colors={['#f59e0b', '#d97706']}
              style={styles.instantGradient}
            >
              <Ionicons name="flash" size={12} color="white" />
            </LinearGradient>
          </View>
        )}
        
        {/* Video indicator */}
        {media.type === 'video' && (
          <View style={styles.videoIndicator}>
            <Ionicons name="play" size={16} color="white" />
          </View>
        )}
        
        {/* Likes overlay */}
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.6)']}
          style={styles.likesOverlay}
        >
          <View style={styles.likesContainer}>
            <Ionicons 
              name={post.isLiked ? "heart" : "heart-outline"} 
              size={16} 
              color={post.isLiked ? "#ef4444" : "white"} 
            />
            <Text style={styles.likesText}>{post.likes}</Text>
          </View>
        </LinearGradient>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#111',
  },
  mediaContainer: {
    flex: 1,
    position: 'relative',
  },
  media: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  filterOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  instantBadge: {
    position: 'absolute',
    top: 8,
    left: 8,
    width: 24,
    height: 24,
    borderRadius: 12,
  },
  instantGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  videoIndicator: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  likesOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 40,
    justifyContent: 'flex-end',
    paddingBottom: 8,
    paddingHorizontal: 8,
  },
  likesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  likesText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
  },
});