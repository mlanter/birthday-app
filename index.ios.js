/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
} from 'react-native';

import AddBirthdayCard from 'AddBirthdayCard';
import BirthdayRow from 'BirthdayRow';

class Birthdays extends Component {
  state: {
    people: Person[],
  } = {
    people: [],
  }

  _savePerson = (person: Person) => {
    let newPeople = this.state.people.slice(0);
    newPeople.push(person);
    this.setState({
      people: newPeople,
    });
  };

  render() {
    return (
      <View style={STYLES.root}>
        <BirthdayRow person={this.state.people[0]} />
        <AddBirthdayCard onSave={this._savePerson} />
      </View>
    );
  }
}

const STYLES = StyleSheet.create({
  root: {
    marginTop: 20,
    flex: 1,
  },
});

AppRegistry.registerComponent('Birthdays', () => Birthdays);
