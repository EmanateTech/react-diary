import React, {
  Component
} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Button,
  Image,
  ListView,
  ScrollView,
  Dimensions,
  TouchableHighlight,
  TouchableNativeFeedback,
  Platform
} from 'react-native';

const {
  width,
  height } = Dimensions.get('window');

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: 'white'
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
    backgroundColor: '#FFF',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 30,
    paddingRight: 30
  },
  title: {
    color: '#222',
    fontSize: 48,
    fontWeight: 'bold'
  },
  addButtonView: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50
  },
  addButtonText: {
    fontSize: 48,
    color: '#629c39'
  },
  singleList: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',
    padding: 10,
    borderBottomColor: '#eee',
    borderBottomWidth: 1
  },
  listTextView: {
    marginLeft: 20
  },
  mainList: {
    paddingLeft: 20,
    paddingRight: 20
  },
  listName: {
    color: '#222',
    fontSize: 24,
  },
  listAge: {
    fontSize: 16
  }
});

var users = [
  { name: 'Harsh', age: 22 },
  { name: 'Abc', age: 31 },
  { name: 'Harsh', age: 22 },
  { name: 'Abc', age: 31 },
  { name: 'Harsh', age: 22 },
  { name: 'Abc', age: 31 },
  { name: 'Harsh', age: 22 },
  { name: 'Abc', age: 31 },
  { name: 'Harsh', age: 22 },
  { name: 'Abc', age: 31 },
  { name: 'Harsh', age: 22 },
  { name: 'Abc', age: 31 },
  { name: 'Harsh', age: 22 },
  { name: 'Abc', age: 31 },
  { name: 'Harsh', age: 22 },
  { name: 'Abc', age: 31 },
  { name: 'Harsh', age: 22 },
  { name: 'Abc', age: 31 },
  { name: 'Harsh', age: 22 },
  { name: 'Abc', age: 31 },
  { name: 'Harsh', age: 22 },
  { name: 'Abc', age: 31 },
  { name: 'Harsh', age: 22 },
  { name: 'Abc', age: 31 },
  { name: 'Harsh', age: 22 },
  { name: 'Abc', age: 31 },
  { name: 'Harsh', age: 22 },
  { name: 'Abc', age: 31 },
  { name: 'Harsh', age: 22 },
  { name: 'Abc', age: 31 },
  { name: 'Harsh', age: 22 },
  { name: 'Abc', age: 31 }
];

class AddButton extends Component {
  render() {
    var TouchableElement = TouchableHighlight;
    if (Platform.OS === 'android') {
      TouchableElement = TouchableNativeFeedback;
    }

    return(
      <TouchableElement
        onPress = {() => { this.props.onPress() }}
        underlayColor="white">
        <View style={styles.addButtonView}>
          <Text style={styles.addButtonText}>+</Text>
        </View>
      </TouchableElement>
    );
  }
}

export default class HomeComponent extends React.Component {

  constructor () {
    super();

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.state = {
      datasSource: ds.cloneWithRows(users)
    }
  }

  renderRow (user, sectionId, rowId, highlightRow) {

    const localImages = {
      defaultImage: require('../assets/images/default.png'),
      dabImage: require('../assets/images/default.png'),
    }

    return (
      <View style={styles.singleList}>
        <View>
          <Image
            style={{width:50,height:50}}
            source={localImages.defaultImage} />
        </View>
        <View style={styles.listTextView}>
          <Text style={styles.listName}>{user.name}</Text>
          <Text style={styles.listAge}>{user.age}</Text>
        </View>
      </View>
    );
  }

  title = 'Your Dairy';

  clickMe = () => {
    console.log('sadd');
  }
  
  render() {

    return (

        <ScrollView style={styles.mainView}>
          <View style={styles.container}>
            <Text style={styles.title}>{this.title}</Text>
            <AddButton
              onPress={() => { this.clickMe() }} />
          </View>
          <ListView
            style={styles.mainList}
            dataSource={this.state.datasSource}
            renderRow={this.renderRow.bind(this)} />
        </ScrollView>

    );
  }
}