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
  props: {
    people: Person[],
  };

  render() {
    return (
      <View>
        {this.props.people.map((person: Person, index: number) =>
          <BirthdayRow
            key={index + person.name}
            person={person}
          />
        )}
      </View>
    );
  }
}
