/**
 * @providesModule BirthdayRowList
 * @flow
 */

import React from 'react';
import {
  View,
} from 'react-native';

import BirthdayRow from 'BirthdayRow';

export default class BirthdayRowList extends React.Component {
  render() {
    let people = [];
    return (
      <View>
        {people.map((person: Person) =>
          <BirthdayRow person={person} key={person} />
        )}
      </View>
    );
  }
}
