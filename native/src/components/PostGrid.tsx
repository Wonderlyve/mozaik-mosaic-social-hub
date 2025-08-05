import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  FlatList,
} from 'react-native';

import PostCard from './PostCard';
import { Post } from '../types';

const { width } = Dimensions.get('window');
const PADDING = 8;
const GAP = 4;

interface PostGridProps {
  posts: Post[];
  onPostPress: (post: Post) => void;
}

export default function PostGrid({ posts, onPostPress }: PostGridProps) {
  const getItemSize = (format: string) => {
    const baseSize = (width - PADDING * 2 - GAP) / 2;
    
    switch (format) {
      case 'height':
        return { width: baseSize, height: baseSize * 2 + GAP };
      case 'land':
        return { width: width - PADDING * 2, height: baseSize };
      case 'full':
        return { width: width - PADDING * 2, height: baseSize * 2 + GAP };
      default:
        return { width: baseSize, height: baseSize };
    }
  };

  const renderPost = ({ item, index }: { item: Post; index: number }) => {
    const size = getItemSize(item.format);
    
    return (
      <PostCard
        post={item}
        style={[
          styles.postCard,
          {
            width: size.width,
            height: size.height,
          }
        ]}
        onPress={() => onPostPress(item)}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={renderPost}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: PADDING,
  },
  contentContainer: {
    paddingBottom: 100,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: GAP,
  },
  postCard: {
    marginBottom: GAP,
  },
});