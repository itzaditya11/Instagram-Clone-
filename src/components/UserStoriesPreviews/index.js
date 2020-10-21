import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import Story from '../UserStoryPreview';
import storiesData from '../../data/stories';

const Stories = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={storiesData}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={({user: {id}}) => id}
        renderItem={({item}) => <Story story={item} />}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
});
export default Stories;
