import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import PostHeader from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

const Post = ({post}) => {
  return (
    <ScrollView>
      <PostHeader imageUri={post.user.imageUri} name={post.user.name} />
      <Body imageUri={post.imageUri} />
      <Footer
        likesCount={post.likesCount}
        caption={post.caption}
        postedAt={post.postedAt}
      />
    </ScrollView>
  );
};

export default Post;

const styles = StyleSheet.create({});
