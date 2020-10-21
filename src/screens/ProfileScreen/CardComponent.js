import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import {
  Card,
  CardItem,
  Thumbnail,
  Body,
  Left,
  Right,
  Button,
  Icon,
} from 'native-base';

class CardComponent extends Component {
  render() {
    const images = {
      1: require('../../assets/images/profile/1.png'),
      2: require('../../assets/images/profile/2.png'),
      3: require('../../assets/images/profile/3.png'),
    };

    return (
      <Card>
        <CardItem>
          <Left>
            <Thumbnail source={require('../../assets/images/me.jpg')} />
            <Body>
              <Text>@pennedbystranger </Text>
              <Text note>Jun 11, 2020</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image
            source={images[this.props.imageSource]}
            style={{height: 200, width: null, flex: 1}}
          />
        </CardItem>
        <CardItem style={{height: 45}}>
          <Left>
            <Button transparent>
              <Icon name="ios-heart-outline" style={{color: 'black'}} />
            </Button>
            <Button transparent>
              <Icon name="ios-chatbubbles-outline" style={{color: 'black'}} />
            </Button>
            <Button transparent>
              <Icon name="ios-send-outline" style={{color: 'black'}} />
            </Button>
          </Left>
        </CardItem>

        <CardItem style={{height: 20}}>
          <Text>{this.props.likes} likes</Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>
              <Text style={{fontWeight: '900'}}>@pennedbystranger </Text>
            </Text>
          </Body>
        </CardItem>
      </Card>
    );
  }
}
export default CardComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
