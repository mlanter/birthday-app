/**
 * @providesModule BirthdayRow
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class BirthdayRow extends React.Component {
  props: {
    person: ?Person,
  };

  render() {
    if (!this.props.person) {
      return null;
    }

    return (
      <View style={STYLES.Root}>
        <Text>
          {this.props.person.name}
        </Text>
        <Text>
          {`${this.props.person.dateOfBirth.month}/${this.props.person.dateOfBirth.day}`}
        </Text>
      </View>
    );
  }
}

const STYLES = StyleSheet.create({
  Root: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
});
