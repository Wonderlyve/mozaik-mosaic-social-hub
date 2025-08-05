import React, { useState } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

import PostGrid from '../components/PostGrid';
import PostModal from '../components/PostModal';
import StoriesBar from '../components/StoriesBar';
import { mockPosts, mockStories } from '../data/mockData';
import { Post } from '../types';

const { width } = Dimensions.get('window');

export default function FeedScreen() {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [posts, setPosts] = useState(mockPosts);

  const handlePostPress = (post: Post) => {
    setSelectedPost(post);
  };

  const handleCloseModal = () => {
    setSelectedPost(null);
  };

  const handleLike = (postId: string) => {
    setPosts(prevPosts =>
      prevPosts.map(post =>
        post.id === postId
          ? { ...post, isLiked: !post.isLiked, likes: post.isLiked ? post.likes - 1 : post.likes + 1 }
          : post
      )
    );
  };

  const handleCreateInstant = () => {
    Alert.alert(
      'Créer un instant',
      'Choisissez une option',
      [
        { text: 'Appareil photo', onPress: () => console.log('Ouvrir caméra') },
        { text: 'Galerie', onPress: () => console.log('Ouvrir galerie') },
        { text: 'Annuler', style: 'cancel' },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <StoriesBar stories={mockStories} />
        <PostGrid posts={posts} onPostPress={handlePostPress} />
      </ScrollView>

      {/* Floating Action Button */}
      <TouchableOpacity style={styles.fab} onPress={handleCreateInstant}>
        <LinearGradient
          colors={['#3b82f6', '#1d4ed8']}
          style={styles.fabGradient}
        >
          <Ionicons name="camera" size={24} color="white" />
          <View style={styles.plusIcon}>
            <Ionicons name="add" size={12} color="white" />
          </View>
        </LinearGradient>
      </TouchableOpacity>

      {selectedPost && (
        <PostModal
          post={selectedPost}
          visible={!!selectedPost}
          onClose={handleCloseModal}
          onLike={handleLike}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  scrollView: {
    flex: 1,
  },
  fab: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 56,
    height: 56,
    borderRadius: 28,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  fabGradient: {
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  plusIcon: {
    position: 'absolute',
    top: 4,
    right: 4,
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#f59e0b',
    justifyContent: 'center',
    alignItems: 'center',
  },
});