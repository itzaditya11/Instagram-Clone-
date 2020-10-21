import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import ProfilePicture from '../ProfilePicture';
import {useNavigation} from '@react-navigation/native';
const Story = (props) => {
  const {
    story: {
      user: {id, imageUri, name},
    },
  } = props;

  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('Story', {userId: id});
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <ProfilePicture uri={imageUri} />
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
};

export default Story;

const styles = StyleSheet.create({
  name: {
    textAlign: 'center',
  },
  container: {},
});
