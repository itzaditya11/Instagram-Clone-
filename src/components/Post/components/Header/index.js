import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import ProfilePicture from '../../../ProfilePicture';
const PostHeader = ({imageUri, name}) => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <ProfilePicture uri={imageUri} size={40} />
        <Text style={styles.name}>{name}</Text>
      </View>
      <View style={styles.right}>
        <Icon name="dots-three-vertical" size={16} />
      </View>
    </View>
  );
};

export default PostHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  left: {
    flexDirection: 'row',
  },
  right: {
    marginRight: 15,
  },
  name: {
    alignSelf: 'center',
    fontWeight: 'bold',
    color: '#3c3c3c',
  },
});
