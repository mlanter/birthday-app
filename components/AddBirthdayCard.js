/**
 * @providesModule AddBirthdayCard
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default class AddBirthdayCard extends React.Component {
  props: {
    onSave: (person: Person) => void,
  };

  state: {
    name: string,
    date: string,
  } = {
    name: '',
    date: '',
  }

  _submit = () => {
    let dateArray = this.state.date.split('/');
    let date = {
      month: dateArray[0],
      day: dateArray[1],
      year: dateArray[2],
    };
    this.props.onSave({
      name: this.state.name,
      dateOfBirth: date,
    });
  }

  render() {
    return (
      <View style={STYLES.Root}>
        <View style={STYLES.InputRow}>
          <Text style={STYLES.Label}>Name:</Text>
          <TextInput
            style={STYLES.Input}
            onChangeText={(name) => this.setState({ name })}
          />
        </View>
        <View style={STYLES.InputRow}>
          <Text style={STYLES.Label}>Date:</Text>
          <TextInput
            style={STYLES.Input}
            onChangeText={(date) => this.setState({ date })}
            placeholder="7/31/1990"
          />
        </View>
        <TouchableOpacity
          onPress={() => console.log('I was pressed!')}
          style={STYLES.Button}>
          <Text style={STYLES.ButtonText}>
            Add
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const STYLES = StyleSheet.create({
  Root: {
    alignItems: 'center',
    paddingVertical: 12,
  },
  Input: {
    borderColor: 'gray',
    borderWidth: 1,
    height: 30,
    paddingLeft: 8,
    width: 250,
  },
  InputRow: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    paddingBottom: 12,
  },
  Label: {
    fontSize: 20,
    minWidth: 60,
  },
  Button: {
    alignItems: 'center',
    borderColor: 'gray',
    borderRadius: 6,
    borderWidth: 1,
    paddingHorizontal: 24,
    paddingVertical: 4,
    width: 100,
  },
  ButtonText: {
    fontSize: 20,
  },
});
