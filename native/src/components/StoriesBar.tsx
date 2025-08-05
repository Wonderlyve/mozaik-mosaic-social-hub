import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';

import { Story } from '../types';

interface StoriesBarProps {
  stories: Story[];
}

export default function StoriesBar({ stories }: StoriesBarProps) {
  const handleStoryPress = (story: Story) => {
    console.log('Story pressed:', story.id);
  };

  return (
    <View style={styles.container}>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {stories.map((story) => (
          <TouchableOpacity 
            key={story.id} 
            style={styles.storyItem}
            onPress={() => handleStoryPress(story)}
          >
            <View style={styles.storyImageContainer}>
              {!story.viewed ? (
                <LinearGradient
                  colors={['#f59e0b', '#ef4444', '#8b5cf6']}
                  style={styles.gradientBorder}
                >
                  <View style={styles.imageBorder}>
                    <Image
                      source={{ uri: story.media.url }}
                      style={styles.storyImage}
                      contentFit="cover"
                    />
                  </View>
                </LinearGradient>
              ) : (
                <View style={styles.viewedBorder}>
                  <Image
                    source={{ uri: story.media.url }}
                    style={styles.storyImage}
                    contentFit="cover"
                  />
                </View>
              )}
            </View>
            
            <Text style={styles.storyUsername} numberOfLines={1}>
              {story.user.username}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: '#333',
  },
  scrollContainer: {
    paddingHorizontal: 16,
  },
  storyItem: {
    alignItems: 'center',
    marginRight: 16,
    width: 70,
  },
  storyImageContainer: {
    marginBottom: 8,
  },
  gradientBorder: {
    width: 66,
    height: 66,
    borderRadius: 33,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBorder: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewedBorder: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  storyImage: {
    width: 56,
    height: 56,
    borderRadius: 28,
  },
  storyUsername: {
    color: 'white',
    fontSize: 12,
    textAlign: 'center',
  },
});