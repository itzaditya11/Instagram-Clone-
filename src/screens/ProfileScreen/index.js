import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  FlatList,
} from 'react-native';

import {
  Container,
  Content,
  Icon,
  Header,
  Left,
  Body,
  Right,
  Segment,
  Button,
} from 'native-base';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
var {height, width} = Dimensions.get('window');

import CardComponent from './CardComponent';

var images = [
  require('../../assets/images/profile/1.png'),
  require('../../assets/images/profile/2.png'),
  require('../../assets/images/profile/3.png'),
  require('../../assets/images/profile/4.png'),
  require('../../assets/images/profile/5.png'),
  require('../../assets/images/profile/6.png'),
  require('../../assets/images/profile/7.png'),
  require('../../assets/images/profile/8.png'),
  require('../../assets/images/profile/9.png'),
  require('../../assets/images/profile/10.png'),
  require('../../assets/images/profile/11.png'),
  require('../../assets/images/profile/12.png'),
  require('../../assets/images/profile/13.png'),
  require('../../assets/images/profile/14.png'),
];

class ProfileScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0,
    };
  }

  segmentClicked(index) {
    this.setState({
      activeIndex: index,
    });
  }
  checkActive = (index) => {
    if (this.state.activeIndex !== index) {
      return {color: 'grey'};
    } else {
      return {};
    }
  };

  renderSectionOne() {
    return images.map((image, index) => {
      return (
        <View
          key={index}
          style={[
            {width: width / 3},
            {height: width / 3},
            {marginBottom: 2},
            index % 3 !== 0 ? {paddingLeft: 2} : {paddingLeft: 0},
          ]}>
          <Image
            style={{
              flex: 1,
              alignSelf: 'stretch',
              width: undefined,
              height: undefined,
            }}
            source={image}></Image>
        </View>
      );
    });
  }

  renderSection() {
    if (this.state.activeIndex == 0) {
      return (
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          {this.renderSectionOne()}
        </View>
      );
    } else if (this.state.activeIndex == 1) {
      return (
        <View>
          <CardComponent imageSource="1" likes="101" />
          <CardComponent imageSource="2" likes="101" />
          <CardComponent imageSource="3" likes="101" />
        </View>
      );
    }
  }

  componentDidMount() {
    console.log(width);
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header style={{backgroundColor: 'white'}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon name="md-person-add" />

            <Text
              style={{
                fontSize: 18,
                marginLeft: 10,
                alignItems: 'center',
                alignSelf: 'center',
              }}>
              @pennedbystragner
            </Text>
          </View>

          <Right style={{paddingLeft: 20}}>
            <EntypoIcon name="back-in-time" style={{fontSize: 32}} />
          </Right>
        </Header>

        <Content>
          <View style={{paddingTop: 10}}>
            {/** User Photo Stats**/}
            <View style={{flexDirection: 'row'}}>
              {/**User photo takes 1/3rd of view horizontally **/}
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                }}>
                <Image
                  source={require('../../assets/images/me.jpg')}
                  style={{width: 75, height: 75, borderRadius: 37.5}}
                />
              </View>

              {/**User Stats take 2/3rd of view horizontally **/}
              <View style={{flex: 3}}>
                {/** Stats **/}
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignItems: 'flex-end',
                  }}>
                  <View style={{alignItems: 'center'}}>
                    <Text>20</Text>
                    <Text style={{fontSize: 10, color: 'grey'}}>Posts</Text>
                  </View>
                  <View style={{alignItems: 'center'}}>
                    <Text>205</Text>
                    <Text style={{fontSize: 10, color: 'grey'}}>Followers</Text>
                  </View>
                  <View style={{alignItems: 'center'}}>
                    <Text>167</Text>
                    <Text style={{fontSize: 10, color: 'grey'}}>Following</Text>
                  </View>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    paddingTop: 10,
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <Button
                      bordered
                      dark
                      style={{
                        flex: 3,
                        marginLeft: 10,
                        justifyContent: 'center',
                        height: 30,
                      }}>
                      <Text>Edit Profile</Text>
                    </Button>

                    <Button
                      bordered
                      dark
                      style={{
                        flex: 1,
                        height: 30,
                        marginRight: 10,
                        marginLeft: 5,
                        justifyContent: 'center',
                      }}>
                      <Icon name="settings" style={{color: 'black'}}></Icon>
                    </Button>
                  </View>
                </View>
              </View>
            </View>

            <View style={{paddingBottom: 10}}>
              <View style={{paddingHorizontal: 10}}>
                <Text style={{fontWeight: 'bold'}}>Penned By Stranger</Text>
                <Text>Quoter| Write Feeling | Thinker </Text>
                <Text>Follow for more</Text>
              </View>
            </View>
          </View>

          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                borderTopWidth: 1,
                borderTopColor: '#eae5e5',
              }}>
              <Button
                onPress={() => this.segmentClicked(0)}
                transparent
                active={this.state.activeIndex == 0}>
                <Icon
                  name="ios-apps-outline"
                  style={[
                    this.state.activeIndex == 0 ? {} : {color: 'grey'},
                  ]}></Icon>
              </Button>
              <Button
                onPress={() => this.segmentClicked(1)}
                transparent
                active={this.state.activeIndex == 1}>
                <Icon
                  name="ios-list-outline"
                  style={[
                    {fontSize: 32},
                    this.state.activeIndex == 1 ? {} : {color: 'grey'},
                  ]}></Icon>
              </Button>
              <Button
                onPress={() => this.segmentClicked(2)}
                transparent
                active={this.state.activeIndex == 2}>
                <Icon
                  name="ios-bookmark-outline"
                  style={
                    this.state.activeIndex == 2 ? {} : {color: 'grey'}
                  }></Icon>
              </Button>
              <Button
                onPress={() => this.segmentClicked(3)}
                transparent
                last
                active={this.state.activeIndex == 3}>
                <Icon
                  name="ios-people-outline"
                  style={[
                    {fontSize: 32},
                    this.state.activeIndex == 3 ? {} : {color: 'grey'},
                  ]}></Icon>
              </Button>
            </View>

            {this.renderSection()}
          </View>
        </Content>
      </Container>
    );
  }
}
export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
