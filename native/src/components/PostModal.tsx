import React from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import { Image } from 'expo-image';
import { Video } from 'expo-av';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

import { Post } from '../types';

const { width, height } = Dimensions.get('window');

interface PostModalProps {
  post: Post;
  visible: boolean;
  onClose: () => void;
  onLike: (postId: string) => void;
}

export default function PostModal({ post, visible, onClose, onLike }: PostModalProps) {
  const media = post.media?.[0];

  const renderMedia = () => {
    if (!media) return null;

    if (media.type === 'video') {
      return (
        <Video
          source={{ uri: media.url }}
          style={styles.media}
          shouldPlay={true}
          isLooping
          useNativeControls
          resizeMode="contain"
        />
      );
    }

    return (
      <Image
        source={{ uri: media.url }}
        style={styles.media}
        contentFit="contain"
      />
    );
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="fullScreen"
    >
      <SafeAreaView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Ionicons name="close" size={24} color="white" />
          </TouchableOpacity>
          
          <View style={styles.userInfo}>
            <Image
              source={{ uri: post.user.avatar }}
              style={styles.avatar}
            />
            <Text style={styles.username}>{post.user.name}</Text>
          </View>
          
          <TouchableOpacity style={styles.moreButton}>
            <Ionicons name="ellipsis-horizontal" size={24} color="white" />
          </TouchableOpacity>
        </View>

        {/* Media */}
        <View style={styles.mediaContainer}>
          {renderMedia()}
        </View>

        {/* Actions */}
        <View style={styles.actions}>
          <View style={styles.actionButtons}>
            <TouchableOpacity 
              style={styles.actionButton}
              onPress={() => onLike(post.id)}
            >
              <Ionicons 
                name={post.isLiked ? "heart" : "heart-outline"} 
                size={28} 
                color={post.isLiked ? "#ef4444" : "white"} 
              />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.actionButton}>
              <Ionicons name="chatbubble-outline" size={24} color="white" />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.actionButton}>
              <Ionicons name="share-outline" size={24} color="white" />
            </TouchableOpacity>
          </View>
          
          <Text style={styles.likes}>{post.likes} j'aime</Text>
          
          {post.content && (
            <Text style={styles.content}>
              <Text style={styles.username}>{post.user.username}</Text> {post.content}
            </Text>
          )}
          
          <Text style={styles.timestamp}>
            Il y a {Math.floor((Date.now() - post.createdAt.getTime()) / (1000 * 60 * 60))}h
          </Text>
        </View>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: '#333',
  },
  closeButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginLeft: 12,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 8,
  },
  username: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  moreButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mediaContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  media: {
    width: width,
    height: width,
    maxHeight: height * 0.6,
  },
  actions: {
    padding: 16,
  },
  actionButtons: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  actionButton: {
    marginRight: 16,
    padding: 4,
  },
  likes: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
  },
  content: {
    color: 'white',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 8,
  },
  timestamp: {
    color: '#666',
    fontSize: 12,
  },
});